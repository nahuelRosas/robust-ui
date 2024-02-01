<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@robust-ui/core](#robust-uicore)
- [@robust-ui/use-clean-value](#robust-uiuse-clean-value)
  - [Table of contents](#table-of-contents)
    - [Functions](#functions)
  - [Functions](#functions-1)
    - [useCleanValue](#usecleanvalue)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@robust-ui/use-clean-value / [Exports](#modulesmd)

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

[@robust-ui/use-clean-value](#readmemd) / Exports

# @robust-ui/use-clean-value

## Table of contents

### Functions

- [useCleanValue](#usecleanvalue)

## Functions

### useCleanValue

▸ **useCleanValue**(`«destructured»`): `Object`

Custom hook that cleans and recovers the values of the input props based on certain conditions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `context?` | `Object` |
| › `context.currentBreakpoint` | `unknown` |
| › `context.currentGlobalLanguage` | `string` |
| › `context.isDarkModeActive` | `boolean` |
| › `context.mediaBreakpoints` | `Record`\<`string`, `string` \| `number`\> |
| › `context.theme` | `Record`\<`string`, `unknown`\> |
| › `props` | `Record`\<`string`, `unknown`\> |

#### Returns

`Object`

The cleaned and recovered props.

#### Defined in

[index.ts:11](https://github.com/nahuelRosas/robust-ui/blob/8f3d7d6/packages/hooks/use-clean-value/src/index.ts#L11)
