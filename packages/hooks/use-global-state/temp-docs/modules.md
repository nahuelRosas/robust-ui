[@robust-ui/use-global-state](README.md) / Exports

# @robust-ui/use-global-state

## Table of contents

### Functions

- [useGlobalState](modules.md#useglobalstate)

## Functions

### useGlobalState

▸ **useGlobalState**\<`T`\>(`options`): [`T`, (`value`: `FunctionType`\<`T`\>) => `void`]

A custom hook that provides global state management.

#### Type parameters

| Name | Description                         |
| :--- | :---------------------------------- |
| `T`  | The type of the global state value. |

#### Parameters

| Name      | Type                         | Description               |
| :-------- | :--------------------------- | :------------------------ |
| `options` | `UseGlobalStateProps`\<`T`\> | The options for the hook. |

#### Returns

[`T`, (`value`: `FunctionType`\<`T`\>) => `void`]

- An array containing the current value of the global state and a function to update the value.

**`Throws`**

- If both `key` and `defaultValue` are undefined.

#### Defined in

[index.ts:19](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/hooks/use-global-state/src/index.ts#L19)
