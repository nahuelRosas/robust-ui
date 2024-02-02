[@robust-ui/use-global-context](../README.md) / [Exports](../modules.md) / userContext

# Interface: userContext

Represents the user context.

## Table of contents

### Properties

- [getAppState](userContext.md#getappstate)
- [globalState](userContext.md#globalstate)
- [resetAppState](userContext.md#resetappstate)
- [setAppState](userContext.md#setappstate)

## Properties

### getAppState

• **getAppState**: (`isDev`: `boolean`) => `unknown`

#### Type declaration

▸ (`isDev`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `isDev` | `boolean` |

##### Returns

`unknown`

#### Defined in

[types.ts:128](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L128)

___

### globalState

• **globalState**: `Record`\<`string`, `unknown`\>

#### Defined in

[types.ts:130](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L130)

___

### resetAppState

• **resetAppState**: (`isDev`: `boolean`) => `void`

#### Type declaration

▸ (`isDev`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `isDev` | `boolean` |

##### Returns

`void`

#### Defined in

[types.ts:129](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L129)

___

### setAppState

• **setAppState**: (`key`: `string`, `value`: `unknown`, `isDev`: `boolean`) => `void`

#### Type declaration

▸ (`key`, `value`, `isDev`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `unknown` |
| `isDev` | `boolean` |

##### Returns

`void`

#### Defined in

[types.ts:127](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L127)
