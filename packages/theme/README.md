<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)
- [@robust-ui/theme](#robust-uitheme)
  - [Table of contents](#table-of-contents)
    - [Type Aliases](#type-aliases)
    - [Variables](#variables)
  - [Type Aliases](#type-aliases-1)
    - [TCommands](#tcommands)
    - [languageType](#languagetype)
  - [Variables](#variables-1)
    - [AtRules](#atrules)
    - [CSSRulesSet](#cssrulesset)
    - [PseudoClasses](#pseudoclasses)
    - [PseudoElements](#pseudoelements)
    - [commands](#commands)
    - [commonProps](#commonprops)
    - [cssReset](#cssreset)
    - [defaultTheme](#defaulttheme)
    - [language](#language)
    - [mediaBreakpoints](#mediabreakpoints)
    - [selectors](#selectors)
    - [sizeProps](#sizeprops)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@robust-ui/theme / [Exports](#modulesmd)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="readmemd"></a>

@robust-ui/core / [Exports](#modulesmd)

<a name="modulesmd"></a>

[@robust-ui/core](#readmemd) / Exports

# @robust-ui/core


<a name="modulesmd"></a>

[@robust-ui/theme](#readmemd) / Exports

# @robust-ui/theme

## Table of contents

### Type Aliases

- [TCommands](#tcommands)
- [languageType](#languagetype)

### Variables

- [AtRules](#atrules)
- [CSSRulesSet](#cssrulesset)
- [PseudoClasses](#pseudoclasses)
- [PseudoElements](#pseudoelements)
- [commands](#commands)
- [commonProps](#commonprops)
- [cssReset](#cssreset)
- [defaultTheme](#defaulttheme)
- [language](#language)
- [mediaBreakpoints](#mediabreakpoints)
- [selectors](#selectors)
- [sizeProps](#sizeprops)

## Type Aliases

### TCommands

Ƭ **TCommands**: typeof [`commands`](#commands)

Represents the type of commands available.

#### Defined in

[commands/index.ts:628](https://github.com/nahuelRosas/robust-ui/blob/fa92ffd/packages/theme/src/commands/index.ts#L628)

___

### languageType

Ƭ **languageType**: keyof typeof [`language`](#language)

#### Defined in

[index.ts:2](https://github.com/nahuelRosas/robust-ui/blob/fa92ffd/packages/theme/src/index.ts#L2)

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

[css-rules-set/index.ts:5](https://github.com/nahuelRosas/robust-ui/blob/fa92ffd/packages/theme/src/css-rules-set/index.ts#L5)

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

[css-rules-set/index.ts:165](https://github.com/nahuelRosas/robust-ui/blob/fa92ffd/packages/theme/src/css-rules-set/index.ts#L165)

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

[css-rules-set/index.ts:84](https://github.com/nahuelRosas/robust-ui/blob/fa92ffd/packages/theme/src/css-rules-set/index.ts#L84)

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

[css-rules-set/index.ts:31](https://github.com/nahuelRosas/robust-ui/blob/fa92ffd/packages/theme/src/css-rules-set/index.ts#L31)

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

[commands/index.ts:11](https://github.com/nahuelRosas/robust-ui/blob/fa92ffd/packages/theme/src/commands/index.ts#L11)

___

### commonProps

• `Const` **commonProps**: `TCommonProps`

Common properties for the theme.

#### Defined in

[theme/index.ts:10](https://github.com/nahuelRosas/robust-ui/blob/fa92ffd/packages/theme/src/theme/index.ts#L10)

___

### cssReset

• `Const` **cssReset**: ``"/*DO NOT EDIT THIS FILE DIRECTLY, IT IS GENERATED BY ROBUST-UI*/html{line-height:1.15;-webkit-text-size-adjust:100%;height:100%;margin:0;padding:0;}body{height:100%;margin:0;padding:0;}main{display:block;}h1{font-size:2em;margin:0;}p{margin:0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underlinedotted;}b{font-weight:bolder;}strong{font-weight:bolder;}code{font-family:monospace,monospace;font-size:1em;}kbd{font-family:monospace,monospace;font-size:1em;}samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}input{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}optgroup{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}select{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button{overflow:visible;}input{overflow:visible;}button{text-transform:none;}select{text-transform:none;}button{-webkit-appearance:button;appearance:button;}[type=\"button\"]{-webkit-appearance:button;appearance:button;}[type=\"reset\"]{-webkit-appearance:button;appearance:button;}[type=\"submit\"]{-webkit-appearance:button;appearance:button;}button::-moz-focus-inner{border-style:none;padding:0;}[type=\"button\"]::-moz-focus-inner{border-style:none;padding:0;}[type=\"reset\"]::-moz-focus-inner{border-style:none;padding:0;}[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring{outline:1pxdottedButtonText;}[type=\"button\"]:-moz-focusring{outline:1pxdottedButtonText;}[type=\"reset\"]:-moz-focusring{outline:1pxdottedButtonText;}[type=\"submit\"]:-moz-focusring{outline:1pxdottedButtonText;}fieldset{padding:0.35em0.75em0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type=\"checkbox\"]{box-sizing:border-box;padding:0;}[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button{height:auto;}[type=\"number\"]::-webkit-outer-spin-button{height:auto;}[type=\"search\"]{-webkit-appearance:textfield;appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}*{-webkit-tap-highlight-color:transparent;}"``

CSS reset string.
This string contains CSS rules to reset the default styles of HTML elements.
It is generated by ROBUST-UI and should not be edited directly.

#### Defined in

[css-reset/index.ts:7](https://github.com/nahuelRosas/robust-ui/blob/fa92ffd/packages/theme/src/css-reset/index.ts#L7)

___

### defaultTheme

• `Const` **defaultTheme**: `TDefaultTheme`

#### Defined in

[theme/index.ts:31](https://github.com/nahuelRosas/robust-ui/blob/fa92ffd/packages/theme/src/theme/index.ts#L31)

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

[language/index.ts:5](https://github.com/nahuelRosas/robust-ui/blob/fa92ffd/packages/theme/src/language/index.ts#L5)

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

[media-breakpoints/index.ts:5](https://github.com/nahuelRosas/robust-ui/blob/fa92ffd/packages/theme/src/media-breakpoints/index.ts#L5)

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

[index.ts:15](https://github.com/nahuelRosas/robust-ui/blob/fa92ffd/packages/theme/src/index.ts#L15)

___

### sizeProps

• `Const` **sizeProps**: `TSizeProps`

Size properties for the theme.

#### Defined in

[theme/index.ts:21](https://github.com/nahuelRosas/robust-ui/blob/fa92ffd/packages/theme/src/theme/index.ts#L21)