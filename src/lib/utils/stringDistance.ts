/**
 * Shared string-distance helpers for "did you mean?" suggestions.
 *
 * Extracted from toolCallRepair.ts, which had the only implementation, so
 * provider-name validation can reuse it rather than carry a second copy.
 */

/** Longest string the distance primitive will compare. */
const MAX_COMPARABLE_LENGTH = 128;

/**
 * Compute Levenshtein edit distance between two strings.
 * Uses the iterative matrix approach — O(m*n) time, O(min(m,n)) space.
 */
export function levenshtein(a: string, b: string): number {
  if (a === b) {
    return 0;
  }
  if (a.length === 0) {
    return b.length;
  }
  if (b.length === 0) {
    return a.length;
  }

  // Use shorter string as column to minimize space
  if (a.length > b.length) {
    [a, b] = [b, a];
  }

  // `levenshtein` remains exported for tool-call repair as well as provider
  // suggestions, so bound it at the primitive rather than trusting every
  // caller to pre-truncate. The suggestion path has an earlier length check;
  // this is the final invariant CodeQL (and future callers) can rely on.
  a = a.slice(0, MAX_COMPARABLE_LENGTH);
  b = b.slice(0, MAX_COMPARABLE_LENGTH);

  const aLen = a.length;
  const bLen = b.length;
  let prev = new Array<number>(aLen + 1);
  let curr = new Array<number>(aLen + 1);

  for (let i = 0; i <= aLen; i++) {
    prev[i] = i;
  }

  for (let j = 1; j <= bLen; j++) {
    curr[0] = j;
    for (let i = 1; i <= aLen; i++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[i] = Math.min(
        prev[i] + 1, // deletion
        curr[i - 1] + 1, // insertion
        prev[i - 1] + cost, // substitution
      );
    }
    [prev, curr] = [curr, prev];
  }

  return prev[aLen];
}

/**
 * Longest input `suggestClosest` will compare against a candidate.
 *
 * `levenshtein` is O(m*n), and `input` is whatever the caller typed, so an
 * arbitrarily long string would otherwise size the matrix — CodeQL's
 * `js/loop-bound-injection`. Truncating costs nothing: the length guard below
 * already rejects anything this far from a real candidate, so a string long
 * enough to be truncated produces no suggestion either way.
 */
/**
 * Candidates within `maxDistance` edits of `input`, closest first.
 *
 * Ties break on the candidate's own order in `candidates`, so a caller that
 * passes canonical names before aliases gets the canonical one suggested.
 * Comparison is case-insensitive; the returned strings keep their original
 * casing so they can be pasted back verbatim.
 *
 * @param input - The string the user actually typed
 * @param candidates - Valid values, most-preferred first
 * @param options.maxDistance - Edit budget (default 3)
 * @param options.limit - Most suggestions to return (default 3)
 */
export function suggestClosest(
  input: string,
  candidates: readonly string[],
  options?: { maxDistance?: number; limit?: number },
): string[] {
  const maxDistance = options?.maxDistance ?? 3;
  const limit = options?.limit ?? 3;
  const needle = input.slice(0, MAX_COMPARABLE_LENGTH).toLowerCase();

  const scored: { candidate: string; order: number; distance: number }[] = [];
  candidates.forEach((candidate, order) => {
    // Two strings whose lengths differ by more than the edit budget cannot be
    // within it, so this rules most candidates out without building a matrix
    // for them — and it is what makes the truncation above lossless.
    if (Math.abs(candidate.length - needle.length) > maxDistance) {
      return;
    }
    const distance = levenshtein(needle, candidate.toLowerCase());
    if (distance <= maxDistance) {
      scored.push({ candidate, order, distance });
    }
  });

  return scored
    .sort((a, b) => a.distance - b.distance || a.order - b.order)
    .slice(0, limit)
    .map((entry) => entry.candidate);
}
