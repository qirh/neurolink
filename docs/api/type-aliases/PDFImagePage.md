[**NeuroLink API Reference**](../README.md)

---

[NeuroLink API Reference](../README.md) / PDFImagePage

# Type Alias: PDFImagePage

> **PDFImagePage** = `object`

Defined in: [types/file.ts:625](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L625)

A single streamed page result (#302). `error` is set when that page failed.

## Properties

### pageIndex

> **pageIndex**: `number`

Defined in: [types/file.ts:627](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L627)

1-based page index.

---

### image

> **image**: `string`

Defined in: [types/file.ts:629](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L629)

Base64-encoded PNG for the page (empty string when `error` is set).

---

### imageSizeBytes

> **imageSizeBytes**: `number`

Defined in: [types/file.ts:631](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L631)

Byte size of the rendered PNG (0 when `error` is set).

---

### error?

> `optional` **error?**: `string`

Defined in: [types/file.ts:633](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L633)

Populated when this page failed to render (#294).
