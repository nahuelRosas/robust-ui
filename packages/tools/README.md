<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Robust](#robust)
  - [Project Stats](#project-stats)
- [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Contributing](#contributing)
  - [License](#license)
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

# Robust

Robust is a system for generating React components with real-time CSS injection. It is programmed in TypeScript, providing type safety and enhanced developer experience.

## Project Stats

![Alt](https://repobeats.axiom.co/api/embed/57761159b119284992a2370b719d8f8fe9c07e34.svg "Repobeats analytics image")

# Installation

You can install Robust using either npm or pnpm. To do this, run one of the following commands:

Using npm:

```bash
npm install @robust-ui/core
```

Using pnpm:

```bash
pnpm install @robust-ui/core
```

using yarn:

```bash
yarn add @robust-ui/core
```

Alternatively, you can also download Robust from the GitHub repository and manually install the dependencies. The prepare script defined in the package.json file will automatically build all the files within the packages folder.

## Usage

To use Robust, you need to make use of the `Main` component from the `@robust-ui/nextjs-components` repository. Note that the functionality has only been tested with Next.js and may not work in other React environments.

Here's an example of how to use Robust in a Next.js application:

```tsx
import { Main, Header, Text, Icon, Flex } from "@robust-ui/nextjs-components";
import { SideMenu } from "@/components/drawer";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Main color="white" fontFamily="Fira Code">
      <Header backgroundColor="gunMetal">
        <Flex>
          <Text fontWeight="700" fontSize="1.5rem">
            Nahuel
          </Text>
        </Flex>
        <Icon type="menu" onClick={() => setOpen(!open)} />
      </Header>
      <SideMenu open={open} setOpen={setOpen} />
      <Component {...pageProps} />
    </Main>
  );
}
```

In the above example, we import the necessary components from Robust and use them to create a basic application structure. The `Main` component sets the color and font family for the components. The `Header` component represents the application header, including a title and a menu icon that toggles the `open` state. The `SideMenu` component displays a side drawer with links and language options. Finally, we render the `Component` with the `pageProps`.

Please note that this usage example is specific to Next.js, and the functionality may not be tested or supported in other React environments. Make sure to customize the components and their properties based on your specific requirements.

## Features

Robust includes the following features:

- Automatic responsiveness: The components are designed to adapt to different screen sizes and orientations.
- Quick language switching: Easily switch between different languages using the language options provided.
- Dark mode: The system supports a dark mode theme that can be enabled or disabled.
- Global states: Robust provides mechanisms for managing global states and sharing data between components.
- Real-time CSS injection: The system injects CSS in real time, allowing for dynamic styling and theming.
- TypeScript support: Robust is programmed in TypeScript, providing type safety and enhanced developer experience.
- Customizable components: The components can be customized using various properties to suit your specific requirements.
- Easy to use: Robust is designed to be easy to use and integrate with existing React applications.
- Extensible: The system can be extended with additional components and functionality as needed.
- Well-documented: The codebase is well-documented, making it easy to understand and contribute to.
- Active development: Robust is actively developed and maintained, with regular updates and improvements.

## Contributing

Contributions to Robust are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

Robust is released under the [MIT License](https://opensource.org/licenses/MIT).

---

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

[generate-hash/index.ts:8](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/generate-hash/index.ts#L8)

___

#### hashAlgorithm

• **hashAlgorithm**: `string`

##### Defined in

[generate-hash/index.ts:4](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/generate-hash/index.ts#L4)

___

#### iterations

• **iterations**: `number`

##### Defined in

[generate-hash/index.ts:7](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/generate-hash/index.ts#L7)

___

#### pepper

• `Optional` **pepper**: `string`

##### Defined in

[generate-hash/index.ts:6](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/generate-hash/index.ts#L6)

___

#### salt

• `Optional` **salt**: `string`

##### Defined in

[generate-hash/index.ts:5](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/generate-hash/index.ts#L5)


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

[attribute-completer/index.ts:1](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/attribute-completer/index.ts#L1)

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

[attribute-completer/index.ts:13](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/attribute-completer/index.ts#L13)

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

[debounce/index.ts:11](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/debounce/index.ts#L11)

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

[generate-hash/index.ts:19](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/generate-hash/index.ts#L19)

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

[generate-unique-id/index.ts:16](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/generate-unique-id/index.ts#L16)

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

[validation-input/index.ts:25](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/validation-input/index.ts#L25)

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

[validation-input/index.ts:16](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/validation-input/index.ts#L16)

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

[validation-input/index.ts:7](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/validation-input/index.ts#L7)

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

[normalize-input-key/index.ts:11](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/normalize-input-key/index.ts#L11)

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

[propagation/index.ts:17](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/propagation/index.ts#L17)

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

[props-splitter/index.ts:15](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/props-splitter/index.ts#L15)

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

[safe-json/index.ts:10](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/safe-json/index.ts#L10)

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

[stop-propagation/index.ts:16](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/stop-propagation/index.ts#L16)

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

[value-recoverer/index.ts:15](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/tools/src/value-recoverer/index.ts#L15)
