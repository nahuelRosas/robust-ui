<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Robust](#robust)
  - [Project Stats](#project-stats)
- [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Contributing](#contributing)
  - [License](#license)
- [@robust-ui/css-utils](#robust-uicss-utils)
  - [Table of contents](#table-of-contents)
    - [Functions](#functions)
  - [Functions](#functions-1)
    - [addOpacity](#addopacity)
    - [generateColorScheme](#generatecolorscheme)
    - [generateContrastingColor](#generatecontrastingcolor)
    - [generateUniqueClassName](#generateuniqueclassname)
    - [getRandomHexColor](#getrandomhexcolor)
    - [injectStyle](#injectstyle)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="readmemd"></a>

@robust-ui/css-utils / [Exports](#modulesmd)

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
-

## Contributing

Contributions to Robust are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

Robust is released under the [MIT License](https://opensource.org/licenses/MIT).

---

<a name="modulesmd"></a>

[@robust-ui/css-utils](#readmemd) / Exports

# @robust-ui/css-utils

## Table of contents

### Functions

- [addOpacity](#addopacity)
- [generateColorScheme](#generatecolorscheme)
- [generateContrastingColor](#generatecontrastingcolor)
- [generateUniqueClassName](#generateuniqueclassname)
- [getRandomHexColor](#getrandomhexcolor)
- [injectStyle](#injectstyle)

## Functions

### addOpacity

▸ **addOpacity**(`options`): `string`

Adds opacity to a given color.

#### Parameters

| Name              | Type     | Description                          |
| :---------------- | :------- | :----------------------------------- |
| `options`         | `Object` | The options for adding opacity.      |
| `options.color`   | `string` | The color to add opacity to.         |
| `options.opacity` | `number` | The opacity value (between 0 and 1). |

#### Returns

`string`

The color with added opacity in the RGBA format.

**`Throws`**

If the color format is invalid.

#### Defined in

[colors-functions/index.ts:165](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/css-utils/src/colors-functions/index.ts#L165)

---

### generateColorScheme

▸ **generateColorScheme**(`options`): `Object`

Generates a color scheme based on the provided options.

#### Parameters

| Name                          | Type      | Default value | Description                                  |
| :---------------------------- | :-------- | :------------ | :------------------------------------------- |
| `options`                     | `Object`  | `undefined`   | The options for generating the color scheme. |
| `options.baseColor?`          | `string`  | `"teal"`      | -                                            |
| `options.complementaryColor?` | `boolean` | `false`       | -                                            |
| `options.isActivated?`        | `boolean` | `true`        | -                                            |
| `options.isDisabled?`         | `boolean` | `false`       | -                                            |
| `options.isInvalid?`          | `boolean` | `false`       | -                                            |
| `options.isValid?`            | `boolean` | `false`       | -                                            |
| `options.opacity?`            | `number`  | `0.7`         | -                                            |
| `options.props?`              | `Object`  | `undefined`   | -                                            |
| `options.props.active?`       | `boolean` | `undefined`   | -                                            |
| `options.props.background?`   | `boolean` | `undefined`   | -                                            |
| `options.props.border?`       | `boolean` | `undefined`   | -                                            |
| `options.props.focus?`        | `boolean` | `undefined`   | -                                            |
| `options.props.hover?`        | `boolean` | `undefined`   | -                                            |
| `options.variant`             | `Variant` | `"solid"`     | -                                            |

#### Returns

`Object`

The generated color scheme.

#### Defined in

[colors-functions/index.ts:282](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/css-utils/src/colors-functions/index.ts#L282)

---

### generateContrastingColor

▸ **generateContrastingColor**(`baseColor`): `string`

Generates a contrasting color based on the provided base color.
The base color should be in the RGBA format.
If the base color is not in the expected format, an error will be thrown.
The contrast color is calculated by determining the grayscale value of the base color,
and then setting the brightness to either 0 or 255 based on the grayscale value.
The contrast alpha is calculated by multiplying the base alpha by 2.5, with a maximum value of 1.

#### Parameters

| Name        | Type     | Description                        |
| :---------- | :------- | :--------------------------------- |
| `baseColor` | `string` | The base color in the RGBA format. |

#### Returns

`string`

The contrasting color in the RGBA format.

**`Throws`**

Error if the base color is not in the expected format.

#### Defined in

[colors-functions/index.ts:196](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/css-utils/src/colors-functions/index.ts#L196)

---

### generateUniqueClassName

▸ **generateUniqueClassName**(`object`): `string` \| `undefined`

Generates a unique class name based on the provided object.

#### Parameters

| Name            | Type     | Description                                        |
| :-------------- | :------- | :------------------------------------------------- |
| `object`        | `Object` | The object used to generate the unique class name. |
| `object.object` | `Object` | -                                                  |

#### Returns

`string` \| `undefined`

The generated unique class name.

**`Throws`**

If an error occurs while generating the unique class name.

#### Defined in

[generate-unique-classname/index.ts:10](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/css-utils/src/generate-unique-classname/index.ts#L10)

---

### getRandomHexColor

▸ **getRandomHexColor**(): `string`

Generates a random hexadecimal color code.

#### Returns

`string`

A string representing a random hexadecimal color code.

#### Defined in

[colors-functions/index.ts:269](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/css-utils/src/colors-functions/index.ts#L269)

---

### injectStyle

▸ **injectStyle**(`options`): \{ `inputProps`: `Record`\<`string`, `unknown`\> ; `styledCSSMap`: `Map`\<`string`, `string`[]\> } \| `undefined`

Injects CSS styles based on the provided options.

#### Parameters

| Name      | Type                | Description                           |
| :-------- | :------------------ | :------------------------------------ |
| `options` | `InjectCSSTOptions` | The options for injecting CSS styles. |

#### Returns

\{ `inputProps`: `Record`\<`string`, `unknown`\> ; `styledCSSMap`: `Map`\<`string`, `string`[]\> } \| `undefined`

An object containing the styled CSS map and input props, or undefined.

#### Defined in

[inject-style/index.ts:11](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/css-utils/src/inject-style/index.ts#L11)