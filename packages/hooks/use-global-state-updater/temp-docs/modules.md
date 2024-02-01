[@robust-ui/use-global-state-updater](README.md) / Exports

# @robust-ui/use-global-state-updater

## Table of contents

### Type Aliases

- [FunctionType](modules.md#functiontype)

### Functions

- [useGlobalStateUpdater](modules.md#useglobalstateupdater)

## Type Aliases

### FunctionType

Ƭ **FunctionType**\<`T`\>: (`prevState`: `T`) => `T` \| `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[index.ts:4](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/hooks/use-global-state-updater/src/index.ts#L4)

## Functions

### useGlobalStateUpdater

▸ **useGlobalStateUpdater**\<`T`\>(`options`): `T` \| `undefined`

Updates the global state value and triggers the setter function.

#### Type parameters

| Name | Description                         |
| :--- | :---------------------------------- |
| `T`  | The type of the global state value. |

#### Parameters

| Name                        | Type                                                                | Description                                                         |
| :-------------------------- | :------------------------------------------------------------------ | :------------------------------------------------------------------ |
| `options`                   | `Object`                                                            | The options for updating the global state.                          |
| `options.SetterGlobalState` | (`key`: `string`, `value`: `unknown`, `isDev`: `boolean`) => `void` | The setter function for updating the global state.                  |
| `options.isDev`             | `boolean`                                                           | Indicates whether the code is running in a development environment. |
| `options.key`               | `string`                                                            | The key of the global state value.                                  |
| `options.newValue`          | [`FunctionType`](modules.md#functiontype)\<`T`\>                    | The new value or a function that returns the new value.             |
| `options.valueRef`          | `MutableRefObject`\<`T`\>                                           | The reference to the mutable global state value.                    |

#### Returns

`T` \| `undefined`

- The previous value of the global state.

#### Defined in

[index.ts:18](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/hooks/use-global-state-updater/src/index.ts#L18)
