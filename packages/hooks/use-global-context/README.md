<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)
- [Interfaces](#interfaces)
  - [Interface: DevData](#interface-devdata)
    - [Table of contents](#table-of-contents)
    - [Properties](#properties)
  - [Interface: DevTools](#interface-devtools)
    - [Table of contents](#table-of-contents-1)
    - [Properties](#properties-1)
  - [Interface: GlobalContextValues](#interface-globalcontextvalues)
    - [Table of contents](#table-of-contents-2)
    - [Properties](#properties-2)
  - [Interface: ToolConfig](#interface-toolconfig)
    - [Table of contents](#table-of-contents-3)
    - [Properties](#properties-3)
  - [Interface: notification](#interface-notification)
    - [Table of contents](#table-of-contents-4)
    - [Properties](#properties-4)
  - [Interface: userContext](#interface-usercontext)
    - [Table of contents](#table-of-contents-5)
    - [Properties](#properties-5)
- [@robust-ui/use-global-context](#robust-uiuse-global-context)
  - [Table of contents](#table-of-contents-6)
    - [Interfaces](#interfaces-1)
    - [Variables](#variables)
    - [Functions](#functions)
  - [Variables](#variables-1)
    - [GlobalContext](#globalcontext)
  - [Functions](#functions-1)
    - [useGlobalContext](#useglobalcontext)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@robust-ui/use-global-context / [Exports](#modulesmd)

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


<a name="interfacesdevdatamd"></a>

[@robust-ui/use-global-context](#readmemd) / [Exports](#modulesmd) / DevData

## Interface: DevData

Interface representing the development data.

### Table of contents

#### Properties

- [commands](#commands)
- [cssReset](#cssreset)
- [currentBreakpoint](#currentbreakpoint)
- [currentGlobalLanguage](#currentgloballanguage)
- [eventLogs](#eventlogs)
- [globalState](#globalstate)
- [isBrowser](#isbrowser)
- [isDarkModeActive](#isdarkmodeactive)
- [isProviderActive](#isprovideractive)
- [isServer](#isserver)
- [mediaBreakpoints](#mediabreakpoints)
- [pathname](#pathname)
- [selectors](#selectors)
- [theme](#theme)

### Properties

#### commands

• **commands**: `Record`\<`string`, `string` \| `CommandFunction`\>

##### Defined in

[types.ts:102](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L102)

___

#### cssReset

• **cssReset**: `string`

##### Defined in

[types.ts:113](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L113)

___

#### currentBreakpoint

• **currentBreakpoint**: `unknown`

##### Defined in

[types.ts:106](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L106)

___

#### currentGlobalLanguage

• **currentGlobalLanguage**: ``"es-AR"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"pt-BR"`` \| ``"pt-PT"`` \| ``"zh-CN"`` \| ``"zh-HK"`` \| ``"zh-TW"`` \| ``"en-GB"`` \| ``"en-US"`` \| ``"en"`` \| ``"zh"`` \| ``"ja"`` \| ``"ko"`` \| ``"ru"`` \| ``"fr"`` \| ``"de"`` \| ``"pt"`` \| ``"es"`` \| ``"nl"`` \| ``"it"`` \| ``"tr"`` \| ``"da"`` \| ``"pl"`` \| ``"cs"`` \| ``"th"`` \| ``"sv"`` \| ``"hu"`` \| ``"fi"`` \| ``"vi"`` \| ``"nb"`` \| ``"el"`` \| ``"bg"`` \| ``"sk"`` \| ``"he"`` \| ``"ro"`` \| ``"hr"`` \| ``"uk"`` \| ``"id"`` \| ``"ms"`` \| ``"hi"`` \| ``"fil"`` \| ``"ar"`` \| ``"bn"`` \| ``"fa"`` \| ``"gu"`` \| ``"ka"`` \| ``"km"`` \| ``"mr"`` \| ``"mn"`` \| ``"ne"`` \| ``"pa"`` \| ``"si"`` \| ``"sw"`` \| ``"ta"`` \| ``"te"`` \| ``"ur"`` \| ``"uz"`` \| ``"zu"`` \| ``"lv"`` \| ``"lt"`` \| ``"sr"`` \| ``"sl"`` \| ``"et"`` \| ``"is"`` \| ``"ms_MY"``

##### Defined in

[types.ts:104](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L104)

___

#### eventLogs

• `Optional` **eventLogs**: `EventLogEntry`[]

##### Defined in

[types.ts:109](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L109)

___

#### globalState

• **globalState**: `Record`\<`string`, `unknown`\>

##### Defined in

[types.ts:105](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L105)

___

#### isBrowser

• **isBrowser**: ``false`` \| `HTMLElement`

##### Defined in

[types.ts:108](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L108)

___

#### isDarkModeActive

• **isDarkModeActive**: `boolean`

##### Defined in

[types.ts:110](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L110)

___

#### isProviderActive

• **isProviderActive**: `boolean`

##### Defined in

[types.ts:111](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L111)

___

#### isServer

• **isServer**: `boolean`

##### Defined in

[types.ts:112](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L112)

___

#### mediaBreakpoints

• **mediaBreakpoints**: `Record`\<`string`, `number`\>

##### Defined in

[types.ts:103](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L103)

___

#### pathname

• **pathname**: `string`

##### Defined in

[types.ts:120](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L120)

___

#### selectors

• **selectors**: `Record`\<`string`, `unknown`\>

##### Defined in

[types.ts:107](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L107)

___

#### theme

• **theme**: `Record`\<`string`, \{ `[key: string | number]`: `unknown`;  }\>

##### Defined in

[types.ts:114](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L114)


<a name="interfacesdevtoolsmd"></a>

[@robust-ui/use-global-context](#readmemd) / [Exports](#modulesmd) / DevTools

## Interface: DevTools

Represents a set of developer tools for managing the application state and behavior.

### Table of contents

#### Properties

- [changeLanguage](#changelanguage)
- [getAppState](#getappstate)
- [removeNotificationState](#removenotificationstate)
- [resetAppState](#resetappstate)
- [resetNotificationState](#resetnotificationstate)
- [setAppState](#setappstate)
- [setNotificationState](#setnotificationstate)
- [toggleDarkMode](#toggledarkmode)

### Properties

#### changeLanguage

• **changeLanguage**: (`language`: ``"es-AR"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"pt-BR"`` \| ``"pt-PT"`` \| ``"zh-CN"`` \| ``"zh-HK"`` \| ``"zh-TW"`` \| ``"en-GB"`` \| ``"en-US"`` \| ``"en"`` \| ``"zh"`` \| ``"ja"`` \| ``"ko"`` \| ``"ru"`` \| ``"fr"`` \| ``"de"`` \| ``"pt"`` \| ``"es"`` \| ``"nl"`` \| ``"it"`` \| ``"tr"`` \| ``"da"`` \| ``"pl"`` \| ``"cs"`` \| ``"th"`` \| ``"sv"`` \| ``"hu"`` \| ``"fi"`` \| ``"vi"`` \| ``"nb"`` \| ``"el"`` \| ``"bg"`` \| ``"sk"`` \| ``"he"`` \| ``"ro"`` \| ``"hr"`` \| ``"uk"`` \| ``"id"`` \| ``"ms"`` \| ``"hi"`` \| ``"fil"`` \| ``"ar"`` \| ``"bn"`` \| ``"fa"`` \| ``"gu"`` \| ``"ka"`` \| ``"km"`` \| ``"mr"`` \| ``"mn"`` \| ``"ne"`` \| ``"pa"`` \| ``"si"`` \| ``"sw"`` \| ``"ta"`` \| ``"te"`` \| ``"ur"`` \| ``"uz"`` \| ``"zu"`` \| ``"lv"`` \| ``"lt"`` \| ``"sr"`` \| ``"sl"`` \| ``"et"`` \| ``"is"`` \| ``"ms_MY"``) => `void`

Changes the language of the application.

**`Param`**

The new language to set.

##### Type declaration

▸ (`language`): `void`

Changes the language of the application.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `language` | ``"es-AR"`` \| ``"es-ES"`` \| ``"es-MX"`` \| ``"pt-BR"`` \| ``"pt-PT"`` \| ``"zh-CN"`` \| ``"zh-HK"`` \| ``"zh-TW"`` \| ``"en-GB"`` \| ``"en-US"`` \| ``"en"`` \| ``"zh"`` \| ``"ja"`` \| ``"ko"`` \| ``"ru"`` \| ``"fr"`` \| ``"de"`` \| ``"pt"`` \| ``"es"`` \| ``"nl"`` \| ``"it"`` \| ``"tr"`` \| ``"da"`` \| ``"pl"`` \| ``"cs"`` \| ``"th"`` \| ``"sv"`` \| ``"hu"`` \| ``"fi"`` \| ``"vi"`` \| ``"nb"`` \| ``"el"`` \| ``"bg"`` \| ``"sk"`` \| ``"he"`` \| ``"ro"`` \| ``"hr"`` \| ``"uk"`` \| ``"id"`` \| ``"ms"`` \| ``"hi"`` \| ``"fil"`` \| ``"ar"`` \| ``"bn"`` \| ``"fa"`` \| ``"gu"`` \| ``"ka"`` \| ``"km"`` \| ``"mr"`` \| ``"mn"`` \| ``"ne"`` \| ``"pa"`` \| ``"si"`` \| ``"sw"`` \| ``"ta"`` \| ``"te"`` \| ``"ur"`` \| ``"uz"`` \| ``"zu"`` \| ``"lv"`` \| ``"lt"`` \| ``"sr"`` \| ``"sl"`` \| ``"et"`` \| ``"is"`` \| ``"ms_MY"`` | The new language to set. |

###### Returns

`void`

##### Defined in

[types.ts:67](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L67)

___

#### getAppState

• **getAppState**: (`isDev`: `boolean`) => `unknown`

Retrieves the value of a specific key from the application state.

**`Param`**

Indicates whether the operation is performed in a development environment.

##### Type declaration

▸ (`isDev`): `unknown`

Retrieves the value of a specific key from the application state.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isDev` | `boolean` | Indicates whether the operation is performed in a development environment. |

###### Returns

`unknown`

The value associated with the specified key.

##### Defined in

[types.ts:55](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L55)

___

#### removeNotificationState

• **removeNotificationState**: (`notificationId`: `string`) => `void`

Removes a specific notification from the notification state.

**`Param`**

The ID of the notification to remove.

##### Type declaration

▸ (`notificationId`): `void`

Removes a specific notification from the notification state.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notificationId` | `string` | The ID of the notification to remove. |

###### Returns

`void`

##### Defined in

[types.ts:90](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L90)

___

#### resetAppState

• **resetAppState**: (`isDev`: `boolean`) => `void`

Resets the application state.

**`Param`**

Indicates whether the operation is performed in a development environment.

##### Type declaration

▸ (`isDev`): `void`

Resets the application state.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isDev` | `boolean` | Indicates whether the operation is performed in a development environment. |

###### Returns

`void`

##### Defined in

[types.ts:61](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L61)

___

#### resetNotificationState

• **resetNotificationState**: () => `void`

Resets the notification state of the application.

##### Type declaration

▸ (): `void`

Resets the notification state of the application.

###### Returns

`void`

##### Defined in

[types.ts:84](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L84)

___

#### setAppState

• **setAppState**: (`key`: `string`, `value`: `unknown`, `isDev`: `boolean`) => `void`

Sets the value of a specific key in the application state.

**`Param`**

The key of the state value to set.

**`Param`**

The value to set for the specified key.

**`Param`**

Indicates whether the operation is performed in a development environment.

##### Type declaration

▸ (`key`, `value`, `isDev`): `void`

Sets the value of a specific key in the application state.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the state value to set. |
| `value` | `unknown` | The value to set for the specified key. |
| `isDev` | `boolean` | Indicates whether the operation is performed in a development environment. |

###### Returns

`void`

##### Defined in

[types.ts:48](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L48)

___

#### setNotificationState

• **setNotificationState**: (`notification`: [`notification`](#interfacesnotificationmd)) => `void`

Sets the notification state of the application.

**`Param`**

The notification object to set.

##### Type declaration

▸ (`notification`): `void`

Sets the notification state of the application.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `notification` | [`notification`](#interfacesnotificationmd) | The notification object to set. |

###### Returns

`void`

##### Defined in

[types.ts:79](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L79)

___

#### toggleDarkMode

• **toggleDarkMode**: (`isDarkModeActive`: `boolean`) => `void`

Toggles the dark mode of the application.

**`Param`**

Indicates whether the dark mode should be activated or deactivated.

##### Type declaration

▸ (`isDarkModeActive`): `void`

Toggles the dark mode of the application.

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isDarkModeActive` | `boolean` | Indicates whether the dark mode should be activated or deactivated. |

###### Returns

`void`

##### Defined in

[types.ts:73](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L73)


<a name="interfacesglobalcontextvaluesmd"></a>

[@robust-ui/use-global-context](#readmemd) / [Exports](#modulesmd) / GlobalContextValues

## Interface: GlobalContextValues

Represents the values of the global context.

### Table of contents

#### Properties

- [devData](#devdata)
- [devTools](#devtools)
- [notifications](#notifications)
- [userContext](#usercontext)

### Properties

#### devData

• **devData**: [`DevData`](#interfacesdevdatamd)

##### Defined in

[types.ts:160](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L160)

___

#### devTools

• **devTools**: [`DevTools`](#interfacesdevtoolsmd)

##### Defined in

[types.ts:159](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L159)

___

#### notifications

• **notifications**: `Record`\<`string`, `unknown`\>

##### Defined in

[types.ts:157](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L157)

___

#### userContext

• **userContext**: [`userContext`](#interfacesusercontextmd)

##### Defined in

[types.ts:158](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L158)


<a name="interfacestoolconfigmd"></a>

[@robust-ui/use-global-context](#readmemd) / [Exports](#modulesmd) / ToolConfig

## Interface: ToolConfig

Represents the configuration options for a tool.

### Table of contents

#### Properties

- [enableFeatureX](#enablefeaturex)
- [enableFeatureY](#enablefeaturey)
- [language](#language)
- [maxRetryAttempts](#maxretryattempts)

### Properties

#### enableFeatureX

• `Optional` **enableFeatureX**: `boolean`

##### Defined in

[types.ts:33](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L33)

___

#### enableFeatureY

• `Optional` **enableFeatureY**: `boolean`

##### Defined in

[types.ts:34](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L34)

___

#### language

• `Optional` **language**: `string`

##### Defined in

[types.ts:32](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L32)

___

#### maxRetryAttempts

• `Optional` **maxRetryAttempts**: `number`

##### Defined in

[types.ts:35](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L35)


<a name="interfacesnotificationmd"></a>

[@robust-ui/use-global-context](#readmemd) / [Exports](#modulesmd) / notification

## Interface: notification

Represents a notification.

### Table of contents

#### Properties

- [altColor](#altcolor)
- [colorScheme](#colorscheme)
- [colorSchemeRaw](#colorschemeraw)
- [description](#description)
- [duration](#duration)
- [id](#id)
- [isClosable](#isclosable)
- [label](#label)
- [onClose](#onclose)
- [opacityColorScheme](#opacitycolorscheme)
- [status](#status)
- [variant](#variant)

### Properties

#### altColor

• `Optional` **altColor**: `PartialOrNestedPartial`\<`boolean`\>

##### Defined in

[types.ts:147](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L147)

___

#### colorScheme

• `Optional` **colorScheme**: `PartialOrNestedPartial`\<``"inherit"`` \| ``"transparent"`` \| ``"current"`` \| ``"currentColor"`` \| ``"black"`` \| ``"white"`` \| ``"gray"`` \| ``"red"`` \| ``"yellow"`` \| ``"green"`` \| ``"blue"`` \| ``"indigo"`` \| ``"purple"`` \| ``"pink"`` \| ``"rose"`` \| ``"orange"`` \| ``"teal"`` \| ``"cyan"`` \| ``"blueGray"`` \| ``"redGray"`` \| ``"gunMetal"`` \| ``"frenchMauve"`` \| ``"dracula"`` \| ``"brightPink"`` \| ``"raisinBlack"`` \| ``"steelPink"`` \| ``"mulberry"`` \| ``"whiteAlpha50"`` \| ``"whiteAlpha100"`` \| ``"whiteAlpha200"`` \| ``"whiteAlpha300"`` \| ``"whiteAlpha400"`` \| ``"whiteAlpha500"`` \| ``"whiteAlpha600"`` \| ``"whiteAlpha700"`` \| ``"whiteAlpha800"`` \| ``"whiteAlpha900"`` \| ``"blackAlpha50"`` \| ``"blackAlpha100"`` \| ``"blackAlpha200"`` \| ``"blackAlpha300"`` \| ``"blackAlpha400"`` \| ``"blackAlpha500"`` \| ``"blackAlpha600"`` \| ``"blackAlpha700"`` \| ``"blackAlpha800"`` \| ``"blackAlpha900"`` \| ``"gray50"`` \| ``"gray100"`` \| ``"gray200"`` \| ``"gray300"`` \| ``"gray400"`` \| ``"gray500"`` \| ``"gray600"`` \| ``"gray700"`` \| ``"gray800"`` \| ``"gray900"`` \| ``"red50"`` \| ``"red100"`` \| ``"red200"`` \| ``"red300"`` \| ``"red400"`` \| ``"red500"`` \| ``"red600"`` \| ``"red700"`` \| ``"red800"`` \| ``"red900"`` \| ``"blueGray50"`` \| ``"blueGray100"`` \| ``"blueGray200"`` \| ``"blueGray300"`` \| ``"blueGray400"`` \| ``"blueGray500"`` \| ``"blueGray600"`` \| ``"blueGray700"`` \| ``"blueGray800"`` \| ``"blueGray900"`` \| ``"yellow50"`` \| ``"yellow100"`` \| ``"yellow200"`` \| ``"yellow300"`` \| ``"yellow400"`` \| ``"yellow500"`` \| ``"yellow600"`` \| ``"yellow700"`` \| ``"yellow800"`` \| ``"yellow900"`` \| ``"green50"`` \| ``"green100"`` \| ``"green200"`` \| ``"green300"`` \| ``"green400"`` \| ``"green500"`` \| ``"green600"`` \| ``"green700"`` \| ``"green800"`` \| ``"green900"`` \| ``"teal50"`` \| ``"teal100"`` \| ``"teal200"`` \| ``"teal300"`` \| ``"teal400"`` \| ``"teal500"`` \| ``"teal600"`` \| ``"teal700"`` \| ``"teal800"`` \| ``"teal900"`` \| ``"blue50"`` \| ``"blue100"`` \| ``"blue200"`` \| ``"blue300"`` \| ``"blue400"`` \| ``"blue500"`` \| ``"blue600"`` \| ``"blue700"`` \| ``"blue800"`` \| ``"blue900"`` \| ``"indigo50"`` \| ``"indigo100"`` \| ``"indigo200"`` \| ``"indigo300"`` \| ``"indigo400"`` \| ``"indigo500"`` \| ``"indigo600"`` \| ``"indigo700"`` \| ``"indigo800"`` \| ``"indigo900"`` \| ``"redGray50"`` \| ``"redGray100"`` \| ``"redGray200"`` \| ``"redGray300"`` \| ``"redGray400"`` \| ``"redGray500"`` \| ``"redGray600"`` \| ``"redGray700"`` \| ``"redGray800"`` \| ``"redGray900"`` \| ``"purple50"`` \| ``"purple100"`` \| ``"purple200"`` \| ``"purple300"`` \| ``"purple400"`` \| ``"purple500"`` \| ``"purple600"`` \| ``"purple700"`` \| ``"purple800"`` \| ``"purple900"`` \| ``"orange50"`` \| ``"orange100"`` \| ``"orange200"`` \| ``"orange300"`` \| ``"orange400"`` \| ``"orange500"`` \| ``"orange600"`` \| ``"orange700"`` \| ``"orange800"`` \| ``"orange900"`` \| ``"pink50"`` \| ``"pink100"`` \| ``"pink200"`` \| ``"pink300"`` \| ``"pink400"`` \| ``"pink500"`` \| ``"pink600"`` \| ``"pink700"`` \| ``"pink800"`` \| ``"pink900"`` \| ``"mulberry50"`` \| ``"mulberry100"`` \| ``"mulberry200"`` \| ``"mulberry300"`` \| ``"mulberry400"`` \| ``"mulberry500"`` \| ``"mulberry600"`` \| ``"mulberry700"`` \| ``"mulberry800"`` \| ``"mulberry900"``\>

##### Defined in

[types.ts:138](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L138)

___

#### colorSchemeRaw

• `Optional` **colorSchemeRaw**: `PartialOrNestedPartial`\<`string`\>

##### Defined in

[types.ts:143](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L143)

___

#### description

• `Optional` **description**: `PartialOrNestedPartial`\<`string`\>

##### Defined in

[types.ts:146](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L146)

___

#### duration

• `Optional` **duration**: `number`

##### Defined in

[types.ts:149](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L149)

___

#### id

• `Optional` **id**: `string`

##### Defined in

[types.ts:150](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L150)

___

#### isClosable

• `Optional` **isClosable**: `PartialOrNestedPartial`\<`boolean`\>

##### Defined in

[types.ts:144](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L144)

___

#### label

• `Optional` **label**: `PartialOrNestedPartial`\<`string`\>

##### Defined in

[types.ts:148](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L148)

___

#### onClose

• `Optional` **onClose**: `PartialOrNestedPartial`\<() => `void`\>

##### Defined in

[types.ts:145](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L145)

___

#### opacityColorScheme

• `Optional` **opacityColorScheme**: `PartialOrNestedPartial`\<`number`\>

##### Defined in

[types.ts:142](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L142)

___

#### status

• `Optional` **status**: `PartialOrNestedPartial`\<``"default"`` \| ``"info"`` \| ``"warning"`` \| ``"error"`` \| ``"success"``\>

##### Defined in

[types.ts:139](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L139)

___

#### variant

• `Optional` **variant**: `PartialOrNestedPartial`\<``"ghost"`` \| ``"solid"`` \| ``"outline"`` \| ``"link"``\>

##### Defined in

[types.ts:137](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L137)


<a name="interfacesusercontextmd"></a>

[@robust-ui/use-global-context](#readmemd) / [Exports](#modulesmd) / userContext

## Interface: userContext

Represents the user context.

### Table of contents

#### Properties

- [getAppState](#getappstate)
- [globalState](#globalstate)
- [resetAppState](#resetappstate)
- [setAppState](#setappstate)

### Properties

#### getAppState

• **getAppState**: (`isDev`: `boolean`) => `unknown`

##### Type declaration

▸ (`isDev`): `unknown`

###### Parameters

| Name | Type |
| :------ | :------ |
| `isDev` | `boolean` |

###### Returns

`unknown`

##### Defined in

[types.ts:128](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L128)

___

#### globalState

• **globalState**: `Record`\<`string`, `unknown`\>

##### Defined in

[types.ts:130](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L130)

___

#### resetAppState

• **resetAppState**: (`isDev`: `boolean`) => `void`

##### Type declaration

▸ (`isDev`): `void`

###### Parameters

| Name | Type |
| :------ | :------ |
| `isDev` | `boolean` |

###### Returns

`void`

##### Defined in

[types.ts:129](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L129)

___

#### setAppState

• **setAppState**: (`key`: `string`, `value`: `unknown`, `isDev`: `boolean`) => `void`

##### Type declaration

▸ (`key`, `value`, `isDev`): `void`

###### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `unknown` |
| `isDev` | `boolean` |

###### Returns

`void`

##### Defined in

[types.ts:127](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/types.ts#L127)


<a name="modulesmd"></a>

[@robust-ui/use-global-context](#readmemd) / Exports

# @robust-ui/use-global-context

## Table of contents

### Interfaces

- [DevData](#interfacesdevdatamd)
- [DevTools](#interfacesdevtoolsmd)
- [GlobalContextValues](#interfacesglobalcontextvaluesmd)
- [ToolConfig](#interfacestoolconfigmd)
- [notification](#interfacesnotificationmd)
- [userContext](#interfacesusercontextmd)

### Variables

- [GlobalContext](#globalcontext)

### Functions

- [useGlobalContext](#useglobalcontext)

## Variables

### GlobalContext

• `Const` **GlobalContext**: `Context`\<[`GlobalContextValues`](#interfacesglobalcontextvaluesmd)\>

The global context for the application.

#### Defined in

[index.ts:9](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/index.ts#L9)

## Functions

### useGlobalContext

▸ **useGlobalContext**\<`T`\>(`options?`): [`GlobalContextValues`](#interfacesglobalcontextvaluesmd)[`T`]

Custom hook to access the global context values.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends keyof [`GlobalContextValues`](#interfacesglobalcontextvaluesmd) | The key of the global context value to retrieve. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | Optional configuration for the hook. |
| `options.key` | `T` | The key of the global context value to retrieve. |

#### Returns

[`GlobalContextValues`](#interfacesglobalcontextvaluesmd)[`T`]

- The value of the global context associated with the specified key.

#### Defined in

[index.ts:21](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/index.ts#L21)

▸ **useGlobalContext**\<`T`, `K`\>(`options?`): [`GlobalContextValues`](#interfacesglobalcontextvaluesmd)[`T`][`K`]

Retrieves a value from the global context based on the provided key and subKey.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends keyof [`GlobalContextValues`](#interfacesglobalcontextvaluesmd) | The type of the key in the global context. |
| `K` | extends `string` \| `number` \| `symbol` | The type of the subKey in the global context. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | The options for retrieving the value. |
| `options.key` | `T` | The key in the global context. |
| `options.subKey` | `K` | The subKey in the global context. |

#### Returns

[`GlobalContextValues`](#interfacesglobalcontextvaluesmd)[`T`][`K`]

The value from the global context.

#### Defined in

[index.ts:34](https://github.com/nahuelRosas/robust-ui/blob/3f22d4a/packages/hooks/use-global-context/src/index.ts#L34)
