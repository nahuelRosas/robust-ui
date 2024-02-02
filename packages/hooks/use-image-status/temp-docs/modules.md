[@robust-ui/use-image-status](README.md) / Exports

# @robust-ui/use-image-status

## Table of contents

### Type Aliases

- [ImageErrorEvent](modules.md#imageerrorevent)
- [ImageLoadEvent](modules.md#imageloadevent)
- [ImageLoaderProps](modules.md#imageloaderprops)

### Functions

- [useImageStatus](modules.md#useimagestatus)

## Type Aliases

### ImageErrorEvent

Ƭ **ImageErrorEvent**: `SyntheticEvent`\<`HTMLImageElement`, `Event`\>

Represents an error event that occurs when an image fails to load.

#### Defined in

[types.ts:12](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-image-status/src/types.ts#L12)

___

### ImageLoadEvent

Ƭ **ImageLoadEvent**: `SyntheticEvent`\<`HTMLImageElement`, `Event`\>

Represents an event that is triggered when an image is loaded.

**`Template`**

The type of the event target.

**`Template`**

The type of the event.

#### Defined in

[types.ts:8](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-image-status/src/types.ts#L8)

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
| `onLoad?` | (`event`: [`ImageLoadEvent`](modules.md#imageloadevent)) => `void` | Callback function called when the image has finished loading. |
| `sizes?` | `string` | - |
| `src?` | `string` | - |
| `srcSet?` | \{ `size`: `string` ; `url`: `string`  }[] | - |

#### Defined in

[types.ts:17](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-image-status/src/types.ts#L17)

## Functions

### useImageStatus

▸ **useImageStatus**(`options`): ``"failed"`` \| ``"loaded"`` \| ``"loading"`` \| ``"pending"``

Custom hook that tracks the loading status of an image.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ImageLoaderProps`](modules.md#imageloaderprops) | The options for the image loader. |

#### Returns

``"failed"`` \| ``"loaded"`` \| ``"loading"`` \| ``"pending"``

The current status of the image loading process.

#### Defined in

[index.ts:18](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-image-status/src/index.ts#L18)
