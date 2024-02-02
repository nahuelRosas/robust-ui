[@robust-ui/use-recovery-global-state-value](README.md) / Exports

# @robust-ui/use-recovery-global-state-value

## Table of contents

### Functions

- [useRecoveryGlobalStateValue](modules.md#userecoveryglobalstatevalue)

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

[index.ts:11](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-recovery-global-state-value/src/index.ts#L11)
