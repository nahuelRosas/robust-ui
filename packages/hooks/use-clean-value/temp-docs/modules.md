[@robust-ui/use-clean-value](README.md) / Exports

# @robust-ui/use-clean-value

## Table of contents

### Functions

- [useCleanValue](modules.md#usecleanvalue)

## Functions

### useCleanValue

▸ **useCleanValue**(`«destructured»`): `Object`

Custom hook that cleans and recovers the values of the input props based on certain conditions.

#### Parameters

| Name                              | Type                                       |
| :-------------------------------- | :----------------------------------------- |
| `«destructured»`                  | `Object`                                   |
| › `context?`                      | `Object`                                   |
| › `context.currentBreakpoint`     | `unknown`                                  |
| › `context.currentGlobalLanguage` | `string`                                   |
| › `context.isDarkModeActive`      | `boolean`                                  |
| › `context.mediaBreakpoints`      | `Record`\<`string`, `string` \| `number`\> |
| › `context.theme`                 | `Record`\<`string`, `unknown`\>            |
| › `props`                         | `Record`\<`string`, `unknown`\>            |

#### Returns

`Object`

The cleaned and recovered props.

#### Defined in

[index.ts:11](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/hooks/use-clean-value/src/index.ts#L11)
