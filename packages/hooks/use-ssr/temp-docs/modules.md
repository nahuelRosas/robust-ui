[@robust-ui/use-ssr](README.md) / Exports

# @robust-ui/use-ssr

## Table of contents

### Functions

- [useSSR](modules.md#usessr)

## Functions

### useSSR

▸ **useSSR**(): `Object`

Custom hook that determines if the code is running on the server or the browser.

#### Returns

`Object`

An object with properties indicating if the code is running on the browser or the server.

| Name | Type |
| :------ | :------ |
| `isBrowser` | ``false`` \| `HTMLElement` |
| `isServer` | `boolean` |

#### Defined in

[index.ts:5](https://github.com/nahuelRosas/robust-ui/blob/ed1ad0c/packages/hooks/use-ssr/src/index.ts#L5)
