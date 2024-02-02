[@robust-ui/use-global-context](README.md) / Exports

# @robust-ui/use-global-context

## Table of contents

### Interfaces

- [DevData](interfaces/DevData.md)
- [DevTools](interfaces/DevTools.md)
- [GlobalContextValues](interfaces/GlobalContextValues.md)
- [ToolConfig](interfaces/ToolConfig.md)
- [notification](interfaces/notification.md)
- [userContext](interfaces/userContext.md)

### Variables

- [GlobalContext](modules.md#globalcontext)

### Functions

- [useGlobalContext](modules.md#useglobalcontext)

## Variables

### GlobalContext

• `Const` **GlobalContext**: `Context`\<[`GlobalContextValues`](interfaces/GlobalContextValues.md)\>

The global context for the application.

#### Defined in

[index.ts:9](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/index.ts#L9)

## Functions

### useGlobalContext

▸ **useGlobalContext**\<`T`\>(`options?`): [`GlobalContextValues`](interfaces/GlobalContextValues.md)[`T`]

Custom hook to access the global context values.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends keyof [`GlobalContextValues`](interfaces/GlobalContextValues.md) | The key of the global context value to retrieve. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | Optional configuration for the hook. |
| `options.key` | `T` | The key of the global context value to retrieve. |

#### Returns

[`GlobalContextValues`](interfaces/GlobalContextValues.md)[`T`]

- The value of the global context associated with the specified key.

#### Defined in

[index.ts:21](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/index.ts#L21)

▸ **useGlobalContext**\<`T`, `K`\>(`options?`): [`GlobalContextValues`](interfaces/GlobalContextValues.md)[`T`][`K`]

Retrieves a value from the global context based on the provided key and subKey.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends keyof [`GlobalContextValues`](interfaces/GlobalContextValues.md) | The type of the key in the global context. |
| `K` | extends `string` \| `number` \| `symbol` | The type of the subKey in the global context. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | The options for retrieving the value. |
| `options.key` | `T` | The key in the global context. |
| `options.subKey` | `K` | The subKey in the global context. |

#### Returns

[`GlobalContextValues`](interfaces/GlobalContextValues.md)[`T`][`K`]

The value from the global context.

#### Defined in

[index.ts:34](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/index.ts#L34)
