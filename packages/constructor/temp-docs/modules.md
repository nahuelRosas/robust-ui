[@robust-ui/constructor](README.md) / Exports

# @robust-ui/constructor

## Table of contents

### Interfaces

- [ComponentConstructorProps](interfaces/ComponentConstructorProps.md)

### Type Aliases

- [EnhancedProps](modules.md#enhancedprops)
- [EnhancedPropsNoGeneric](modules.md#enhancedpropsnogeneric)
- [ForwardRefExotic](modules.md#forwardrefexotic)
- [NestedRecord](modules.md#nestedrecord)
- [PartialOrNestedPartial](modules.md#partialornestedpartial)
- [PartialOrNestedPartialArray](modules.md#partialornestedpartialarray)

### Functions

- [CreateComponent](modules.md#createcomponent)

## Type Aliases

### EnhancedProps

Ƭ **EnhancedProps**\<`T`\>: `CustomHTMLAttributes`\<`T`\> & \{ `ElementType?`: `React.ElementType` \| keyof `JSX.IntrinsicElements` ; `children?`: `React.ReactNode` ; `colorScheme?`: [`PartialOrNestedPartial`](modules.md#partialornestedpartial)\<keyof typeof `colors`\> ; `colorSchemeProperty?`: [`PartialOrNestedPartial`](modules.md#partialornestedpartial)\<\{ `baseColor?`: keyof typeof `colors` \| `string` ; `baseColorRaw?`: `string` ; `complementaryColor?`: `boolean` ; `isActivated?`: `boolean` ; `isDisabled?`: `boolean` ; `isInvalid?`: `boolean` ; `isValid?`: `boolean` ; `opacity?`: `number` ; `props?`: \{ `active?`: `boolean` ; `background?`: `boolean` ; `border?`: `boolean` ; `focus?`: `boolean` ; `highContrast?`: `boolean` ; `hover?`: `boolean` ; `monochromeText?`: `boolean`  } ; `variant?`: ``"solid"`` \| ``"solidLight"`` \| ``"solidDark"`` \| ``"outline"`` \| ``"outlineLight"`` \| ``"outlineDark"`` \| ``"ghost"`` \| ``"link"`` \| ``"linkLight"`` \| ``"linkDark"``  }\> ; `colorSchemeRaw?`: [`PartialOrNestedPartial`](modules.md#partialornestedpartial)\<`string`\> ; `multiLanguageSupport?`: [`PartialOrNestedPartial`](modules.md#partialornestedpartial)\<`React.ReactNode`\> ; `variant?`: [`PartialOrNestedPartial`](modules.md#partialornestedpartial)\<``"solid"`` \| ``"solidLight"`` \| ``"solidDark"`` \| ``"outline"`` \| ``"outlineLight"`` \| ``"outlineDark"`` \| ``"ghost"`` \| ``"link"`` \| ``"linkLight"`` \| ``"linkDark"``\>  }

Represents the type definition for enhanced props.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the custom HTML attributes. |

#### Defined in

[types.ts:130](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/constructor/src/types.ts#L130)

___

### EnhancedPropsNoGeneric

Ƭ **EnhancedPropsNoGeneric**\<`T`\>: `CustomHTMLAttributesNoGeneric`\<`T`\> & \{ `ElementType?`: `React.ElementType` \| keyof `JSX.IntrinsicElements` ; `children?`: `React.ReactNode` ; `colorScheme?`: keyof typeof `colors` ; `colorSchemeProperty?`: \{ `baseColor?`: keyof typeof `colors` \| `string` ; `baseColorRaw?`: `string` ; `complementaryColor?`: `boolean` ; `isActivated?`: `boolean` ; `isDisabled?`: `boolean` ; `isInvalid?`: `boolean` ; `isValid?`: `boolean` ; `opacity?`: `number` ; `props?`: \{ `active?`: `boolean` ; `background?`: `boolean` ; `border?`: `boolean` ; `focus?`: `boolean` ; `highContrast?`: `boolean` ; `hover?`: `boolean` ; `monochromeText?`: `boolean`  } ; `variant?`: ``"solid"`` \| ``"solidLight"`` \| ``"solidDark"`` \| ``"outline"`` \| ``"outlineLight"`` \| ``"outlineDark"`` \| ``"ghost"`` \| ``"link"`` \| ``"linkLight"`` \| ``"linkDark"``  } ; `colorSchemeRaw?`: `string` ; `multiLanguageSupport?`: `React.ReactNode` ; `variant?`: ``"solid"`` \| ``"solidLight"`` \| ``"solidDark"`` \| ``"outline"`` \| ``"outlineLight"`` \| ``"outlineDark"`` \| ``"ghost"`` \| ``"link"`` \| ``"linkLight"`` \| ``"linkDark"``  }

Represents the enhanced props for a component with no generic type.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types.ts:234](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/constructor/src/types.ts#L234)

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

[types.ts:298](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/constructor/src/types.ts#L298)

___

### NestedRecord

Ƭ **NestedRecord**\<`T`\>: `Partial`\<`Record`\<`Partial`\<`string`\>, `T` \| `NestedRecordPartial`\<`T`\>\>\>

Represents a nested record type.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of values in the record. |

#### Defined in

[types.ts:23](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/constructor/src/types.ts#L23)

___

### PartialOrNestedPartial

Ƭ **PartialOrNestedPartial**\<`T`\>: `Partial`\<`T`\> \| [`NestedRecord`](modules.md#nestedrecord)\<`T`\>

Represents a type that can be either a partial object of type T or a nested record of type T.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the object. |

#### Defined in

[types.ts:31](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/constructor/src/types.ts#L31)

___

### PartialOrNestedPartialArray

Ƭ **PartialOrNestedPartialArray**\<`T`\>: `T`[] \| [`PartialOrNestedPartial`](modules.md#partialornestedpartial)\<`T`\> \| [`PartialOrNestedPartial`](modules.md#partialornestedpartial)\<`T`\>[]

Represents an array that can contain either elements of type T, or nested partial objects of type T, or a combination of both.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the array. |

#### Defined in

[types.ts:37](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/constructor/src/types.ts#L37)

## Functions

### CreateComponent

▸ **CreateComponent**\<`T`\>(`componentType`): `ForwardRefExoticComponent`\<`PropsWithoutRef`\<[`EnhancedProps`](modules.md#enhancedprops)\<`T`\>\> & `RefAttributes`\<`unknown`\>\>

Creates a component with enhanced props and styling capabilities.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of component. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `componentType` | [`ComponentConstructorProps`](interfaces/ComponentConstructorProps.md)\<`T`\> | The component type. |

#### Returns

`ForwardRefExoticComponent`\<`PropsWithoutRef`\<[`EnhancedProps`](modules.md#enhancedprops)\<`T`\>\> & `RefAttributes`\<`unknown`\>\>

The generated component.

#### Defined in

[index.tsx:15](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/constructor/src/index.tsx#L15)
