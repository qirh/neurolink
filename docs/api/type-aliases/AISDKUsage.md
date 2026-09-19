[**NeuroLink API Reference**](../README.md)

---

[NeuroLink API Reference](../README.md) / AISDKUsage

# Type Alias: AISDKUsage

> **AISDKUsage** = `object`

Defined in: [types/stream.ts:1091](https://github.com/juspay/neurolink/blob/release/src/lib/types/stream.ts#L1091)

Raw usage data from Vercel AI SDK.

Covers both v4 (promptTokens / completionTokens) and
v6 (inputTokens / outputTokens) field names.
extractTokenUsage() in tokenUtils.ts already handles both shapes.

## Indexable

> \[`key`: `string`\]: `unknown`

## Properties

### ~~promptTokens?~~

> `optional` **promptTokens?**: `number`

Defined in: [types/stream.ts:1093](https://github.com/juspay/neurolink/blob/release/src/lib/types/stream.ts#L1093)

#### Deprecated

AI SDK v4 name — use inputTokens

---

### ~~completionTokens?~~

> `optional` **completionTokens?**: `number`

Defined in: [types/stream.ts:1095](https://github.com/juspay/neurolink/blob/release/src/lib/types/stream.ts#L1095)

#### Deprecated

AI SDK v4 name — use outputTokens

---

### ~~totalTokens?~~

> `optional` **totalTokens?**: `number`

Defined in: [types/stream.ts:1097](https://github.com/juspay/neurolink/blob/release/src/lib/types/stream.ts#L1097)

#### Deprecated

AI SDK v4 name — use totalTokens

---

### inputTokens?

> `optional` **inputTokens?**: `number`

Defined in: [types/stream.ts:1099](https://github.com/juspay/neurolink/blob/release/src/lib/types/stream.ts#L1099)

AI SDK v6 name for prompt / input tokens

---

### outputTokens?

> `optional` **outputTokens?**: `number`

Defined in: [types/stream.ts:1101](https://github.com/juspay/neurolink/blob/release/src/lib/types/stream.ts#L1101)

AI SDK v6 name for completion / output tokens
