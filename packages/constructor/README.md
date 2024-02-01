<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)
- [Interfaces](#interfaces)
  - [Interface: ComponentConstructorProps\<T\>](#interface-componentconstructorprops%5Ct%5C)
    - [Type parameters](#type-parameters)
    - [Table of contents](#table-of-contents)
    - [Properties](#properties)
- [@robust-ui/constructor](#robust-uiconstructor)
  - [Table of contents](#table-of-contents-1)
    - [Interfaces](#interfaces-1)
    - [Type Aliases](#type-aliases)
    - [Functions](#functions)
  - [Type Aliases](#type-aliases-1)
    - [EnhancedProps](#enhancedprops)
    - [EnhancedPropsNoGeneric](#enhancedpropsnogeneric)
    - [ForwardRefExotic](#forwardrefexotic)
    - [NestedRecord](#nestedrecord)
    - [PartialOrNestedPartialArray](#partialornestedpartialarray)
  - [Functions](#functions-1)
    - [CreateComponent](#createcomponent)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@robust-ui/constructor / [Exports](#modulesmd)

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


<a name="interfacescomponentconstructorpropsmd"></a>

[@robust-ui/constructor](#readmemd) / [Exports](#modulesmd) / ComponentConstructorProps

## Interface: ComponentConstructorProps\<T\>

Represents the props for a component constructor.

### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of props for the component. |

### Table of contents

#### Properties

- [componentType](#componenttype)

### Properties

#### componentType

• **componentType**: keyof IntrinsicElements \| `ComponentType`\<`T`\>

##### Defined in

[types.ts:288](https://github.com/nahuelRosas/robust-ui/blob/763f74c/packages/constructor/src/types.ts#L288)


<a name="modulesmd"></a>

[@robust-ui/constructor](#readmemd) / Exports

# @robust-ui/constructor

## Table of contents

### Interfaces

- [ComponentConstructorProps](#interfacescomponentconstructorpropsmd)

### Type Aliases

- [EnhancedProps](#enhancedprops)
- [EnhancedPropsNoGeneric](#enhancedpropsnogeneric)
- [ForwardRefExotic](#forwardrefexotic)
- [NestedRecord](#nestedrecord)
- [PartialOrNestedPartialArray](#partialornestedpartialarray)

### Functions

- [CreateComponent](#createcomponent)

## Type Aliases

### EnhancedProps

Ƭ **EnhancedProps**\<`T`\>: `CustomHTMLAttributes`\<`T`\> & \{ `ElementType?`: `React.ElementType` \| keyof `JSX.IntrinsicElements` ; `children?`: `React.ReactNode` ; `colorScheme?`: `PartialOrNestedPartial`\<keyof typeof `colors`\> ; `colorSchemeProperty?`: `PartialOrNestedPartial`\<\{ `baseColor?`: keyof typeof `colors` \| `string` ; `baseColorRaw?`: `string` ; `complementaryColor?`: `boolean` ; `isActivated?`: `boolean` ; `isDisabled?`: `boolean` ; `isInvalid?`: `boolean` ; `isValid?`: `boolean` ; `opacity?`: `number` ; `props?`: \{ `active?`: `boolean` ; `background?`: `boolean` ; `border?`: `boolean` ; `focus?`: `boolean` ; `highContrast?`: `boolean` ; `hover?`: `boolean` ; `monochromeText?`: `boolean`  } ; `variant?`: ``"solid"`` \| ``"solidLight"`` \| ``"solidDark"`` \| ``"outline"`` \| ``"outlineLight"`` \| ``"outlineDark"`` \| ``"ghost"`` \| ``"link"`` \| ``"linkLight"`` \| ``"linkDark"``  }\> ; `colorSchemeRaw?`: `PartialOrNestedPartial`\<`string`\> ; `multiLanguageSupport?`: `PartialOrNestedPartial`\<`React.ReactNode`\> ; `variant?`: `PartialOrNestedPartial`\<``"solid"`` \| ``"solidLight"`` \| ``"solidDark"`` \| ``"outline"`` \| ``"outlineLight"`` \| ``"outlineDark"`` \| ``"ghost"`` \| ``"link"`` \| ``"linkLight"`` \| ``"linkDark"``\>  }

Represents the type definition for enhanced props.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the custom HTML attributes. |

#### Defined in

[types.ts:130](https://github.com/nahuelRosas/robust-ui/blob/763f74c/packages/constructor/src/types.ts#L130)

___

### EnhancedPropsNoGeneric

Ƭ **EnhancedPropsNoGeneric**\<`T`\>: `CustomHTMLAttributesNoGeneric`\<`T`\> & \{ `ElementType?`: `React.ElementType` \| keyof `JSX.IntrinsicElements` ; `children?`: `React.ReactNode` ; `colorScheme?`: keyof typeof `colors` ; `colorSchemeProperty?`: \{ `baseColor?`: keyof typeof `colors` \| `string` ; `baseColorRaw?`: `string` ; `complementaryColor?`: `boolean` ; `isActivated?`: `boolean` ; `isDisabled?`: `boolean` ; `isInvalid?`: `boolean` ; `isValid?`: `boolean` ; `opacity?`: `number` ; `props?`: \{ `active?`: `boolean` ; `background?`: `boolean` ; `border?`: `boolean` ; `focus?`: `boolean` ; `highContrast?`: `boolean` ; `hover?`: `boolean` ; `monochromeText?`: `boolean`  } ; `variant?`: ``"solid"`` \| ``"solidLight"`` \| ``"solidDark"`` \| ``"outline"`` \| ``"outlineLight"`` \| ``"outlineDark"`` \| ``"ghost"`` \| ``"link"`` \| ``"linkLight"`` \| ``"linkDark"``  } ; `colorSchemeRaw?`: `string` ; `multiLanguageSupport?`: `React.ReactNode` ; `variant?`: ``"solid"`` \| ``"solidLight"`` \| ``"solidDark"`` \| ``"outline"`` \| ``"outlineLight"`` \| ``"outlineDark"`` \| ``"ghost"`` \| ``"link"`` \| ``"linkLight"`` \| ``"linkDark"``  }

Represents the enhanced props for a component with no generic type.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types.ts:234](https://github.com/nahuelRosas/robust-ui/blob/763f74c/packages/constructor/src/types.ts#L234)

___

### ForwardRefExotic

Ƭ **ForwardRefExotic**\<`T`\>: `Omit`\<\{ [K in keyof T]?: T[K] }, ``"ref"``\> & `React.RefAttributes`\<`unknown`\>

Represents a type that is used to create a forward ref component.
It is an exotic type that omits the "ref" property from the original type
and includes React ref attributes.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The original type. |

#### Defined in

[types.ts:298](https://github.com/nahuelRosas/robust-ui/blob/763f74c/packages/constructor/src/types.ts#L298)

___

### NestedRecord

Ƭ **NestedRecord**\<`T`\>: `Partial`\<`Record`\<`Partial`\<`string`\>, `T` \| `NestedRecordPartial`\<`T`\>\>\>

Represents a nested record type.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of values in the record. |

#### Defined in

[types.ts:23](https://github.com/nahuelRosas/robust-ui/blob/763f74c/packages/constructor/src/types.ts#L23)

___

### PartialOrNestedPartialArray

Ƭ **PartialOrNestedPartialArray**\<`T`\>: `T`[] \| `PartialOrNestedPartial`\<`T`\> \| `PartialOrNestedPartial`\<`T`\>[]

Represents an array that can contain either elements of type T, or nested partial objects of type T, or a combination of both.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the array. |

#### Defined in

[types.ts:37](https://github.com/nahuelRosas/robust-ui/blob/763f74c/packages/constructor/src/types.ts#L37)

## Functions

### CreateComponent

▸ **CreateComponent**\<`T`\>(`componentType`): `ForwardRefExoticComponent`\<`PropsWithoutRef`\<[`EnhancedProps`](#enhancedprops)\<`T`\>\> & `RefAttributes`\<`unknown`\>\>

Creates a component with enhanced props and styling capabilities.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of component. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `componentType` | [`ComponentConstructorProps`](#interfacescomponentconstructorpropsmd)\<`T`\> | The component type. |

#### Returns

`ForwardRefExoticComponent`\<`PropsWithoutRef`\<[`EnhancedProps`](#enhancedprops)\<`T`\>\> & `RefAttributes`\<`unknown`\>\>

The generated component.

#### Defined in

[index.tsx:15](https://github.com/nahuelRosas/robust-ui/blob/763f74c/packages/constructor/src/index.tsx#L15)
