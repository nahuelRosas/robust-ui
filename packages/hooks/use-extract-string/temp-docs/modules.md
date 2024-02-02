[@robust-ui/use-extract-string](README.md) / Exports

# @robust-ui/use-extract-string

## Table of contents

### Functions

- [useExtractString](modules.md#useextractstring)

## Functions

### useExtractString

▸ **useExtractString**(`options`): `Object`

Extracts strings and other components from the given children with optional multi-language support.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options object. |
| `options.children` | `ReactNode` | The children to extract strings and components from. |
| `options.multiLanguageSupport?` | `ReactNode` \| `Record`\<`string`, `ReactNode`\> | Optional multi-language support. |

#### Returns

`Object`

- The extracted strings and other components.

| Name | Type |
| :------ | :------ |
| `otherComponents` | `ReactNode`[] |
| `strings` | `string`[] |

#### Defined in

[index.ts:12](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-extract-string/src/index.ts#L12)
