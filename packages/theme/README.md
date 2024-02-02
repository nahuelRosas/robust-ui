<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Robust](#robust)
  - [Project Stats](#project-stats)
- [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Contributing](#contributing)
  - [License](#license)
- [@robust-ui/theme](#robust-uitheme)
  - [Table of contents](#table-of-contents)
    - [Type Aliases](#type-aliases)
    - [Variables](#variables)
  - [Type Aliases](#type-aliases-1)
    - [RangeStrings](#rangestrings)
    - [TColor](#tcolor)
    - [TCommands](#tcommands)
    - [TCommonProps](#tcommonprops)
    - [TDefaultTheme](#tdefaulttheme)
    - [TDisplay](#tdisplay)
    - [TNumbers](#tnumbers)
    - [TSizeProps](#tsizeprops)
    - [TSizePropsOptimizedIncluded](#tsizepropsoptimizedincluded)
    - [TSizes](#tsizes)
    - [languageType](#languagetype)
  - [Variables](#variables-1)
    - [AtRules](#atrules)
    - [CSSRulesSet](#cssrulesset)
    - [Numbers](#numbers)
    - [PseudoClasses](#pseudoclasses)
    - [PseudoElements](#pseudoelements)
    - [colors](#colors)
    - [commands](#commands)
    - [commonProps](#commonprops)
    - [cssReset](#cssreset)
    - [defaultTheme](#defaulttheme)
    - [language](#language)
    - [mediaBreakpoints](#mediabreakpoints)
    - [selectors](#selectors)
    - [sizeProps](#sizeprops)
    - [sizes](#sizes)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@robust-ui/theme / [Exports](#modulesmd)

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


<a name="modulesmd"></a>

[@robust-ui/theme](#readmemd) / Exports

# @robust-ui/theme

## Table of contents

### Type Aliases

- [RangeStrings](#rangestrings)
- [TColor](#tcolor)
- [TCommands](#tcommands)
- [TCommonProps](#tcommonprops)
- [TDefaultTheme](#tdefaulttheme)
- [TDisplay](#tdisplay)
- [TNumbers](#tnumbers)
- [TSizeProps](#tsizeprops)
- [TSizePropsOptimizedIncluded](#tsizepropsoptimizedincluded)
- [TSizes](#tsizes)
- [languageType](#languagetype)

### Variables

- [AtRules](#atrules)
- [CSSRulesSet](#cssrulesset)
- [Numbers](#numbers)
- [PseudoClasses](#pseudoclasses)
- [PseudoElements](#pseudoelements)
- [colors](#colors)
- [commands](#commands)
- [commonProps](#commonprops)
- [cssReset](#cssreset)
- [defaultTheme](#defaulttheme)
- [language](#language)
- [mediaBreakpoints](#mediabreakpoints)
- [selectors](#selectors)
- [sizeProps](#sizeprops)
- [sizes](#sizes)

## Type Aliases

### RangeStrings

Ƭ **RangeStrings**: `EnumerateRangeStrings`\<``300``\>

#### Defined in

[numbers/types.ts:16](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/numbers/types.ts#L16)

___

### TColor

Ƭ **TColor**: typeof [`colors`](#colors)

Represents the type for colors in the theme.

#### Defined in

[theme/colors.ts:188](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/theme/colors.ts#L188)

___

### TCommands

Ƭ **TCommands**: typeof [`commands`](#commands)

Represents the type of commands available.

#### Defined in

[commands/index.ts:629](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/commands/index.ts#L629)

___

### TCommonProps

Ƭ **TCommonProps**: `Object`

Common props for the theme.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `inherit` | `string` |
| `initial` | `string` |
| `revert` | `string` |
| `unset` | `string` |

#### Defined in

[theme/types.ts:8](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/theme/types.ts#L8)

___

### TDefaultTheme

Ƭ **TDefaultTheme**: `Object`

Represents the default theme for the application.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alignContent` | [`TCommonProps`](#tcommonprops) & \{ `baseline`: `string` ; `center`: `string` ; `end`: `string` ; `flexEnd`: `string` ; `flexStart`: `string` ; `normal`: `string` ; `spaceAround`: `string` ; `spaceBetween`: `string` ; `spaceEvenly`: `string` ; `start`: `string` ; `stretch`: `string`  } |
| `alignItems` | [`TCommonProps`](#tcommonprops) & \{ `baseline`: `string` ; `center`: `string` ; `end`: `string` ; `flexEnd`: `string` ; `flexStart`: `string` ; `normal`: `string` ; `selfEnd`: `string` ; `selfStart`: `string` ; `start`: `string` ; `stretch`: `string`  } |
| `alignSelf` | [`TCommonProps`](#tcommonprops) & \{ `auto`: `string` ; `baseline`: `string` ; `center`: `string` ; `end`: `string` ; `flexEnd`: `string` ; `flexStart`: `string` ; `normal`: `string` ; `selfEnd`: `string` ; `selfStart`: `string` ; `start`: `string` ; `stretch`: `string`  } |
| `animation` | [`TCommonProps`](#tcommonprops) |
| `animationDelay` | [`TCommonProps`](#tcommonprops) |
| `animationDirection` | [`TCommonProps`](#tcommonprops) |
| `animationDuration` | [`TCommonProps`](#tcommonprops) |
| `animationFillMode` | [`TCommonProps`](#tcommonprops) |
| `animationIterationCount` | [`TCommonProps`](#tcommonprops) |
| `animationName` | [`TCommonProps`](#tcommonprops) |
| `animationPlayState` | [`TCommonProps`](#tcommonprops) |
| `animationTimingFunction` | [`TCommonProps`](#tcommonprops) |
| `bBottomRadius` | [`TCommonProps`](#tcommonprops) |
| `bLeftRadius` | [`TCommonProps`](#tcommonprops) |
| `bRadius` | [`TCommonProps`](#tcommonprops) |
| `bRadiusBottom` | [`TCommonProps`](#tcommonprops) |
| `bRadiusBottomLeft` | [`TCommonProps`](#tcommonprops) |
| `bRadiusBottomRight` | [`TCommonProps`](#tcommonprops) |
| `bRadiusLeft` | [`TCommonProps`](#tcommonprops) |
| `bRadiusRight` | [`TCommonProps`](#tcommonprops) |
| `bRadiusTop` | [`TCommonProps`](#tcommonprops) |
| `bRadiusTopLeft` | [`TCommonProps`](#tcommonprops) |
| `bRadiusTopRight` | [`TCommonProps`](#tcommonprops) |
| `bRightRadius` | [`TCommonProps`](#tcommonprops) |
| `bTopRadius` | [`TCommonProps`](#tcommonprops) |
| `backdropBlendMode` | [`TCommonProps`](#tcommonprops) |
| `backdropBlur` | [`TCommonProps`](#tcommonprops) |
| `backdropBrightness` | [`TCommonProps`](#tcommonprops) |
| `backdropContrast` | [`TCommonProps`](#tcommonprops) |
| `backdropDropShadow` | [`TCommonProps`](#tcommonprops) |
| `backdropDropShadowBlur` | [`TCommonProps`](#tcommonprops) |
| `backdropDropShadowSpread` | [`TCommonProps`](#tcommonprops) |
| `backdropDropShadowX` | [`TCommonProps`](#tcommonprops) |
| `backdropDropShadowY` | [`TCommonProps`](#tcommonprops) |
| `backdropFilter` | [`TCommonProps`](#tcommonprops) |
| `backdropGrayscale` | [`TCommonProps`](#tcommonprops) |
| `backdropHueRotate` | [`TCommonProps`](#tcommonprops) |
| `backdropInvert` | [`TCommonProps`](#tcommonprops) |
| `backdropOpacity` | [`TCommonProps`](#tcommonprops) |
| `backdropSaturate` | [`TCommonProps`](#tcommonprops) |
| `backdropSepia` | [`TCommonProps`](#tcommonprops) |
| `backfaceVisibility` | [`TCommonProps`](#tcommonprops) |
| `background` | [`TColor`](#tcolor) |
| `backgroundClip` | [`TCommonProps`](#tcommonprops) |
| `backgroundClipText` | [`TCommonProps`](#tcommonprops) |
| `backgroundColor` | [`TColor`](#tcolor) |
| `backgroundTranslucent` | [`TCommonProps`](#tcommonprops) |
| `bg` | [`TColor`](#tcolor) |
| `border` | [`TCommonProps`](#tcommonprops) |
| `borderBlock` | [`TCommonProps`](#tcommonprops) & \{ `end`: `string` ; `start`: `string`  } |
| `borderColor` | [`TColor`](#tcolor) |
| `borderImage` | [`TCommonProps`](#tcommonprops) |
| `borderImageOutset` | [`TCommonProps`](#tcommonprops) |
| `borderImageRepeat` | [`TCommonProps`](#tcommonprops) & \{ `repeat`: `string` ; `round`: `string` ; `space`: `string` ; `stretch`: `string`  } |
| `borderImageSlice` | [`TCommonProps`](#tcommonprops) |
| `borderImageSource` | [`TCommonProps`](#tcommonprops) |
| `borderImageWidth` | [`TCommonProps`](#tcommonprops) & \{ `auto`: `string`  } |
| `borderRadius` | [`TCommonProps`](#tcommonprops) & [`TSizes`](#tsizes) |
| `bottom` | [`TSizeProps`](#tsizeprops) |
| `boxShadow` | [`TCommonProps`](#tcommonprops) |
| `boxShadowInset` | [`TCommonProps`](#tcommonprops) |
| `boxShadowX` | [`TCommonProps`](#tcommonprops) |
| `boxShadowY` | [`TCommonProps`](#tcommonprops) |
| `boxSizing` | [`TCommonProps`](#tcommonprops) & \{ `borderBox`: `string` ; `contentBox`: `string`  } |
| `clipPath` | [`TCommonProps`](#tcommonprops) |
| `clipRule` | [`TCommonProps`](#tcommonprops) |
| `color` | [`TColor`](#tcolor) |
| `colorInterpolation` | [`TColor`](#tcolor) |
| `colorRendering` | [`TColor`](#tcolor) |
| `columnCount` | [`TCommonProps`](#tcommonprops) |
| `columnGap` | [`TCommonProps`](#tcommonprops) |
| `columnRule` | [`TCommonProps`](#tcommonprops) |
| `columnSpan` | [`TCommonProps`](#tcommonprops) |
| `columnWidth` | [`TCommonProps`](#tcommonprops) |
| `cursor` | [`TCommonProps`](#tcommonprops) & \{ `alias`: `string` ; `allScroll`: `string` ; `auto`: `string` ; `cell`: `string` ; `colResize`: `string` ; `contextMenu`: `string` ; `copy`: `string` ; `crosshair`: `string` ; `default`: `string` ; `eResize`: `string` ; `ewResize`: `string` ; `grab`: `string` ; `grabbing`: `string` ; `help`: `string` ; `move`: `string` ; `nResize`: `string` ; `neResize`: `string` ; `neswResize`: `string` ; `noDrop`: `string` ; `none`: `string` ; `notAllowed`: `string` ; `nsResize`: `string` ; `nwResize`: `string` ; `nwseResize`: `string` ; `pointer`: `string` ; `progress`: `string` ; `rowResize`: `string` ; `sResize`: `string` ; `seResize`: `string` ; `swResize`: `string` ; `text`: `string` ; `verticalText`: `string` ; `wResize`: `string` ; `wait`: `string` ; `webkitGrab`: `string` ; `webkitGrabbing`: `string` ; `webkitZoomIn`: `string` ; `webkitZoomOut`: `string` ; `zoomIn`: `string` ; `zoomOut`: `string`  } |
| `display` | [`TDisplay`](#tdisplay) |
| `fillRule` | [`TCommonProps`](#tcommonprops) |
| `filter` | [`TCommonProps`](#tcommonprops) |
| `filterBlur` | [`TCommonProps`](#tcommonprops) |
| `filterBrightness` | [`TCommonProps`](#tcommonprops) |
| `filterContrast` | [`TCommonProps`](#tcommonprops) |
| `filterDropShadow` | [`TCommonProps`](#tcommonprops) |
| `filterGrayscale` | [`TCommonProps`](#tcommonprops) |
| `filterHueRotate` | [`TCommonProps`](#tcommonprops) |
| `filterInvert` | [`TCommonProps`](#tcommonprops) |
| `filterOpacity` | [`TCommonProps`](#tcommonprops) |
| `filterSaturate` | [`TCommonProps`](#tcommonprops) |
| `filterSepia` | [`TCommonProps`](#tcommonprops) |
| `flexDirection` | [`TCommonProps`](#tcommonprops) & \{ `column`: `string` ; `columnReverse`: `string` ; `row`: `string` ; `rowReverse`: `string`  } |
| `flexGrow` | [`TCommonProps`](#tcommonprops) |
| `flexShrink` | [`TCommonProps`](#tcommonprops) & \{ `revertLayer`: `string`  } |
| `flexWrap` | [`TCommonProps`](#tcommonprops) & \{ `noWrap`: `string` ; `wrap`: `string` ; `wrapReverse`: `string`  } |
| `fontColor` | [`TColor`](#tcolor) |
| `fontFeatureSettings` | [`TCommonProps`](#tcommonprops) |
| `fontSize` | [`TSizeProps`](#tsizeprops) & \{ `large`: `string` ; `medium`: `string` ; `small`: `string` ; `smaller`: `string` ; `webkitXxxLarge`: `string` ; `xLarge`: `string` ; `xSmall`: `string` ; `xxLarge`: `string` ; `xxSmall`: `string` ; `xxxLarge`: `string`  } |
| `fontStyle` | [`TCommonProps`](#tcommonprops) & \{ `italic`: `string` ; `normal`: `string` ; `oblique`: `string`  } |
| `fontVariant` | [`TCommonProps`](#tcommonprops) |
| `fontWeight` | [`TSizeProps`](#tsizeprops) & \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string` ; `bold`: `string` ; `bolder`: `string` ; `lighter`: `string` ; `normal`: `string`  } |
| `gap` | [`TCommonProps`](#tcommonprops) & [`TSizes`](#tsizes) |
| `gridAutoColumns` | [`TCommonProps`](#tcommonprops) |
| `gridAutoColumnsMax` | [`TCommonProps`](#tcommonprops) |
| `gridAutoColumnsMin` | [`TCommonProps`](#tcommonprops) |
| `gridAutoFlow` | [`TCommonProps`](#tcommonprops) |
| `gridAutoRows` | [`TCommonProps`](#tcommonprops) |
| `gridAutoRowsMax` | [`TCommonProps`](#tcommonprops) |
| `gridAutoRowsMin` | [`TCommonProps`](#tcommonprops) |
| `gridColumn` | [`TCommonProps`](#tcommonprops) |
| `gridColumnEnd` | [`TCommonProps`](#tcommonprops) |
| `gridColumnEndMax` | [`TCommonProps`](#tcommonprops) |
| `gridColumnEndMin` | [`TCommonProps`](#tcommonprops) |
| `gridColumnGap` | [`TCommonProps`](#tcommonprops) |
| `gridColumnStart` | [`TCommonProps`](#tcommonprops) |
| `gridColumnStartEnd` | [`TCommonProps`](#tcommonprops) |
| `gridColumnStartMax` | [`TCommonProps`](#tcommonprops) |
| `gridColumnStartMin` | [`TCommonProps`](#tcommonprops) |
| `gridGap` | [`TCommonProps`](#tcommonprops) |
| `gridRow` | [`TCommonProps`](#tcommonprops) |
| `gridRowEnd` | [`TCommonProps`](#tcommonprops) |
| `gridRowEndMax` | [`TCommonProps`](#tcommonprops) |
| `gridRowEndMin` | [`TCommonProps`](#tcommonprops) |
| `gridRowGap` | [`TCommonProps`](#tcommonprops) |
| `gridRowStart` | [`TCommonProps`](#tcommonprops) |
| `gridRowStartEnd` | [`TCommonProps`](#tcommonprops) |
| `gridRowStartMax` | [`TCommonProps`](#tcommonprops) |
| `gridRowStartMin` | [`TCommonProps`](#tcommonprops) |
| `gridTemplateColumns` | [`TCommonProps`](#tcommonprops) & \{ `auto`: `string` ; `maxContent`: `string` ; `minContent`: `string` ; `none`: `string`  } |
| `gridTemplateRows` | [`TCommonProps`](#tcommonprops) & \{ `auto`: `string` ; `maxContent`: `string` ; `minContent`: `string` ; `none`: `string`  } |
| `height` | [`TSizePropsOptimizedIncluded`](#tsizepropsoptimizedincluded) |
| `hyphens` | [`TCommonProps`](#tcommonprops) |
| `imageRendering` | [`TCommonProps`](#tcommonprops) |
| `isolation` | [`TCommonProps`](#tcommonprops) |
| `justifyContent` | [`TCommonProps`](#tcommonprops) & \{ `center`: `string` ; `end`: `string` ; `flexEnd`: `string` ; `flexStart`: `string` ; `left`: `string` ; `normal`: `string` ; `right`: `string` ; `spaceAround`: `string` ; `spaceBetween`: `string` ; `spaceEvenly`: `string` ; `start`: `string` ; `stretch`: `string`  } |
| `justifyItems` | [`TCommonProps`](#tcommonprops) & \{ `auto`: `string` ; `baseline`: `string` ; `center`: `string` ; `end`: `string` ; `start`: `string` ; `stretch`: `string`  } |
| `justifySelf` | [`TCommonProps`](#tcommonprops) |
| `left` | [`TSizeProps`](#tsizeprops) |
| `letterSpacing` | [`TCommonProps`](#tcommonprops) |
| `lineHeight` | [`TCommonProps`](#tcommonprops) & \{ `mozBlockHeight`: `string` ; `normal`: `string` ; `revertLayer`: `string`  } & [`TSizes`](#tsizes) |
| `linearColor` | [`TColor`](#tcolor) |
| `listStyleImage` | [`TCommonProps`](#tcommonprops) |
| `listStylePosition` | [`TCommonProps`](#tcommonprops) |
| `listStyleType` | [`TCommonProps`](#tcommonprops) |
| `m` | [`TSizeProps`](#tsizeprops) |
| `margin` | [`TSizeProps`](#tsizeprops) |
| `marginBottom` | [`TSizeProps`](#tsizeprops) |
| `marginLeft` | [`TSizeProps`](#tsizeprops) |
| `marginRight` | [`TSizeProps`](#tsizeprops) |
| `marginTop` | [`TSizeProps`](#tsizeprops) |
| `maskBorder` | [`TCommonProps`](#tcommonprops) |
| `maskBorderOutset` | [`TCommonProps`](#tcommonprops) |
| `maskBorderRepeat` | [`TCommonProps`](#tcommonprops) |
| `maskBorderRepeatX` | [`TCommonProps`](#tcommonprops) |
| `maskBorderRepeatY` | [`TCommonProps`](#tcommonprops) |
| `maskBorderSlice` | [`TCommonProps`](#tcommonprops) |
| `maskBorderSource` | [`TCommonProps`](#tcommonprops) |
| `maskBorderWidth` | [`TCommonProps`](#tcommonprops) |
| `maskClip` | [`TCommonProps`](#tcommonprops) |
| `maskComposite` | [`TCommonProps`](#tcommonprops) |
| `maskImage` | [`TCommonProps`](#tcommonprops) |
| `maskOrigin` | [`TCommonProps`](#tcommonprops) |
| `maskPosition` | [`TCommonProps`](#tcommonprops) |
| `maskRepeat` | [`TCommonProps`](#tcommonprops) |
| `maskSize` | [`TCommonProps`](#tcommonprops) |
| `maskType` | [`TCommonProps`](#tcommonprops) |
| `maxH` | [`TSizeProps`](#tsizeprops) |
| `maxHeight` | [`TSizeProps`](#tsizeprops) |
| `maxLines` | [`TCommonProps`](#tcommonprops) |
| `maxW` | [`TSizeProps`](#tsizeprops) |
| `maxWidth` | [`TSizeProps`](#tsizeprops) |
| `mb` | [`TSizeProps`](#tsizeprops) |
| `minH` | [`TSizeProps`](#tsizeprops) |
| `minHeight` | [`TSizeProps`](#tsizeprops) |
| `minW` | [`TSizeProps`](#tsizeprops) |
| `minWidth` | [`TSizeProps`](#tsizeprops) |
| `mixBlendMode` | [`TCommonProps`](#tcommonprops) |
| `ml` | [`TSizeProps`](#tsizeprops) |
| `mr` | [`TSizeProps`](#tsizeprops) |
| `mt` | [`TSizeProps`](#tsizeprops) |
| `mx` | [`TSizeProps`](#tsizeprops) |
| `my` | [`TSizeProps`](#tsizeprops) |
| `objectFit` | [`TCommonProps`](#tcommonprops) & \{ `contain`: `string` ; `cover`: `string` ; `fill`: `string` ; `none`: `string` ; `scaleDown`: `string`  } |
| `objectPosition` | [`TCommonProps`](#tcommonprops) & \{ `bottom`: `string` ; `center`: `string` ; `left`: `string` ; `right`: `string` ; `top`: `string`  } |
| `opacity` | [`TCommonProps`](#tcommonprops) |
| `overflow` | [`TCommonProps`](#tcommonprops) & \{ `auto`: `string` ; `clip`: `string` ; `hidden`: `string` ; `revertLayer`: `string` ; `scroll`: `string` ; `visible`: `string`  } |
| `overflowX` | [`TCommonProps`](#tcommonprops) & \{ `auto`: `string` ; `clip`: `string` ; `hidden`: `string` ; `revertLayer`: `string` ; `scroll`: `string` ; `visible`: `string`  } |
| `overflowY` | [`TCommonProps`](#tcommonprops) & \{ `auto`: `string` ; `clip`: `string` ; `hidden`: `string` ; `revertLayer`: `string` ; `scroll`: `string` ; `visible`: `string`  } |
| `overscrollBehavior` | [`TCommonProps`](#tcommonprops) |
| `overscrollBehaviorX` | [`TCommonProps`](#tcommonprops) |
| `overscrollBehaviorY` | [`TCommonProps`](#tcommonprops) |
| `p` | [`TSizeProps`](#tsizeprops) |
| `padding` | [`TSizeProps`](#tsizeprops) |
| `paddingBottom` | [`TSizeProps`](#tsizeprops) |
| `paddingLeft` | [`TSizeProps`](#tsizeprops) |
| `paddingRight` | [`TSizeProps`](#tsizeprops) |
| `paddingTop` | [`TSizeProps`](#tsizeprops) |
| `pb` | [`TSizeProps`](#tsizeprops) |
| `perspective` | [`TCommonProps`](#tcommonprops) |
| `perspectiveOrigin` | [`TCommonProps`](#tcommonprops) |
| `pl` | [`TSizeProps`](#tsizeprops) |
| `placeContent` | [`TCommonProps`](#tcommonprops) |
| `placeHolderColor` | [`TColor`](#tcolor) |
| `placeItems` | [`TCommonProps`](#tcommonprops) |
| `placeSelf` | [`TCommonProps`](#tcommonprops) |
| `pointerEvents` | [`TCommonProps`](#tcommonprops) & \{ `all`: `string` ; `auto`: `string` ; `boundingBox`: `string` ; `fill`: `string` ; `none`: `string` ; `painted`: `string` ; `stroke`: `string` ; `visible`: `string` ; `visibleFill`: `string` ; `visiblePainted`: `string` ; `visibleStroke`: `string`  } |
| `position` | [`TCommonProps`](#tcommonprops) & \{ `absolute`: `string` ; `fixed`: `string` ; `relative`: `string` ; `static`: `string` ; `sticky`: `string`  } |
| `pr` | [`TSizeProps`](#tsizeprops) |
| `pt` | [`TSizeProps`](#tsizeprops) |
| `px` | [`TSizeProps`](#tsizeprops) |
| `py` | [`TSizeProps`](#tsizeprops) |
| `resize` | [`TCommonProps`](#tcommonprops) |
| `right` | [`TSizeProps`](#tsizeprops) |
| `scrollBehavior` | [`TCommonProps`](#tcommonprops) |
| `scrollMargin` | [`TCommonProps`](#tcommonprops) |
| `scrollMarginBlock` | [`TCommonProps`](#tcommonprops) |
| `scrollMarginBlockEnd` | [`TCommonProps`](#tcommonprops) |
| `scrollMarginBlockStart` | [`TCommonProps`](#tcommonprops) |
| `scrollMarginInline` | [`TCommonProps`](#tcommonprops) |
| `scrollMarginInlineEnd` | [`TCommonProps`](#tcommonprops) |
| `scrollMarginInlineStart` | [`TCommonProps`](#tcommonprops) |
| `scrollSnapAlign` | [`TCommonProps`](#tcommonprops) |
| `scrollSnapAlignX` | [`TCommonProps`](#tcommonprops) |
| `scrollSnapAlignY` | [`TCommonProps`](#tcommonprops) |
| `scrollSnapPointsX` | [`TCommonProps`](#tcommonprops) |
| `scrollSnapPointsY` | [`TCommonProps`](#tcommonprops) |
| `scrollSnapStop` | [`TCommonProps`](#tcommonprops) |
| `scrollSnapStopX` | [`TCommonProps`](#tcommonprops) |
| `scrollSnapStopY` | [`TCommonProps`](#tcommonprops) |
| `scrollSnapType` | [`TCommonProps`](#tcommonprops) |
| `scrollbarColor` | [`TColor`](#tcolor) |
| `scrollbarWidth` | [`TCommonProps`](#tcommonprops) & \{ `auto`: `string` ; `none`: `string` ; `revertLayer`: `string` ; `thin`: `string`  } |
| `shapeImageThreshold` | [`TCommonProps`](#tcommonprops) |
| `shapeMargin` | [`TCommonProps`](#tcommonprops) |
| `shapeOutside` | [`TCommonProps`](#tcommonprops) |
| `shapeRendering` | [`TCommonProps`](#tcommonprops) |
| `textAlign` | [`TCommonProps`](#tcommonprops) & \{ `center`: `string` ; `end`: `string` ; `justify`: `string` ; `left`: `string` ; `right`: `string` ; `start`: `string` ; `webkitAuto`: `string` ; `webkitCenter`: `string` ; `webkitLeft`: `string` ; `webkitMatchParent`: `string` ; `webkitRight`: `string`  } |
| `textAlignLast` | [`TCommonProps`](#tcommonprops) |
| `textDecoration` | [`TCommonProps`](#tcommonprops) & \{ `auto`: `string` ; `blink`: `string` ; `dashed`: `string` ; `double`: `string` ; `lineThrough`: `string` ; `none`: `string` ; `overline`: `string` ; `revertLayer`: `string` ; `solid`: `string` ; `underline`: `string` ; `wavy`: `string`  } |
| `textDecorationColor` | [`TColor`](#tcolor) |
| `textDecorationLine` | [`TCommonProps`](#tcommonprops) & \{ `blink`: `string` ; `lineThrough`: `string` ; `overline`: `string` ; `underline`: `string`  } |
| `textDecorationSkipInk` | [`TCommonProps`](#tcommonprops) |
| `textDecorationStyle` | [`TCommonProps`](#tcommonprops) & \{ `dashed`: `string` ; `dotted`: `string` ; `double`: `string` ; `solid`: `string` ; `wavy`: `string`  } |
| `textEmphasis` | [`TCommonProps`](#tcommonprops) & \{ `accent`: `string` ; `circle`: `string` ; `disc`: `string` ; `dot`: `string` ; `none`: `string`  } |
| `textEmphasisColor` | [`TColor`](#tcolor) |
| `textEmphasisPosition` | [`TCommonProps`](#tcommonprops) |
| `textEmphasisStyle` | [`TCommonProps`](#tcommonprops) |
| `textFillColor` | [`TColor`](#tcolor) |
| `textIndent` | [`TSizeProps`](#tsizeprops) & [`TCommonProps`](#tcommonprops) & \{ `revertLayer`: `string`  } |
| `textJustify` | [`TCommonProps`](#tcommonprops) |
| `textOverflow` | [`TCommonProps`](#tcommonprops) & \{ `clip`: `string` ; `ellipsis`: `string` ; `revertLayer`: `string`  } |
| `textRendering` | [`TCommonProps`](#tcommonprops) & \{ `auto`: `string` ; `geometricPrecision`: `string` ; `optimizeLegibility`: `string` ; `optimizeSpeed`: `string` ; `revertLayer`: `string`  } |
| `textShadow` | [`TCommonProps`](#tcommonprops) |
| `textTransform` | [`TCommonProps`](#tcommonprops) & \{ `capitalize`: `string` ; `lowercase`: `string` ; `mathAuto`: `string` ; `none`: `string` ; `uppercase`: `string` ; `upset`: `string`  } |
| `textUnderlineOffset` | [`TCommonProps`](#tcommonprops) & \{ `auto`: `string`  } |
| `textWrap` | [`TCommonProps`](#tcommonprops) & \{ `balance`: `string` ; `noWrap`: `string` ; `pretty`: `string` ; `wrap`: `string`  } |
| `top` | [`TSizeProps`](#tsizeprops) |
| `transform` | [`TCommonProps`](#tcommonprops) |
| `transformOrigin` | [`TCommonProps`](#tcommonprops) |
| `transformStyle` | [`TCommonProps`](#tcommonprops) & \{ `flat`: `string` ; `preserve3d`: `string`  } |
| `transition` | [`TCommonProps`](#tcommonprops) |
| `transitionDelay` | [`TCommonProps`](#tcommonprops) |
| `transitionDuration` | [`TCommonProps`](#tcommonprops) |
| `transitionDurationTiming` | [`TCommonProps`](#tcommonprops) |
| `transitionProperty` | [`TCommonProps`](#tcommonprops) |
| `transitionTiming` | [`TCommonProps`](#tcommonprops) |
| `transitionTimingFunction` | [`TCommonProps`](#tcommonprops) |
| `userDrag` | [`TCommonProps`](#tcommonprops) |
| `userFocus` | [`TCommonProps`](#tcommonprops) |
| `userResize` | [`TCommonProps`](#tcommonprops) |
| `userSelect` | [`TCommonProps`](#tcommonprops) & \{ `all`: `string` ; `auto`: `string` ; `contain`: `string` ; `none`: `string` ; `revertLayer`: `string` ; `text`: `string`  } |
| `userSelectAll` | [`TCommonProps`](#tcommonprops) |
| `userSelectAuto` | [`TCommonProps`](#tcommonprops) |
| `userSelectNone` | [`TCommonProps`](#tcommonprops) |
| `userSelectText` | [`TCommonProps`](#tcommonprops) |
| `userZoom` | [`TCommonProps`](#tcommonprops) |
| `whiteSpace` | [`TCommonProps`](#tcommonprops) & \{ `breakSpaces`: `string` ; `mozPreSpace`: `string` ; `normal`: `string` ; `nowrap`: `string` ; `pre`: `string` ; `preLine`: `string` ; `preWrap`: `string` ; `revertLayer`: `string`  } |
| `width` | [`TSizePropsOptimizedIncluded`](#tsizepropsoptimizedincluded) |
| `willChange` | [`TCommonProps`](#tcommonprops) |
| `willChangeProperty` | [`TCommonProps`](#tcommonprops) |
| `wordBreak` | [`TCommonProps`](#tcommonprops) |
| `wordSpacing` | [`TCommonProps`](#tcommonprops) |
| `wordWrap` | [`TCommonProps`](#tcommonprops) |
| `zIndex` | [`TCommonProps`](#tcommonprops) & [`TNumbers`](#tnumbers) |

#### Defined in

[theme/types.ts:69](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/theme/types.ts#L69)

___

### TDisplay

Ƭ **TDisplay**: `Object`

Represents the display values for CSS properties.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `block` | `string` |
| `contents` | `string` |
| `flex` | `string` |
| `flowRoot` | `string` |
| `grid` | `string` |
| `inline` | `string` |
| `inlineBlock` | `string` |
| `inlineFlex` | `string` |
| `inlineGrid` | `string` |
| `inlineTable` | `string` |
| `listItem` | `string` |
| `none` | `string` |
| `table` | `string` |
| `tableCaption` | `string` |
| `tableCell` | `string` |
| `tableColumn` | `string` |
| `tableColumnGroup` | `string` |
| `tableFooterGroup` | `string` |
| `tableHeaderGroup` | `string` |
| `tableRow` | `string` |
| `tableRowGroup` | `string` |
| `webkitBox` | `string` |
| `webkitInlineBox` | `string` |

#### Defined in

[theme/types.ts:18](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/theme/types.ts#L18)

___

### TNumbers

Ƭ **TNumbers**: typeof [`Numbers`](#numbers)

Represents the type of the Numbers object.

#### Defined in

[numbers/index.ts:18](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/numbers/index.ts#L18)

___

### TSizeProps

Ƭ **TSizeProps**: [`TCommonProps`](#tcommonprops) & [`TSizes`](#tsizes) & \{ `0`: `string` ; `fitContent`: `string` ; `maxContent`: `string` ; `minContent`: `string` ; `mozAvailable`: `string` ; `webkitFillAvailable`: `string`  }

Represents the size properties for a component.

#### Defined in

[theme/types.ts:47](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/theme/types.ts#L47)

___

### TSizePropsOptimizedIncluded

Ƭ **TSizePropsOptimizedIncluded**: [`TSizeProps`](#tsizeprops) & \{ `optimizedHeight?`: `string` ; `optimizedWidth?`: `string`  }

Represents a type that includes additional properties for optimized width and height,
in addition to the properties defined in TSizeProps.

#### Defined in

[theme/types.ts:61](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/theme/types.ts#L61)

___

### TSizes

Ƭ **TSizes**: typeof [`sizes`](#sizes)

Represents the type of the `sizes` object.

#### Defined in

[sizes/index.ts:50](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/sizes/index.ts#L50)

___

### languageType

Ƭ **languageType**: keyof typeof [`language`](#language)

#### Defined in

[index.ts:2](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/index.ts#L2)

## Variables

### AtRules

• `Const` **AtRules**: `Object`

Represents a collection of CSS at-rules.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `annotation` | `string` |
| `characterVariant` | `string` |
| `charset` | `string` |
| `container` | `string` |
| `counterStyle` | `string` |
| `document` | `string` |
| `fontFace` | `string` |
| `fontFeatureValues` | `string` |
| `import` | `string` |
| `keyframes` | `string` |
| `media` | `string` |
| `namespace` | `string` |
| `ornaments` | `string` |
| `page` | `string` |
| `styleset` | `string` |
| `stylistic` | `string` |
| `supports` | `string` |
| `swash` | `string` |
| `viewport` | `string` |

#### Defined in

[css-rules-set/index.ts:5](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/css-rules-set/index.ts#L5)

___

### CSSRulesSet

• `Const` **CSSRulesSet**: `Object`

Represents a set of CSS rules.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AtRules` | \{ `annotation`: `string` = "@annotation"; `characterVariant`: `string` = "@character-variant"; `charset`: `string` = "@charset"; `container`: `string` = "@container"; `counterStyle`: `string` = "@counter-style"; `document`: `string` = "@document"; `fontFace`: `string` = "@font-face"; `fontFeatureValues`: `string` = "@font-feature-values"; `import`: `string` = "@import"; `keyframes`: `string` = "@keyframes"; `media`: `string` = "@media"; `namespace`: `string` = "@namespace"; `ornaments`: `string` = "@ornaments"; `page`: `string` = "@page"; `styleset`: `string` = "@styleset"; `stylistic`: `string` = "@stylistic"; `supports`: `string` = "@supports"; `swash`: `string` = "@swash"; `viewport`: `string` = "@viewport" } |
| `AtRules.annotation` | `string` |
| `AtRules.characterVariant` | `string` |
| `AtRules.charset` | `string` |
| `AtRules.container` | `string` |
| `AtRules.counterStyle` | `string` |
| `AtRules.document` | `string` |
| `AtRules.fontFace` | `string` |
| `AtRules.fontFeatureValues` | `string` |
| `AtRules.import` | `string` |
| `AtRules.keyframes` | `string` |
| `AtRules.media` | `string` |
| `AtRules.namespace` | `string` |
| `AtRules.ornaments` | `string` |
| `AtRules.page` | `string` |
| `AtRules.styleset` | `string` |
| `AtRules.stylistic` | `string` |
| `AtRules.supports` | `string` |
| `AtRules.swash` | `string` |
| `AtRules.viewport` | `string` |
| `PseudoClasses` | \{ `active`: `string` = ":active"; `any`: `string` = ":any"; `autoFill`: `string` = ":-webkit-autofill"; `checked`: `string` = ":checked"; `default`: `string` = ":default"; `dir`: `string` = ":dir"; `disabled`: `string` = ":disabled"; `empty`: `string` = ":empty"; `enabled`: `string` = ":enabled"; `firstChild`: `string` = ":first-child"; `firstOfType`: `string` = ":first-of-type"; `focus`: `string` = ":focus"; `focusWithin`: `string` = ":focus-within"; `fullScreen`: `string` = ":fullscreen"; `has`: `string` = ":has"; `host`: `string` = ":host"; `hostContext`: `string` = ":host-context"; `hover`: `string` = ":hover"; `invalid`: `string` = ":invalid"; `lang`: `string` = ":lang"; `lastChild`: `string` = ":last-child"; `lastOfType`: `string` = ":last-of-type"; `link`: `string` = ":link"; `matches`: `string` = ":matches"; `mozFocusInner`: `string` = ":-moz-focus-inner"; `mozFocusOuter`: `string` = ":-moz-focus-outer"; `mozFullScreen`: `string` = ":-moz-full-screen"; `mozMeterBar`: `string` = "::-moz-meter-bar"; `mozMeterEven`: `string` = "::-moz-meter-even"; `mozMeterOptimum`: `string` = "::-moz-meter-optimum"; `mozMeterSubOptimum`: `string` = "::-moz-meter-sub-optimum"; `mozMeterSubSubOptimum`: `string` = "::-moz-meter-sub-sub-optimum"; `mozPlaceholder`: `string` = ":-moz-placeholder"; `mozRangeProgress`: `string` = "::-moz-range-progress"; `mozRangeThumb`: `string` = "::-moz-range-thumb"; `mozRangeTrack`: `string` = "::-moz-range-track"; `mozRangeTrackContainer`: `string` = "::-moz-range-trackcontainer"; `mozRangeTrackThumb`: `string` = "::-moz-range-trackthumb"; `mozRangeTrackTick`: `string` = "::-moz-range-tracktick"; `not`: `string` = ":not"; `nthChild`: `string` = ":nth-child"; `nthLastChild`: `string` = ":nth-last-child"; `nthLastOfType`: `string` = ":nth-last-of-type"; `nthMatch`: `string` = ":nth-match"; `nthOfType`: `string` = ":nth-of-type"; `onlyChild`: `string` = ":only-child"; `onlyOfType`: `string` = ":only-of-type"; `optional`: `string` = ":optional"; `readOnly`: `string` = ":read-only"; `readWrite`: `string` = ":read-write"; `required`: `string` = ":required"; `root`: `string` = ":root"; `target`: `string` = ":target"; `valid`: `string` = ":valid"; `visited`: `string` = ":visited"; `webkitColorSwatch`: `string` = "::-webkit-color-swatch"; `webkitColorSwatchWrapper`: `string` = "::-webkit-color-swatch-wrapper"; `webkitInnerSpinButton`: `string` = "::-webkit-inner-spin-button"; `webkitOuterSpinButton`: `string` = "::-webkit-outer-spin-button"; `webkitScrollbar`: `string` = "::-webkit-scrollbar"; `webkitScrollbarButton`: `string` = "::-webkit-scrollbar-button"; `webkitScrollbarCorner`: `string` = "::-webkit-scrollbar-corner"; `webkitScrollbarThumb`: `string` = "::-webkit-scrollbar-thumb"; `webkitScrollbarThumbEnd`: `string` = "::-webkit-scrollbar-thumb-end"; `webkitScrollbarThumbHorizontal`: `string` = "::-webkit-scrollbar-thumb-horizontal"; `webkitScrollbarThumbStart`: `string` = "::-webkit-scrollbar-thumb-start"; `webkitScrollbarThumbThumb`: `string` = "::-webkit-scrollbar-thumb-thumb"; `webkitScrollbarThumbVertical`: `string` = "::-webkit-scrollbar-thumb-vertical"; `webkitScrollbarTrack`: `string` = "::-webkit-scrollbar-track"; `webkitScrollbarTrackEnd`: `string` = "::-webkit-scrollbar-track-end"; `webkitScrollbarTrackPiece`: `string` = "::-webkit-scrollbar-track-piece"; `webkitScrollbarTrackStart`: `string` = "::-webkit-scrollbar-track-start"; `webkitSearchCancelButton`: `string` = "::-webkit-search-cancel-button"; `webkitSearchDecoration`: `string` = "::-webkit-search-decoration" } |
| `PseudoClasses.active` | `string` |
| `PseudoClasses.any` | `string` |
| `PseudoClasses.autoFill` | `string` |
| `PseudoClasses.checked` | `string` |
| `PseudoClasses.default` | `string` |
| `PseudoClasses.dir` | `string` |
| `PseudoClasses.disabled` | `string` |
| `PseudoClasses.empty` | `string` |
| `PseudoClasses.enabled` | `string` |
| `PseudoClasses.firstChild` | `string` |
| `PseudoClasses.firstOfType` | `string` |
| `PseudoClasses.focus` | `string` |
| `PseudoClasses.focusWithin` | `string` |
| `PseudoClasses.fullScreen` | `string` |
| `PseudoClasses.has` | `string` |
| `PseudoClasses.host` | `string` |
| `PseudoClasses.hostContext` | `string` |
| `PseudoClasses.hover` | `string` |
| `PseudoClasses.invalid` | `string` |
| `PseudoClasses.lang` | `string` |
| `PseudoClasses.lastChild` | `string` |
| `PseudoClasses.lastOfType` | `string` |
| `PseudoClasses.link` | `string` |
| `PseudoClasses.matches` | `string` |
| `PseudoClasses.mozFocusInner` | `string` |
| `PseudoClasses.mozFocusOuter` | `string` |
| `PseudoClasses.mozFullScreen` | `string` |
| `PseudoClasses.mozMeterBar` | `string` |
| `PseudoClasses.mozMeterEven` | `string` |
| `PseudoClasses.mozMeterOptimum` | `string` |
| `PseudoClasses.mozMeterSubOptimum` | `string` |
| `PseudoClasses.mozMeterSubSubOptimum` | `string` |
| `PseudoClasses.mozPlaceholder` | `string` |
| `PseudoClasses.mozRangeProgress` | `string` |
| `PseudoClasses.mozRangeThumb` | `string` |
| `PseudoClasses.mozRangeTrack` | `string` |
| `PseudoClasses.mozRangeTrackContainer` | `string` |
| `PseudoClasses.mozRangeTrackThumb` | `string` |
| `PseudoClasses.mozRangeTrackTick` | `string` |
| `PseudoClasses.not` | `string` |
| `PseudoClasses.nthChild` | `string` |
| `PseudoClasses.nthLastChild` | `string` |
| `PseudoClasses.nthLastOfType` | `string` |
| `PseudoClasses.nthMatch` | `string` |
| `PseudoClasses.nthOfType` | `string` |
| `PseudoClasses.onlyChild` | `string` |
| `PseudoClasses.onlyOfType` | `string` |
| `PseudoClasses.optional` | `string` |
| `PseudoClasses.readOnly` | `string` |
| `PseudoClasses.readWrite` | `string` |
| `PseudoClasses.required` | `string` |
| `PseudoClasses.root` | `string` |
| `PseudoClasses.target` | `string` |
| `PseudoClasses.valid` | `string` |
| `PseudoClasses.visited` | `string` |
| `PseudoClasses.webkitColorSwatch` | `string` |
| `PseudoClasses.webkitColorSwatchWrapper` | `string` |
| `PseudoClasses.webkitInnerSpinButton` | `string` |
| `PseudoClasses.webkitOuterSpinButton` | `string` |
| `PseudoClasses.webkitScrollbar` | `string` |
| `PseudoClasses.webkitScrollbarButton` | `string` |
| `PseudoClasses.webkitScrollbarCorner` | `string` |
| `PseudoClasses.webkitScrollbarThumb` | `string` |
| `PseudoClasses.webkitScrollbarThumbEnd` | `string` |
| `PseudoClasses.webkitScrollbarThumbHorizontal` | `string` |
| `PseudoClasses.webkitScrollbarThumbStart` | `string` |
| `PseudoClasses.webkitScrollbarThumbThumb` | `string` |
| `PseudoClasses.webkitScrollbarThumbVertical` | `string` |
| `PseudoClasses.webkitScrollbarTrack` | `string` |
| `PseudoClasses.webkitScrollbarTrackEnd` | `string` |
| `PseudoClasses.webkitScrollbarTrackPiece` | `string` |
| `PseudoClasses.webkitScrollbarTrackStart` | `string` |
| `PseudoClasses.webkitSearchCancelButton` | `string` |
| `PseudoClasses.webkitSearchDecoration` | `string` |
| `PseudoElements` | \{ `after`: `string` = "::after"; `backdrop`: `string` = "::backdrop"; `before`: `string` = "::before"; `cue`: `string` = "::cue"; `cueRegion`: `string` = "::cue-region"; `firstLetter`: `string` = "::first-letter"; `firstLine`: `string` = "::first-line"; `grammarError`: `string` = "::grammar-error"; `marker`: `string` = "::marker"; `mozFocusInner`: `string` = "::moz-focus-inner"; `mozFocusOuter`: `string` = "::moz-focus-outer"; `mozPlaceholder`: `string` = "::moz-placeholder"; `mozSelection`: `string` = "::moz-selection"; `mozTreeCellText`: `string` = "::moz-tree-cell-text"; `mozTreeCellTextHover`: `string` = "::moz-tree-cell-text(hover)"; `mozTreeCellTextHoverLoading`: `string` = "::moz-tree-cell-text(hover, loading)"; `mozTreeCellTextHoverSelected`: `string` = "::moz-tree-cell-text(hover, selected)"; `mozTreeCellTextHoverSelectedLoading`: `string` = "::moz-tree-cell-text(hover, selected, loading)"; `mozTreeCellTextLoading`: `string` = "::moz-tree-cell-text(loading)"; `mozTreeCellTextSelected`: `string` = "::moz-tree-cell-text(selected)"; `mozTreeCellTextSelectedLoading`: `string` = "::moz-tree-cell-text(selected, loading)"; `mozTreeRowHover`: `string` = "::moz-tree-row(hover)"; `mozTreeRowHoverLoading`: `string` = "::moz-tree-row(hover, loading)"; `mozTreeRowHoverSelected`: `string` = "::moz-tree-row(hover, selected)"; `mozTreeRowHoverSelectedLoading`: `string` = "::moz-tree-row(hover, selected, loading)"; `mozTreeRowLoading`: `string` = "::moz-tree-row(loading)"; `mozTreeRowSelected`: `string` = "::moz-tree-row(selected)"; `mozTreeRowSelectedLoading`: `string` = "::moz-tree-row(selected, loading)"; `placeholder`: `string` = "::placeholder"; `selection`: `string` = "::selection"; `spellingError`: `string` = "::spelling-error"; `webkitContactsAutoCompleteButton`: `string` = "::webkit-contacts-auto-complete-button"; `webkitContactsAutoCompleteButtonContainer`: `string` = "::webkit-contacts-auto-complete-button-container"; `webkitContactsAutoCompleteContainer`: `string` = "::webkit-contacts-auto-complete-container"; `webkitContactsAutoCompleteEntry`: `string` = "::webkit-contacts-auto-complete-entry"; `webkitContactsAutoCompleteSelectedEntry`: `string` = "::webkit-contacts-auto-complete-selected-entry"; `webkitInputPlaceholder`: `string` = "::webkit-input-placeholder"; `webkitMeterBar`: `string` = "::webkit-meter-bar"; `webkitMeterOptimumValue`: `string` = "::webkit-meter-optimum-value"; `webkitProgressBar`: `string` = "::webkit-progress-bar"; `webkitProgressBarValue`: `string` = "::webkit-progress-bar-value"; `webkitProgressValue`: `string` = "::webkit-progress-value" } |
| `PseudoElements.after` | `string` |
| `PseudoElements.backdrop` | `string` |
| `PseudoElements.before` | `string` |
| `PseudoElements.cue` | `string` |
| `PseudoElements.cueRegion` | `string` |
| `PseudoElements.firstLetter` | `string` |
| `PseudoElements.firstLine` | `string` |
| `PseudoElements.grammarError` | `string` |
| `PseudoElements.marker` | `string` |
| `PseudoElements.mozFocusInner` | `string` |
| `PseudoElements.mozFocusOuter` | `string` |
| `PseudoElements.mozPlaceholder` | `string` |
| `PseudoElements.mozSelection` | `string` |
| `PseudoElements.mozTreeCellText` | `string` |
| `PseudoElements.mozTreeCellTextHover` | `string` |
| `PseudoElements.mozTreeCellTextHoverLoading` | `string` |
| `PseudoElements.mozTreeCellTextHoverSelected` | `string` |
| `PseudoElements.mozTreeCellTextHoverSelectedLoading` | `string` |
| `PseudoElements.mozTreeCellTextLoading` | `string` |
| `PseudoElements.mozTreeCellTextSelected` | `string` |
| `PseudoElements.mozTreeCellTextSelectedLoading` | `string` |
| `PseudoElements.mozTreeRowHover` | `string` |
| `PseudoElements.mozTreeRowHoverLoading` | `string` |
| `PseudoElements.mozTreeRowHoverSelected` | `string` |
| `PseudoElements.mozTreeRowHoverSelectedLoading` | `string` |
| `PseudoElements.mozTreeRowLoading` | `string` |
| `PseudoElements.mozTreeRowSelected` | `string` |
| `PseudoElements.mozTreeRowSelectedLoading` | `string` |
| `PseudoElements.placeholder` | `string` |
| `PseudoElements.selection` | `string` |
| `PseudoElements.spellingError` | `string` |
| `PseudoElements.webkitContactsAutoCompleteButton` | `string` |
| `PseudoElements.webkitContactsAutoCompleteButtonContainer` | `string` |
| `PseudoElements.webkitContactsAutoCompleteContainer` | `string` |
| `PseudoElements.webkitContactsAutoCompleteEntry` | `string` |
| `PseudoElements.webkitContactsAutoCompleteSelectedEntry` | `string` |
| `PseudoElements.webkitInputPlaceholder` | `string` |
| `PseudoElements.webkitMeterBar` | `string` |
| `PseudoElements.webkitMeterOptimumValue` | `string` |
| `PseudoElements.webkitProgressBar` | `string` |
| `PseudoElements.webkitProgressBarValue` | `string` |
| `PseudoElements.webkitProgressValue` | `string` |

#### Defined in

[css-rules-set/index.ts:165](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/css-rules-set/index.ts#L165)

___

### Numbers

• `Const` **Numbers**: `Record`\<``"0"`` \| ``"1"`` \| ``"2"`` \| ``"3"`` \| ``"4"`` \| ``"5"`` \| ``"6"`` \| ``"7"`` \| ``"8"`` \| ``"9"`` \| ``"10"`` \| ``"11"`` \| ``"12"`` \| ``"13"`` \| ``"14"`` \| ``"15"`` \| ``"16"`` \| ``"17"`` \| ``"18"`` \| ``"19"`` \| ``"20"`` \| ``"21"`` \| ``"22"`` \| ``"23"`` \| ``"24"`` \| ``"25"`` \| ``"26"`` \| ``"27"`` \| ``"28"`` \| ``"29"`` \| ``"30"`` \| ``"31"`` \| ``"32"`` \| ``"33"`` \| ``"34"`` \| ``"35"`` \| ``"36"`` \| ``"37"`` \| ``"38"`` \| ``"39"`` \| ``"40"`` \| ``"41"`` \| ``"42"`` \| ``"43"`` \| ``"44"`` \| ``"45"`` \| ``"46"`` \| ``"47"`` \| ``"48"`` \| ``"49"`` \| ``"50"`` \| ``"51"`` \| ``"52"`` \| ``"53"`` \| ``"54"`` \| ``"55"`` \| ``"56"`` \| ``"57"`` \| ``"58"`` \| ``"59"`` \| ``"60"`` \| ``"61"`` \| ``"62"`` \| ``"63"`` \| ``"64"`` \| ``"65"`` \| ``"66"`` \| ``"67"`` \| ``"68"`` \| ``"69"`` \| ``"70"`` \| ``"71"`` \| ``"72"`` \| ``"73"`` \| ``"74"`` \| ``"75"`` \| ``"76"`` \| ``"77"`` \| ``"78"`` \| ``"79"`` \| ``"80"`` \| ``"81"`` \| ``"82"`` \| ``"83"`` \| ``"84"`` \| ``"85"`` \| ``"86"`` \| ``"87"`` \| ``"88"`` \| ``"89"`` \| ``"90"`` \| ``"91"`` \| ``"92"`` \| ``"93"`` \| ``"94"`` \| ``"95"`` \| ``"96"`` \| ``"97"`` \| ``"98"`` \| ``"99"`` \| ``"100"`` \| ``"101"`` \| ``"102"`` \| ``"103"`` \| ``"104"`` \| ``"105"`` \| ``"106"`` \| ``"107"`` \| ``"108"`` \| ``"109"`` \| ``"110"`` \| ``"111"`` \| ``"112"`` \| ``"113"`` \| ``"114"`` \| ``"115"`` \| ``"116"`` \| ``"117"`` \| ``"118"`` \| ``"119"`` \| ``"120"`` \| ``"121"`` \| ``"122"`` \| ``"123"`` \| ``"124"`` \| ``"125"`` \| ``"126"`` \| ``"127"`` \| ``"128"`` \| ``"129"`` \| ``"130"`` \| ``"131"`` \| ``"132"`` \| ``"133"`` \| ``"134"`` \| ``"135"`` \| ``"136"`` \| ``"137"`` \| ``"138"`` \| ``"139"`` \| ``"140"`` \| ``"141"`` \| ``"142"`` \| ``"143"`` \| ``"144"`` \| ``"145"`` \| ``"146"`` \| ``"147"`` \| ``"148"`` \| ``"149"`` \| ``"150"`` \| ``"151"`` \| ``"152"`` \| ``"153"`` \| ``"154"`` \| ``"155"`` \| ``"156"`` \| ``"157"`` \| ``"158"`` \| ``"159"`` \| ``"160"`` \| ``"161"`` \| ``"162"`` \| ``"163"`` \| ``"164"`` \| ``"165"`` \| ``"166"`` \| ``"167"`` \| ``"168"`` \| ``"169"`` \| ``"170"`` \| ``"171"`` \| ``"172"`` \| ``"173"`` \| ``"174"`` \| ``"175"`` \| ``"176"`` \| ``"177"`` \| ``"178"`` \| ``"179"`` \| ``"180"`` \| ``"181"`` \| ``"182"`` \| ``"183"`` \| ``"184"`` \| ``"185"`` \| ``"186"`` \| ``"187"`` \| ``"188"`` \| ``"189"`` \| ``"190"`` \| ``"191"`` \| ``"192"`` \| ``"193"`` \| ``"194"`` \| ``"195"`` \| ``"196"`` \| ``"197"`` \| ``"198"`` \| ``"199"`` \| ``"200"`` \| ``"201"`` \| ``"202"`` \| ``"203"`` \| ``"204"`` \| ``"205"`` \| ``"206"`` \| ``"207"`` \| ``"208"`` \| ``"209"`` \| ``"210"`` \| ``"211"`` \| ``"212"`` \| ``"213"`` \| ``"214"`` \| ``"215"`` \| ``"216"`` \| ``"217"`` \| ``"218"`` \| ``"219"`` \| ``"220"`` \| ``"221"`` \| ``"222"`` \| ``"223"`` \| ``"224"`` \| ``"225"`` \| ``"226"`` \| ``"227"`` \| ``"228"`` \| ``"229"`` \| ``"230"`` \| ``"231"`` \| ``"232"`` \| ``"233"`` \| ``"234"`` \| ``"235"`` \| ``"236"`` \| ``"237"`` \| ``"238"`` \| ``"239"`` \| ``"240"`` \| ``"241"`` \| ``"242"`` \| ``"243"`` \| ``"244"`` \| ``"245"`` \| ``"246"`` \| ``"247"`` \| ``"248"`` \| ``"249"`` \| ``"250"`` \| ``"251"`` \| ``"252"`` \| ``"253"`` \| ``"254"`` \| ``"255"`` \| ``"256"`` \| ``"257"`` \| ``"258"`` \| ``"259"`` \| ``"260"`` \| ``"261"`` \| ``"262"`` \| ``"263"`` \| ``"264"`` \| ``"265"`` \| ``"266"`` \| ``"267"`` \| ``"268"`` \| ``"269"`` \| ``"270"`` \| ``"271"`` \| ``"272"`` \| ``"273"`` \| ``"274"`` \| ``"275"`` \| ``"276"`` \| ``"277"`` \| ``"278"`` \| ``"279"`` \| ``"280"`` \| ``"281"`` \| ``"282"`` \| ``"283"`` \| ``"284"`` \| ``"285"`` \| ``"286"`` \| ``"287"`` \| ``"288"`` \| ``"289"`` \| ``"290"`` \| ``"291"`` \| ``"292"`` \| ``"293"`` \| ``"294"`` \| ``"295"`` \| ``"296"`` \| ``"297"`` \| ``"298"`` \| ``"299"``, ``"0"`` \| ``"1"`` \| ``"2"`` \| ``"3"`` \| ``"4"`` \| ``"5"`` \| ``"6"`` \| ``"7"`` \| ``"8"`` \| ``"9"`` \| ``"10"`` \| ``"11"`` \| ``"12"`` \| ``"13"`` \| ``"14"`` \| ``"15"`` \| ``"16"`` \| ``"17"`` \| ``"18"`` \| ``"19"`` \| ``"20"`` \| ``"21"`` \| ``"22"`` \| ``"23"`` \| ``"24"`` \| ``"25"`` \| ``"26"`` \| ``"27"`` \| ``"28"`` \| ``"29"`` \| ``"30"`` \| ``"31"`` \| ``"32"`` \| ``"33"`` \| ``"34"`` \| ``"35"`` \| ``"36"`` \| ``"37"`` \| ``"38"`` \| ``"39"`` \| ``"40"`` \| ``"41"`` \| ``"42"`` \| ``"43"`` \| ``"44"`` \| ``"45"`` \| ``"46"`` \| ``"47"`` \| ``"48"`` \| ``"49"`` \| ``"50"`` \| ``"51"`` \| ``"52"`` \| ``"53"`` \| ``"54"`` \| ``"55"`` \| ``"56"`` \| ``"57"`` \| ``"58"`` \| ``"59"`` \| ``"60"`` \| ``"61"`` \| ``"62"`` \| ``"63"`` \| ``"64"`` \| ``"65"`` \| ``"66"`` \| ``"67"`` \| ``"68"`` \| ``"69"`` \| ``"70"`` \| ``"71"`` \| ``"72"`` \| ``"73"`` \| ``"74"`` \| ``"75"`` \| ``"76"`` \| ``"77"`` \| ``"78"`` \| ``"79"`` \| ``"80"`` \| ``"81"`` \| ``"82"`` \| ``"83"`` \| ``"84"`` \| ``"85"`` \| ``"86"`` \| ``"87"`` \| ``"88"`` \| ``"89"`` \| ``"90"`` \| ``"91"`` \| ``"92"`` \| ``"93"`` \| ``"94"`` \| ``"95"`` \| ``"96"`` \| ``"97"`` \| ``"98"`` \| ``"99"`` \| ``"100"`` \| ``"101"`` \| ``"102"`` \| ``"103"`` \| ``"104"`` \| ``"105"`` \| ``"106"`` \| ``"107"`` \| ``"108"`` \| ``"109"`` \| ``"110"`` \| ``"111"`` \| ``"112"`` \| ``"113"`` \| ``"114"`` \| ``"115"`` \| ``"116"`` \| ``"117"`` \| ``"118"`` \| ``"119"`` \| ``"120"`` \| ``"121"`` \| ``"122"`` \| ``"123"`` \| ``"124"`` \| ``"125"`` \| ``"126"`` \| ``"127"`` \| ``"128"`` \| ``"129"`` \| ``"130"`` \| ``"131"`` \| ``"132"`` \| ``"133"`` \| ``"134"`` \| ``"135"`` \| ``"136"`` \| ``"137"`` \| ``"138"`` \| ``"139"`` \| ``"140"`` \| ``"141"`` \| ``"142"`` \| ``"143"`` \| ``"144"`` \| ``"145"`` \| ``"146"`` \| ``"147"`` \| ``"148"`` \| ``"149"`` \| ``"150"`` \| ``"151"`` \| ``"152"`` \| ``"153"`` \| ``"154"`` \| ``"155"`` \| ``"156"`` \| ``"157"`` \| ``"158"`` \| ``"159"`` \| ``"160"`` \| ``"161"`` \| ``"162"`` \| ``"163"`` \| ``"164"`` \| ``"165"`` \| ``"166"`` \| ``"167"`` \| ``"168"`` \| ``"169"`` \| ``"170"`` \| ``"171"`` \| ``"172"`` \| ``"173"`` \| ``"174"`` \| ``"175"`` \| ``"176"`` \| ``"177"`` \| ``"178"`` \| ``"179"`` \| ``"180"`` \| ``"181"`` \| ``"182"`` \| ``"183"`` \| ``"184"`` \| ``"185"`` \| ``"186"`` \| ``"187"`` \| ``"188"`` \| ``"189"`` \| ``"190"`` \| ``"191"`` \| ``"192"`` \| ``"193"`` \| ``"194"`` \| ``"195"`` \| ``"196"`` \| ``"197"`` \| ``"198"`` \| ``"199"`` \| ``"200"`` \| ``"201"`` \| ``"202"`` \| ``"203"`` \| ``"204"`` \| ``"205"`` \| ``"206"`` \| ``"207"`` \| ``"208"`` \| ``"209"`` \| ``"210"`` \| ``"211"`` \| ``"212"`` \| ``"213"`` \| ``"214"`` \| ``"215"`` \| ``"216"`` \| ``"217"`` \| ``"218"`` \| ``"219"`` \| ``"220"`` \| ``"221"`` \| ``"222"`` \| ``"223"`` \| ``"224"`` \| ``"225"`` \| ``"226"`` \| ``"227"`` \| ``"228"`` \| ``"229"`` \| ``"230"`` \| ``"231"`` \| ``"232"`` \| ``"233"`` \| ``"234"`` \| ``"235"`` \| ``"236"`` \| ``"237"`` \| ``"238"`` \| ``"239"`` \| ``"240"`` \| ``"241"`` \| ``"242"`` \| ``"243"`` \| ``"244"`` \| ``"245"`` \| ``"246"`` \| ``"247"`` \| ``"248"`` \| ``"249"`` \| ``"250"`` \| ``"251"`` \| ``"252"`` \| ``"253"`` \| ``"254"`` \| ``"255"`` \| ``"256"`` \| ``"257"`` \| ``"258"`` \| ``"259"`` \| ``"260"`` \| ``"261"`` \| ``"262"`` \| ``"263"`` \| ``"264"`` \| ``"265"`` \| ``"266"`` \| ``"267"`` \| ``"268"`` \| ``"269"`` \| ``"270"`` \| ``"271"`` \| ``"272"`` \| ``"273"`` \| ``"274"`` \| ``"275"`` \| ``"276"`` \| ``"277"`` \| ``"278"`` \| ``"279"`` \| ``"280"`` \| ``"281"`` \| ``"282"`` \| ``"283"`` \| ``"284"`` \| ``"285"`` \| ``"286"`` \| ``"287"`` \| ``"288"`` \| ``"289"`` \| ``"290"`` \| ``"291"`` \| ``"292"`` \| ``"293"`` \| ``"294"`` \| ``"295"`` \| ``"296"`` \| ``"297"`` \| ``"298"`` \| ``"299"``\>

A record that maps range strings to range strings.

#### Defined in

[numbers/index.ts:9](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/numbers/index.ts#L9)

___

### PseudoClasses

• `Const` **PseudoClasses**: `Object`

Represents a collection of pseudo classes used in CSS rules.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | `string` |
| `any` | `string` |
| `autoFill` | `string` |
| `checked` | `string` |
| `default` | `string` |
| `dir` | `string` |
| `disabled` | `string` |
| `empty` | `string` |
| `enabled` | `string` |
| `firstChild` | `string` |
| `firstOfType` | `string` |
| `focus` | `string` |
| `focusWithin` | `string` |
| `fullScreen` | `string` |
| `has` | `string` |
| `host` | `string` |
| `hostContext` | `string` |
| `hover` | `string` |
| `invalid` | `string` |
| `lang` | `string` |
| `lastChild` | `string` |
| `lastOfType` | `string` |
| `link` | `string` |
| `matches` | `string` |
| `mozFocusInner` | `string` |
| `mozFocusOuter` | `string` |
| `mozFullScreen` | `string` |
| `mozMeterBar` | `string` |
| `mozMeterEven` | `string` |
| `mozMeterOptimum` | `string` |
| `mozMeterSubOptimum` | `string` |
| `mozMeterSubSubOptimum` | `string` |
| `mozPlaceholder` | `string` |
| `mozRangeProgress` | `string` |
| `mozRangeThumb` | `string` |
| `mozRangeTrack` | `string` |
| `mozRangeTrackContainer` | `string` |
| `mozRangeTrackThumb` | `string` |
| `mozRangeTrackTick` | `string` |
| `not` | `string` |
| `nthChild` | `string` |
| `nthLastChild` | `string` |
| `nthLastOfType` | `string` |
| `nthMatch` | `string` |
| `nthOfType` | `string` |
| `onlyChild` | `string` |
| `onlyOfType` | `string` |
| `optional` | `string` |
| `readOnly` | `string` |
| `readWrite` | `string` |
| `required` | `string` |
| `root` | `string` |
| `target` | `string` |
| `valid` | `string` |
| `visited` | `string` |
| `webkitColorSwatch` | `string` |
| `webkitColorSwatchWrapper` | `string` |
| `webkitInnerSpinButton` | `string` |
| `webkitOuterSpinButton` | `string` |
| `webkitScrollbar` | `string` |
| `webkitScrollbarButton` | `string` |
| `webkitScrollbarCorner` | `string` |
| `webkitScrollbarThumb` | `string` |
| `webkitScrollbarThumbEnd` | `string` |
| `webkitScrollbarThumbHorizontal` | `string` |
| `webkitScrollbarThumbStart` | `string` |
| `webkitScrollbarThumbThumb` | `string` |
| `webkitScrollbarThumbVertical` | `string` |
| `webkitScrollbarTrack` | `string` |
| `webkitScrollbarTrackEnd` | `string` |
| `webkitScrollbarTrackPiece` | `string` |
| `webkitScrollbarTrackStart` | `string` |
| `webkitSearchCancelButton` | `string` |
| `webkitSearchDecoration` | `string` |

#### Defined in

[css-rules-set/index.ts:84](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/css-rules-set/index.ts#L84)

___

### PseudoElements

• `Const` **PseudoElements**: `Object`

Represents a collection of pseudo-elements used in CSS rules.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after` | `string` |
| `backdrop` | `string` |
| `before` | `string` |
| `cue` | `string` |
| `cueRegion` | `string` |
| `firstLetter` | `string` |
| `firstLine` | `string` |
| `grammarError` | `string` |
| `marker` | `string` |
| `mozFocusInner` | `string` |
| `mozFocusOuter` | `string` |
| `mozPlaceholder` | `string` |
| `mozSelection` | `string` |
| `mozTreeCellText` | `string` |
| `mozTreeCellTextHover` | `string` |
| `mozTreeCellTextHoverLoading` | `string` |
| `mozTreeCellTextHoverSelected` | `string` |
| `mozTreeCellTextHoverSelectedLoading` | `string` |
| `mozTreeCellTextLoading` | `string` |
| `mozTreeCellTextSelected` | `string` |
| `mozTreeCellTextSelectedLoading` | `string` |
| `mozTreeRowHover` | `string` |
| `mozTreeRowHoverLoading` | `string` |
| `mozTreeRowHoverSelected` | `string` |
| `mozTreeRowHoverSelectedLoading` | `string` |
| `mozTreeRowLoading` | `string` |
| `mozTreeRowSelected` | `string` |
| `mozTreeRowSelectedLoading` | `string` |
| `placeholder` | `string` |
| `selection` | `string` |
| `spellingError` | `string` |
| `webkitContactsAutoCompleteButton` | `string` |
| `webkitContactsAutoCompleteButtonContainer` | `string` |
| `webkitContactsAutoCompleteContainer` | `string` |
| `webkitContactsAutoCompleteEntry` | `string` |
| `webkitContactsAutoCompleteSelectedEntry` | `string` |
| `webkitInputPlaceholder` | `string` |
| `webkitMeterBar` | `string` |
| `webkitMeterOptimumValue` | `string` |
| `webkitProgressBar` | `string` |
| `webkitProgressBarValue` | `string` |
| `webkitProgressValue` | `string` |

#### Defined in

[css-rules-set/index.ts:31](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/css-rules-set/index.ts#L31)

___

### colors

• `Const` **colors**: `Object`

Defines a collection of color values.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `black` | `string` |
| `blackAlpha100` | `string` |
| `blackAlpha200` | `string` |
| `blackAlpha300` | `string` |
| `blackAlpha400` | `string` |
| `blackAlpha50` | `string` |
| `blackAlpha500` | `string` |
| `blackAlpha600` | `string` |
| `blackAlpha700` | `string` |
| `blackAlpha800` | `string` |
| `blackAlpha900` | `string` |
| `blue` | `string` |
| `blue100` | `string` |
| `blue200` | `string` |
| `blue300` | `string` |
| `blue400` | `string` |
| `blue50` | `string` |
| `blue500` | `string` |
| `blue600` | `string` |
| `blue700` | `string` |
| `blue800` | `string` |
| `blue900` | `string` |
| `blueGray` | `string` |
| `blueGray100` | `string` |
| `blueGray200` | `string` |
| `blueGray300` | `string` |
| `blueGray400` | `string` |
| `blueGray50` | `string` |
| `blueGray500` | `string` |
| `blueGray600` | `string` |
| `blueGray700` | `string` |
| `blueGray800` | `string` |
| `blueGray900` | `string` |
| `brightPink` | `string` |
| `current` | `string` |
| `currentColor` | `string` |
| `cyan` | `string` |
| `dracula` | `string` |
| `frenchMauve` | `string` |
| `gray` | `string` |
| `gray100` | `string` |
| `gray200` | `string` |
| `gray300` | `string` |
| `gray400` | `string` |
| `gray50` | `string` |
| `gray500` | `string` |
| `gray600` | `string` |
| `gray700` | `string` |
| `gray800` | `string` |
| `gray900` | `string` |
| `green` | `string` |
| `green100` | `string` |
| `green200` | `string` |
| `green300` | `string` |
| `green400` | `string` |
| `green50` | `string` |
| `green500` | `string` |
| `green600` | `string` |
| `green700` | `string` |
| `green800` | `string` |
| `green900` | `string` |
| `gunMetal` | `string` |
| `indigo` | `string` |
| `indigo100` | `string` |
| `indigo200` | `string` |
| `indigo300` | `string` |
| `indigo400` | `string` |
| `indigo50` | `string` |
| `indigo500` | `string` |
| `indigo600` | `string` |
| `indigo700` | `string` |
| `indigo800` | `string` |
| `indigo900` | `string` |
| `inherit` | `string` |
| `mulberry` | `string` |
| `mulberry100` | `string` |
| `mulberry200` | `string` |
| `mulberry300` | `string` |
| `mulberry400` | `string` |
| `mulberry50` | `string` |
| `mulberry500` | `string` |
| `mulberry600` | `string` |
| `mulberry700` | `string` |
| `mulberry800` | `string` |
| `mulberry900` | `string` |
| `orange` | `string` |
| `orange100` | `string` |
| `orange200` | `string` |
| `orange300` | `string` |
| `orange400` | `string` |
| `orange50` | `string` |
| `orange500` | `string` |
| `orange600` | `string` |
| `orange700` | `string` |
| `orange800` | `string` |
| `orange900` | `string` |
| `pink` | `string` |
| `pink100` | `string` |
| `pink200` | `string` |
| `pink300` | `string` |
| `pink400` | `string` |
| `pink50` | `string` |
| `pink500` | `string` |
| `pink600` | `string` |
| `pink700` | `string` |
| `pink800` | `string` |
| `pink900` | `string` |
| `purple` | `string` |
| `purple100` | `string` |
| `purple200` | `string` |
| `purple300` | `string` |
| `purple400` | `string` |
| `purple50` | `string` |
| `purple500` | `string` |
| `purple600` | `string` |
| `purple700` | `string` |
| `purple800` | `string` |
| `purple900` | `string` |
| `raisinBlack` | `string` |
| `red` | `string` |
| `red100` | `string` |
| `red200` | `string` |
| `red300` | `string` |
| `red400` | `string` |
| `red50` | `string` |
| `red500` | `string` |
| `red600` | `string` |
| `red700` | `string` |
| `red800` | `string` |
| `red900` | `string` |
| `redGray` | `string` |
| `redGray100` | `string` |
| `redGray200` | `string` |
| `redGray300` | `string` |
| `redGray400` | `string` |
| `redGray50` | `string` |
| `redGray500` | `string` |
| `redGray600` | `string` |
| `redGray700` | `string` |
| `redGray800` | `string` |
| `redGray900` | `string` |
| `rose` | `string` |
| `steelPink` | `string` |
| `teal` | `string` |
| `teal100` | `string` |
| `teal200` | `string` |
| `teal300` | `string` |
| `teal400` | `string` |
| `teal50` | `string` |
| `teal500` | `string` |
| `teal600` | `string` |
| `teal700` | `string` |
| `teal800` | `string` |
| `teal900` | `string` |
| `transparent` | `string` |
| `white` | `string` |
| `whiteAlpha100` | `string` |
| `whiteAlpha200` | `string` |
| `whiteAlpha300` | `string` |
| `whiteAlpha400` | `string` |
| `whiteAlpha50` | `string` |
| `whiteAlpha500` | `string` |
| `whiteAlpha600` | `string` |
| `whiteAlpha700` | `string` |
| `whiteAlpha800` | `string` |
| `whiteAlpha900` | `string` |
| `yellow` | `string` |
| `yellow100` | `string` |
| `yellow200` | `string` |
| `yellow300` | `string` |
| `yellow400` | `string` |
| `yellow50` | `string` |
| `yellow500` | `string` |
| `yellow600` | `string` |
| `yellow700` | `string` |
| `yellow800` | `string` |
| `yellow900` | `string` |

#### Defined in

[theme/colors.ts:5](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/theme/colors.ts#L5)

___

### commands

• `Const` **commands**: `Object`

An object containing various commands for generating CSS styles.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alignContent` | (`propValue`: `unknown`) => `string` |
| `alignItems` | (`propValue`: `unknown`) => `string` |
| `alignSelf` | (`propValue`: `unknown`) => `string` |
| `animation` | (`propValue`: `unknown`) => `string` |
| `animationDelay` | (`propValue`: `unknown`) => `string` |
| `animationDirection` | (`propValue`: `unknown`) => `string` |
| `animationDuration` | (`propValue`: `unknown`) => `string` |
| `animationFillMode` | (`propValue`: `unknown`) => `string` |
| `animationIterationCount` | (`propValue`: `unknown`) => `string` |
| `animationName` | (`propValue`: `unknown`) => `string` |
| `animationPlayState` | (`propValue`: `unknown`) => `string` |
| `animationTimingFunction` | (`propValue`: `unknown`) => `string` |
| `bBottomRadius` | (`propValue`: `unknown`) => `string` |
| `bLeftRadius` | (`propValue`: `unknown`) => `string` |
| `bRadius` | (`propValue`: `unknown`) => `string` |
| `bRadiusBottom` | (`propValue`: `unknown`) => `string` |
| `bRadiusBottomLeft` | (`propValue`: `unknown`) => `string` |
| `bRadiusBottomRight` | (`propValue`: `unknown`) => `string` |
| `bRadiusLeft` | (`propValue`: `unknown`) => `string` |
| `bRadiusRight` | (`propValue`: `unknown`) => `string` |
| `bRadiusTop` | (`propValue`: `unknown`) => `string` |
| `bRadiusTopLeft` | (`propValue`: `unknown`) => `string` |
| `bRadiusTopRight` | (`propValue`: `unknown`) => `string` |
| `bRightRadius` | (`propValue`: `unknown`) => `string` |
| `bTopRadius` | (`propValue`: `unknown`) => `string` |
| `backdropBlendMode` | (`propValue`: `unknown`) => `string` |
| `backdropBlur` | (`propValue`: `unknown`) => `string` |
| `backdropBrightness` | (`propValue`: `unknown`) => `string` |
| `backdropContrast` | (`propValue`: `unknown`) => `string` |
| `backdropDropShadow` | (`propValue`: `unknown`) => `string` |
| `backdropFilter` | (`propValue`: `unknown`) => `string` |
| `backdropGrayscale` | (`propValue`: `unknown`) => `string` |
| `backdropHueRotate` | (`propValue`: `unknown`) => `string` |
| `backdropInvert` | (`propValue`: `unknown`) => `string` |
| `backdropOpacity` | (`propValue`: `unknown`) => `string` |
| `backdropSaturate` | (`propValue`: `unknown`) => `string` |
| `backdropSepia` | (`propValue`: `unknown`) => `string` |
| `backfaceVisibility` | (`propValue`: `unknown`) => `string` |
| `background` | (`propValue`: `unknown`) => `string` |
| `backgroundClip` | (`propValue`: `unknown`) => `string` |
| `backgroundClipText` | (`propValue`: `unknown`) => ``""`` \| ``"-webkit-background-clip:text;-moz-background-clip:text;background-clip:text;"`` |
| `backgroundColor` | (`propValue`: `unknown`) => `string` |
| `backgroundTranslucent` | (`propValue`: `unknown`) => ``""`` \| ``"background-color:transparent;-webkit-background-clip:text;-moz-background-clip:text;-webkit-text-fill-color:transparent;-moz-text-fill-color:transparent;"`` |
| `bb` | (`propValue`: `unknown`) => `string` |
| `bg` | (`propValue`: `unknown`) => `string` |
| `bl` | (`propValue`: `unknown`) => `string` |
| `border` | (`propValue`: `unknown`) => `string` |
| `borderBlock` | (`propValue`: `unknown`) => `string` |
| `borderBottom` | (`propValue`: `unknown`) => `string` |
| `borderBottomColor` | (`propValue`: `unknown`) => `string` |
| `borderColor` | (`propValue`: `unknown`) => `string` |
| `borderImage` | (`propValue`: `unknown`) => `string` |
| `borderImageOutset` | (`propValue`: `unknown`) => `string` |
| `borderImageRepeat` | (`propValue`: `unknown`) => `string` |
| `borderImageSlice` | (`propValue`: `unknown`) => `string` |
| `borderImageSource` | (`propValue`: `unknown`) => `string` |
| `borderImageWidth` | (`propValue`: `unknown`) => `string` |
| `borderLeft` | (`propValue`: `unknown`) => `string` |
| `borderLeftColor` | (`propValue`: `unknown`) => `string` |
| `borderRadius` | (`propValue`: `unknown`) => `string` |
| `borderRight` | (`propValue`: `unknown`) => `string` |
| `borderRightColor` | (`propValue`: `unknown`) => `string` |
| `borderTop` | (`propValue`: `unknown`) => `string` |
| `borderTopColor` | (`propValue`: `unknown`) => `string` |
| `bottom` | (`propValue`: `unknown`) => `string` |
| `boxShadow` | (`propValue`: `unknown`) => `string` |
| `boxShadowInset` | (`propValue`: `unknown`) => ``""`` \| ``"box-shadow:inset 0 0 0 1000px rgba(0,0,0,0.3);"`` |
| `boxSizing` | (`propValue`: `unknown`) => `string` |
| `br` | (`propValue`: `unknown`) => `string` |
| `bt` | (`propValue`: `unknown`) => `string` |
| `clipPath` | (`propValue`: `unknown`) => `string` |
| `clipRule` | (`propValue`: `unknown`) => `string` |
| `color` | (`propValue`: `unknown`) => `string` |
| `colorInterpolation` | (`propValue`: `unknown`) => `string` |
| `colorRendering` | (`propValue`: `unknown`) => `string` |
| `columnCount` | (`propValue`: `unknown`) => `string` |
| `columnGap` | (`propValue`: `unknown`) => `string` |
| `columnRule` | (`propValue`: `unknown`) => `string` |
| `columnSpan` | (`propValue`: `unknown`) => `string` |
| `columnWidth` | (`propValue`: `unknown`) => `string` |
| `cursor` | (`propValue`: `unknown`) => `string` |
| `display` | (`propValue`: `unknown`) => `string` |
| `fillRule` | (`propValue`: `unknown`) => `string` |
| `filter` | (`propValue`: `unknown`) => `string` |
| `filterBlur` | (`propValue`: `unknown`) => `string` |
| `filterBrightness` | (`propValue`: `unknown`) => `string` |
| `filterContrast` | (`propValue`: `unknown`) => `string` |
| `filterDropShadow` | (`propValue`: `unknown`) => `string` |
| `filterGrayscale` | (`propValue`: `unknown`) => `string` |
| `filterHueRotate` | (`propValue`: `unknown`) => `string` |
| `filterInvert` | (`propValue`: `unknown`) => `string` |
| `filterOpacity` | (`propValue`: `unknown`) => `string` |
| `filterSaturate` | (`propValue`: `unknown`) => `string` |
| `filterSepia` | (`propValue`: `unknown`) => `string` |
| `flexDirection` | (`propValue`: `unknown`) => `string` |
| `flexGrow` | (`propValue`: `unknown`) => `string` |
| `flexShrink` | (`propValue`: `unknown`) => `string` |
| `flexWrap` | (`propValue`: `unknown`) => `string` |
| `fontColor` | (`propValue`: `unknown`) => `string` |
| `fontFamily` | (`propValue`: `unknown`) => `string` |
| `fontFeatureSettings` | (`propValue`: `unknown`) => `string` |
| `fontSize` | (`propValue`: `unknown`) => `string` |
| `fontStyle` | (`propValue`: `unknown`) => `string` |
| `fontVariant` | (`propValue`: `unknown`) => `string` |
| `fontWeight` | (`propValue`: `unknown`) => `string` |
| `gap` | (`propValue`: `unknown`) => `undefined` \| `string` |
| `gridAutoColumns` | (`propValue`: `unknown`) => `string` |
| `gridAutoFlow` | (`propValue`: `unknown`) => `string` |
| `gridAutoRows` | (`propValue`: `unknown`) => `string` |
| `gridColumn` | (`propValue`: `unknown`) => `string` |
| `gridColumnEnd` | (`propValue`: `unknown`) => `string` |
| `gridColumnGap` | (`propValue`: `unknown`) => `string` |
| `gridColumnStart` | (`propValue`: `unknown`) => `string` |
| `gridColumnStartEnd` | (`propValue`: `unknown`) => `string` |
| `gridGap` | (`propValue`: `unknown`) => `string` |
| `gridRow` | (`propValue`: `unknown`) => `string` |
| `gridRowEnd` | (`propValue`: `unknown`) => `string` |
| `gridRowGap` | (`propValue`: `unknown`) => `string` |
| `gridRowStart` | (`propValue`: `unknown`) => `string` |
| `gridRowStartEnd` | (`propValue`: `unknown`) => `string` |
| `gridTemplateColumns` | (`propValue`: `unknown`) => `string` |
| `gridTemplateRows` | (`propValue`: `unknown`) => `string` |
| `height` | (`propValue`: `unknown`) => `string` |
| `hyphens` | (`propValue`: `unknown`) => `string` |
| `imageRendering` | (`propValue`: `unknown`) => `string` |
| `isolation` | (`propValue`: `unknown`) => `string` |
| `justifyContent` | (`propValue`: `unknown`) => `string` |
| `justifyItems` | (`propValue`: `unknown`) => `string` |
| `justifySelf` | (`propValue`: `unknown`) => `string` |
| `left` | (`propValue`: `unknown`) => `string` |
| `letterSpacing` | (`propValue`: `unknown`) => `string` |
| `lineHeight` | (`propValue`: `unknown`) => `string` |
| `linearColor` | (`propValue`: `unknown`) => `string` |
| `m` | (`propValue`: `unknown`) => `string` |
| `margin` | (`propValue`: `unknown`) => `string` |
| `marginBottom` | (`propValue`: `unknown`) => `string` |
| `marginLeft` | (`propValue`: `unknown`) => `string` |
| `marginRight` | (`propValue`: `unknown`) => `string` |
| `marginTop` | (`propValue`: `unknown`) => `string` |
| `maskClip` | (`propValue`: `unknown`) => `string` |
| `maskComposite` | (`propValue`: `unknown`) => `string` |
| `maskImage` | (`propValue`: `unknown`) => `string` |
| `maskOrigin` | (`propValue`: `unknown`) => `string` |
| `maskPosition` | (`propValue`: `unknown`) => `string` |
| `maskRepeat` | (`propValue`: `unknown`) => `string` |
| `maskSize` | (`propValue`: `unknown`) => `string` |
| `maxH` | (`propValue`: `unknown`) => `string` |
| `maxHeight` | (`propValue`: `unknown`) => `string` |
| `maxW` | (`propValue`: `unknown`) => `string` |
| `maxWidth` | (`propValue`: `unknown`) => `string` |
| `mb` | (`propValue`: `unknown`) => `string` |
| `minH` | (`propValue`: `unknown`) => `string` |
| `minHeight` | (`propValue`: `unknown`) => `string` |
| `minW` | (`propValue`: `unknown`) => `string` |
| `minWidth` | (`propValue`: `unknown`) => `string` |
| `mixBlendMode` | (`propValue`: `unknown`) => `string` |
| `ml` | (`propValue`: `unknown`) => `string` |
| `mr` | (`propValue`: `unknown`) => `string` |
| `mt` | (`propValue`: `unknown`) => `string` |
| `mx` | (`propValue`: `unknown`) => `string` |
| `my` | (`propValue`: `unknown`) => `string` |
| `objectFit` | (`propValue`: `unknown`) => `string` |
| `objectPosition` | (`propValue`: `unknown`) => `string` |
| `opacity` | (`propValue`: `unknown`) => `string` |
| `optimizedHeight` | (`propValue`: `unknown`) => ``""`` \| ``"height:100%;height:-moz-available;height:-webkit-fill-available;"`` |
| `optimizedWidth` | (`propValue`: `unknown`) => ``"width:100%;width:-moz-available;width:-webkit-fill-available;"`` \| ``""`` |
| `overflow` | (`propValue`: `unknown`) => `string` |
| `overflowX` | (`propValue`: `unknown`) => `string` |
| `overflowY` | (`propValue`: `unknown`) => `string` |
| `overscrollBehavior` | (`propValue`: `unknown`) => `string` |
| `overscrollBehaviorX` | (`propValue`: `unknown`) => `string` |
| `overscrollBehaviorY` | (`propValue`: `unknown`) => `string` |
| `p` | (`propValue`: `unknown`) => `string` |
| `padding` | (`propValue`: `unknown`) => `string` |
| `paddingBottom` | (`propValue`: `unknown`) => `string` |
| `paddingLeft` | (`propValue`: `unknown`) => `string` |
| `paddingRight` | (`propValue`: `unknown`) => `string` |
| `paddingTop` | (`propValue`: `unknown`) => `string` |
| `pb` | (`propValue`: `unknown`) => `string` |
| `perspective` | (`propValue`: `unknown`) => `string` |
| `perspectiveOrigin` | (`propValue`: `unknown`) => `string` |
| `pl` | (`propValue`: `unknown`) => `string` |
| `placeContent` | (`propValue`: `unknown`) => `string` |
| `placeHolderColor` | (`propValue`: `unknown`) => `string` |
| `placeItems` | (`propValue`: `unknown`) => `string` |
| `placeSelf` | (`propValue`: `unknown`) => `string` |
| `pointerEvents` | (`propValue`: `unknown`) => `string` |
| `position` | (`propValue`: `unknown`) => `string` |
| `pr` | (`propValue`: `unknown`) => `string` |
| `pt` | (`propValue`: `unknown`) => `string` |
| `px` | (`propValue`: `unknown`) => `string` |
| `py` | (`propValue`: `unknown`) => `string` |
| `right` | (`propValue`: `unknown`) => `string` |
| `scrollBehavior` | (`propValue`: `unknown`) => `string` |
| `scrollSnapAlign` | (`propValue`: `unknown`) => `string` |
| `scrollSnapPointsX` | (`propValue`: `unknown`) => `string` |
| `scrollSnapPointsY` | (`propValue`: `unknown`) => `string` |
| `scrollSnapType` | (`propValue`: `unknown`) => `string` |
| `scrollbarColor` | (`propValue`: `unknown`) => `string` |
| `scrollbarWidth` | (`propValue`: `unknown`) => `string` |
| `shapeImageThreshold` | (`propValue`: `unknown`) => `string` |
| `shapeMargin` | (`propValue`: `unknown`) => `string` |
| `shapeOutside` | (`propValue`: `unknown`) => `string` |
| `shapeRendering` | (`propValue`: `unknown`) => `string` |
| `textAlign` | (`propValue`: `unknown`) => `string` |
| `textAlignLast` | (`propValue`: `unknown`) => `string` |
| `textDecoration` | (`propValue`: `unknown`) => `string` |
| `textDecorationColor` | (`propValue`: `unknown`) => `string` |
| `textDecorationLine` | (`propValue`: `unknown`) => `string` |
| `textDecorationStyle` | (`propValue`: `unknown`) => `string` |
| `textEmphasis` | (`propValue`: `unknown`) => `string` |
| `textEmphasisColor` | (`propValue`: `unknown`) => `string` |
| `textEmphasisPosition` | (`propValue`: `unknown`) => `string` |
| `textEmphasisStyle` | (`propValue`: `unknown`) => `string` |
| `textFillColor` | (`propValue`: `unknown`) => `string` |
| `textIndent` | (`propValue`: `unknown`) => `string` |
| `textJustify` | (`propValue`: `unknown`) => `string` |
| `textOverflow` | (`propValue`: `unknown`) => `string` |
| `textRendering` | (`propValue`: `unknown`) => `string` |
| `textShadow` | (`propValue`: `unknown`) => `string` |
| `textTransform` | (`propValue`: `unknown`) => `string` |
| `textUnderlineOffset` | (`propValue`: `unknown`) => `string` |
| `top` | (`propValue`: `unknown`) => `string` |
| `transform` | (`propValue`: `unknown`) => `string` |
| `transformOrigin` | (`propValue`: `unknown`) => `string` |
| `transformStyle` | (`propValue`: `unknown`) => `string` |
| `transition` | (`propValue`: `unknown`) => `string` |
| `transitionDelay` | (`propValue`: `unknown`) => `string` |
| `transitionDuration` | (`propValue`: `unknown`) => `string` |
| `transitionProperty` | (`propValue`: `unknown`) => `string` |
| `transitionTimingFunction` | (`propValue`: `unknown`) => `string` |
| `userDrag` | (`propValue`: `unknown`) => `string` |
| `userFocus` | (`propValue`: `unknown`) => ``""`` \| ``"outline:none;"`` |
| `userResize` | (`propValue`: `unknown`) => `string` |
| `userSelect` | (`propValue`: `unknown`) => `string` |
| `userSelectAll` | (`propValue`: `unknown`) => ``""`` \| ``"user-select:all;-webkit-user-select:all;-moz-user-select:all;"`` |
| `userSelectAuto` | (`propValue`: `unknown`) => ``""`` \| ``"user-select:auto;-webkit-user-select:auto;-moz-user-select:auto;"`` |
| `userSelectNone` | (`propValue`: `unknown`) => ``""`` \| ``"user-select:none;-webkit-user-select:none;-moz-user-select:none;"`` |
| `userSelectText` | (`propValue`: `unknown`) => ``""`` \| ``"user-select:text;-webkit-user-select:text;-moz-user-select:text;"`` |
| `whiteSpace` | (`propValue`: `unknown`) => `string` |
| `width` | (`propValue`: `unknown`) => `string` |
| `willChange` | (`propValue`: `unknown`) => `string` |
| `willChangeProperty` | (`propValue`: `unknown`) => `string` |
| `wordBreak` | (`propValue`: `unknown`) => `string` |
| `wordSpacing` | (`propValue`: `unknown`) => `string` |
| `wordWrap` | (`propValue`: `unknown`) => `string` |
| `zIndex` | (`propValue`: `unknown`) => `string` |

#### Defined in

[commands/index.ts:12](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/commands/index.ts#L12)

___

### commonProps

• `Const` **commonProps**: [`TCommonProps`](#tcommonprops)

Common properties for the theme.

#### Defined in

[theme/index.ts:12](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/theme/index.ts#L12)

___

### cssReset

• `Const` **cssReset**: ``"/*DO NOT EDIT THIS FILE DIRECTLY, IT IS GENERATED BY ROBUST-UI*/html{line-height:1.15;-webkit-text-size-adjust:100%;height:100%;margin:0;padding:0;}body{height:100%;margin:0;padding:0;}main{display:block;}h1{font-size:2em;margin:0;}p{margin:0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underlinedotted;}b{font-weight:bolder;}strong{font-weight:bolder;}code{font-family:monospace,monospace;font-size:1em;}kbd{font-family:monospace,monospace;font-size:1em;}samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}input{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}optgroup{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}select{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button{overflow:visible;}input{overflow:visible;}button{text-transform:none;}select{text-transform:none;}button{-webkit-appearance:button;appearance:button;}[type=\"button\"]{-webkit-appearance:button;appearance:button;}[type=\"reset\"]{-webkit-appearance:button;appearance:button;}[type=\"submit\"]{-webkit-appearance:button;appearance:button;}button::-moz-focus-inner{border-style:none;padding:0;}[type=\"button\"]::-moz-focus-inner{border-style:none;padding:0;}[type=\"reset\"]::-moz-focus-inner{border-style:none;padding:0;}[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring{outline:1pxdottedButtonText;}[type=\"button\"]:-moz-focusring{outline:1pxdottedButtonText;}[type=\"reset\"]:-moz-focusring{outline:1pxdottedButtonText;}[type=\"submit\"]:-moz-focusring{outline:1pxdottedButtonText;}fieldset{padding:0.35em0.75em0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type=\"checkbox\"]{box-sizing:border-box;padding:0;}[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button{height:auto;}[type=\"number\"]::-webkit-outer-spin-button{height:auto;}[type=\"search\"]{-webkit-appearance:textfield;appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}*{-webkit-tap-highlight-color:transparent;}"``

CSS reset string.
This string contains CSS rules to reset the default styles of HTML elements.
It is generated by ROBUST-UI and should not be edited directly.

#### Defined in

[css-reset/index.ts:7](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/css-reset/index.ts#L7)

___

### defaultTheme

• `Const` **defaultTheme**: [`TDefaultTheme`](#tdefaulttheme)

#### Defined in

[theme/index.ts:34](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/theme/index.ts#L34)

___

### language

• `Const` **language**: `Object`

Represents a mapping of language codes to their corresponding display names.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ar` | `string` |
| `bg` | `string` |
| `bn` | `string` |
| `cs` | `string` |
| `da` | `string` |
| `de` | `string` |
| `el` | `string` |
| `en` | `string` |
| `en-GB` | `string` |
| `en-US` | `string` |
| `es` | `string` |
| `es-AR` | `string` |
| `es-ES` | `string` |
| `es-MX` | `string` |
| `et` | `string` |
| `fa` | `string` |
| `fi` | `string` |
| `fil` | `string` |
| `fr` | `string` |
| `gu` | `string` |
| `he` | `string` |
| `hi` | `string` |
| `hr` | `string` |
| `hu` | `string` |
| `id` | `string` |
| `is` | `string` |
| `it` | `string` |
| `ja` | `string` |
| `ka` | `string` |
| `km` | `string` |
| `ko` | `string` |
| `lt` | `string` |
| `lv` | `string` |
| `mn` | `string` |
| `mr` | `string` |
| `ms` | `string` |
| `ms_MY` | `string` |
| `nb` | `string` |
| `ne` | `string` |
| `nl` | `string` |
| `pa` | `string` |
| `pl` | `string` |
| `pt` | `string` |
| `pt-BR` | `string` |
| `pt-PT` | `string` |
| `ro` | `string` |
| `ru` | `string` |
| `si` | `string` |
| `sk` | `string` |
| `sl` | `string` |
| `sr` | `string` |
| `sv` | `string` |
| `sw` | `string` |
| `ta` | `string` |
| `te` | `string` |
| `th` | `string` |
| `tr` | `string` |
| `uk` | `string` |
| `ur` | `string` |
| `uz` | `string` |
| `vi` | `string` |
| `zh` | `string` |
| `zh-CN` | `string` |
| `zh-HK` | `string` |
| `zh-TW` | `string` |
| `zu` | `string` |

#### Defined in

[language/index.ts:5](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/language/index.ts#L5)

___

### mediaBreakpoints

• `Const` **mediaBreakpoints**: `Object`

Defines the media breakpoints for responsive design.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `base` | `number` |
| `lg` | `number` |
| `md` | `number` |
| `sm` | `number` |
| `xl` | `number` |
| `xs` | `number` |
| `xxl` | `number` |
| `xxs` | `number` |
| `xxxl` | `number` |

#### Defined in

[media-breakpoints/index.ts:5](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/media-breakpoints/index.ts#L5)

___

### selectors

• `Const` **selectors**: `Object`

Object containing selectors for styling elements.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | `string` |
| `after` | `string` |
| `alignContent` | (`propValue`: `unknown`) => `string` |
| `alignItems` | (`propValue`: `unknown`) => `string` |
| `alignSelf` | (`propValue`: `unknown`) => `string` |
| `animation` | (`propValue`: `unknown`) => `string` |
| `animationDelay` | (`propValue`: `unknown`) => `string` |
| `animationDirection` | (`propValue`: `unknown`) => `string` |
| `animationDuration` | (`propValue`: `unknown`) => `string` |
| `animationFillMode` | (`propValue`: `unknown`) => `string` |
| `animationIterationCount` | (`propValue`: `unknown`) => `string` |
| `animationName` | (`propValue`: `unknown`) => `string` |
| `animationPlayState` | (`propValue`: `unknown`) => `string` |
| `animationTimingFunction` | (`propValue`: `unknown`) => `string` |
| `annotation` | `string` |
| `any` | `string` |
| `autoFill` | `string` |
| `bBottomRadius` | (`propValue`: `unknown`) => `string` |
| `bLeftRadius` | (`propValue`: `unknown`) => `string` |
| `bRadius` | (`propValue`: `unknown`) => `string` |
| `bRadiusBottom` | (`propValue`: `unknown`) => `string` |
| `bRadiusBottomLeft` | (`propValue`: `unknown`) => `string` |
| `bRadiusBottomRight` | (`propValue`: `unknown`) => `string` |
| `bRadiusLeft` | (`propValue`: `unknown`) => `string` |
| `bRadiusRight` | (`propValue`: `unknown`) => `string` |
| `bRadiusTop` | (`propValue`: `unknown`) => `string` |
| `bRadiusTopLeft` | (`propValue`: `unknown`) => `string` |
| `bRadiusTopRight` | (`propValue`: `unknown`) => `string` |
| `bRightRadius` | (`propValue`: `unknown`) => `string` |
| `bTopRadius` | (`propValue`: `unknown`) => `string` |
| `backdrop` | `string` |
| `backdropBlendMode` | (`propValue`: `unknown`) => `string` |
| `backdropBlur` | (`propValue`: `unknown`) => `string` |
| `backdropBrightness` | (`propValue`: `unknown`) => `string` |
| `backdropContrast` | (`propValue`: `unknown`) => `string` |
| `backdropDropShadow` | (`propValue`: `unknown`) => `string` |
| `backdropFilter` | (`propValue`: `unknown`) => `string` |
| `backdropGrayscale` | (`propValue`: `unknown`) => `string` |
| `backdropHueRotate` | (`propValue`: `unknown`) => `string` |
| `backdropInvert` | (`propValue`: `unknown`) => `string` |
| `backdropOpacity` | (`propValue`: `unknown`) => `string` |
| `backdropSaturate` | (`propValue`: `unknown`) => `string` |
| `backdropSepia` | (`propValue`: `unknown`) => `string` |
| `backfaceVisibility` | (`propValue`: `unknown`) => `string` |
| `background` | (`propValue`: `unknown`) => `string` |
| `backgroundClip` | (`propValue`: `unknown`) => `string` |
| `backgroundClipText` | (`propValue`: `unknown`) => ``""`` \| ``"-webkit-background-clip:text;-moz-background-clip:text;background-clip:text;"`` |
| `backgroundColor` | (`propValue`: `unknown`) => `string` |
| `backgroundTranslucent` | (`propValue`: `unknown`) => ``""`` \| ``"background-color:transparent;-webkit-background-clip:text;-moz-background-clip:text;-webkit-text-fill-color:transparent;-moz-text-fill-color:transparent;"`` |
| `bb` | (`propValue`: `unknown`) => `string` |
| `before` | `string` |
| `bg` | (`propValue`: `unknown`) => `string` |
| `bl` | (`propValue`: `unknown`) => `string` |
| `border` | (`propValue`: `unknown`) => `string` |
| `borderBlock` | (`propValue`: `unknown`) => `string` |
| `borderBottom` | (`propValue`: `unknown`) => `string` |
| `borderBottomColor` | (`propValue`: `unknown`) => `string` |
| `borderColor` | (`propValue`: `unknown`) => `string` |
| `borderImage` | (`propValue`: `unknown`) => `string` |
| `borderImageOutset` | (`propValue`: `unknown`) => `string` |
| `borderImageRepeat` | (`propValue`: `unknown`) => `string` |
| `borderImageSlice` | (`propValue`: `unknown`) => `string` |
| `borderImageSource` | (`propValue`: `unknown`) => `string` |
| `borderImageWidth` | (`propValue`: `unknown`) => `string` |
| `borderLeft` | (`propValue`: `unknown`) => `string` |
| `borderLeftColor` | (`propValue`: `unknown`) => `string` |
| `borderRadius` | (`propValue`: `unknown`) => `string` |
| `borderRight` | (`propValue`: `unknown`) => `string` |
| `borderRightColor` | (`propValue`: `unknown`) => `string` |
| `borderTop` | (`propValue`: `unknown`) => `string` |
| `borderTopColor` | (`propValue`: `unknown`) => `string` |
| `bottom` | (`propValue`: `unknown`) => `string` |
| `boxShadow` | (`propValue`: `unknown`) => `string` |
| `boxShadowInset` | (`propValue`: `unknown`) => ``""`` \| ``"box-shadow:inset 0 0 0 1000px rgba(0,0,0,0.3);"`` |
| `boxSizing` | (`propValue`: `unknown`) => `string` |
| `br` | (`propValue`: `unknown`) => `string` |
| `bt` | (`propValue`: `unknown`) => `string` |
| `characterVariant` | `string` |
| `charset` | `string` |
| `checked` | `string` |
| `clipPath` | (`propValue`: `unknown`) => `string` |
| `clipRule` | (`propValue`: `unknown`) => `string` |
| `color` | (`propValue`: `unknown`) => `string` |
| `colorInterpolation` | (`propValue`: `unknown`) => `string` |
| `colorRendering` | (`propValue`: `unknown`) => `string` |
| `columnCount` | (`propValue`: `unknown`) => `string` |
| `columnGap` | (`propValue`: `unknown`) => `string` |
| `columnRule` | (`propValue`: `unknown`) => `string` |
| `columnSpan` | (`propValue`: `unknown`) => `string` |
| `columnWidth` | (`propValue`: `unknown`) => `string` |
| `container` | `string` |
| `counterStyle` | `string` |
| `cue` | `string` |
| `cueRegion` | `string` |
| `cursor` | (`propValue`: `unknown`) => `string` |
| `default` | `string` |
| `dir` | `string` |
| `disabled` | `string` |
| `display` | (`propValue`: `unknown`) => `string` |
| `document` | `string` |
| `empty` | `string` |
| `enabled` | `string` |
| `fillRule` | (`propValue`: `unknown`) => `string` |
| `filter` | (`propValue`: `unknown`) => `string` |
| `filterBlur` | (`propValue`: `unknown`) => `string` |
| `filterBrightness` | (`propValue`: `unknown`) => `string` |
| `filterContrast` | (`propValue`: `unknown`) => `string` |
| `filterDropShadow` | (`propValue`: `unknown`) => `string` |
| `filterGrayscale` | (`propValue`: `unknown`) => `string` |
| `filterHueRotate` | (`propValue`: `unknown`) => `string` |
| `filterInvert` | (`propValue`: `unknown`) => `string` |
| `filterOpacity` | (`propValue`: `unknown`) => `string` |
| `filterSaturate` | (`propValue`: `unknown`) => `string` |
| `filterSepia` | (`propValue`: `unknown`) => `string` |
| `firstChild` | `string` |
| `firstLetter` | `string` |
| `firstLine` | `string` |
| `firstOfType` | `string` |
| `flexDirection` | (`propValue`: `unknown`) => `string` |
| `flexGrow` | (`propValue`: `unknown`) => `string` |
| `flexShrink` | (`propValue`: `unknown`) => `string` |
| `flexWrap` | (`propValue`: `unknown`) => `string` |
| `focus` | `string` |
| `focusWithin` | `string` |
| `fontColor` | (`propValue`: `unknown`) => `string` |
| `fontFace` | `string` |
| `fontFamily` | (`propValue`: `unknown`) => `string` |
| `fontFeatureSettings` | (`propValue`: `unknown`) => `string` |
| `fontFeatureValues` | `string` |
| `fontSize` | (`propValue`: `unknown`) => `string` |
| `fontStyle` | (`propValue`: `unknown`) => `string` |
| `fontVariant` | (`propValue`: `unknown`) => `string` |
| `fontWeight` | (`propValue`: `unknown`) => `string` |
| `fullScreen` | `string` |
| `gap` | (`propValue`: `unknown`) => `undefined` \| `string` |
| `grammarError` | `string` |
| `gridAutoColumns` | (`propValue`: `unknown`) => `string` |
| `gridAutoFlow` | (`propValue`: `unknown`) => `string` |
| `gridAutoRows` | (`propValue`: `unknown`) => `string` |
| `gridColumn` | (`propValue`: `unknown`) => `string` |
| `gridColumnEnd` | (`propValue`: `unknown`) => `string` |
| `gridColumnGap` | (`propValue`: `unknown`) => `string` |
| `gridColumnStart` | (`propValue`: `unknown`) => `string` |
| `gridColumnStartEnd` | (`propValue`: `unknown`) => `string` |
| `gridGap` | (`propValue`: `unknown`) => `string` |
| `gridRow` | (`propValue`: `unknown`) => `string` |
| `gridRowEnd` | (`propValue`: `unknown`) => `string` |
| `gridRowGap` | (`propValue`: `unknown`) => `string` |
| `gridRowStart` | (`propValue`: `unknown`) => `string` |
| `gridRowStartEnd` | (`propValue`: `unknown`) => `string` |
| `gridTemplateColumns` | (`propValue`: `unknown`) => `string` |
| `gridTemplateRows` | (`propValue`: `unknown`) => `string` |
| `has` | `string` |
| `height` | (`propValue`: `unknown`) => `string` |
| `host` | `string` |
| `hostContext` | `string` |
| `hover` | `string` |
| `hyphens` | (`propValue`: `unknown`) => `string` |
| `imageRendering` | (`propValue`: `unknown`) => `string` |
| `import` | `string` |
| `invalid` | `string` |
| `isolation` | (`propValue`: `unknown`) => `string` |
| `justifyContent` | (`propValue`: `unknown`) => `string` |
| `justifyItems` | (`propValue`: `unknown`) => `string` |
| `justifySelf` | (`propValue`: `unknown`) => `string` |
| `keyframes` | `string` |
| `lang` | `string` |
| `lastChild` | `string` |
| `lastOfType` | `string` |
| `left` | (`propValue`: `unknown`) => `string` |
| `letterSpacing` | (`propValue`: `unknown`) => `string` |
| `lineHeight` | (`propValue`: `unknown`) => `string` |
| `linearColor` | (`propValue`: `unknown`) => `string` |
| `link` | `string` |
| `m` | (`propValue`: `unknown`) => `string` |
| `margin` | (`propValue`: `unknown`) => `string` |
| `marginBottom` | (`propValue`: `unknown`) => `string` |
| `marginLeft` | (`propValue`: `unknown`) => `string` |
| `marginRight` | (`propValue`: `unknown`) => `string` |
| `marginTop` | (`propValue`: `unknown`) => `string` |
| `marker` | `string` |
| `maskClip` | (`propValue`: `unknown`) => `string` |
| `maskComposite` | (`propValue`: `unknown`) => `string` |
| `maskImage` | (`propValue`: `unknown`) => `string` |
| `maskOrigin` | (`propValue`: `unknown`) => `string` |
| `maskPosition` | (`propValue`: `unknown`) => `string` |
| `maskRepeat` | (`propValue`: `unknown`) => `string` |
| `maskSize` | (`propValue`: `unknown`) => `string` |
| `matches` | `string` |
| `maxH` | (`propValue`: `unknown`) => `string` |
| `maxHeight` | (`propValue`: `unknown`) => `string` |
| `maxW` | (`propValue`: `unknown`) => `string` |
| `maxWidth` | (`propValue`: `unknown`) => `string` |
| `mb` | (`propValue`: `unknown`) => `string` |
| `media` | `string` |
| `minH` | (`propValue`: `unknown`) => `string` |
| `minHeight` | (`propValue`: `unknown`) => `string` |
| `minW` | (`propValue`: `unknown`) => `string` |
| `minWidth` | (`propValue`: `unknown`) => `string` |
| `mixBlendMode` | (`propValue`: `unknown`) => `string` |
| `ml` | (`propValue`: `unknown`) => `string` |
| `mozFocusInner` | `string` |
| `mozFocusOuter` | `string` |
| `mozFullScreen` | `string` |
| `mozMeterBar` | `string` |
| `mozMeterEven` | `string` |
| `mozMeterOptimum` | `string` |
| `mozMeterSubOptimum` | `string` |
| `mozMeterSubSubOptimum` | `string` |
| `mozPlaceholder` | `string` |
| `mozRangeProgress` | `string` |
| `mozRangeThumb` | `string` |
| `mozRangeTrack` | `string` |
| `mozRangeTrackContainer` | `string` |
| `mozRangeTrackThumb` | `string` |
| `mozRangeTrackTick` | `string` |
| `mozSelection` | `string` |
| `mozTreeCellText` | `string` |
| `mozTreeCellTextHover` | `string` |
| `mozTreeCellTextHoverLoading` | `string` |
| `mozTreeCellTextHoverSelected` | `string` |
| `mozTreeCellTextHoverSelectedLoading` | `string` |
| `mozTreeCellTextLoading` | `string` |
| `mozTreeCellTextSelected` | `string` |
| `mozTreeCellTextSelectedLoading` | `string` |
| `mozTreeRowHover` | `string` |
| `mozTreeRowHoverLoading` | `string` |
| `mozTreeRowHoverSelected` | `string` |
| `mozTreeRowHoverSelectedLoading` | `string` |
| `mozTreeRowLoading` | `string` |
| `mozTreeRowSelected` | `string` |
| `mozTreeRowSelectedLoading` | `string` |
| `mr` | (`propValue`: `unknown`) => `string` |
| `mt` | (`propValue`: `unknown`) => `string` |
| `mx` | (`propValue`: `unknown`) => `string` |
| `my` | (`propValue`: `unknown`) => `string` |
| `namespace` | `string` |
| `not` | `string` |
| `nthChild` | `string` |
| `nthLastChild` | `string` |
| `nthLastOfType` | `string` |
| `nthMatch` | `string` |
| `nthOfType` | `string` |
| `objectFit` | (`propValue`: `unknown`) => `string` |
| `objectPosition` | (`propValue`: `unknown`) => `string` |
| `onlyChild` | `string` |
| `onlyOfType` | `string` |
| `opacity` | (`propValue`: `unknown`) => `string` |
| `optimizedHeight` | (`propValue`: `unknown`) => ``""`` \| ``"height:100%;height:-moz-available;height:-webkit-fill-available;"`` |
| `optimizedWidth` | (`propValue`: `unknown`) => ``"width:100%;width:-moz-available;width:-webkit-fill-available;"`` \| ``""`` |
| `optional` | `string` |
| `ornaments` | `string` |
| `overflow` | (`propValue`: `unknown`) => `string` |
| `overflowX` | (`propValue`: `unknown`) => `string` |
| `overflowY` | (`propValue`: `unknown`) => `string` |
| `overscrollBehavior` | (`propValue`: `unknown`) => `string` |
| `overscrollBehaviorX` | (`propValue`: `unknown`) => `string` |
| `overscrollBehaviorY` | (`propValue`: `unknown`) => `string` |
| `p` | (`propValue`: `unknown`) => `string` |
| `padding` | (`propValue`: `unknown`) => `string` |
| `paddingBottom` | (`propValue`: `unknown`) => `string` |
| `paddingLeft` | (`propValue`: `unknown`) => `string` |
| `paddingRight` | (`propValue`: `unknown`) => `string` |
| `paddingTop` | (`propValue`: `unknown`) => `string` |
| `page` | `string` |
| `pb` | (`propValue`: `unknown`) => `string` |
| `perspective` | (`propValue`: `unknown`) => `string` |
| `perspectiveOrigin` | (`propValue`: `unknown`) => `string` |
| `pl` | (`propValue`: `unknown`) => `string` |
| `placeContent` | (`propValue`: `unknown`) => `string` |
| `placeHolderColor` | (`propValue`: `unknown`) => `string` |
| `placeItems` | (`propValue`: `unknown`) => `string` |
| `placeSelf` | (`propValue`: `unknown`) => `string` |
| `placeholder` | `string` |
| `pointerEvents` | (`propValue`: `unknown`) => `string` |
| `position` | (`propValue`: `unknown`) => `string` |
| `pr` | (`propValue`: `unknown`) => `string` |
| `pt` | (`propValue`: `unknown`) => `string` |
| `px` | (`propValue`: `unknown`) => `string` |
| `py` | (`propValue`: `unknown`) => `string` |
| `readOnly` | `string` |
| `readWrite` | `string` |
| `required` | `string` |
| `right` | (`propValue`: `unknown`) => `string` |
| `root` | `string` |
| `scrollBehavior` | (`propValue`: `unknown`) => `string` |
| `scrollSnapAlign` | (`propValue`: `unknown`) => `string` |
| `scrollSnapPointsX` | (`propValue`: `unknown`) => `string` |
| `scrollSnapPointsY` | (`propValue`: `unknown`) => `string` |
| `scrollSnapType` | (`propValue`: `unknown`) => `string` |
| `scrollbarColor` | (`propValue`: `unknown`) => `string` |
| `scrollbarWidth` | (`propValue`: `unknown`) => `string` |
| `selection` | `string` |
| `shapeImageThreshold` | (`propValue`: `unknown`) => `string` |
| `shapeMargin` | (`propValue`: `unknown`) => `string` |
| `shapeOutside` | (`propValue`: `unknown`) => `string` |
| `shapeRendering` | (`propValue`: `unknown`) => `string` |
| `spellingError` | `string` |
| `styleset` | `string` |
| `stylistic` | `string` |
| `supports` | `string` |
| `swash` | `string` |
| `target` | `string` |
| `textAlign` | (`propValue`: `unknown`) => `string` |
| `textAlignLast` | (`propValue`: `unknown`) => `string` |
| `textDecoration` | (`propValue`: `unknown`) => `string` |
| `textDecorationColor` | (`propValue`: `unknown`) => `string` |
| `textDecorationLine` | (`propValue`: `unknown`) => `string` |
| `textDecorationStyle` | (`propValue`: `unknown`) => `string` |
| `textEmphasis` | (`propValue`: `unknown`) => `string` |
| `textEmphasisColor` | (`propValue`: `unknown`) => `string` |
| `textEmphasisPosition` | (`propValue`: `unknown`) => `string` |
| `textEmphasisStyle` | (`propValue`: `unknown`) => `string` |
| `textFillColor` | (`propValue`: `unknown`) => `string` |
| `textIndent` | (`propValue`: `unknown`) => `string` |
| `textJustify` | (`propValue`: `unknown`) => `string` |
| `textOverflow` | (`propValue`: `unknown`) => `string` |
| `textRendering` | (`propValue`: `unknown`) => `string` |
| `textShadow` | (`propValue`: `unknown`) => `string` |
| `textTransform` | (`propValue`: `unknown`) => `string` |
| `textUnderlineOffset` | (`propValue`: `unknown`) => `string` |
| `top` | (`propValue`: `unknown`) => `string` |
| `transform` | (`propValue`: `unknown`) => `string` |
| `transformOrigin` | (`propValue`: `unknown`) => `string` |
| `transformStyle` | (`propValue`: `unknown`) => `string` |
| `transition` | (`propValue`: `unknown`) => `string` |
| `transitionDelay` | (`propValue`: `unknown`) => `string` |
| `transitionDuration` | (`propValue`: `unknown`) => `string` |
| `transitionProperty` | (`propValue`: `unknown`) => `string` |
| `transitionTimingFunction` | (`propValue`: `unknown`) => `string` |
| `userDrag` | (`propValue`: `unknown`) => `string` |
| `userFocus` | (`propValue`: `unknown`) => ``""`` \| ``"outline:none;"`` |
| `userResize` | (`propValue`: `unknown`) => `string` |
| `userSelect` | (`propValue`: `unknown`) => `string` |
| `userSelectAll` | (`propValue`: `unknown`) => ``""`` \| ``"user-select:all;-webkit-user-select:all;-moz-user-select:all;"`` |
| `userSelectAuto` | (`propValue`: `unknown`) => ``""`` \| ``"user-select:auto;-webkit-user-select:auto;-moz-user-select:auto;"`` |
| `userSelectNone` | (`propValue`: `unknown`) => ``""`` \| ``"user-select:none;-webkit-user-select:none;-moz-user-select:none;"`` |
| `userSelectText` | (`propValue`: `unknown`) => ``""`` \| ``"user-select:text;-webkit-user-select:text;-moz-user-select:text;"`` |
| `valid` | `string` |
| `viewport` | `string` |
| `visited` | `string` |
| `webkitColorSwatch` | `string` |
| `webkitColorSwatchWrapper` | `string` |
| `webkitContactsAutoCompleteButton` | `string` |
| `webkitContactsAutoCompleteButtonContainer` | `string` |
| `webkitContactsAutoCompleteContainer` | `string` |
| `webkitContactsAutoCompleteEntry` | `string` |
| `webkitContactsAutoCompleteSelectedEntry` | `string` |
| `webkitInnerSpinButton` | `string` |
| `webkitInputPlaceholder` | `string` |
| `webkitMeterBar` | `string` |
| `webkitMeterOptimumValue` | `string` |
| `webkitOuterSpinButton` | `string` |
| `webkitProgressBar` | `string` |
| `webkitProgressBarValue` | `string` |
| `webkitProgressValue` | `string` |
| `webkitScrollbar` | `string` |
| `webkitScrollbarButton` | `string` |
| `webkitScrollbarCorner` | `string` |
| `webkitScrollbarThumb` | `string` |
| `webkitScrollbarThumbEnd` | `string` |
| `webkitScrollbarThumbHorizontal` | `string` |
| `webkitScrollbarThumbStart` | `string` |
| `webkitScrollbarThumbThumb` | `string` |
| `webkitScrollbarThumbVertical` | `string` |
| `webkitScrollbarTrack` | `string` |
| `webkitScrollbarTrackEnd` | `string` |
| `webkitScrollbarTrackPiece` | `string` |
| `webkitScrollbarTrackStart` | `string` |
| `webkitSearchCancelButton` | `string` |
| `webkitSearchDecoration` | `string` |
| `whiteSpace` | (`propValue`: `unknown`) => `string` |
| `width` | (`propValue`: `unknown`) => `string` |
| `willChange` | (`propValue`: `unknown`) => `string` |
| `willChangeProperty` | (`propValue`: `unknown`) => `string` |
| `wordBreak` | (`propValue`: `unknown`) => `string` |
| `wordSpacing` | (`propValue`: `unknown`) => `string` |
| `wordWrap` | (`propValue`: `unknown`) => `string` |
| `zIndex` | (`propValue`: `unknown`) => `string` |

#### Defined in

[index.ts:18](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/index.ts#L18)

___

### sizeProps

• `Const` **sizeProps**: [`TSizeProps`](#tsizeprops)

Size properties for the theme.

#### Defined in

[theme/index.ts:23](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/theme/index.ts#L23)

___

### sizes

• `Const` **sizes**: `TSize`

Represents a collection of sizes used in the theme.

#### Defined in

[sizes/index.ts:22](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/sizes/index.ts#L22)
