[**NeuroLink API Reference**](../README.md)

---

[NeuroLink API Reference](../README.md) / TTSMetadata

# Type Alias: TTSMetadata

> **TTSMetadata** = `object`

Defined in: [types/generate.ts:1760](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L1760)

Enhanced result type with optional analytics/evaluation

## Properties

### attempted

> **attempted**: `boolean`

Defined in: [types/generate.ts:1762](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L1762)

Whether TTS synthesis was invoked. False indicates TTS was skipped.

---

### success

> **success**: `boolean`

Defined in: [types/generate.ts:1764](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L1764)

Whether TTS synthesis completed successfully.

---

### error?

> `optional` **error?**: `object`

Defined in: [types/generate.ts:1766](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L1766)

Structured synthesis error details, present only when synthesis failed.

#### code

> **code**: `string`

#### message

> **message**: `string`

#### retriable?

> `optional` **retriable?**: `boolean`

---

### latency?

> `optional` **latency?**: `number`

Defined in: [types/generate.ts:1772](https://github.com/juspay/neurolink/blob/release/src/lib/types/generate.ts#L1772)

TTS synthesis time in milliseconds.
