[@robust-ui/css-utils](README.md) / Exports

# @robust-ui/css-utils

## Table of contents

### Functions

- [addOpacity](modules.md#addopacity)
- [generateColorScheme](modules.md#generatecolorscheme)
- [generateContrastingColor](modules.md#generatecontrastingcolor)
- [generateUniqueClassName](modules.md#generateuniqueclassname)
- [getRandomHexColor](modules.md#getrandomhexcolor)
- [injectStyle](modules.md#injectstyle)

## Functions

### addOpacity

▸ **addOpacity**(`options`): `string`

Adds opacity to a given color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options for adding opacity. |
| `options.color` | `string` | The color to add opacity to. |
| `options.opacity` | `number` | The opacity value (between 0 and 1). |

#### Returns

`string`

The color with added opacity in the RGBA format.

**`Throws`**

If the color format is invalid.

#### Defined in

[colors-functions/index.ts:165](https://github.com/nahuelRosas/robust-ui/blob/0930762/packages/css-utils/src/colors-functions/index.ts#L165)

___

### generateColorScheme

▸ **generateColorScheme**(`options`): `Object`

Generates a color scheme based on the provided options.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | `Object` | `undefined` | The options for generating the color scheme. |
| `options.baseColor?` | `string` | `"teal"` | - |
| `options.complementaryColor?` | `boolean` | `false` | - |
| `options.isActivated?` | `boolean` | `true` | - |
| `options.isDisabled?` | `boolean` | `false` | - |
| `options.isInvalid?` | `boolean` | `false` | - |
| `options.isValid?` | `boolean` | `false` | - |
| `options.opacity?` | `number` | `0.7` | - |
| `options.props?` | `Object` | `undefined` | - |
| `options.props.active?` | `boolean` | `undefined` | - |
| `options.props.background?` | `boolean` | `undefined` | - |
| `options.props.border?` | `boolean` | `undefined` | - |
| `options.props.focus?` | `boolean` | `undefined` | - |
| `options.props.hover?` | `boolean` | `undefined` | - |
| `options.variant` | `Variant` | `"solid"` | - |

#### Returns

`Object`

The generated color scheme.

#### Defined in

[colors-functions/index.ts:282](https://github.com/nahuelRosas/robust-ui/blob/0930762/packages/css-utils/src/colors-functions/index.ts#L282)

___

### generateContrastingColor

▸ **generateContrastingColor**(`baseColor`): `string`

Generates a contrasting color based on the provided base color.
The base color should be in the RGBA format.
If the base color is not in the expected format, an error will be thrown.
The contrast color is calculated by determining the grayscale value of the base color,
and then setting the brightness to either 0 or 255 based on the grayscale value.
The contrast alpha is calculated by multiplying the base alpha by 2.5, with a maximum value of 1.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseColor` | `string` | The base color in the RGBA format. |

#### Returns

`string`

The contrasting color in the RGBA format.

**`Throws`**

Error if the base color is not in the expected format.

#### Defined in

[colors-functions/index.ts:196](https://github.com/nahuelRosas/robust-ui/blob/0930762/packages/css-utils/src/colors-functions/index.ts#L196)

___

### generateUniqueClassName

▸ **generateUniqueClassName**(`object`): `string` \| `undefined`

Generates a unique class name based on the provided object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `Object` | The object used to generate the unique class name. |
| `object.object` | `Object` | - |

#### Returns

`string` \| `undefined`

The generated unique class name.

**`Throws`**

If an error occurs while generating the unique class name.

#### Defined in

[generate-unique-classname/index.ts:10](https://github.com/nahuelRosas/robust-ui/blob/0930762/packages/css-utils/src/generate-unique-classname/index.ts#L10)

___

### getRandomHexColor

▸ **getRandomHexColor**(): `string`

Generates a random hexadecimal color code.

#### Returns

`string`

A string representing a random hexadecimal color code.

#### Defined in

[colors-functions/index.ts:269](https://github.com/nahuelRosas/robust-ui/blob/0930762/packages/css-utils/src/colors-functions/index.ts#L269)

___

### injectStyle

▸ **injectStyle**(`options`): \{ `inputProps`: `Record`\<`string`, `unknown`\> ; `styledCSSMap`: `Map`\<`string`, `string`[]\>  } \| `undefined`

Injects CSS styles based on the provided options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `InjectCSSTOptions` | The options for injecting CSS styles. |

#### Returns

\{ `inputProps`: `Record`\<`string`, `unknown`\> ; `styledCSSMap`: `Map`\<`string`, `string`[]\>  } \| `undefined`

An object containing the styled CSS map and input props, or undefined.

#### Defined in

[inject-style/index.ts:11](https://github.com/nahuelRosas/robust-ui/blob/0930762/packages/css-utils/src/inject-style/index.ts#L11)
