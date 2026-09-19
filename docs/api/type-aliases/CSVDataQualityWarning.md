[**NeuroLink API Reference**](../README.md)

---

[NeuroLink API Reference](../README.md) / CSVDataQualityWarning

# Type Alias: CSVDataQualityWarning

> **CSVDataQualityWarning** = `object`

Defined in: [types/file.ts:254](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L254)

Data quality warning for CSV columns

## Properties

### column

> **column**: `string`

Defined in: [types/file.ts:255](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L255)

---

### type

> **type**: `"empty_values"` \| `"invalid_name"` \| `"mixed_types"` \| `"high_null_rate"` \| `"duplicates"` \| `"inconsistent_format"`

Defined in: [types/file.ts:256](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L256)

---

### message

> **message**: `string`

Defined in: [types/file.ts:263](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L263)

---

### severity

> **severity**: `"info"` \| `"warning"` \| `"error"`

Defined in: [types/file.ts:264](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L264)

---

### affectedRows?

> `optional` **affectedRows?**: `number`

Defined in: [types/file.ts:265](https://github.com/juspay/neurolink/blob/release/src/lib/types/file.ts#L265)
