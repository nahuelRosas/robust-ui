<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)
- [@robust-ui/use-breakpoint-value](#robust-uiuse-breakpoint-value)
  - [Table of contents](#table-of-contents)
    - [Functions](#functions)
  - [Functions](#functions-1)
    - [useBreakpointValue](#usebreakpointvalue)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@robust-ui/use-breakpoint-value / [Exports](#modulesmd)

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

[@robust-ui/use-breakpoint-value](#readmemd) / Exports

# @robust-ui/use-breakpoint-value

## Table of contents

### Functions

- [useBreakpointValue](#usebreakpointvalue)

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

[index.ts:17](https://github.com/nahuelRosas/robust-ui/blob/469f142/packages/hooks/use-breakpoint-value/src/index.ts#L17)
