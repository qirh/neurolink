[**NeuroLink API Reference**](../README.md)

---

[NeuroLink API Reference](../README.md) / NativeGenerateLoopResult

# Type Alias: NativeGenerateLoopResult

> **NativeGenerateLoopResult** = `object`

Defined in: [types/generate.ts:1847](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L1847)

## Properties

### text

> **text**: `string`

Defined in: [types/generate.ts:1848](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L1848)

---

### reasoning?

> `optional` **reasoning?**: `string`

Defined in: [types/generate.ts:1850](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L1850)

Joined reasoning content parts from the final step, when the vendor sent any.

---

### finishReason

> **finishReason**: `string`

Defined in: [types/generate.ts:1851](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L1851)

---

### rawFinishReason?

> `optional` **rawFinishReason?**: `string`

Defined in: [types/generate.ts:1852](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L1852)

---

### inputTokens

> **inputTokens**: `number`

Defined in: [types/generate.ts:1853](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L1853)

---

### outputTokens

> **outputTokens**: `number`

Defined in: [types/generate.ts:1854](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L1854)

---

### cacheReadTokens

> **cacheReadTokens**: `number`

Defined in: [types/generate.ts:1855](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L1855)

---

### cacheWriteTokens

> **cacheWriteTokens**: `number`

Defined in: [types/generate.ts:1856](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L1856)

---

### toolsUsed

> **toolsUsed**: `string`[]

Defined in: [types/generate.ts:1857](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L1857)

---

### steps

> **steps**: `number`

Defined in: [types/generate.ts:1858](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L1858)
