[@robust-ui/use-global-context](../README.md) / [Exports](../modules.md) / DevTools

# Interface: DevTools

Represents a set of developer tools for managing the application state and behavior.

## Table of contents

### Properties

- [changeLanguage](DevTools.md#changelanguage)
- [getAppState](DevTools.md#getappstate)
- [removeNotificationState](DevTools.md#removenotificationstate)
- [resetAppState](DevTools.md#resetappstate)
- [resetNotificationState](DevTools.md#resetnotificationstate)
- [setAppState](DevTools.md#setappstate)
- [setNotificationState](DevTools.md#setnotificationstate)
- [toggleDarkMode](DevTools.md#toggledarkmode)

## Properties

### changeLanguage

• **changeLanguage**: (`language`: `"es-AR"` \| `"es-ES"` \| `"es-MX"` \| `"pt-BR"` \| `"pt-PT"` \| `"zh-CN"` \| `"zh-HK"` \| `"zh-TW"` \| `"en-GB"` \| `"en-US"` \| `"en"` \| `"zh"` \| `"ja"` \| `"ko"` \| `"ru"` \| `"fr"` \| `"de"` \| `"pt"` \| `"es"` \| `"nl"` \| `"it"` \| `"tr"` \| `"da"` \| `"pl"` \| `"cs"` \| `"th"` \| `"sv"` \| `"hu"` \| `"fi"` \| `"vi"` \| `"nb"` \| `"el"` \| `"bg"` \| `"sk"` \| `"he"` \| `"ro"` \| `"hr"` \| `"uk"` \| `"id"` \| `"ms"` \| `"hi"` \| `"fil"` \| `"ar"` \| `"bn"` \| `"fa"` \| `"gu"` \| `"ka"` \| `"km"` \| `"mr"` \| `"mn"` \| `"ne"` \| `"pa"` \| `"si"` \| `"sw"` \| `"ta"` \| `"te"` \| `"ur"` \| `"uz"` \| `"zu"` \| `"lv"` \| `"lt"` \| `"sr"` \| `"sl"` \| `"et"` \| `"is"` \| `"ms_MY"`) => `void`

Changes the language of the application.

**`Param`**

The new language to set.

#### Type declaration

▸ (`language`): `void`

Changes the language of the application.

##### Parameters

| Name       | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Description              |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------- |
| `language` | `"es-AR"` \| `"es-ES"` \| `"es-MX"` \| `"pt-BR"` \| `"pt-PT"` \| `"zh-CN"` \| `"zh-HK"` \| `"zh-TW"` \| `"en-GB"` \| `"en-US"` \| `"en"` \| `"zh"` \| `"ja"` \| `"ko"` \| `"ru"` \| `"fr"` \| `"de"` \| `"pt"` \| `"es"` \| `"nl"` \| `"it"` \| `"tr"` \| `"da"` \| `"pl"` \| `"cs"` \| `"th"` \| `"sv"` \| `"hu"` \| `"fi"` \| `"vi"` \| `"nb"` \| `"el"` \| `"bg"` \| `"sk"` \| `"he"` \| `"ro"` \| `"hr"` \| `"uk"` \| `"id"` \| `"ms"` \| `"hi"` \| `"fil"` \| `"ar"` \| `"bn"` \| `"fa"` \| `"gu"` \| `"ka"` \| `"km"` \| `"mr"` \| `"mn"` \| `"ne"` \| `"pa"` \| `"si"` \| `"sw"` \| `"ta"` \| `"te"` \| `"ur"` \| `"uz"` \| `"zu"` \| `"lv"` \| `"lt"` \| `"sr"` \| `"sl"` \| `"et"` \| `"is"` \| `"ms_MY"` | The new language to set. |

##### Returns

`void`

#### Defined in

[types.ts:67](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/hooks/use-global-context/src/types.ts#L67)

---

### getAppState

• **getAppState**: (`isDev`: `boolean`) => `unknown`

Retrieves the value of a specific key from the application state.

**`Param`**

Indicates whether the operation is performed in a development environment.

#### Type declaration

▸ (`isDev`): `unknown`

Retrieves the value of a specific key from the application state.

##### Parameters

| Name    | Type      | Description                                                                |
| :------ | :-------- | :------------------------------------------------------------------------- |
| `isDev` | `boolean` | Indicates whether the operation is performed in a development environment. |

##### Returns

`unknown`

The value associated with the specified key.

#### Defined in

[types.ts:55](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/hooks/use-global-context/src/types.ts#L55)

---

### removeNotificationState

• **removeNotificationState**: (`notificationId`: `string`) => `void`

Removes a specific notification from the notification state.

**`Param`**

The ID of the notification to remove.

#### Type declaration

▸ (`notificationId`): `void`

Removes a specific notification from the notification state.

##### Parameters

| Name             | Type     | Description                           |
| :--------------- | :------- | :------------------------------------ |
| `notificationId` | `string` | The ID of the notification to remove. |

##### Returns

`void`

#### Defined in

[types.ts:90](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/hooks/use-global-context/src/types.ts#L90)

---

### resetAppState

• **resetAppState**: (`isDev`: `boolean`) => `void`

Resets the application state.

**`Param`**

Indicates whether the operation is performed in a development environment.

#### Type declaration

▸ (`isDev`): `void`

Resets the application state.

##### Parameters

| Name    | Type      | Description                                                                |
| :------ | :-------- | :------------------------------------------------------------------------- |
| `isDev` | `boolean` | Indicates whether the operation is performed in a development environment. |

##### Returns

`void`

#### Defined in

[types.ts:61](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/hooks/use-global-context/src/types.ts#L61)

---

### resetNotificationState

• **resetNotificationState**: () => `void`

Resets the notification state of the application.

#### Type declaration

▸ (): `void`

Resets the notification state of the application.

##### Returns

`void`

#### Defined in

[types.ts:84](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/hooks/use-global-context/src/types.ts#L84)

---

### setAppState

• **setAppState**: (`key`: `string`, `value`: `unknown`, `isDev`: `boolean`) => `void`

Sets the value of a specific key in the application state.

**`Param`**

The key of the state value to set.

**`Param`**

The value to set for the specified key.

**`Param`**

Indicates whether the operation is performed in a development environment.

#### Type declaration

▸ (`key`, `value`, `isDev`): `void`

Sets the value of a specific key in the application state.

##### Parameters

| Name    | Type      | Description                                                                |
| :------ | :-------- | :------------------------------------------------------------------------- |
| `key`   | `string`  | The key of the state value to set.                                         |
| `value` | `unknown` | The value to set for the specified key.                                    |
| `isDev` | `boolean` | Indicates whether the operation is performed in a development environment. |

##### Returns

`void`

#### Defined in

[types.ts:48](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/hooks/use-global-context/src/types.ts#L48)

---

### setNotificationState

• **setNotificationState**: (`notification`: [`notification`](notification.md)) => `void`

Sets the notification state of the application.

**`Param`**

The notification object to set.

#### Type declaration

▸ (`notification`): `void`

Sets the notification state of the application.

##### Parameters

| Name           | Type                              | Description                     |
| :------------- | :-------------------------------- | :------------------------------ |
| `notification` | [`notification`](notification.md) | The notification object to set. |

##### Returns

`void`

#### Defined in

[types.ts:79](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/hooks/use-global-context/src/types.ts#L79)

---

### toggleDarkMode

• **toggleDarkMode**: (`isDarkModeActive`: `boolean`) => `void`

Toggles the dark mode of the application.

**`Param`**

Indicates whether the dark mode should be activated or deactivated.

#### Type declaration

▸ (`isDarkModeActive`): `void`

Toggles the dark mode of the application.

##### Parameters

| Name               | Type      | Description                                                         |
| :----------------- | :-------- | :------------------------------------------------------------------ |
| `isDarkModeActive` | `boolean` | Indicates whether the dark mode should be activated or deactivated. |

##### Returns

`void`

#### Defined in

[types.ts:73](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/hooks/use-global-context/src/types.ts#L73)
