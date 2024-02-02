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
    - [PartialOrNestedPartial](#partialornestedpartial)
    - [PartialOrNestedPartialArray](#partialornestedpartialarray)
  - [Functions](#functions-1)
    - [CreateComponent](#createcomponent)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@robust-ui/constructor / [Exports](#modulesmd)

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

[types.ts:288](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/constructor/src/types.ts#L288)


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
- [PartialOrNestedPartial](#partialornestedpartial)
- [PartialOrNestedPartialArray](#partialornestedpartialarray)

### Functions

- [CreateComponent](#createcomponent)

## Type Aliases

### EnhancedProps

Ƭ **EnhancedProps**\<`T`\>: `CustomHTMLAttributes`\<`T`\> & \{ `ElementType?`: `React.ElementType` \| keyof `JSX.IntrinsicElements` ; `children?`: `React.ReactNode` ; `colorScheme?`: [`PartialOrNestedPartial`](#partialornestedpartial)\<keyof typeof `colors`\> ; `colorSchemeProperty?`: [`PartialOrNestedPartial`](#partialornestedpartial)\<\{ `baseColor?`: keyof typeof `colors` \| `string` ; `baseColorRaw?`: `string` ; `complementaryColor?`: `boolean` ; `isActivated?`: `boolean` ; `isDisabled?`: `boolean` ; `isInvalid?`: `boolean` ; `isValid?`: `boolean` ; `opacity?`: `number` ; `props?`: \{ `active?`: `boolean` ; `background?`: `boolean` ; `border?`: `boolean` ; `focus?`: `boolean` ; `highContrast?`: `boolean` ; `hover?`: `boolean` ; `monochromeText?`: `boolean`  } ; `variant?`: ``"solid"`` \| ``"solidLight"`` \| ``"solidDark"`` \| ``"outline"`` \| ``"outlineLight"`` \| ``"outlineDark"`` \| ``"ghost"`` \| ``"link"`` \| ``"linkLight"`` \| ``"linkDark"``  }\> ; `colorSchemeRaw?`: [`PartialOrNestedPartial`](#partialornestedpartial)\<`string`\> ; `multiLanguageSupport?`: [`PartialOrNestedPartial`](#partialornestedpartial)\<`React.ReactNode`\> ; `variant?`: [`PartialOrNestedPartial`](#partialornestedpartial)\<``"solid"`` \| ``"solidLight"`` \| ``"solidDark"`` \| ``"outline"`` \| ``"outlineLight"`` \| ``"outlineDark"`` \| ``"ghost"`` \| ``"link"`` \| ``"linkLight"`` \| ``"linkDark"``\>  }

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

Ƭ **PartialOrNestedPartial**\<`T`\>: `Partial`\<`T`\> \| [`NestedRecord`](#nestedrecord)\<`T`\>

Represents a type that can be either a partial object of type T or a nested record of type T.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the object. |

#### Defined in

[types.ts:31](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/constructor/src/types.ts#L31)

___

### PartialOrNestedPartialArray

Ƭ **PartialOrNestedPartialArray**\<`T`\>: `T`[] \| [`PartialOrNestedPartial`](#partialornestedpartial)\<`T`\> \| [`PartialOrNestedPartial`](#partialornestedpartial)\<`T`\>[]

Represents an array that can contain either elements of type T, or nested partial objects of type T, or a combination of both.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of elements in the array. |

#### Defined in

[types.ts:37](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/constructor/src/types.ts#L37)

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

[index.tsx:15](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/constructor/src/index.tsx#L15)
