<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)
- [@robust-ui/use-image-status](#robust-uiuse-image-status)
  - [Table of contents](#table-of-contents)
    - [Type Aliases](#type-aliases)
    - [Functions](#functions)
  - [Type Aliases](#type-aliases-1)
    - [ImageErrorEvent](#imageerrorevent)
    - [ImageLoadEvent](#imageloadevent)
    - [ImageLoaderProps](#imageloaderprops)
  - [Functions](#functions-1)
    - [useImageStatus](#useimagestatus)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@robust-ui/use-image-status / [Exports](#modulesmd)

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

[@robust-ui/use-image-status](#readmemd) / Exports

# @robust-ui/use-image-status

## Table of contents

### Type Aliases

- [ImageErrorEvent](#imageerrorevent)
- [ImageLoadEvent](#imageloadevent)
- [ImageLoaderProps](#imageloaderprops)

### Functions

- [useImageStatus](#useimagestatus)

## Type Aliases

### ImageErrorEvent

Ƭ **ImageErrorEvent**: `SyntheticEvent`\<`HTMLImageElement`, `Event`\>

Represents an error event that occurs when an image fails to load.

#### Defined in

[types.ts:12](https://github.com/nahuelRosas/robust-ui/blob/e04771a/packages/hooks/use-image-status/src/types.ts#L12)

___

### ImageLoadEvent

Ƭ **ImageLoadEvent**: `SyntheticEvent`\<`HTMLImageElement`, `Event`\>

Represents an event that is triggered when an image is loaded.

**`Template`**

The type of the event target.

**`Template`**

The type of the event.

#### Defined in

[types.ts:8](https://github.com/nahuelRosas/robust-ui/blob/e04771a/packages/hooks/use-image-status/src/types.ts#L8)

___

### ImageLoaderProps

Ƭ **ImageLoaderProps**: `Object`

Props for the ImageLoader component.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `crossOrigin?` | `string` \| ``null`` | - |
| `delay?` | `number` | - |
| `ignoreFallback?` | `boolean` | - |
| `onError?` | `ReactEventHandler`\<`HTMLImageElement`\> | - |
| `onLoad?` | (`event`: [`ImageLoadEvent`](#imageloadevent)) => `void` | Callback function called when the image has finished loading. |
| `sizes?` | `string` | - |
| `src?` | `string` | - |
| `srcSet?` | \{ `size`: `string` ; `url`: `string`  }[] | - |

#### Defined in

[types.ts:17](https://github.com/nahuelRosas/robust-ui/blob/e04771a/packages/hooks/use-image-status/src/types.ts#L17)

## Functions

### useImageStatus

▸ **useImageStatus**(`options`): ``"failed"`` \| ``"loaded"`` \| ``"loading"`` \| ``"pending"``

Custom hook that tracks the loading status of an image.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ImageLoaderProps`](#imageloaderprops) | The options for the image loader. |

#### Returns

``"failed"`` \| ``"loaded"`` \| ``"loading"`` \| ``"pending"``

The current status of the image loading process.

#### Defined in

[index.ts:18](https://github.com/nahuelRosas/robust-ui/blob/e04771a/packages/hooks/use-image-status/src/index.ts#L18)
