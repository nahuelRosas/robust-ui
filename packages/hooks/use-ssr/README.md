<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)
- [@robust-ui/use-ssr](#robust-uiuse-ssr)
  - [Table of contents](#table-of-contents)
    - [Functions](#functions)
  - [Functions](#functions-1)
    - [useSSR](#usessr)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@robust-ui/use-ssr / [Exports](#modulesmd)

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

[@robust-ui/use-ssr](#readmemd) / Exports

# @robust-ui/use-ssr

## Table of contents

### Functions

- [useSSR](#usessr)

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
