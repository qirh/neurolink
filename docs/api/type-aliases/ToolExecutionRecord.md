[**NeuroLink API Reference**](../README.md)

---

[NeuroLink API Reference](../README.md) / ToolExecutionRecord

# Type Alias: ToolExecutionRecord

> **ToolExecutionRecord** = `object`

Defined in: [types/generate.ts:877](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L877)

One real tool invocation captured during an agentic turn.

Replaces the historical `{name, input, output}` stub on `GenerateResult`:
every record is produced at the actual execution site (AI-SDK loop and the
native Gemini/Anthropic loops alike), so `params`, timing, and error status
reflect what really ran — consumers no longer need proxy "recorder" tools
to observe their own tool traffic.

## Properties

### toolName

> **toolName**: `string`

Defined in: [types/generate.ts:879](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L879)

Tool name as the model called it.

---

### params

> **params**: `unknown`

Defined in: [types/generate.ts:881](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L881)

Parameters the tool was invoked with, as parsed by the loop.

---

### resultText

> **resultText**: `string`

Defined in: [types/generate.ts:887](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L887)

Serialized tool result (JSON when serializable, else String()), bounded
by `toolExecutionCapture.maxResultChars` (default ~8KB). Truncated text
ends with a `…[truncated N chars]` marker.

---

### isError

> **isError**: `boolean`

Defined in: [types/generate.ts:889](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L889)

True when the execution threw or returned an error-shaped result.

---

### startedAt

> **startedAt**: `number`

Defined in: [types/generate.ts:891](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L891)

Epoch milliseconds when the execution started.

---

### durationMs

> **durationMs**: `number`

Defined in: [types/generate.ts:893](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L893)

Wall-clock duration of the execution in milliseconds.
