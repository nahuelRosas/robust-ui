[@robust-ui/use-global-context](../README.md) / [Exports](../modules.md) / DevData

# Interface: DevData

Interface representing the development data.

## Table of contents

### Properties

- [commands](DevData.md#commands)
- [cssReset](DevData.md#cssreset)
- [currentBreakpoint](DevData.md#currentbreakpoint)
- [currentGlobalLanguage](DevData.md#currentgloballanguage)
- [eventLogs](DevData.md#eventlogs)
- [globalState](DevData.md#globalstate)
- [isBrowser](DevData.md#isbrowser)
- [isDarkModeActive](DevData.md#isdarkmodeactive)
- [isProviderActive](DevData.md#isprovideractive)
- [isServer](DevData.md#isserver)
- [mediaBreakpoints](DevData.md#mediabreakpoints)
- [pathname](DevData.md#pathname)
- [selectors](DevData.md#selectors)
- [theme](DevData.md#theme)

## Properties

### commands

• **commands**: `Record`\<`string`, `string` \| `CommandFunction`\>

#### Defined in

[types.ts:102](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L102)

___

### cssReset

• **cssReset**: `string`

#### Defined in

[types.ts:113](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L113)

___

### currentBreakpoint

• **currentBreakpoint**: `unknown`

#### Defined in

[types.ts:106](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L106)

___

### currentGlobalLanguage

• **currentGlobalLanguage**: ``"es-AR"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"pt-BR"`` \| ``"pt-PT"`` \| ``"zh-CN"`` \| ``"zh-HK"`` \| ``"zh-TW"`` \| ``"en-GB"`` \| ``"en-US"`` \| ``"en"`` \| ``"zh"`` \| ``"ja"`` \| ``"ko"`` \| ``"ru"`` \| ``"fr"`` \| ``"de"`` \| ``"pt"`` \| ``"es"`` \| ``"nl"`` \| ``"it"`` \| ``"tr"`` \| ``"da"`` \| ``"pl"`` \| ``"cs"`` \| ``"th"`` \| ``"sv"`` \| ``"hu"`` \| ``"fi"`` \| ``"vi"`` \| ``"nb"`` \| ``"el"`` \| ``"bg"`` \| ``"sk"`` \| ``"he"`` \| ``"ro"`` \| ``"hr"`` \| ``"uk"`` \| ``"id"`` \| ``"ms"`` \| ``"hi"`` \| ``"fil"`` \| ``"ar"`` \| ``"bn"`` \| ``"fa"`` \| ``"gu"`` \| ``"ka"`` \| ``"km"`` \| ``"mr"`` \| ``"mn"`` \| ``"ne"`` \| ``"pa"`` \| ``"si"`` \| ``"sw"`` \| ``"ta"`` \| ``"te"`` \| ``"ur"`` \| ``"uz"`` \| ``"zu"`` \| ``"lv"`` \| ``"lt"`` \| ``"sr"`` \| ``"sl"`` \| ``"et"`` \| ``"is"`` \| ``"ms_MY"``

#### Defined in

[types.ts:104](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L104)

___

### eventLogs

• `Optional` **eventLogs**: `EventLogEntry`[]

#### Defined in

[types.ts:109](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L109)

___

### globalState

• **globalState**: `Record`\<`string`, `unknown`\>

#### Defined in

[types.ts:105](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L105)

___

### isBrowser

• **isBrowser**: ``false`` \| `HTMLElement`

#### Defined in

[types.ts:108](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L108)

___

### isDarkModeActive

• **isDarkModeActive**: `boolean`

#### Defined in

[types.ts:110](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L110)

___

### isProviderActive

• **isProviderActive**: `boolean`

#### Defined in

[types.ts:111](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L111)

___

### isServer

• **isServer**: `boolean`

#### Defined in

[types.ts:112](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L112)

___

### mediaBreakpoints

• **mediaBreakpoints**: `Record`\<`string`, `number`\>

#### Defined in

[types.ts:103](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L103)

___

### pathname

• **pathname**: `string`

#### Defined in

[types.ts:120](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L120)

___

### selectors

• **selectors**: `Record`\<`string`, `unknown`\>

#### Defined in

[types.ts:107](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L107)

___

### theme

• **theme**: `Record`\<`string`, \{ `[key: string | number]`: `unknown`;  }\>

#### Defined in

[types.ts:114](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-global-context/src/types.ts#L114)
