<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)
- [@robust-ui/use-global-state](#robust-uiuse-global-state)
  - [Table of contents](#table-of-contents)
    - [Functions](#functions)
  - [Functions](#functions-1)
    - [useGlobalState](#useglobalstate)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@robust-ui/use-global-state / [Exports](#modulesmd)

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

[@robust-ui/use-global-state](#readmemd) / Exports

# @robust-ui/use-global-state

## Table of contents

### Functions

- [useGlobalState](#useglobalstate)

## Functions

### useGlobalState

▸ **useGlobalState**\<`T`\>(`options`): [`T`, (`value`: `FunctionType`\<`T`\>) => `void`]

A custom hook that provides global state management.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the global state value. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `UseGlobalStateProps`\<`T`\> | The options for the hook. |

#### Returns

[`T`, (`value`: `FunctionType`\<`T`\>) => `void`]

- An array containing the current value of the global state and a function to update the value.

**`Throws`**

- If both `key` and `defaultValue` are undefined.

#### Defined in

[index.ts:19](https://github.com/nahuelRosas/robust-ui/blob/e04771a/packages/hooks/use-global-state/src/index.ts#L19)
