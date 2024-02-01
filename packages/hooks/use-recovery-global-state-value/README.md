<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)
- [@robust-ui/use-recovery-global-state-value](#robust-uiuse-recovery-global-state-value)
  - [Table of contents](#table-of-contents)
    - [Functions](#functions)
  - [Functions](#functions-1)
    - [useRecoveryGlobalStateValue](#userecoveryglobalstatevalue)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@robust-ui/use-recovery-global-state-value / [Exports](#modulesmd)

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

[@robust-ui/use-recovery-global-state-value](#readmemd) / Exports

# @robust-ui/use-recovery-global-state-value

## Table of contents

### Functions

- [useRecoveryGlobalStateValue](#userecoveryglobalstatevalue)

## Functions

### useRecoveryGlobalStateValue

▸ **useRecoveryGlobalStateValue**\<`T`\>(`options`): `T` \| `undefined`

Retrieves a value from the global state object based on a search key.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the value to retrieve. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options for retrieving the value. |
| `options.globalState` | `Record`\<`string`, `unknown`\> | The global state object. |
| `options.searchKey` | `string` | The search key to match against the keys in the global state object. |

#### Returns

`T` \| `undefined`

- The retrieved value, or undefined if not found.

#### Defined in

[index.ts:11](https://github.com/nahuelRosas/robust-ui/blob/e04771a/packages/hooks/use-recovery-global-state-value/src/index.ts#L11)
