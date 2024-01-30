[@robust-ui/theme](README.md) / Exports

# @robust-ui/theme

## Table of contents

### Type Aliases

- [TColor](modules.md#tcolor)
- [TCommands](modules.md#tcommands)
- [TNumbers](modules.md#tnumbers)
- [TSizes](modules.md#tsizes)
- [languageType](modules.md#languagetype)

### Variables

- [AtRules](modules.md#atrules)
- [CSSRulesSet](modules.md#cssrulesset)
- [PseudoClasses](modules.md#pseudoclasses)
- [PseudoElements](modules.md#pseudoelements)
- [colors](modules.md#colors)
- [commands](modules.md#commands)
- [cssReset](modules.md#cssreset)
- [defaultTheme](modules.md#defaulttheme)
- [language](modules.md#language)
- [mediaBreakpoints](modules.md#mediabreakpoints)
- [numbers](modules.md#numbers)
- [selectors](modules.md#selectors)
- [sizes](modules.md#sizes)

## Type Aliases

### TColor

Ƭ **TColor**: typeof [`colors`](modules.md#colors)

#### Defined in

[theme/colors.ts:181](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/theme/colors.ts#L181)

___

### TCommands

Ƭ **TCommands**: typeof [`commands`](modules.md#commands)

#### Defined in

[commands/index.ts:621](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/commands/index.ts#L621)

___

### TNumbers

Ƭ **TNumbers**: typeof [`numbers`](modules.md#numbers)

#### Defined in

[theme/numbers.ts:93](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/theme/numbers.ts#L93)

___

### TSizes

Ƭ **TSizes**: typeof [`sizes`](modules.md#sizes)

#### Defined in

[theme/sizes.ts:471](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/theme/sizes.ts#L471)

___

### languageType

Ƭ **languageType**: keyof typeof [`language`](modules.md#language)

#### Defined in

[index.ts:2](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/index.ts#L2)

## Variables

### AtRules

• `Const` **AtRules**: `Object`

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

[css-rules-set/index.ts:1](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/css-rules-set/index.ts#L1)

___

### CSSRulesSet

• `Const` **CSSRulesSet**: `Object`

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

[css-rules-set/index.ts:149](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/css-rules-set/index.ts#L149)

___

### PseudoClasses

• `Const` **PseudoClasses**: `Object`

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

[css-rules-set/index.ts:72](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/css-rules-set/index.ts#L72)

___

### PseudoElements

• `Const` **PseudoElements**: `Object`

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

[css-rules-set/index.ts:23](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/css-rules-set/index.ts#L23)

___

### colors

• `Const` **colors**: `Object`

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

[theme/colors.ts:1](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/theme/colors.ts#L1)

___

### commands

• `Const` **commands**: `Object`

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

[commands/index.ts:8](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/commands/index.ts#L8)

___

### cssReset

• `Const` **cssReset**: ``"/*DO NOT EDIT THIS FILE DIRECTLY, IT IS GENERATED BY ROBUST-UI*/html{line-height:1.15;-webkit-text-size-adjust:100%;height:100%;margin:0;padding:0;}body{height:100%;margin:0;padding:0;}main{display:block;}h1{font-size:2em;margin:0;}p{margin:0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underlinedotted;}b{font-weight:bolder;}strong{font-weight:bolder;}code{font-family:monospace,monospace;font-size:1em;}kbd{font-family:monospace,monospace;font-size:1em;}samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}input{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}optgroup{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}select{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button{overflow:visible;}input{overflow:visible;}button{text-transform:none;}select{text-transform:none;}button{-webkit-appearance:button;appearance:button;}[type=\"button\"]{-webkit-appearance:button;appearance:button;}[type=\"reset\"]{-webkit-appearance:button;appearance:button;}[type=\"submit\"]{-webkit-appearance:button;appearance:button;}button::-moz-focus-inner{border-style:none;padding:0;}[type=\"button\"]::-moz-focus-inner{border-style:none;padding:0;}[type=\"reset\"]::-moz-focus-inner{border-style:none;padding:0;}[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring{outline:1pxdottedButtonText;}[type=\"button\"]:-moz-focusring{outline:1pxdottedButtonText;}[type=\"reset\"]:-moz-focusring{outline:1pxdottedButtonText;}[type=\"submit\"]:-moz-focusring{outline:1pxdottedButtonText;}fieldset{padding:0.35em0.75em0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type=\"checkbox\"]{box-sizing:border-box;padding:0;}[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button{height:auto;}[type=\"number\"]::-webkit-outer-spin-button{height:auto;}[type=\"search\"]{-webkit-appearance:textfield;appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}*{-webkit-tap-highlight-color:transparent;}"``

#### Defined in

[css-reset/index.ts:1](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/css-reset/index.ts#L1)

___

### defaultTheme

• `Const` **defaultTheme**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alignContent` | `TCommonProps` & \{ `baseline`: `string` ; `center`: `string` ; `end`: `string` ; `flexEnd`: `string` ; `flexStart`: `string` ; `normal`: `string` ; `spaceAround`: `string` ; `spaceBetween`: `string` ; `spaceEvenly`: `string` ; `start`: `string` ; `stretch`: `string`  } |
| `alignItems` | `TCommonProps` & \{ `baseline`: `string` ; `center`: `string` ; `end`: `string` ; `flexEnd`: `string` ; `flexStart`: `string` ; `normal`: `string` ; `selfEnd`: `string` ; `selfStart`: `string` ; `start`: `string` ; `stretch`: `string`  } |
| `alignSelf` | `TCommonProps` & \{ `auto`: `string` ; `baseline`: `string` ; `center`: `string` ; `end`: `string` ; `flexEnd`: `string` ; `flexStart`: `string` ; `normal`: `string` ; `selfEnd`: `string` ; `selfStart`: `string` ; `start`: `string` ; `stretch`: `string`  } |
| `animation` | `TCommonProps` |
| `animationDelay` | `TCommonProps` |
| `animationDirection` | `TCommonProps` |
| `animationDuration` | `TCommonProps` |
| `animationFillMode` | `TCommonProps` |
| `animationIterationCount` | `TCommonProps` |
| `animationName` | `TCommonProps` |
| `animationPlayState` | `TCommonProps` |
| `animationTimingFunction` | `TCommonProps` |
| `bBottomRadius` | `TCommonProps` |
| `bLeftRadius` | `TCommonProps` |
| `bRadius` | `TCommonProps` |
| `bRadiusBottom` | `TCommonProps` |
| `bRadiusBottomLeft` | `TCommonProps` |
| `bRadiusBottomRight` | `TCommonProps` |
| `bRadiusLeft` | `TCommonProps` |
| `bRadiusRight` | `TCommonProps` |
| `bRadiusTop` | `TCommonProps` |
| `bRadiusTopLeft` | `TCommonProps` |
| `bRadiusTopRight` | `TCommonProps` |
| `bRightRadius` | `TCommonProps` |
| `bTopRadius` | `TCommonProps` |
| `backdropBlendMode` | `TCommonProps` |
| `backdropBlur` | `TCommonProps` |
| `backdropBrightness` | `TCommonProps` |
| `backdropContrast` | `TCommonProps` |
| `backdropDropShadow` | `TCommonProps` |
| `backdropDropShadowBlur` | `TCommonProps` |
| `backdropDropShadowSpread` | `TCommonProps` |
| `backdropDropShadowX` | `TCommonProps` |
| `backdropDropShadowY` | `TCommonProps` |
| `backdropFilter` | `TCommonProps` |
| `backdropGrayscale` | `TCommonProps` |
| `backdropHueRotate` | `TCommonProps` |
| `backdropInvert` | `TCommonProps` |
| `backdropOpacity` | `TCommonProps` |
| `backdropSaturate` | `TCommonProps` |
| `backdropSepia` | `TCommonProps` |
| `backfaceVisibility` | `TCommonProps` |
| `background` | [`TColor`](modules.md#tcolor) |
| `backgroundClip` | `TCommonProps` |
| `backgroundClipText` | `TCommonProps` |
| `backgroundColor` | [`TColor`](modules.md#tcolor) |
| `backgroundTranslucent` | `TCommonProps` |
| `bg` | [`TColor`](modules.md#tcolor) |
| `border` | `TCommonProps` |
| `borderBlock` | `TCommonProps` & \{ `end`: `string` ; `start`: `string`  } |
| `borderColor` | [`TColor`](modules.md#tcolor) |
| `borderImage` | `TCommonProps` |
| `borderImageOutset` | `TCommonProps` |
| `borderImageRepeat` | `TCommonProps` & \{ `repeat`: `string` ; `round`: `string` ; `space`: `string` ; `stretch`: `string`  } |
| `borderImageSlice` | `TCommonProps` |
| `borderImageSource` | `TCommonProps` |
| `borderImageWidth` | `TCommonProps` & \{ `auto`: `string`  } |
| `borderRadius` | `TCommonProps` & [`TSizes`](modules.md#tsizes) |
| `bottom` | `TNumberSizeProps` |
| `boxShadow` | `TCommonProps` |
| `boxShadowInset` | `TCommonProps` |
| `boxShadowX` | `TCommonProps` |
| `boxShadowY` | `TCommonProps` |
| `boxSizing` | `TCommonProps` & \{ `borderBox`: `string` ; `contentBox`: `string`  } |
| `clipPath` | `TCommonProps` |
| `clipRule` | `TCommonProps` |
| `color` | [`TColor`](modules.md#tcolor) |
| `colorInterpolation` | [`TColor`](modules.md#tcolor) |
| `colorRendering` | [`TColor`](modules.md#tcolor) |
| `columnCount` | `TCommonProps` |
| `columnGap` | `TCommonProps` |
| `columnRule` | `TCommonProps` |
| `columnSpan` | `TCommonProps` |
| `columnWidth` | `TCommonProps` |
| `cursor` | `TCommonProps` & \{ `alias`: `string` ; `allScroll`: `string` ; `auto`: `string` ; `cell`: `string` ; `colResize`: `string` ; `contextMenu`: `string` ; `copy`: `string` ; `crosshair`: `string` ; `default`: `string` ; `eResize`: `string` ; `ewResize`: `string` ; `grab`: `string` ; `grabbing`: `string` ; `help`: `string` ; `move`: `string` ; `nResize`: `string` ; `neResize`: `string` ; `neswResize`: `string` ; `noDrop`: `string` ; `none`: `string` ; `notAllowed`: `string` ; `nsResize`: `string` ; `nwResize`: `string` ; `nwseResize`: `string` ; `pointer`: `string` ; `progress`: `string` ; `rowResize`: `string` ; `sResize`: `string` ; `seResize`: `string` ; `swResize`: `string` ; `text`: `string` ; `verticalText`: `string` ; `wResize`: `string` ; `wait`: `string` ; `webkitGrab`: `string` ; `webkitGrabbing`: `string` ; `webkitZoomIn`: `string` ; `webkitZoomOut`: `string` ; `zoomIn`: `string` ; `zoomOut`: `string`  } |
| `display` | `TDisplay` |
| `fillRule` | `TCommonProps` |
| `filter` | `TCommonProps` |
| `filterBlur` | `TCommonProps` |
| `filterBrightness` | `TCommonProps` |
| `filterContrast` | `TCommonProps` |
| `filterDropShadow` | `TCommonProps` |
| `filterGrayscale` | `TCommonProps` |
| `filterHueRotate` | `TCommonProps` |
| `filterInvert` | `TCommonProps` |
| `filterOpacity` | `TCommonProps` |
| `filterSaturate` | `TCommonProps` |
| `filterSepia` | `TCommonProps` |
| `flexDirection` | `TCommonProps` & \{ `column`: `string` ; `columnReverse`: `string` ; `row`: `string` ; `rowReverse`: `string`  } |
| `flexGrow` | `TCommonProps` |
| `flexShrink` | `TCommonProps` & \{ `revertLayer`: `string`  } |
| `flexWrap` | `TCommonProps` & \{ `noWrap`: `string` ; `wrap`: `string` ; `wrapReverse`: `string`  } |
| `fontColor` | [`TColor`](modules.md#tcolor) |
| `fontFeatureSettings` | `TCommonProps` |
| `fontSize` | `TSizeProps` & \{ `large`: `string` ; `medium`: `string` ; `small`: `string` ; `smaller`: `string` ; `webkitXxxLarge`: `string` ; `xLarge`: `string` ; `xSmall`: `string` ; `xxLarge`: `string` ; `xxSmall`: `string` ; `xxxLarge`: `string`  } |
| `fontStyle` | `TCommonProps` & \{ `italic`: `string` ; `normal`: `string` ; `oblique`: `string`  } |
| `fontVariant` | `TCommonProps` |
| `fontWeight` | `TSizeProps` & \{ `100`: `string` ; `200`: `string` ; `300`: `string` ; `400`: `string` ; `500`: `string` ; `600`: `string` ; `700`: `string` ; `800`: `string` ; `900`: `string` ; `bold`: `string` ; `bolder`: `string` ; `lighter`: `string` ; `normal`: `string`  } |
| `gap` | `TCommonProps` & [`TSizes`](modules.md#tsizes) |
| `gridAutoColumns` | `TCommonProps` |
| `gridAutoColumnsMax` | `TCommonProps` |
| `gridAutoColumnsMin` | `TCommonProps` |
| `gridAutoFlow` | `TCommonProps` |
| `gridAutoRows` | `TCommonProps` |
| `gridAutoRowsMax` | `TCommonProps` |
| `gridAutoRowsMin` | `TCommonProps` |
| `gridColumn` | `TCommonProps` |
| `gridColumnEnd` | `TCommonProps` |
| `gridColumnEndMax` | `TCommonProps` |
| `gridColumnEndMin` | `TCommonProps` |
| `gridColumnGap` | `TCommonProps` |
| `gridColumnStart` | `TCommonProps` |
| `gridColumnStartEnd` | `TCommonProps` |
| `gridColumnStartMax` | `TCommonProps` |
| `gridColumnStartMin` | `TCommonProps` |
| `gridGap` | `TCommonProps` |
| `gridRow` | `TCommonProps` |
| `gridRowEnd` | `TCommonProps` |
| `gridRowEndMax` | `TCommonProps` |
| `gridRowEndMin` | `TCommonProps` |
| `gridRowGap` | `TCommonProps` |
| `gridRowStart` | `TCommonProps` |
| `gridRowStartEnd` | `TCommonProps` |
| `gridRowStartMax` | `TCommonProps` |
| `gridRowStartMin` | `TCommonProps` |
| `gridTemplateColumns` | `TCommonProps` & \{ `auto`: `string` ; `maxContent`: `string` ; `minContent`: `string` ; `none`: `string`  } |
| `gridTemplateRows` | `TCommonProps` & \{ `auto`: `string` ; `maxContent`: `string` ; `minContent`: `string` ; `none`: `string`  } |
| `height` | `TSizePropsOptimizedIncluded` |
| `hyphens` | `TCommonProps` |
| `imageRendering` | `TCommonProps` |
| `isolation` | `TCommonProps` |
| `justifyContent` | `TCommonProps` & \{ `center`: `string` ; `end`: `string` ; `flexEnd`: `string` ; `flexStart`: `string` ; `left`: `string` ; `normal`: `string` ; `right`: `string` ; `spaceAround`: `string` ; `spaceBetween`: `string` ; `spaceEvenly`: `string` ; `start`: `string` ; `stretch`: `string`  } |
| `justifyItems` | `TCommonProps` & \{ `auto`: `string` ; `baseline`: `string` ; `center`: `string` ; `end`: `string` ; `start`: `string` ; `stretch`: `string`  } |
| `justifySelf` | `TCommonProps` |
| `left` | `TNumberSizeProps` |
| `letterSpacing` | `TCommonProps` |
| `lineHeight` | `TCommonProps` & \{ `mozBlockHeight`: `string` ; `normal`: `string` ; `revertLayer`: `string`  } |
| `linearColor` | [`TColor`](modules.md#tcolor) |
| `listStyleImage` | `TCommonProps` |
| `listStylePosition` | `TCommonProps` |
| `listStyleType` | `TCommonProps` |
| `m` | `TSizeProps` |
| `margin` | `TSizeProps` |
| `marginBottom` | `TSizeProps` |
| `marginLeft` | `TSizeProps` |
| `marginRight` | `TSizeProps` |
| `marginTop` | `TSizeProps` |
| `maskBorder` | `TCommonProps` |
| `maskBorderOutset` | `TCommonProps` |
| `maskBorderRepeat` | `TCommonProps` |
| `maskBorderRepeatX` | `TCommonProps` |
| `maskBorderRepeatY` | `TCommonProps` |
| `maskBorderSlice` | `TCommonProps` |
| `maskBorderSource` | `TCommonProps` |
| `maskBorderWidth` | `TCommonProps` |
| `maskClip` | `TCommonProps` |
| `maskComposite` | `TCommonProps` |
| `maskImage` | `TCommonProps` |
| `maskOrigin` | `TCommonProps` |
| `maskPosition` | `TCommonProps` |
| `maskRepeat` | `TCommonProps` |
| `maskSize` | `TCommonProps` |
| `maskType` | `TCommonProps` |
| `maxH` | `TSizeProps` |
| `maxHeight` | `TSizeProps` |
| `maxLines` | `TCommonProps` |
| `maxW` | `TSizeProps` |
| `maxWidth` | `TSizeProps` |
| `mb` | `TSizeProps` |
| `minH` | `TSizeProps` |
| `minHeight` | `TSizeProps` |
| `minW` | `TSizeProps` |
| `minWidth` | `TSizeProps` |
| `mixBlendMode` | `TCommonProps` |
| `ml` | `TSizeProps` |
| `mr` | `TSizeProps` |
| `mt` | `TSizeProps` |
| `mx` | `TSizeProps` |
| `my` | `TSizeProps` |
| `objectFit` | `TCommonProps` & \{ `contain`: `string` ; `cover`: `string` ; `fill`: `string` ; `none`: `string` ; `scaleDown`: `string`  } |
| `objectPosition` | `TCommonProps` & \{ `bottom`: `string` ; `center`: `string` ; `left`: `string` ; `right`: `string` ; `top`: `string`  } |
| `opacity` | `TCommonProps` |
| `overflow` | `TCommonProps` & \{ `auto`: `string` ; `clip`: `string` ; `hidden`: `string` ; `revertLayer`: `string` ; `scroll`: `string` ; `visible`: `string`  } |
| `overflowX` | `TCommonProps` & \{ `auto`: `string` ; `clip`: `string` ; `hidden`: `string` ; `revertLayer`: `string` ; `scroll`: `string` ; `visible`: `string`  } |
| `overflowY` | `TCommonProps` & \{ `auto`: `string` ; `clip`: `string` ; `hidden`: `string` ; `revertLayer`: `string` ; `scroll`: `string` ; `visible`: `string`  } |
| `overscrollBehavior` | `TCommonProps` |
| `overscrollBehaviorX` | `TCommonProps` |
| `overscrollBehaviorY` | `TCommonProps` |
| `p` | `TSizeProps` |
| `padding` | `TSizeProps` |
| `paddingBottom` | `TSizeProps` |
| `paddingLeft` | `TSizeProps` |
| `paddingRight` | `TSizeProps` |
| `paddingTop` | `TSizeProps` |
| `pb` | `TSizeProps` |
| `perspective` | `TCommonProps` |
| `perspectiveOrigin` | `TCommonProps` |
| `pl` | `TSizeProps` |
| `placeContent` | `TCommonProps` |
| `placeHolderColor` | [`TColor`](modules.md#tcolor) |
| `placeItems` | `TCommonProps` |
| `placeSelf` | `TCommonProps` |
| `pointerEvents` | `TCommonProps` & \{ `all`: `string` ; `auto`: `string` ; `boundingBox`: `string` ; `fill`: `string` ; `none`: `string` ; `painted`: `string` ; `stroke`: `string` ; `visible`: `string` ; `visibleFill`: `string` ; `visiblePainted`: `string` ; `visibleStroke`: `string`  } |
| `position` | `TCommonProps` & \{ `absolute`: `string` ; `fixed`: `string` ; `relative`: `string` ; `static`: `string` ; `sticky`: `string`  } |
| `pr` | `TSizeProps` |
| `pt` | `TSizeProps` |
| `px` | `TSizeProps` |
| `py` | `TSizeProps` |
| `resize` | `TCommonProps` |
| `right` | `TNumberSizeProps` |
| `scrollBehavior` | `TCommonProps` |
| `scrollMargin` | `TCommonProps` |
| `scrollMarginBlock` | `TCommonProps` |
| `scrollMarginBlockEnd` | `TCommonProps` |
| `scrollMarginBlockStart` | `TCommonProps` |
| `scrollMarginInline` | `TCommonProps` |
| `scrollMarginInlineEnd` | `TCommonProps` |
| `scrollMarginInlineStart` | `TCommonProps` |
| `scrollSnapAlign` | `TCommonProps` |
| `scrollSnapAlignX` | `TCommonProps` |
| `scrollSnapAlignY` | `TCommonProps` |
| `scrollSnapPointsX` | `TCommonProps` |
| `scrollSnapPointsY` | `TCommonProps` |
| `scrollSnapStop` | `TCommonProps` |
| `scrollSnapStopX` | `TCommonProps` |
| `scrollSnapStopY` | `TCommonProps` |
| `scrollSnapType` | `TCommonProps` |
| `scrollbarColor` | [`TColor`](modules.md#tcolor) |
| `scrollbarWidth` | `TCommonProps` & \{ `auto`: `string` ; `none`: `string` ; `revertLayer`: `string` ; `thin`: `string`  } |
| `shapeImageThreshold` | `TCommonProps` |
| `shapeMargin` | `TCommonProps` |
| `shapeOutside` | `TCommonProps` |
| `shapeRendering` | `TCommonProps` |
| `textAlign` | `TCommonProps` & \{ `center`: `string` ; `end`: `string` ; `justify`: `string` ; `left`: `string` ; `right`: `string` ; `start`: `string` ; `webkitAuto`: `string` ; `webkitCenter`: `string` ; `webkitLeft`: `string` ; `webkitMatchParent`: `string` ; `webkitRight`: `string`  } |
| `textAlignLast` | `TCommonProps` |
| `textDecoration` | `TCommonProps` & \{ `auto`: `string` ; `blink`: `string` ; `dashed`: `string` ; `double`: `string` ; `lineThrough`: `string` ; `none`: `string` ; `overline`: `string` ; `revertLayer`: `string` ; `solid`: `string` ; `underline`: `string` ; `wavy`: `string`  } |
| `textDecorationColor` | [`TColor`](modules.md#tcolor) |
| `textDecorationLine` | `TCommonProps` & \{ `blink`: `string` ; `lineThrough`: `string` ; `overline`: `string` ; `underline`: `string`  } |
| `textDecorationSkipInk` | `TCommonProps` |
| `textDecorationStyle` | `TCommonProps` & \{ `dashed`: `string` ; `dotted`: `string` ; `double`: `string` ; `solid`: `string` ; `wavy`: `string`  } |
| `textEmphasis` | `TCommonProps` & \{ `accent`: `string` ; `circle`: `string` ; `disc`: `string` ; `dot`: `string` ; `none`: `string`  } |
| `textEmphasisColor` | [`TColor`](modules.md#tcolor) |
| `textEmphasisPosition` | `TCommonProps` |
| `textEmphasisStyle` | `TCommonProps` |
| `textFillColor` | [`TColor`](modules.md#tcolor) |
| `textIndent` | `TSizeProps` & `TCommonProps` & \{ `revertLayer`: `string`  } |
| `textJustify` | `TCommonProps` |
| `textOverflow` | `TCommonProps` & \{ `clip`: `string` ; `ellipsis`: `string` ; `revertLayer`: `string`  } |
| `textRendering` | `TCommonProps` & \{ `auto`: `string` ; `geometricPrecision`: `string` ; `optimizeLegibility`: `string` ; `optimizeSpeed`: `string` ; `revertLayer`: `string`  } |
| `textShadow` | `TCommonProps` |
| `textTransform` | `TCommonProps` & \{ `capitalize`: `string` ; `lowercase`: `string` ; `mathAuto`: `string` ; `none`: `string` ; `uppercase`: `string` ; `upset`: `string`  } |
| `textUnderlineOffset` | `TCommonProps` & \{ `auto`: `string`  } |
| `textWrap` | `TCommonProps` & \{ `balance`: `string` ; `noWrap`: `string` ; `pretty`: `string` ; `wrap`: `string`  } |
| `top` | `TNumberSizeProps` |
| `transform` | `TCommonProps` |
| `transformOrigin` | `TCommonProps` |
| `transformStyle` | `TCommonProps` & \{ `flat`: `string` ; `preserve3d`: `string`  } |
| `transition` | `TCommonProps` |
| `transitionDelay` | `TCommonProps` |
| `transitionDuration` | `TCommonProps` |
| `transitionDurationTiming` | `TCommonProps` |
| `transitionProperty` | `TCommonProps` |
| `transitionTiming` | `TCommonProps` |
| `transitionTimingFunction` | `TCommonProps` |
| `userDrag` | `TCommonProps` |
| `userFocus` | `TCommonProps` |
| `userResize` | `TCommonProps` |
| `userSelect` | `TCommonProps` & \{ `all`: `string` ; `auto`: `string` ; `contain`: `string` ; `none`: `string` ; `revertLayer`: `string` ; `text`: `string`  } |
| `userSelectAll` | `TCommonProps` |
| `userSelectAuto` | `TCommonProps` |
| `userSelectNone` | `TCommonProps` |
| `userSelectText` | `TCommonProps` |
| `userZoom` | `TCommonProps` |
| `whiteSpace` | `TCommonProps` & \{ `breakSpaces`: `string` ; `mozPreSpace`: `string` ; `normal`: `string` ; `nowrap`: `string` ; `pre`: `string` ; `preLine`: `string` ; `preWrap`: `string` ; `revertLayer`: `string`  } |
| `width` | `TSizePropsOptimizedIncluded` |
| `willChange` | `TCommonProps` |
| `willChangeProperty` | `TCommonProps` |
| `wordBreak` | `TCommonProps` |
| `wordSpacing` | `TCommonProps` |
| `wordWrap` | `TCommonProps` |
| `zIndex` | `TCommonProps` & [`TNumbers`](modules.md#tnumbers) & \{ `auto`: `string`  } |

#### Defined in

[theme/index.ts:70](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/theme/index.ts#L70)

___

### language

• `Const` **language**: `Object`

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

[language/index.ts:1](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/language/index.ts#L1)

___

### mediaBreakpoints

• `Const` **mediaBreakpoints**: `Object`

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

[media-breakpoints/index.ts:1](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/media-breakpoints/index.ts#L1)

___

### numbers

• `Const` **numbers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `0` | `string` |
| `1` | `string` |
| `10` | `string` |
| `100` | `string` |
| `101` | `string` |
| `102` | `string` |
| `104` | `string` |
| `106` | `string` |
| `108` | `string` |
| `11` | `string` |
| `110` | `string` |
| `112` | `string` |
| `114` | `string` |
| `116` | `string` |
| `118` | `string` |
| `12` | `string` |
| `120` | `string` |
| `122` | `string` |
| `124` | `string` |
| `126` | `string` |
| `128` | `string` |
| `13` | `string` |
| `130` | `string` |
| `132` | `string` |
| `134` | `string` |
| `136` | `string` |
| `138` | `string` |
| `14` | `string` |
| `140` | `string` |
| `15` | `string` |
| `16` | `string` |
| `18` | `string` |
| `2` | `string` |
| `20` | `string` |
| `200` | `string` |
| `22` | `string` |
| `24` | `string` |
| `25` | `string` |
| `26` | `string` |
| `28` | `string` |
| `3` | `string` |
| `30` | `string` |
| `300` | `string` |
| `32` | `string` |
| `34` | `string` |
| `36` | `string` |
| `38` | `string` |
| `4` | `string` |
| `40` | `string` |
| `400` | `string` |
| `42` | `string` |
| `44` | `string` |
| `46` | `string` |
| `48` | `string` |
| `5` | `string` |
| `50` | `string` |
| `500` | `string` |
| `52` | `string` |
| `54` | `string` |
| `56` | `string` |
| `58` | `string` |
| `6` | `string` |
| `60` | `string` |
| `600` | `string` |
| `62` | `string` |
| `64` | `string` |
| `66` | `string` |
| `68` | `string` |
| `7` | `string` |
| `70` | `string` |
| `700` | `string` |
| `72` | `string` |
| `74` | `string` |
| `76` | `string` |
| `78` | `string` |
| `8` | `string` |
| `80` | `string` |
| `800` | `string` |
| `82` | `string` |
| `84` | `string` |
| `86` | `string` |
| `88` | `string` |
| `9` | `string` |
| `90` | `string` |
| `900` | `string` |
| `92` | `string` |
| `94` | `string` |
| `96` | `string` |
| `98` | `string` |

#### Defined in

[theme/numbers.ts:1](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/theme/numbers.ts#L1)

___

### selectors

• `Const` **selectors**: `Object`

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

[index.ts:12](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/index.ts#L12)

___

### sizes

• `Const` **sizes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `0` | `string` |
| `0.1dvh` | `string` |
| `0.1dvw` | `string` |
| `0.25dvh` | `string` |
| `0.25dvw` | `string` |
| `0.2dvh` | `string` |
| `0.2dvw` | `string` |
| `0.3dvh` | `string` |
| `0.3dvw` | `string` |
| `0.4dvh` | `string` |
| `0.4dvw` | `string` |
| `0.5dvh` | `string` |
| `0.5dvw` | `string` |
| `0.6dvh` | `string` |
| `0.6dvw` | `string` |
| `0.7dvh` | `string` |
| `0.7dvw` | `string` |
| `0.8dvh` | `string` |
| `0.8dvw` | `string` |
| `0.9dvh` | `string` |
| `0.9dvw` | `string` |
| `1.1dvh` | `string` |
| `1.1dvw` | `string` |
| `1.2dvh` | `string` |
| `1.2dvw` | `string` |
| `1.3dvh` | `string` |
| `1.3dvw` | `string` |
| `1.4dvh` | `string` |
| `1.4dvw` | `string` |
| `1.5dvh` | `string` |
| `1.5dvw` | `string` |
| `1.6dvh` | `string` |
| `1.6dvw` | `string` |
| `1.7dvh` | `string` |
| `1.7dvw` | `string` |
| `1.8dvh` | `string` |
| `1.8dvw` | `string` |
| `1.9dvh` | `string` |
| `1.9dvw` | `string` |
| `10%` | `string` |
| `10.1dvh` | `string` |
| `10.1dvw` | `string` |
| `10.2dvh` | `string` |
| `10.2dvw` | `string` |
| `10.3dvh` | `string` |
| `10.3dvw` | `string` |
| `10.4dvh` | `string` |
| `10.4dvw` | `string` |
| `10.5dvh` | `string` |
| `10.5dvw` | `string` |
| `10.6dvh` | `string` |
| `10.6dvw` | `string` |
| `10.7dvh` | `string` |
| `10.7dvw` | `string` |
| `10.8dvh` | `string` |
| `10.8dvw` | `string` |
| `10.9dvh` | `string` |
| `10.9dvw` | `string` |
| `100%` | `string` |
| `100dvh` | `string` |
| `100dvw` | `string` |
| `10dvh` | `string` |
| `10dvw` | `string` |
| `11.1dvh` | `string` |
| `11.1dvw` | `string` |
| `11.2dvh` | `string` |
| `11.2dvw` | `string` |
| `11.3dvh` | `string` |
| `11.3dvw` | `string` |
| `11.4dvh` | `string` |
| `11.4dvw` | `string` |
| `11.5dvh` | `string` |
| `11.5dvw` | `string` |
| `11.6dvh` | `string` |
| `11.6dvw` | `string` |
| `11.7dvh` | `string` |
| `11.7dvw` | `string` |
| `11.8dvh` | `string` |
| `11.8dvw` | `string` |
| `11.9dvh` | `string` |
| `11.9dvw` | `string` |
| `11dvh` | `string` |
| `11dvw` | `string` |
| `12.1dvh` | `string` |
| `12.1dvw` | `string` |
| `12.2dvh` | `string` |
| `12.2dvw` | `string` |
| `12.3dvh` | `string` |
| `12.3dvw` | `string` |
| `12.4dvh` | `string` |
| `12.4dvw` | `string` |
| `12.5dvh` | `string` |
| `12.5dvw` | `string` |
| `12.6dvh` | `string` |
| `12.6dvw` | `string` |
| `12.7dvh` | `string` |
| `12.7dvw` | `string` |
| `12.8dvh` | `string` |
| `12.8dvw` | `string` |
| `12.9dvh` | `string` |
| `12.9dvw` | `string` |
| `12dvh` | `string` |
| `12dvw` | `string` |
| `13dvh` | `string` |
| `13dvw` | `string` |
| `14dvh` | `string` |
| `14dvw` | `string` |
| `15dvh` | `string` |
| `15dvw` | `string` |
| `16dvh` | `string` |
| `16dvw` | `string` |
| `17dvh` | `string` |
| `17dvw` | `string` |
| `18dvh` | `string` |
| `18dvw` | `string` |
| `19dvh` | `string` |
| `19dvw` | `string` |
| `1dvh` | `string` |
| `1dvw` | `string` |
| `2.1dvh` | `string` |
| `2.1dvw` | `string` |
| `2.2dvh` | `string` |
| `2.2dvw` | `string` |
| `2.3dvh` | `string` |
| `2.3dvw` | `string` |
| `2.4dvh` | `string` |
| `2.4dvw` | `string` |
| `2.5dvh` | `string` |
| `2.5dvw` | `string` |
| `2.6dvh` | `string` |
| `2.6dvw` | `string` |
| `2.7dvh` | `string` |
| `2.7dvw` | `string` |
| `2.8dvh` | `string` |
| `2.8dvw` | `string` |
| `2.9dvh` | `string` |
| `2.9dvw` | `string` |
| `20%` | `string` |
| `20dvh` | `string` |
| `20dvw` | `string` |
| `21dvh` | `string` |
| `21dvw` | `string` |
| `22dvh` | `string` |
| `22dvw` | `string` |
| `23dvh` | `string` |
| `23dvw` | `string` |
| `24dvh` | `string` |
| `24dvw` | `string` |
| `25%` | `string` |
| `25dvh` | `string` |
| `25dvw` | `string` |
| `26dvh` | `string` |
| `26dvw` | `string` |
| `27dvh` | `string` |
| `27dvw` | `string` |
| `28dvh` | `string` |
| `28dvw` | `string` |
| `29dvh` | `string` |
| `29dvw` | `string` |
| `2dvh` | `string` |
| `2dvw` | `string` |
| `3.1dvh` | `string` |
| `3.1dvw` | `string` |
| `3.2dvh` | `string` |
| `3.2dvw` | `string` |
| `3.3dvh` | `string` |
| `3.3dvw` | `string` |
| `3.4dvh` | `string` |
| `3.4dvw` | `string` |
| `3.5dvh` | `string` |
| `3.5dvw` | `string` |
| `3.6dvh` | `string` |
| `3.6dvw` | `string` |
| `3.7dvh` | `string` |
| `3.7dvw` | `string` |
| `3.8dvh` | `string` |
| `3.8dvw` | `string` |
| `3.9dvh` | `string` |
| `3.9dvw` | `string` |
| `30%` | `string` |
| `30dvh` | `string` |
| `30dvw` | `string` |
| `31dvh` | `string` |
| `31dvw` | `string` |
| `32dvh` | `string` |
| `32dvw` | `string` |
| `33dvh` | `string` |
| `33dvw` | `string` |
| `34dvh` | `string` |
| `34dvw` | `string` |
| `35dvh` | `string` |
| `35dvw` | `string` |
| `36dvh` | `string` |
| `36dvw` | `string` |
| `37dvh` | `string` |
| `37dvw` | `string` |
| `38dvh` | `string` |
| `38dvw` | `string` |
| `39dvh` | `string` |
| `39dvw` | `string` |
| `3dvh` | `string` |
| `3dvw` | `string` |
| `4.1dvh` | `string` |
| `4.1dvw` | `string` |
| `4.2dvh` | `string` |
| `4.2dvw` | `string` |
| `4.3dvh` | `string` |
| `4.3dvw` | `string` |
| `4.4dvh` | `string` |
| `4.4dvw` | `string` |
| `4.5dvh` | `string` |
| `4.5dvw` | `string` |
| `4.6dvh` | `string` |
| `4.6dvw` | `string` |
| `4.7dvh` | `string` |
| `4.7dvw` | `string` |
| `4.8dvh` | `string` |
| `4.8dvw` | `string` |
| `4.9dvh` | `string` |
| `4.9dvw` | `string` |
| `40%` | `string` |
| `40dvh` | `string` |
| `40dvw` | `string` |
| `41dvh` | `string` |
| `41dvw` | `string` |
| `42dvh` | `string` |
| `42dvw` | `string` |
| `43dvh` | `string` |
| `43dvw` | `string` |
| `44dvh` | `string` |
| `44dvw` | `string` |
| `45dvh` | `string` |
| `45dvw` | `string` |
| `46dvh` | `string` |
| `46dvw` | `string` |
| `47dvh` | `string` |
| `47dvw` | `string` |
| `48dvh` | `string` |
| `48dvw` | `string` |
| `49dvh` | `string` |
| `49dvw` | `string` |
| `4dvh` | `string` |
| `4dvw` | `string` |
| `5.1dvh` | `string` |
| `5.1dvw` | `string` |
| `5.2dvh` | `string` |
| `5.2dvw` | `string` |
| `5.3dvh` | `string` |
| `5.3dvw` | `string` |
| `5.4dvh` | `string` |
| `5.4dvw` | `string` |
| `5.5dvh` | `string` |
| `5.5dvw` | `string` |
| `5.6dvh` | `string` |
| `5.6dvw` | `string` |
| `5.7dvh` | `string` |
| `5.7dvw` | `string` |
| `5.8dvh` | `string` |
| `5.8dvw` | `string` |
| `5.9dvh` | `string` |
| `5.9dvw` | `string` |
| `50%` | `string` |
| `50dvh` | `string` |
| `50dvw` | `string` |
| `51dvh` | `string` |
| `51dvw` | `string` |
| `52dvh` | `string` |
| `52dvw` | `string` |
| `53dvh` | `string` |
| `53dvw` | `string` |
| `54dvh` | `string` |
| `54dvw` | `string` |
| `55dvh` | `string` |
| `55dvw` | `string` |
| `56dvh` | `string` |
| `56dvw` | `string` |
| `57dvh` | `string` |
| `57dvw` | `string` |
| `58dvh` | `string` |
| `58dvw` | `string` |
| `59dvh` | `string` |
| `59dvw` | `string` |
| `5dvh` | `string` |
| `5dvw` | `string` |
| `6.1dvh` | `string` |
| `6.1dvw` | `string` |
| `6.2dvh` | `string` |
| `6.2dvw` | `string` |
| `6.3dvh` | `string` |
| `6.3dvw` | `string` |
| `6.4dvh` | `string` |
| `6.4dvw` | `string` |
| `6.5dvh` | `string` |
| `6.5dvw` | `string` |
| `6.6dvh` | `string` |
| `6.6dvw` | `string` |
| `6.7dvh` | `string` |
| `6.7dvw` | `string` |
| `6.8dvh` | `string` |
| `6.8dvw` | `string` |
| `6.9dvh` | `string` |
| `6.9dvw` | `string` |
| `60%` | `string` |
| `60dvh` | `string` |
| `60dvw` | `string` |
| `61dvh` | `string` |
| `61dvw` | `string` |
| `62dvh` | `string` |
| `62dvw` | `string` |
| `63dvh` | `string` |
| `63dvw` | `string` |
| `64dvh` | `string` |
| `64dvw` | `string` |
| `65dvh` | `string` |
| `65dvw` | `string` |
| `66dvh` | `string` |
| `66dvw` | `string` |
| `67dvh` | `string` |
| `67dvw` | `string` |
| `68dvh` | `string` |
| `68dvw` | `string` |
| `69dvh` | `string` |
| `69dvw` | `string` |
| `6dvh` | `string` |
| `6dvw` | `string` |
| `7.1dvh` | `string` |
| `7.1dvw` | `string` |
| `7.2dvh` | `string` |
| `7.2dvw` | `string` |
| `7.3dvh` | `string` |
| `7.3dvw` | `string` |
| `7.4dvh` | `string` |
| `7.4dvw` | `string` |
| `7.5dvh` | `string` |
| `7.5dvw` | `string` |
| `7.6dvh` | `string` |
| `7.6dvw` | `string` |
| `7.7dvh` | `string` |
| `7.7dvw` | `string` |
| `7.8dvh` | `string` |
| `7.8dvw` | `string` |
| `7.9dvh` | `string` |
| `7.9dvw` | `string` |
| `70%` | `string` |
| `70dvh` | `string` |
| `70dvw` | `string` |
| `71dvh` | `string` |
| `71dvw` | `string` |
| `72dvh` | `string` |
| `72dvw` | `string` |
| `73dvh` | `string` |
| `73dvw` | `string` |
| `74dvh` | `string` |
| `74dvw` | `string` |
| `75dvh` | `string` |
| `75dvw` | `string` |
| `76dvh` | `string` |
| `76dvw` | `string` |
| `77dvh` | `string` |
| `77dvw` | `string` |
| `78dvh` | `string` |
| `78dvw` | `string` |
| `79dvh` | `string` |
| `79dvw` | `string` |
| `7dvh` | `string` |
| `7dvw` | `string` |
| `8.1dvh` | `string` |
| `8.1dvw` | `string` |
| `8.2dvh` | `string` |
| `8.2dvw` | `string` |
| `8.3dvh` | `string` |
| `8.3dvw` | `string` |
| `8.4dvh` | `string` |
| `8.4dvw` | `string` |
| `8.5dvh` | `string` |
| `8.5dvw` | `string` |
| `8.6dvh` | `string` |
| `8.6dvw` | `string` |
| `8.7dvh` | `string` |
| `8.7dvw` | `string` |
| `8.8dvh` | `string` |
| `8.8dvw` | `string` |
| `8.9dvh` | `string` |
| `8.9dvw` | `string` |
| `80%` | `string` |
| `80dvh` | `string` |
| `80dvw` | `string` |
| `81dvh` | `string` |
| `81dvw` | `string` |
| `82dvh` | `string` |
| `82dvw` | `string` |
| `83dvh` | `string` |
| `83dvw` | `string` |
| `84dvh` | `string` |
| `84dvw` | `string` |
| `85dvh` | `string` |
| `85dvw` | `string` |
| `86dvh` | `string` |
| `86dvw` | `string` |
| `87dvh` | `string` |
| `87dvw` | `string` |
| `88dvh` | `string` |
| `88dvw` | `string` |
| `89dvh` | `string` |
| `89dvw` | `string` |
| `8dvh` | `string` |
| `8dvw` | `string` |
| `9.1dvh` | `string` |
| `9.1dvw` | `string` |
| `9.2dvh` | `string` |
| `9.2dvw` | `string` |
| `9.3dvh` | `string` |
| `9.3dvw` | `string` |
| `9.4dvh` | `string` |
| `9.4dvw` | `string` |
| `9.5dvh` | `string` |
| `9.5dvw` | `string` |
| `9.6dvh` | `string` |
| `9.6dvw` | `string` |
| `9.7dvh` | `string` |
| `9.7dvw` | `string` |
| `9.8dvh` | `string` |
| `9.8dvw` | `string` |
| `9.9dvh` | `string` |
| `9.9dvw` | `string` |
| `90%` | `string` |
| `90dvh` | `string` |
| `90dvw` | `string` |
| `91dvh` | `string` |
| `91dvw` | `string` |
| `92dvh` | `string` |
| `92dvw` | `string` |
| `93dvh` | `string` |
| `93dvw` | `string` |
| `94dvh` | `string` |
| `94dvw` | `string` |
| `95dvh` | `string` |
| `95dvw` | `string` |
| `96dvh` | `string` |
| `96dvw` | `string` |
| `97dvh` | `string` |
| `97dvw` | `string` |
| `98dvh` | `string` |
| `98dvw` | `string` |
| `99dvh` | `string` |
| `99dvw` | `string` |
| `9dvh` | `string` |
| `9dvw` | `string` |
| `auto` | `string` |
| `full` | `string` |
| `fullDVH` | `string` |
| `fullDVW` | `string` |
| `lg` | `string` |
| `lgDVH` | `string` |
| `lgDVW` | `string` |
| `md` | `string` |
| `mdDVH` | `string` |
| `mdDVW` | `string` |
| `sm` | `string` |
| `smDVH` | `string` |
| `smDVW` | `string` |
| `xl` | `string` |
| `xlDVH` | `string` |
| `xlDVW` | `string` |
| `xs` | `string` |
| `xsDVH` | `string` |
| `xsDVW` | `string` |

#### Defined in

[theme/sizes.ts:1](https://github.com/nahuelRosas/robust-ui/blob/f458e4c/packages/theme/src/theme/sizes.ts#L1)
