<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Robust](#robust)
  - [Project Stats](#project-stats)
- [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Contributing](#contributing)
  - [License](#license)
- [Interfaces](#interfaces)
  - [Interface: Action](#interface-action)
    - [Hierarchy](#hierarchy)
    - [Table of contents](#table-of-contents)
    - [Properties](#properties)
  - [Interface: GlobalState](#interface-globalstate)
    - [Indexable](#indexable)
  - [Interface: SetValueAction](#interface-setvalueaction)
    - [Hierarchy](#hierarchy-1)
    - [Table of contents](#table-of-contents-1)
    - [Properties](#properties-1)
- [@robust-ui/global-state-reducer](#robust-uiglobal-state-reducer)
  - [Table of contents](#table-of-contents-2)
    - [Interfaces](#interfaces-1)
    - [Functions](#functions)
  - [Functions](#functions-1)
    - [GlobalStateReducer](#globalstatereducer)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="readmemd"></a>

@robust-ui/global-state-reducer / [Exports](#modulesmd)

# Robust

Robust is a system for generating React components with real-time CSS injection. It is programmed in TypeScript, providing type safety and enhanced developer experience.

## Project Stats

![Alt](https://repobeats.axiom.co/api/embed/57761159b119284992a2370b719d8f8fe9c07e34.svg "Repobeats analytics image")

# Installation

You can install Robust using either npm or pnpm. To do this, run one of the following commands:

Using npm:

```bash
npm install @robust-ui/core
```

Using pnpm:

```bash
pnpm install @robust-ui/core
```

using yarn:

```bash
yarn add @robust-ui/core
```

Alternatively, you can also download Robust from the GitHub repository and manually install the dependencies. The prepare script defined in the package.json file will automatically build all the files within the packages folder.

## Usage

To use Robust, you need to make use of the `Main` component from the `@robust-ui/nextjs-components` repository. Note that the functionality has only been tested with Next.js and may not work in other React environments.

Here's an example of how to use Robust in a Next.js application:

```tsx
import { Main, Header, Text, Icon, Flex } from "@robust-ui/nextjs-components";
import { SideMenu } from "@/components/drawer";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Main color="white" fontFamily="Fira Code">
      <Header backgroundColor="gunMetal">
        <Flex>
          <Text fontWeight="700" fontSize="1.5rem">
            Nahuel
          </Text>
        </Flex>
        <Icon type="menu" onClick={() => setOpen(!open)} />
      </Header>
      <SideMenu open={open} setOpen={setOpen} />
      <Component {...pageProps} />
    </Main>
  );
}
```

In the above example, we import the necessary components from Robust and use them to create a basic application structure. The `Main` component sets the color and font family for the components. The `Header` component represents the application header, including a title and a menu icon that toggles the `open` state. The `SideMenu` component displays a side drawer with links and language options. Finally, we render the `Component` with the `pageProps`.

Please note that this usage example is specific to Next.js, and the functionality may not be tested or supported in other React environments. Make sure to customize the components and their properties based on your specific requirements.

## Features

Robust includes the following features:

- Automatic responsiveness: The components are designed to adapt to different screen sizes and orientations.
- Quick language switching: Easily switch between different languages using the language options provided.
- Dark mode: The system supports a dark mode theme that can be enabled or disabled.
- Global states: Robust provides mechanisms for managing global states and sharing data between components.
- Real-time CSS injection: The system injects CSS in real time, allowing for dynamic styling and theming.
- TypeScript support: Robust is programmed in TypeScript, providing type safety and enhanced developer experience.
- Customizable components: The components can be customized using various properties to suit your specific requirements.
- Easy to use: Robust is designed to be easy to use and integrate with existing React applications.
- Extensible: The system can be extended with additional components and functionality as needed.
- Well-documented: The codebase is well-documented, making it easy to understand and contribute to.
- Active development: Robust is actively developed and maintained, with regular updates and improvements.
-

## Contributing

Contributions to Robust are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

Robust is released under the [MIT License](https://opensource.org/licenses/MIT).

---

# Interfaces

<a name="interfacesactionmd"></a>

[@robust-ui/global-state-reducer](#readmemd) / [Exports](#modulesmd) / Action

## Interface: Action

Represents an action in the application.

### Hierarchy

- **`Action`**

  ↳ [`SetValueAction`](#interfacessetvalueactionmd)

### Table of contents

#### Properties

- [type](#type)

### Properties

#### type

• **type**: `string`

##### Defined in

[index.ts:5](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/reducer/global-state-reducer/src/index.ts#L5)

<a name="interfacesglobalstatemd"></a>

[@robust-ui/global-state-reducer](#readmemd) / [Exports](#modulesmd) / GlobalState

## Interface: GlobalState

Represents the global state object.

### Indexable

▪ [key: `string`]: `unknown`

<a name="interfacessetvalueactionmd"></a>

[@robust-ui/global-state-reducer](#readmemd) / [Exports](#modulesmd) / SetValueAction

## Interface: SetValueAction

Represents an action that sets the value of a specific key in the global state.

### Hierarchy

- [`Action`](#interfacesactionmd)

  ↳ **`SetValueAction`**

### Table of contents

#### Properties

- [key](#key)
- [type](#type)
- [value](#value)

### Properties

#### key

• **key**: `string`

##### Defined in

[index.ts:12](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/reducer/global-state-reducer/src/index.ts#L12)

---

#### type

• **type**: `string`

##### Inherited from

[Action](#interfacesactionmd).[type](#type)

##### Defined in

[index.ts:5](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/reducer/global-state-reducer/src/index.ts#L5)

---

#### value

• **value**: `unknown`

##### Defined in

[index.ts:13](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/reducer/global-state-reducer/src/index.ts#L13)

<a name="modulesmd"></a>

[@robust-ui/global-state-reducer](#readmemd) / Exports

# @robust-ui/global-state-reducer

## Table of contents

### Interfaces

- [Action](#interfacesactionmd)
- [GlobalState](#interfacesglobalstatemd)
- [SetValueAction](#interfacessetvalueactionmd)

### Functions

- [GlobalStateReducer](#globalstatereducer)

## Functions

### GlobalStateReducer

▸ **GlobalStateReducer**(`state`, `action`): [`GlobalState`](#interfacesglobalstatemd)

Reducer function for managing the global state.

#### Parameters

| Name     | Type                                      | Description                                     |
| :------- | :---------------------------------------- | :---------------------------------------------- |
| `state`  | [`GlobalState`](#interfacesglobalstatemd) | The current global state.                       |
| `action` | `unknown`                                 | The action to be performed on the global state. |

#### Returns

[`GlobalState`](#interfacesglobalstatemd)

The updated global state.

#### Defined in

[index.ts:30](https://github.com/nahuelRosas/robust-ui/blob/bbc15f2/packages/reducer/global-state-reducer/src/index.ts#L30)
