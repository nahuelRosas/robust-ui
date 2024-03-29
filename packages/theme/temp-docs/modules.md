[@robust-ui/theme](README.md) / Exports

# @robust-ui/theme

## Table of contents

### Type Aliases

- [RangeStrings](modules.md#rangestrings)
- [TColor](modules.md#tcolor)
- [TCommands](modules.md#tcommands)
- [TCommonProps](modules.md#tcommonprops)
- [TDefaultTheme](modules.md#tdefaulttheme)
- [TDisplay](modules.md#tdisplay)
- [TNumbers](modules.md#tnumbers)
- [TSizeProps](modules.md#tsizeprops)
- [TSizePropsOptimizedIncluded](modules.md#tsizepropsoptimizedincluded)
- [TSizes](modules.md#tsizes)
- [languageType](modules.md#languagetype)

### Variables

- [AtRules](modules.md#atrules)
- [CSSRulesSet](modules.md#cssrulesset)
- [Numbers](modules.md#numbers)
- [PseudoClasses](modules.md#pseudoclasses)
- [PseudoElements](modules.md#pseudoelements)
- [colors](modules.md#colors)
- [commands](modules.md#commands)
- [commonProps](modules.md#commonprops)
- [cssReset](modules.md#cssreset)
- [defaultTheme](modules.md#defaulttheme)
- [language](modules.md#language)
- [mediaBreakpoints](modules.md#mediabreakpoints)
- [selectors](modules.md#selectors)
- [sizeProps](modules.md#sizeprops)
- [sizes](modules.md#sizes)

## Type Aliases

### RangeStrings

Ƭ **RangeStrings**: `EnumerateRangeStrings`\<``300``\>

#### Defined in

[numbers/types.ts:16](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/numbers/types.ts#L16)

___

### TColor

Ƭ **TColor**: typeof [`colors`](modules.md#colors)

Represents the type for colors in the theme.

#### Defined in

[theme/colors.ts:188](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/theme/colors.ts#L188)

___

### TCommands

Ƭ **TCommands**: typeof [`commands`](modules.md#commands)

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
| `alignContent` | [`TCommonProps`](modules.md#tcommonprops) & \{ `baseline`: `string` ; `center`: `string` ; `end`: `string` ; `flexEnd`: `string` ; `flexStart`: `string` ; `normal`: `string` ; `spaceAround`: `string` ; `spaceBetween`: `string` ; `spaceEvenly`: `string` ; `start`: `string` ; `stretch`: `string`  } |
| `alignItems` | [`TCommonProps`](modules.md#tcommonprops) & \{ `baseline`: `string` ; `center`: `string` ; `end`: `string` ; `flexEnd`: `string` ; `flexStart`: `string` ; `normal`: `string` ; `selfEnd`: `string` ; `selfStart`: `string` ; `start`: `string` ; `stretch`: `string`  } |
| `alignSelf` | [`TCommonProps`](modules.md#tcommonprops) & \{ `auto`: `string` ; `baseline`: `string` ; `center`: `string` ; `end`: `string` ; `flexEnd`: `string` ; `flexStart`: `string` ; `normal`: `string` ; `selfEnd`: `string` ; `selfStart`: `string` ; `start`: `string` ; `stretch`: `string`  } |
| `animation` | [`TCommonProps`](modules.md#tcommonprops) |
| `animationDelay` | [`TCommonProps`](modules.md#tcommonprops) |
| `animationDirection` | [`TCommonProps`](modules.md#tcommonprops) |
| `animationDuration` | [`TCommonProps`](modules.md#tcommonprops) |
| `animationFillMode` | [`TCommonProps`](modules.md#tcommonprops) |
| `animationIterationCount` | [`TCommonProps`](modules.md#tcommonprops) |
| `animationName` | [`TCommonProps`](modules.md#tcommonprops) |
| `animationPlayState` | [`TCommonProps`](modules.md#tcommonprops) |
| `animationTimingFunction` | [`TCommonProps`](modules.md#tcommonprops) |
| `bBottomRadius` | [`TCommonProps`](modules.md#tcommonprops) |
| `bLeftRadius` | [`TCommonProps`](modules.md#tcommonprops) |
| `bRadius` | [`TCommonProps`](modules.md#tcommonprops) |
| `bRadiusBottom` | [`TCommonProps`](modules.md#tcommonprops) |
| `bRadiusBottomLeft` | [`TCommonProps`](modules.md#tcommonprops) |
| `bRadiusBottomRight` | [`TCommonProps`](modules.md#tcommonprops) |
| `bRadiusLeft` | [`TCommonProps`](modules.md#tcommonprops) |
| `bRadiusRight` | [`TCommonProps`](modules.md#tcommonprops) |
| `bRadiusTop` | [`TCommonProps`](modules.md#tcommonprops) |
| `bRadiusTopLeft` | [`TCommonProps`](modules.md#tcommonprops) |
| `bRadiusTopRight` | [`TCommonProps`](modules.md#tcommonprops) |
| `bRightRadius` | [`TCommonProps`](modules.md#tcommonprops) |
| `bTopRadius` | [`TCommonProps`](modules.md#tcommonprops) |
| `backdropBlendMode` | [`TCommonProps`](modules.md#tcommonprops) |
| `backdropBlur` | [`TCommonProps`](modules.md#tcommonprops) |
| `backdropBrightness` | [`TCommonProps`](modules.md#tcommonprops) |
| `backdropContrast` | [`TCommonProps`](modules.md#tcommonprops) |
| `backdropDropShadow` | [`TCommonProps`](modules.md#tcommonprops) |
| `backdropDropShadowBlur` | [`TCommonProps`](modules.md#tcommonprops) |
| `backdropDropShadowSpread` | [`TCommonProps`](modules.md#tcommonprops) |
| `backdropDropShadowX` | [`TCommonProps`](modules.md#tcommonprops) |
| `backdropDropShadowY` | [`TCommonProps`](modules.md#tcommonprops) |
| `backdropFilter` | [`TCommonProps`](modules.md#tcommonprops) |
| `backdropGrayscale` | [`TCommonProps`](modules.md#tcommonprops) |
| `backdropHueRotate` | [`TCommonProps`](modules.md#tcommonprops) |
| `backdropInvert` | [`TCommonProps`](modules.md#tcommonprops) |
| `backdropOpacity` | [`TCommonProps`](modules.md#tcommonprops) |
| `backdropSaturate` | [`TCommonProps`](modules.md#tcommonprops) |
| `backdropSepia` | [`TCommonProps`](modules.md#tcommonprops) |
| `backfaceVisibility` | [`TCommonProps`](modules.md#tcommonprops) |
| `background` | [`TColor`](modules.md#tcolor) |
| `backgroundClip` | [`TCommonProps`](modules.md#tcommonprops) |
| `backgroundClipText` | [`TCommonProps`](modules.md#tcommonprops) |
| `backgroundColor` | [`TColor`](modules.md#tcolor) |
| `backgroundTranslucent` | [`TCommonProps`](modules.md#tcommonprops) |
| `bg` | [`TColor`](modules.md#tcolor) |
| `border` | [`TCommonProps`](modules.md#tcommonprops) |
| `borderBlock` | [`TCommonProps`](modules.md#tcommonprops) & \{ `end`: `string` ; `start`: `string`  } |
| `borderColor` | [`TColor`](modules.md#tcolor) |
| `borderImage` | [`TCommonProps`](modules.md#tcommonprops) |
| `borderImageOutset` | [`TCommonProps`](modules.md#tcommonprops) |
| `borderImageRepeat` | [`TCommonProps`](modules.md#tcommonprops) & \{ `repeat`: `string` ; `round`: `string` ; `space`: `string` ; `stretch`: `string`  } |
| `borderImageSlice` | [`TCommonProps`](modules.md#tcommonprops) |
| `borderImageSource` | [`TCommonProps`](modules.md#tcommonprops) |
| `borderImageWidth` | [`TCommonProps`](modules.md#tcommonprops) & \{ `auto`: `string`  } |
| `borderRadius` | [`TCommonProps`](modules.md#tcommonprops) & [`TSizes`](modules.md#tsizes) |
| `bottom` | [`TSizeProps`](modules.md#tsizeprops) |
| `boxShadow` | [`TCommonProps`](modules.md#tcommonprops) |
| `boxShadowInset` | [`TCommonProps`](modules.md#tcommonprops) |
| `boxShadowX` | [`TCommonProps`](modules.md#tcommonprops) |
| `boxShadowY` | [`TCommonProps`](modules.md#tcommonprops) |
| `boxSizing` | [`TCommonProps`](modules.md#tcommonprops) & \{ `borderBox`: `string` ; `contentBox`: `string`  } |
| `clipPath` | [`TCommonProps`](modules.md#tcommonprops) |
| `clipRule` | [`TCommonProps`](modules.md#tcommonprops) |
| `color` | [`TColor`](modules.md#tcolor) |
| `colorInterpolation` | [`TColor`](modules.md#tcolor) |
| `colorRendering` | [`TColor`](modules.md#tcolor) |
| `columnCount` | [`TCommonProps`](modules.md#tcommonprops) |
| `columnGap` | [`TCommonProps`](modules.md#tcommonprops) |
| `columnRule` | [`TCommonProps`](modules.md#tcommonprops) |
| `columnSpan` | [`TCommonProps`](modules.md#tcommonprops) |
| `columnWidth` | [`TCommonProps`](modules.md#tcommonprops) |
| `cursor` | [`TCommonProps`](modules.md#tcommonprops) & \{ `alias`: `string` ; `allScroll`: `string` ; `auto`: `string` ; `cell`: `string` ; `colResize`: `string` ; `contextMenu`: `string` ; `copy`: `string` ; `crosshair`: `string` ; `default`: `string` ; `eResize`: `string` ; `ewResize`: `string` ; `grab`: `string` ; `grabbing`: `string` ; `help`: `string` ; `move`: `string` ; `nResize`: `string` ; `neResize`: `string` ; `neswResize`: `string` ; `noDrop`: `string` ; `none`: `string` ; `notAllowed`: `string` ; `nsResize`: `string` ; `nwResize`: `string` ; `nwseResize`: `string` ; `pointer`: `string` ; `progress`: `string` ; `rowResize`: `string` ; `sResize`: `string` ; `seResize`: `string` ; `swResize`: `string` ; `text`: `string` ; `verticalText`: `string` ; `wResize`: `string` ; `wait`: `string` ; `webkitGrab`: `string` ; `webkitGrabbing`: `string` ; `webkitZoomIn`: `string` ; `webkitZoomOut`: `string` ; `zoomIn`: `string` ; `zoomOut`: `string`  } |
| `display` | [`TDisplay`](modules.md#tdisplay) |
| `fillRule` | [`TCommonProps`](modules.md#tcommonprops) |
| `filter` | [`TCommonProps`](modules.md#tcommonprops) |
| `filterBlur` | [`TCommonProps`](modules.md#tcommonprops) |
| `filterBrightness` | [`TCommonProps`](modules.md#tcommonprops) |
| `filterContrast` | [`TCommonProps`](modules.md#tcommonprops) |
| `filterDropShadow` | [`TCommonProps`](modules.md#tcommonprops) |
| `filterGrayscale` | [`TCommonProps`](modules.md#tcommonprops) |
| `filterHueRotate` | [`TCommonProps`](modules.md#tcommonprops) |
| `filterInvert` | [`TCommonProps`](modules.md#tcommonprops) |
| `filterOpacity` | [`TCommonProps`](modules.md#tcommonprops) |
| `filterSaturate` | [`TCommonProps`](modules.md#tcommonprops) |
| `filterSepia` | [`TCommonProps`](modules.md#tcommonprops) |
| `flexDirection` | [`TCommonProps`](modules.md#tcommonprops) & \{ `column`: `string` ; `columnReverse`: `string` ; `row`: `string` ; `rowReverse`: `string`  } |
| `flexGrow` | [`TCommonProps`](modules.md#tcommonprops) |
| `flexShrink` | [`TCommonProps`](modules.md#tcommonprops) & \{ `revertLayer`: `string`  } |
| `flexWrap` | [`TCommonProps`](modules.md#tcommonprops) & \{ `noWrap`: `string` ; `wrap`: `string` ; `wrapReverse`: `string`  } |
| `fontColor` | [`TColor`](modules.md#tcolor) |
| `fontFeatureSettings` | [`TCommonProps`](modules.md#tcommonprops) |
| `fontSize` | [`TSizeProps`](modules.md#tsizeprops) & \{ `large`: `string` ; `medium`: `string` ; `small`: `string` ; `smaller`: `string` ; `webkitXxxLarge`: `string` ; `xLarge`: `string` ; `xSmall`: `string` ; `xxLarge`: `string` ; `xxSmall`: `string` ; `xxxLarge`: `string`  } |
| `fontStyle` | [`TCommonProps`](modules.md#tcommonprops) & \{ `italic`: `string` ; `normal`: `string` ; `oblique`: `string`  } |
| `fontVariant` | [`TCommonProps`](modules.md#tcommonprops) |
| `fontWeight` | [`TSizeProps`](modules.md#tsizeprops) & \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string` ; `bold`: `string` ; `bolder`: `string` ; `lighter`: `string` ; `normal`: `string`  } |
| `gap` | [`TCommonProps`](modules.md#tcommonprops) & [`TSizes`](modules.md#tsizes) |
| `gridAutoColumns` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridAutoColumnsMax` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridAutoColumnsMin` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridAutoFlow` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridAutoRows` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridAutoRowsMax` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridAutoRowsMin` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridColumn` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridColumnEnd` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridColumnEndMax` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridColumnEndMin` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridColumnGap` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridColumnStart` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridColumnStartEnd` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridColumnStartMax` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridColumnStartMin` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridGap` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridRow` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridRowEnd` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridRowEndMax` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridRowEndMin` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridRowGap` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridRowStart` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridRowStartEnd` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridRowStartMax` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridRowStartMin` | [`TCommonProps`](modules.md#tcommonprops) |
| `gridTemplateColumns` | [`TCommonProps`](modules.md#tcommonprops) & \{ `auto`: `string` ; `maxContent`: `string` ; `minContent`: `string` ; `none`: `string`  } |
| `gridTemplateRows` | [`TCommonProps`](modules.md#tcommonprops) & \{ `auto`: `string` ; `maxContent`: `string` ; `minContent`: `string` ; `none`: `string`  } |
| `height` | [`TSizePropsOptimizedIncluded`](modules.md#tsizepropsoptimizedincluded) |
| `hyphens` | [`TCommonProps`](modules.md#tcommonprops) |
| `imageRendering` | [`TCommonProps`](modules.md#tcommonprops) |
| `isolation` | [`TCommonProps`](modules.md#tcommonprops) |
| `justifyContent` | [`TCommonProps`](modules.md#tcommonprops) & \{ `center`: `string` ; `end`: `string` ; `flexEnd`: `string` ; `flexStart`: `string` ; `left`: `string` ; `normal`: `string` ; `right`: `string` ; `spaceAround`: `string` ; `spaceBetween`: `string` ; `spaceEvenly`: `string` ; `start`: `string` ; `stretch`: `string`  } |
| `justifyItems` | [`TCommonProps`](modules.md#tcommonprops) & \{ `auto`: `string` ; `baseline`: `string` ; `center`: `string` ; `end`: `string` ; `start`: `string` ; `stretch`: `string`  } |
| `justifySelf` | [`TCommonProps`](modules.md#tcommonprops) |
| `left` | [`TSizeProps`](modules.md#tsizeprops) |
| `letterSpacing` | [`TCommonProps`](modules.md#tcommonprops) |
| `lineHeight` | [`TCommonProps`](modules.md#tcommonprops) & \{ `mozBlockHeight`: `string` ; `normal`: `string` ; `revertLayer`: `string`  } & [`TSizes`](modules.md#tsizes) |
| `linearColor` | [`TColor`](modules.md#tcolor) |
| `listStyleImage` | [`TCommonProps`](modules.md#tcommonprops) |
| `listStylePosition` | [`TCommonProps`](modules.md#tcommonprops) |
| `listStyleType` | [`TCommonProps`](modules.md#tcommonprops) |
| `m` | [`TSizeProps`](modules.md#tsizeprops) |
| `margin` | [`TSizeProps`](modules.md#tsizeprops) |
| `marginBottom` | [`TSizeProps`](modules.md#tsizeprops) |
| `marginLeft` | [`TSizeProps`](modules.md#tsizeprops) |
| `marginRight` | [`TSizeProps`](modules.md#tsizeprops) |
| `marginTop` | [`TSizeProps`](modules.md#tsizeprops) |
| `maskBorder` | [`TCommonProps`](modules.md#tcommonprops) |
| `maskBorderOutset` | [`TCommonProps`](modules.md#tcommonprops) |
| `maskBorderRepeat` | [`TCommonProps`](modules.md#tcommonprops) |
| `maskBorderRepeatX` | [`TCommonProps`](modules.md#tcommonprops) |
| `maskBorderRepeatY` | [`TCommonProps`](modules.md#tcommonprops) |
| `maskBorderSlice` | [`TCommonProps`](modules.md#tcommonprops) |
| `maskBorderSource` | [`TCommonProps`](modules.md#tcommonprops) |
| `maskBorderWidth` | [`TCommonProps`](modules.md#tcommonprops) |
| `maskClip` | [`TCommonProps`](modules.md#tcommonprops) |
| `maskComposite` | [`TCommonProps`](modules.md#tcommonprops) |
| `maskImage` | [`TCommonProps`](modules.md#tcommonprops) |
| `maskOrigin` | [`TCommonProps`](modules.md#tcommonprops) |
| `maskPosition` | [`TCommonProps`](modules.md#tcommonprops) |
| `maskRepeat` | [`TCommonProps`](modules.md#tcommonprops) |
| `maskSize` | [`TCommonProps`](modules.md#tcommonprops) |
| `maskType` | [`TCommonProps`](modules.md#tcommonprops) |
| `maxH` | [`TSizeProps`](modules.md#tsizeprops) |
| `maxHeight` | [`TSizeProps`](modules.md#tsizeprops) |
| `maxLines` | [`TCommonProps`](modules.md#tcommonprops) |
| `maxW` | [`TSizeProps`](modules.md#tsizeprops) |
| `maxWidth` | [`TSizeProps`](modules.md#tsizeprops) |
| `mb` | [`TSizeProps`](modules.md#tsizeprops) |
| `minH` | [`TSizeProps`](modules.md#tsizeprops) |
| `minHeight` | [`TSizeProps`](modules.md#tsizeprops) |
| `minW` | [`TSizeProps`](modules.md#tsizeprops) |
| `minWidth` | [`TSizeProps`](modules.md#tsizeprops) |
| `mixBlendMode` | [`TCommonProps`](modules.md#tcommonprops) |
| `ml` | [`TSizeProps`](modules.md#tsizeprops) |
| `mr` | [`TSizeProps`](modules.md#tsizeprops) |
| `mt` | [`TSizeProps`](modules.md#tsizeprops) |
| `mx` | [`TSizeProps`](modules.md#tsizeprops) |
| `my` | [`TSizeProps`](modules.md#tsizeprops) |
| `objectFit` | [`TCommonProps`](modules.md#tcommonprops) & \{ `contain`: `string` ; `cover`: `string` ; `fill`: `string` ; `none`: `string` ; `scaleDown`: `string`  } |
| `objectPosition` | [`TCommonProps`](modules.md#tcommonprops) & \{ `bottom`: `string` ; `center`: `string` ; `left`: `string` ; `right`: `string` ; `top`: `string`  } |
| `opacity` | [`TCommonProps`](modules.md#tcommonprops) |
| `overflow` | [`TCommonProps`](modules.md#tcommonprops) & \{ `auto`: `string` ; `clip`: `string` ; `hidden`: `string` ; `revertLayer`: `string` ; `scroll`: `string` ; `visible`: `string`  } |
| `overflowX` | [`TCommonProps`](modules.md#tcommonprops) & \{ `auto`: `string` ; `clip`: `string` ; `hidden`: `string` ; `revertLayer`: `string` ; `scroll`: `string` ; `visible`: `string`  } |
| `overflowY` | [`TCommonProps`](modules.md#tcommonprops) & \{ `auto`: `string` ; `clip`: `string` ; `hidden`: `string` ; `revertLayer`: `string` ; `scroll`: `string` ; `visible`: `string`  } |
| `overscrollBehavior` | [`TCommonProps`](modules.md#tcommonprops) |
| `overscrollBehaviorX` | [`TCommonProps`](modules.md#tcommonprops) |
| `overscrollBehaviorY` | [`TCommonProps`](modules.md#tcommonprops) |
| `p` | [`TSizeProps`](modules.md#tsizeprops) |
| `padding` | [`TSizeProps`](modules.md#tsizeprops) |
| `paddingBottom` | [`TSizeProps`](modules.md#tsizeprops) |
| `paddingLeft` | [`TSizeProps`](modules.md#tsizeprops) |
| `paddingRight` | [`TSizeProps`](modules.md#tsizeprops) |
| `paddingTop` | [`TSizeProps`](modules.md#tsizeprops) |
| `pb` | [`TSizeProps`](modules.md#tsizeprops) |
| `perspective` | [`TCommonProps`](modules.md#tcommonprops) |
| `perspectiveOrigin` | [`TCommonProps`](modules.md#tcommonprops) |
| `pl` | [`TSizeProps`](modules.md#tsizeprops) |
| `placeContent` | [`TCommonProps`](modules.md#tcommonprops) |
| `placeHolderColor` | [`TColor`](modules.md#tcolor) |
| `placeItems` | [`TCommonProps`](modules.md#tcommonprops) |
| `placeSelf` | [`TCommonProps`](modules.md#tcommonprops) |
| `pointerEvents` | [`TCommonProps`](modules.md#tcommonprops) & \{ `all`: `string` ; `auto`: `string` ; `boundingBox`: `string` ; `fill`: `string` ; `none`: `string` ; `painted`: `string` ; `stroke`: `string` ; `visible`: `string` ; `visibleFill`: `string` ; `visiblePainted`: `string` ; `visibleStroke`: `string`  } |
| `position` | [`TCommonProps`](modules.md#tcommonprops) & \{ `absolute`: `string` ; `fixed`: `string` ; `relative`: `string` ; `static`: `string` ; `sticky`: `string`  } |
| `pr` | [`TSizeProps`](modules.md#tsizeprops) |
| `pt` | [`TSizeProps`](modules.md#tsizeprops) |
| `px` | [`TSizeProps`](modules.md#tsizeprops) |
| `py` | [`TSizeProps`](modules.md#tsizeprops) |
| `resize` | [`TCommonProps`](modules.md#tcommonprops) |
| `right` | [`TSizeProps`](modules.md#tsizeprops) |
| `scrollBehavior` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollMargin` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollMarginBlock` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollMarginBlockEnd` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollMarginBlockStart` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollMarginInline` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollMarginInlineEnd` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollMarginInlineStart` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollSnapAlign` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollSnapAlignX` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollSnapAlignY` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollSnapPointsX` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollSnapPointsY` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollSnapStop` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollSnapStopX` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollSnapStopY` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollSnapType` | [`TCommonProps`](modules.md#tcommonprops) |
| `scrollbarColor` | [`TColor`](modules.md#tcolor) |
| `scrollbarWidth` | [`TCommonProps`](modules.md#tcommonprops) & \{ `auto`: `string` ; `none`: `string` ; `revertLayer`: `string` ; `thin`: `string`  } |
| `shapeImageThreshold` | [`TCommonProps`](modules.md#tcommonprops) |
| `shapeMargin` | [`TCommonProps`](modules.md#tcommonprops) |
| `shapeOutside` | [`TCommonProps`](modules.md#tcommonprops) |
| `shapeRendering` | [`TCommonProps`](modules.md#tcommonprops) |
| `textAlign` | [`TCommonProps`](modules.md#tcommonprops) & \{ `center`: `string` ; `end`: `string` ; `justify`: `string` ; `left`: `string` ; `right`: `string` ; `start`: `string` ; `webkitAuto`: `string` ; `webkitCenter`: `string` ; `webkitLeft`: `string` ; `webkitMatchParent`: `string` ; `webkitRight`: `string`  } |
| `textAlignLast` | [`TCommonProps`](modules.md#tcommonprops) |
| `textDecoration` | [`TCommonProps`](modules.md#tcommonprops) & \{ `auto`: `string` ; `blink`: `string` ; `dashed`: `string` ; `double`: `string` ; `lineThrough`: `string` ; `none`: `string` ; `overline`: `string` ; `revertLayer`: `string` ; `solid`: `string` ; `underline`: `string` ; `wavy`: `string`  } |
| `textDecorationColor` | [`TColor`](modules.md#tcolor) |
| `textDecorationLine` | [`TCommonProps`](modules.md#tcommonprops) & \{ `blink`: `string` ; `lineThrough`: `string` ; `overline`: `string` ; `underline`: `string`  } |
| `textDecorationSkipInk` | [`TCommonProps`](modules.md#tcommonprops) |
| `textDecorationStyle` | [`TCommonProps`](modules.md#tcommonprops) & \{ `dashed`: `string` ; `dotted`: `string` ; `double`: `string` ; `solid`: `string` ; `wavy`: `string`  } |
| `textEmphasis` | [`TCommonProps`](modules.md#tcommonprops) & \{ `accent`: `string` ; `circle`: `string` ; `disc`: `string` ; `dot`: `string` ; `none`: `string`  } |
| `textEmphasisColor` | [`TColor`](modules.md#tcolor) |
| `textEmphasisPosition` | [`TCommonProps`](modules.md#tcommonprops) |
| `textEmphasisStyle` | [`TCommonProps`](modules.md#tcommonprops) |
| `textFillColor` | [`TColor`](modules.md#tcolor) |
| `textIndent` | [`TSizeProps`](modules.md#tsizeprops) & [`TCommonProps`](modules.md#tcommonprops) & \{ `revertLayer`: `string`  } |
| `textJustify` | [`TCommonProps`](modules.md#tcommonprops) |
| `textOverflow` | [`TCommonProps`](modules.md#tcommonprops) & \{ `clip`: `string` ; `ellipsis`: `string` ; `revertLayer`: `string`  } |
| `textRendering` | [`TCommonProps`](modules.md#tcommonprops) & \{ `auto`: `string` ; `geometricPrecision`: `string` ; `optimizeLegibility`: `string` ; `optimizeSpeed`: `string` ; `revertLayer`: `string`  } |
| `textShadow` | [`TCommonProps`](modules.md#tcommonprops) |
| `textTransform` | [`TCommonProps`](modules.md#tcommonprops) & \{ `capitalize`: `string` ; `lowercase`: `string` ; `mathAuto`: `string` ; `none`: `string` ; `uppercase`: `string` ; `upset`: `string`  } |
| `textUnderlineOffset` | [`TCommonProps`](modules.md#tcommonprops) & \{ `auto`: `string`  } |
| `textWrap` | [`TCommonProps`](modules.md#tcommonprops) & \{ `balance`: `string` ; `noWrap`: `string` ; `pretty`: `string` ; `wrap`: `string`  } |
| `top` | [`TSizeProps`](modules.md#tsizeprops) |
| `transform` | [`TCommonProps`](modules.md#tcommonprops) |
| `transformOrigin` | [`TCommonProps`](modules.md#tcommonprops) |
| `transformStyle` | [`TCommonProps`](modules.md#tcommonprops) & \{ `flat`: `string` ; `preserve3d`: `string`  } |
| `transition` | [`TCommonProps`](modules.md#tcommonprops) |
| `transitionDelay` | [`TCommonProps`](modules.md#tcommonprops) |
| `transitionDuration` | [`TCommonProps`](modules.md#tcommonprops) |
| `transitionDurationTiming` | [`TCommonProps`](modules.md#tcommonprops) |
| `transitionProperty` | [`TCommonProps`](modules.md#tcommonprops) |
| `transitionTiming` | [`TCommonProps`](modules.md#tcommonprops) |
| `transitionTimingFunction` | [`TCommonProps`](modules.md#tcommonprops) |
| `userDrag` | [`TCommonProps`](modules.md#tcommonprops) |
| `userFocus` | [`TCommonProps`](modules.md#tcommonprops) |
| `userResize` | [`TCommonProps`](modules.md#tcommonprops) |
| `userSelect` | [`TCommonProps`](modules.md#tcommonprops) & \{ `all`: `string` ; `auto`: `string` ; `contain`: `string` ; `none`: `string` ; `revertLayer`: `string` ; `text`: `string`  } |
| `userSelectAll` | [`TCommonProps`](modules.md#tcommonprops) |
| `userSelectAuto` | [`TCommonProps`](modules.md#tcommonprops) |
| `userSelectNone` | [`TCommonProps`](modules.md#tcommonprops) |
| `userSelectText` | [`TCommonProps`](modules.md#tcommonprops) |
| `userZoom` | [`TCommonProps`](modules.md#tcommonprops) |
| `whiteSpace` | [`TCommonProps`](modules.md#tcommonprops) & \{ `breakSpaces`: `string` ; `mozPreSpace`: `string` ; `normal`: `string` ; `nowrap`: `string` ; `pre`: `string` ; `preLine`: `string` ; `preWrap`: `string` ; `revertLayer`: `string`  } |
| `width` | [`TSizePropsOptimizedIncluded`](modules.md#tsizepropsoptimizedincluded) |
| `willChange` | [`TCommonProps`](modules.md#tcommonprops) |
| `willChangeProperty` | [`TCommonProps`](modules.md#tcommonprops) |
| `wordBreak` | [`TCommonProps`](modules.md#tcommonprops) |
| `wordSpacing` | [`TCommonProps`](modules.md#tcommonprops) |
| `wordWrap` | [`TCommonProps`](modules.md#tcommonprops) |
| `zIndex` | [`TCommonProps`](modules.md#tcommonprops) & [`TNumbers`](modules.md#tnumbers) |

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

Ƭ **TNumbers**: typeof [`Numbers`](modules.md#numbers)

Represents the type of the Numbers object.

#### Defined in

[numbers/index.ts:18](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/numbers/index.ts#L18)

___

### TSizeProps

Ƭ **TSizeProps**: [`TCommonProps`](modules.md#tcommonprops) & [`TSizes`](modules.md#tsizes) & \{ `0`: `string` ; `fitContent`: `string` ; `maxContent`: `string` ; `minContent`: `string` ; `mozAvailable`: `string` ; `webkitFillAvailable`: `string`  }

Represents the size properties for a component.

#### Defined in

[theme/types.ts:47](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/theme/types.ts#L47)

___

### TSizePropsOptimizedIncluded

Ƭ **TSizePropsOptimizedIncluded**: [`TSizeProps`](modules.md#tsizeprops) & \{ `optimizedHeight?`: `string` ; `optimizedWidth?`: `string`  }

Represents a type that includes additional properties for optimized width and height,
in addition to the properties defined in TSizeProps.

#### Defined in

[theme/types.ts:61](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/theme/types.ts#L61)

___

### TSizes

Ƭ **TSizes**: typeof [`sizes`](modules.md#sizes)

Represents the type of the `sizes` object.

#### Defined in

[sizes/index.ts:50](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/sizes/index.ts#L50)

___

### languageType

Ƭ **languageType**: keyof typeof [`language`](modules.md#language)

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

• `Const` **commonProps**: [`TCommonProps`](modules.md#tcommonprops)

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

• `Const` **defaultTheme**: [`TDefaultTheme`](modules.md#tdefaulttheme)

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

• `Const` **sizeProps**: [`TSizeProps`](modules.md#tsizeprops)

Size properties for the theme.

#### Defined in

[theme/index.ts:23](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/theme/index.ts#L23)

___

### sizes

• `Const` **sizes**: `TSize`

Represents a collection of sizes used in the theme.

#### Defined in

[sizes/index.ts:22](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/theme/src/sizes/index.ts#L22)
