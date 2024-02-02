[@robust-ui/use-breakpoint-value](README.md) / Exports

# @robust-ui/use-breakpoint-value

## Table of contents

### Functions

- [useBreakpointValue](modules.md#usebreakpointvalue)

## Functions

### useBreakpointValue

▸ **useBreakpointValue**(`options?`): `unknown`

Custom hook that returns a value based on the current breakpoint.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options for the hook. |
| `options.breakPoints?` | `Record`\<`string`, `number`\> | An optional object defining the breakpoints. |
| `options.values?` | `Record`\<`string`, `unknown`\> | An optional object containing values for each breakpoint. |

#### Returns

`unknown`

The value corresponding to the current breakpoint.

**`Throws`**

An error if the hook is not used within the provider and no breakpoints are provided.

#### Defined in

[index.ts:17](https://github.com/nahuelRosas/robust-ui/blob/148f787/packages/hooks/use-breakpoint-value/src/index.ts#L17)
