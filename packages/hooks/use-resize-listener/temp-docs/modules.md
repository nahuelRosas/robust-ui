[@robust-ui/use-resize-listener](README.md) / Exports

# @robust-ui/use-resize-listener

## Table of contents

### Functions

- [useResizeListener](modules.md#useresizelistener)

## Functions

### useResizeListener

▸ **useResizeListener**(`«destructured»`): `void`

Attaches a resize listener to the window and invokes the provided callback functions when the window is resized.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `debouncedHandleResize` | `undefined` \| (`this`: `unknown`, ...`args`: `unknown`[]) => `void` |
| › `handleResize` | () => `void` |

#### Returns

`void`

**`Throws`**

If the first argument is not a function or if debouncedHandleResize is falsy.

#### Defined in

[hooks/use-resize-listener/src/index.ts:11](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-resize-listener/src/index.ts#L11)
