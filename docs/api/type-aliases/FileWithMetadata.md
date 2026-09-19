[**NeuroLink API Reference**](../README.md)

---

[NeuroLink API Reference](../README.md) / FileWithMetadata

# Type Alias: FileWithMetadata

> **FileWithMetadata** = `object`

Defined in: [types/file.ts:125](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L125)

File with metadata — allows callers to pass filename alongside a Buffer.

This is the recommended way for applications (e.g. Slack bots) to pass
files that were downloaded as Buffers but still have original filenames.

## Example

```typescript
files: [
  { buffer: pdfBuffer, filename: "quarterly-report.pdf" },
  {
    buffer: videoBuffer,
    filename: "meeting-recording.mov",
    mimetype: "video/quicktime",
  },
];
```

## Properties

### buffer

> **buffer**: `Buffer`

Defined in: [types/file.ts:126](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L126)

---

### filename

> **filename**: `string`

Defined in: [types/file.ts:127](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L127)

---

### mimetype?

> `optional` **mimetype?**: `string`

Defined in: [types/file.ts:128](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L128)
