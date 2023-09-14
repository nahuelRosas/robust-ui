# Robust

Robust is a system for generating React components with real-time CSS injection. It is programmed in TypeScript, providing type safety and enhanced developer experience.

# Installation

You can install Robust using either npm or pnpm. To do this, run one of the following commands:

Using npm:

```bash
npm install @robust-ui/nextjs
```

Using pnpm:
```bash
pnpm install @robust-ui/nextjs
```

Alternatively, you can also download Robust from the GitHub repository and manually install the dependencies. The prepare script defined in the package.json file will automatically build all the files within the packages folder.

## Usage

To use Robust, you need to make use of the `Provider` component from the `@robust-ui/nextjs` repository. Note that the functionality has only been tested with Next.js and may not work in other React environments.

Here's an example of how to use Robust in a Next.js application:

```tsx
import type { AppProps } from "next/app";
import { Provider, Header, Text, Icon, Flex } from "@robust-ui/nextjs";
import React from "react";
import { SideMenu } from "@/components/drawer";

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Provider color="white" fontFamily="Fira Code">
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
    </Provider>
  );
}
```

In the above example, we import the necessary components from Robust and use them to create a basic application structure. The `Provider` component sets the color and font family for the components. The `Header` component represents the application header, including a title and a menu icon that toggles the `open` state. The `SideMenu` component displays a side drawer with links and language options. Finally, we render the `Component` with the `pageProps`.

Please note that this usage example is specific to Next.js, and the functionality may not be tested or supported in other React environments. Make sure to customize the components and their properties based on your specific requirements.

## Available Components

The following components are available in Robust as of July 5th:

```
├── button
│   │   │   └── index.tsx
│   │   ├── drawer
│   │   │   ├── complements
│   │   │   │   ├── DrawerBody
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── types.ts
│   │   │   │   ├── DrawerCloseButton
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── types.ts
│   │   │   │   ├── DrawerFooter
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── types.ts
│   │   │   │   ├── DrawerHeader
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── types.ts
│   │   │   │   └── index.ts
│   │   │   ├── index.tsx
│   │   │   ├── options
│   │   │   │   ├── placement.ts
│   │   │   │   └── size.ts
│   │   │   └── types.ts
│   │   ├── form
│   │   │   ├── form
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── formControl
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   └── index.ts
│   │   ├── header
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── icon
│   │   │   ├── circle
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── defs
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── filter
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── g
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── icons
│   │   │   │   ├── clock
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── close
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── dev
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── dotsSixVertical
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── error
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── expandMore
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── fallbackIcon
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── fill
│   │   │   │   │   ├── arrowLeftFill
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── arrowRightFill
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   ├── basics
│   │   │   │   │   │   ├── index.ts
│   │   │   │   │   │   └── star
│   │   │   │   │   │       └── index.tsx
│   │   │   │   │   ├── githubFill
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── globe
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── home
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── index.ts
│   │   │   │   ├── menu
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── pc
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── pc2
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── socialMedia
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── linkedin
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   └── x-twitter
│   │   │   │   │       └── index.tsx
│   │   │   │   ├── tick
│   │   │   │   │   └── index.tsx
│   │   │   │   └── x
│   │   │   │       └── index.tsx
│   │   │   ├── index.tsx
│   │   │   ├── path
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── pattern
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── rect
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── types.ts
│   │   │   └── use
│   │   │       ├── index.tsx
│   │   │       └── types.ts
│   │   ├── image
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── index.ts
│   │   ├── input
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── layout
│   │   │   ├── block
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── flex
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── grid
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── index.tsx
│   │   │   └── scroller
│   │   │       ├── index.tsx
│   │   │       ├── scrollerInner.tsx
│   │   │       └── types.ts
│   │   ├── link
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── menu
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── slider
│   │   │   ├── index.tsx
│   │   │   └── types.ts
│   │   ├── spinner
│   │   │   ├── index.tsx
│   │   │   ├── models.ts
│   │   │   └── types.ts
│   │   ├── terminal
│   │   │   ├── command
│   │   │   │   ├── aboutPage
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── calc
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── contact
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── help
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   ├── types.ts
│   │   │   │   └── welcome
│   │   │   │       └── index.tsx
│   │   │   ├── functions
│   │   │   │   ├── evaluateExpression
│   │   │   │   │   └── index.ts
│   │   │   │   ├── handleKeyDown
│   │   │   │   │   └── index.ts
│   │   │   │   ├── handleSubmit
│   │   │   │   │   └── index.ts
│   │   │   │   ├── processInput
│   │   │   │   │   └── index.ts
│   │   │   │   ├── updateIsValidCommand
│   │   │   │   │   └── index.ts
│   │   │   │   └── updateSuggestedCommands
│   │   │   │       └── index.ts
│   │   │   ├── index.tsx
│   │   │   ├── termForm
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── terminalReducer
│   │   │   │   ├── index.ts
│   │   │   │   └── types.ts
│   │   │   ├── termInfo
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── termOutput
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   └── types.ts
│   │   ├── types.ts
│   │   └── typography
│   │       ├── index.ts
│   │       ├── span
│   │       │   ├── index.tsx
│   │       │   └── types.ts
│   │       ├── text
│   │       │   ├── index.tsx
│   │       │   └── types.ts
│   │       └── textMultiStyle
│   │           ├── index.tsx
│   │           └── types.ts
```

## Features

Robust includes the following features:

- Automatic responsiveness: The components are designed to adapt to different screen sizes and orientations.
- Quick language switching: Easily switch between different languages using the language options provided.
- Dark mode: The system supports a dark mode theme that can be enabled or disabled.
- Global states: Robust provides mechanisms for managing global states and sharing data between components.

## Contributing

Contributions to Robust are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

Robust is released under the [MIT License](https://opensource.org/licenses/MIT).

---
