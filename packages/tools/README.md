<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)
- [Interfaces](#interfaces)
  - [Interface: IOptions](#interface-ioptions)
    - [Table of contents](#table-of-contents)
    - [Properties](#properties)
- [@robust-ui/tools](#robust-uitools)
  - [Table of contents](#table-of-contents-1)
    - [Interfaces](#interfaces-1)
    - [Type Aliases](#type-aliases)
    - [Functions](#functions)
  - [Type Aliases](#type-aliases-1)
    - [PartialRecord](#partialrecord)
  - [Functions](#functions-1)
    - [attributeCompleter](#attributecompleter)
    - [debounce](#debounce)
    - [generateHash](#generatehash)
    - [generateUniqueId](#generateuniqueid)
    - [isEmptyArray](#isemptyarray)
    - [isEmptyObject](#isemptyobject)
    - [isNullOrUndefined](#isnullorundefined)
    - [normalizeInputKey](#normalizeinputkey)
    - [propagation](#propagation)
    - [propsSplitter](#propssplitter)
    - [safeJSON](#safejson)
    - [stopPropagation](#stoppropagation)
    - [valueRecoverer](#valuerecoverer)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@robust-ui/tools / [Exports](#modulesmd)

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


<a name="interfacesioptionsmd"></a>

[@robust-ui/tools](#readmemd) / [Exports](#modulesmd) / IOptions

## Interface: IOptions

### Table of contents

#### Properties

- [digest](#digest)
- [hashAlgorithm](#hashalgorithm)
- [iterations](#iterations)
- [pepper](#pepper)
- [salt](#salt)

### Properties

#### digest

• **digest**: `BinaryToTextEncoding`

##### Defined in

[generate-hash/index.ts:8](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/generate-hash/index.ts#L8)

___

#### hashAlgorithm

• **hashAlgorithm**: `string`

##### Defined in

[generate-hash/index.ts:4](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/generate-hash/index.ts#L4)

___

#### iterations

• **iterations**: `number`

##### Defined in

[generate-hash/index.ts:7](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/generate-hash/index.ts#L7)

___

#### pepper

• `Optional` **pepper**: `string`

##### Defined in

[generate-hash/index.ts:6](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/generate-hash/index.ts#L6)

___

#### salt

• `Optional` **salt**: `string`

##### Defined in

[generate-hash/index.ts:5](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/generate-hash/index.ts#L5)


<a name="modulesmd"></a>

[@robust-ui/tools](#readmemd) / Exports

# @robust-ui/tools

## Table of contents

### Interfaces

- [IOptions](#interfacesioptionsmd)

### Type Aliases

- [PartialRecord](#partialrecord)

### Functions

- [attributeCompleter](#attributecompleter)
- [debounce](#debounce)
- [generateHash](#generatehash)
- [generateUniqueId](#generateuniqueid)
- [isEmptyArray](#isemptyarray)
- [isEmptyObject](#isemptyobject)
- [isNullOrUndefined](#isnullorundefined)
- [normalizeInputKey](#normalizeinputkey)
- [propagation](#propagation)
- [propsSplitter](#propssplitter)
- [safeJSON](#safejson)
- [stopPropagation](#stoppropagation)
- [valueRecoverer](#valuerecoverer)

## Type Aliases

### PartialRecord

Ƭ **PartialRecord**\<`T`, `U`\>: `Partial`\<`Record`\<`T`, `U`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |
| `U` | `U` |

#### Defined in

[attribute-completer/index.ts:1](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/attribute-completer/index.ts#L1)

## Functions

### attributeCompleter

▸ **attributeCompleter**(`«destructured»`): `Partial`\<`Record`\<`string`, `unknown`\>\> \| `undefined`

Completes the attributes object by filling in missing values based on the provided input attributes and media breakpoints.
Throws an error if the input attributes are invalid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `inputAttributes` | `Record`\<`string`, `unknown`\> |
| › `mediaBreakpoints` | `Record`\<`string`, `number`\> |

#### Returns

`Partial`\<`Record`\<`string`, `unknown`\>\> \| `undefined`

The completed attributes object or undefined if there are no attributes to complete.

**`Throws`**

Error if the input attributes are missing or have an invalid format.

#### Defined in

[attribute-completer/index.ts:13](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/attribute-completer/index.ts#L13)

___

### debounce

▸ **debounce**\<`T`\>(`options`): (`this`: `unknown`, ...`args`: `Parameters`\<`T`\>) => `void` \| `undefined`

Creates a debounced function that delays invoking the provided function until after a specified delay.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends (...`args`: `unknown`[]) => `void` | The type of the function to debounce. |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | `Object` | `undefined` | The options for the debounced function. |
| `options.delay?` | `number` | `0` | The delay in milliseconds before invoking the debounced function. |
| `options.fn` | `T` | `undefined` | The function to debounce. |
| `options.immediate?` | `boolean` | `false` | Specifies whether the debounced function should be invoked immediately on the leading edge. |

#### Returns

(`this`: `unknown`, ...`args`: `Parameters`\<`T`\>) => `void` \| `undefined`

- The debounced function.

#### Defined in

[debounce/index.ts:11](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/debounce/index.ts#L11)

___

### generateHash

▸ **generateHash**(`«destructured»`): `string`

Generates a hash for the given input string using the specified options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `inputString` | `string` |
| › `options?` | [`IOptions`](#interfacesioptionsmd) |

#### Returns

`string`

The generated hash as a string.

**`Throws`**

Error if an invalid hash algorithm or digest format is provided.

#### Defined in

[generate-hash/index.ts:19](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/generate-hash/index.ts#L19)

___

### generateUniqueId

▸ **generateUniqueId**(`«destructured»`): `string`

Generates a unique ID based on the provided object, prefix, and options.
If the object is a string, it will be used directly. Otherwise, it will be converted to a JSON string.
The generated ID is a hash of the input string using the specified hash algorithm and digest.
If a prefix is provided, it will be prepended to the generated ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `object` | `unknown` |
| › `options?` | [`IOptions`](#interfacesioptionsmd) |
| › `prefix?` | `string` |

#### Returns

`string`

The generated unique ID.

**`Throws`**

Error if unable to generate an ID from the input.

#### Defined in

[generate-unique-id/index.ts:16](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/generate-unique-id/index.ts#L16)

___

### isEmptyArray

▸ **isEmptyArray**(`arr`): `boolean`

Checks if an array is empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `unknown`[] | The array to check. |

#### Returns

`boolean`

True if the array is empty, false otherwise.

#### Defined in

[validation-input/index.ts:25](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/validation-input/index.ts#L25)

___

### isEmptyObject

▸ **isEmptyObject**(`obj`): `boolean`

Checks if an object is empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | The object to check. |

#### Returns

`boolean`

True if the object is empty, false otherwise.

#### Defined in

[validation-input/index.ts:16](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/validation-input/index.ts#L16)

___

### isNullOrUndefined

▸ **isNullOrUndefined**(`value`): `boolean`

Checks if a value is null or undefined.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check. |

#### Returns

`boolean`

True if the value is null or undefined, false otherwise.

#### Defined in

[validation-input/index.ts:7](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/validation-input/index.ts#L7)

___

### normalizeInputKey

▸ **normalizeInputKey**(`«destructured»`): `Object`

Normalizes the input key by removing the specified keyword and converting it to the desired output format.
Throws an error if the input key is invalid or no valid prop name is found.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `inputKey` | `string` | `undefined` |
| › `keyword?` | `string` | `"raw"` |
| › `outputKey?` | ``"camelCase"`` \| ``"snakeCase"`` \| ``"kebabCase"`` | `"camelCase"` |

#### Returns

`Object`

An object containing the information about whether the keyword is present in the input key and the normalized output key.

| Name | Type |
| :------ | :------ |
| `isKeywordPresent` | `boolean` |
| `output` | `string` |

**`Throws`**

Error if the input key is invalid or no valid prop name is found.

#### Defined in

[normalize-input-key/index.ts:11](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/normalize-input-key/index.ts#L11)

___

### propagation

▸ **propagation**(`«destructured»`): `ReactNode`[] \| ``null`` \| `undefined`

Propagates HTML attributes to all valid React elements in the children tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `children` | `ReactNode` |
| › `props` | `HTMLAttributes`\<`HTMLElement`\> |

#### Returns

`ReactNode`[] \| ``null`` \| `undefined`

The updated ReactNode with the propagated attributes.

#### Defined in

[propagation/index.ts:17](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/propagation/index.ts#L17)

___

### propsSplitter

▸ **propsSplitter**(`«destructured»`): `Object`

Splits the props into HTML props and style props based on the provided commands.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `IpropsSplitterProps` |

#### Returns

`Object`

An object containing the HTML props and style props.

| Name | Type |
| :------ | :------ |
| `htmlProps` | `Record`\<`string`, `unknown`\> |
| `styleProps` | `Record`\<`string`, `unknown`\> |

#### Defined in

[props-splitter/index.ts:15](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/props-splitter/index.ts#L15)

___

### safeJSON

▸ **safeJSON**(`«destructured»`): `string` \| `undefined`

Safely converts an object to a JSON string representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `indentation?` | `string` \| `number` |
| › `object` | `unknown` |
| › `replacerFunction?` | (`key`: `string`, `value`: `unknown`) => `unknown` |

#### Returns

`string` \| `undefined`

The JSON string representation of the object, or undefined if an error occurs.

**`Throws`**

Error if unable to stringify the object.

#### Defined in

[safe-json/index.ts:10](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/safe-json/index.ts#L10)

___

### stopPropagation

▸ **stopPropagation**(`children`): `undefined` \| ``null`` \| (`string` \| `number` \| `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\> \| `Iterable`\<`ReactNode`\>)[]

Stops the propagation of click events on the provided React children elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `children` | `Object` | The React children elements. |
| `children.children` | `ReactNode` | - |

#### Returns

`undefined` \| ``null`` \| (`string` \| `number` \| `ReactElement`\<`any`, `string` \| `JSXElementConstructor`\<`any`\>\> \| `Iterable`\<`ReactNode`\>)[]

The modified React children elements with click event propagation stopped.

#### Defined in

[stop-propagation/index.ts:16](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/stop-propagation/index.ts#L16)

___

### valueRecoverer

▸ **valueRecoverer**(`«destructured»`): `unknown` \| `undefined`

Recovers the value based on the provided input properties and values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `breakPoints` | `Object` |
| › `breakPoints.context` | `Record`\<`string`, `unknown`\> |
| › `breakPoints.current` | `string` |
| › `currentGlobalLanguage?` | `string` |
| › `darkMode` | `boolean` |
| › `inputProp` | `string` |
| › `inputValue` | `unknown` |
| › `isRaw?` | `boolean` |
| › `theme` | `Record`\<`string`, \{ `[key: string | number]`: `unknown`;  }\> |

#### Returns

`unknown` \| `undefined`

The recovered value.

#### Defined in

[value-recoverer/index.ts:15](https://github.com/nahuelRosas/robust-ui/blob/0a3751a/packages/tools/src/value-recoverer/index.ts#L15)
