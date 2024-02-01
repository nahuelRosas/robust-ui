<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)
- [@robust-ui/use-toast](#robust-uiuse-toast)
  - [Table of contents](#table-of-contents)
    - [Functions](#functions)
  - [Functions](#functions-1)
    - [useToast](#usetoast)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@robust-ui/use-toast / [Exports](#modulesmd)

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

[@robust-ui/use-toast](#readmemd) / Exports

# @robust-ui/use-toast

## Table of contents

### Functions

- [useToast](#usetoast)

## Functions

### useToast

▸ **useToast**(): (`props`: `notification`) => `void`

Returns a function that can be used to create toast notifications.
The created notifications will be displayed using the global context.

#### Returns

`fn`

A function that accepts a `notification` object and creates a toast notification.

▸ (`props`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `notification` |

##### Returns

`void`

#### Defined in

[index.ts:10](https://github.com/nahuelRosas/robust-ui/blob/e75e912/packages/hooks/use-toast/src/index.ts#L10)
