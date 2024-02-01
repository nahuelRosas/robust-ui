<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)
- [Interfaces](#interfaces)
  - [Interface: Action](#interface-action)
    - [Hierarchy](#hierarchy)
    - [Table of contents](#table-of-contents)
    - [Properties](#properties)
  - [Interface: GlobalState](#interface-globalstate)
    - [Indexable](#indexable)
  - [Interface: SetValueAction](#interface-setvalueaction)
    - [Hierarchy](#hierarchy-1)
    - [Table of contents](#table-of-contents-1)
    - [Properties](#properties-1)
- [@robust-ui/global-state-reducer](#robust-uiglobal-state-reducer)
  - [Table of contents](#table-of-contents-2)
    - [Interfaces](#interfaces-1)
    - [Functions](#functions)
  - [Functions](#functions-1)
    - [GlobalStateReducer](#globalstatereducer)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@robust-ui/global-state-reducer / [Exports](#modulesmd)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="readmemd"></a>

@robust-ui/core / [Exports](#modulesmd)

<a name="modulesmd"></a>

[@robust-ui/core](#readmemd) / Exports

# @robust-ui/core

# Interfaces


<a name="interfacesactionmd"></a>

[@robust-ui/global-state-reducer](#readmemd) / [Exports](#modulesmd) / Action

## Interface: Action

Represents an action in the application.

### Hierarchy

- **`Action`**

  ↳ [`SetValueAction`](#interfacessetvalueactionmd)

### Table of contents

#### Properties

- [type](#type)

### Properties

#### type

• **type**: `string`

##### Defined in

[index.ts:5](https://github.com/nahuelRosas/robust-ui/blob/4beab69/packages/reducer/global-state-reducer/src/index.ts#L5)


<a name="interfacesglobalstatemd"></a>

[@robust-ui/global-state-reducer](#readmemd) / [Exports](#modulesmd) / GlobalState

## Interface: GlobalState

Represents the global state object.

### Indexable

▪ [key: `string`]: `unknown`


<a name="interfacessetvalueactionmd"></a>

[@robust-ui/global-state-reducer](#readmemd) / [Exports](#modulesmd) / SetValueAction

## Interface: SetValueAction

Represents an action that sets the value of a specific key in the global state.

### Hierarchy

- [`Action`](#interfacesactionmd)

  ↳ **`SetValueAction`**

### Table of contents

#### Properties

- [key](#key)
- [type](#type)
- [value](#value)

### Properties

#### key

• **key**: `string`

##### Defined in

[index.ts:12](https://github.com/nahuelRosas/robust-ui/blob/4beab69/packages/reducer/global-state-reducer/src/index.ts#L12)

___

#### type

• **type**: `string`

##### Inherited from

[Action](#interfacesactionmd).[type](#type)

##### Defined in

[index.ts:5](https://github.com/nahuelRosas/robust-ui/blob/4beab69/packages/reducer/global-state-reducer/src/index.ts#L5)

___

#### value

• **value**: `unknown`

##### Defined in

[index.ts:13](https://github.com/nahuelRosas/robust-ui/blob/4beab69/packages/reducer/global-state-reducer/src/index.ts#L13)


<a name="modulesmd"></a>

[@robust-ui/global-state-reducer](#readmemd) / Exports

# @robust-ui/global-state-reducer

## Table of contents

### Interfaces

- [Action](#interfacesactionmd)
- [GlobalState](#interfacesglobalstatemd)
- [SetValueAction](#interfacessetvalueactionmd)

### Functions

- [GlobalStateReducer](#globalstatereducer)

## Functions

### GlobalStateReducer

▸ **GlobalStateReducer**(`state`, `action`): [`GlobalState`](#interfacesglobalstatemd)

Reducer function for managing the global state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`GlobalState`](#interfacesglobalstatemd) | The current global state. |
| `action` | `unknown` | The action to be performed on the global state. |

#### Returns

[`GlobalState`](#interfacesglobalstatemd)

The updated global state.

#### Defined in

[index.ts:30](https://github.com/nahuelRosas/robust-ui/blob/4beab69/packages/reducer/global-state-reducer/src/index.ts#L30)
