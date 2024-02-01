<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)
- [@robust-ui/use-extract-string](#robust-uiuse-extract-string)
  - [Table of contents](#table-of-contents)
    - [Functions](#functions)
  - [Functions](#functions-1)
    - [useExtractString](#useextractstring)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@robust-ui/use-extract-string / [Exports](#modulesmd)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="readmemd"></a>

@robust-ui/core / [Exports](#modulesmd)

<a name="modulesmd"></a>

[@robust-ui/core](#readmemd) / Exports

# @robust-ui/core


<a name="modulesmd"></a>

[@robust-ui/use-extract-string](#readmemd) / Exports

# @robust-ui/use-extract-string

## Table of contents

### Functions

- [useExtractString](#useextractstring)

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

[index.ts:12](https://github.com/nahuelRosas/robust-ui/blob/6917dff/packages/hooks/use-extract-string/src/index.ts#L12)
