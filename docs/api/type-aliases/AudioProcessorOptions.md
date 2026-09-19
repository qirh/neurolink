[**NeuroLink API Reference**](../README.md)

---

[NeuroLink API Reference](../README.md) / AudioProcessorOptions

# Type Alias: AudioProcessorOptions

> **AudioProcessorOptions** = `object`

Defined in: [types/file.ts:437](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L437)

Audio processor options

## Properties

### provider?

> `optional` **provider?**: `string`

Defined in: [types/file.ts:439](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L439)

AI provider to use for transcription (e.g., 'openai', 'google', 'azure')

---

### transcriptionModel?

> `optional` **transcriptionModel?**: `string`

Defined in: [types/file.ts:441](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L441)

Transcription model to use (e.g., 'whisper-1', 'chirp-3')

---

### language?

> `optional` **language?**: `string`

Defined in: [types/file.ts:443](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L443)

Language code for transcription (e.g., 'en', 'es', 'fr')

---

### prompt?

> `optional` **prompt?**: `string`

Defined in: [types/file.ts:445](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L445)

Context or prompt to guide transcription accuracy

---

### maxDurationSeconds?

> `optional` **maxDurationSeconds?**: `number`

Defined in: [types/file.ts:447](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L447)

Maximum audio duration in seconds (default: 600)

---

### maxSizeMB?

> `optional` **maxSizeMB?**: `number`

Defined in: [types/file.ts:449](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L449)

Maximum file size in megabytes
