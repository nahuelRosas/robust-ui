[@robust-ui/global-state-reducer](README.md) / Exports

# @robust-ui/global-state-reducer

## Table of contents

### Interfaces

- [Action](interfaces/Action.md)
- [GlobalState](interfaces/GlobalState.md)
- [SetValueAction](interfaces/SetValueAction.md)

### Functions

- [GlobalStateReducer](modules.md#globalstatereducer)

## Functions

### GlobalStateReducer

▸ **GlobalStateReducer**(`state`, `action`): [`GlobalState`](interfaces/GlobalState.md)

Reducer function for managing the global state.

#### Parameters

| Name     | Type                                       | Description                                     |
| :------- | :----------------------------------------- | :---------------------------------------------- |
| `state`  | [`GlobalState`](interfaces/GlobalState.md) | The current global state.                       |
| `action` | `unknown`                                  | The action to be performed on the global state. |

#### Returns

[`GlobalState`](interfaces/GlobalState.md)

The updated global state.

#### Defined in

[index.ts:30](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/reducer/global-state-reducer/src/index.ts#L30)
