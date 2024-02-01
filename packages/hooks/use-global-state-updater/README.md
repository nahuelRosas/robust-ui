<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)
- [@robust-ui/use-global-state-updater](#robust-uiuse-global-state-updater)
  - [Table of contents](#table-of-contents)
    - [Type Aliases](#type-aliases)
    - [Functions](#functions)
  - [Type Aliases](#type-aliases-1)
    - [FunctionType](#functiontype)
  - [Functions](#functions-1)
    - [useGlobalStateUpdater](#useglobalstateupdater)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@robust-ui/use-global-state-updater / [Exports](#modulesmd)

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

[@robust-ui/use-global-state-updater](#readmemd) / Exports

# @robust-ui/use-global-state-updater

## Table of contents

### Type Aliases

- [FunctionType](#functiontype)

### Functions

- [useGlobalStateUpdater](#useglobalstateupdater)

## Type Aliases

### FunctionType

Ƭ **FunctionType**\<`T`\>: (`prevState`: `T`) => `T` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[index.ts:4](https://github.com/nahuelRosas/robust-ui/blob/e04771a/packages/hooks/use-global-state-updater/src/index.ts#L4)

## Functions

### useGlobalStateUpdater

▸ **useGlobalStateUpdater**\<`T`\>(`options`): `T` \| `undefined`

Updates the global state value and triggers the setter function.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the global state value. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options for updating the global state. |
| `options.SetterGlobalState` | (`key`: `string`, `value`: `unknown`, `isDev`: `boolean`) => `void` | The setter function for updating the global state. |
| `options.isDev` | `boolean` | Indicates whether the code is running in a development environment. |
| `options.key` | `string` | The key of the global state value. |
| `options.newValue` | [`FunctionType`](#functiontype)\<`T`\> | The new value or a function that returns the new value. |
| `options.valueRef` | `MutableRefObject`\<`T`\> | The reference to the mutable global state value. |

#### Returns

`T` \| `undefined`

- The previous value of the global state.

#### Defined in

[index.ts:18](https://github.com/nahuelRosas/robust-ui/blob/e04771a/packages/hooks/use-global-state-updater/src/index.ts#L18)
