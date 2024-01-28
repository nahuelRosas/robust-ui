# Robust

Robust is a system for generating React components with real-time CSS injection. It is programmed in TypeScript, providing type safety and enhanced developer experience.

# Installation

You can install Robust using either npm or pnpm. To do this, run one of the following commands:

Using npm:

```bash
npm install @robust-ui/nextjs-components
```

Using pnpm:

```bash
pnpm install @robust-ui/nextjs-components
```

using yarn:

```bash
yarn add @robust-ui/nextjs-components
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

```.
├── components
│   ├── custom
│   │   ├── card
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsup.config.ts
│   │   ├── code-text
│   │   │   ├── CHANGELOG.md
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsup.config.ts
│   │   ├── cover
│   │   │   ├── CHANGELOG.md
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsup.config.ts
│   │   ├── icons
│   │   │   ├── CHANGELOG.md
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── animals
│   │   │   │   │   └── index.ts
│   │   │   │   ├── arrows
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   ├── badges
│   │   │   │   │   └── index.ts
│   │   │   │   ├── brand
│   │   │   │   │   └── index.ts
│   │   │   │   ├── buildings
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   ├── business
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   ├── charts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── communication
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   ├── computers
│   │   │   │   │   └── index.ts
│   │   │   │   ├── currencies
│   │   │   │   │   └── index.ts
│   │   │   │   ├── database
│   │   │   │   │   └── index.ts
│   │   │   │   ├── design
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   ├── development
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   ├── device
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   ├── document
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   ├── e-commerce
│   │   │   │   │   └── index.ts
│   │   │   │   ├── editor
│   │   │   │   │   └── index.ts
│   │   │   │   ├── electrical
│   │   │   │   │   └── index.ts
│   │   │   │   ├── extensions
│   │   │   │   │   └── index.ts
│   │   │   │   ├── filled
│   │   │   │   │   └── index.ts
│   │   │   │   ├── finance
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   ├── food
│   │   │   │   │   └── index.ts
│   │   │   │   ├── games
│   │   │   │   │   └── index.ts
│   │   │   │   ├── gender
│   │   │   │   │   └── index.ts
│   │   │   │   ├── gestures
│   │   │   │   │   └── index.ts
│   │   │   │   ├── health
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── laundry
│   │   │   │   │   └── index.ts
│   │   │   │   ├── letters
│   │   │   │   │   └── index.ts
│   │   │   │   ├── logic
│   │   │   │   │   └── index.ts
│   │   │   │   ├── logos
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   ├── map
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   ├── math
│   │   │   │   │   └── index.ts
│   │   │   │   ├── media
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   ├── mood
│   │   │   │   │   └── index.ts
│   │   │   │   ├── nature
│   │   │   │   │   └── index.ts
│   │   │   │   ├── numbers
│   │   │   │   │   └── index.ts
│   │   │   │   ├── others
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   ├── photography
│   │   │   │   │   └── index.ts
│   │   │   │   ├── shapes
│   │   │   │   │   └── index.ts
│   │   │   │   ├── sport
│   │   │   │   │   └── index.ts
│   │   │   │   ├── symbols
│   │   │   │   │   └── index.ts
│   │   │   │   ├── system
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   ├── text
│   │   │   │   │   └── index.ts
│   │   │   │   ├── user
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   ├── vehicles
│   │   │   │   │   └── index.ts
│   │   │   │   ├── version-control
│   │   │   │   │   └── index.ts
│   │   │   │   ├── weather
│   │   │   │   │   ├── fill
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   └── line
│   │   │   │   │       └── index.ts
│   │   │   │   └── zodiac
│   │   │   │       └── index.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsup.config.ts
│   │   ├── nested-styled-text
│   │   │   ├── CHANGELOG.md
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── assemble-children
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── format-multi-style-string
│   │   │   │   │   └── index.ts
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsup.config.ts
│   │   ├── overlay
│   │   │   ├── CHANGELOG.md
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsup.config.ts
│   │   ├── spinner
│   │   │   ├── CHANGELOG.md
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── index.tsx
│   │   │   │   ├── models.ts
│   │   │   │   └── types.ts
│   │   │   ├── tsconfig.json
│   │   │   ├── tsup.config.bundled_k1f6ykgwuo.mjs
│   │   │   └── tsup.config.ts
│   │   ├── toast
│   │   │   ├── CHANGELOG.md
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsup.config.ts
│   │   └── toast-manager
│   │       ├── CHANGELOG.md
│   │       ├── package.json
│   │       ├── src
│   │       │   ├── index.tsx
│   │       │   └── types.ts
│   │       ├── tsconfig.json
│   │       └── tsup.config.ts
│   ├── embedded-content
│   │   ├── image
│   │   │   ├── CHANGELOG.md
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsup.config.ts
│   │   └── svg
│   │       ├── CHANGELOG.md
│   │       ├── package.json
│   │       ├── src
│   │       │   ├── index.tsx
│   │       │   ├── is-svg-element
│   │       │   │   └── index.ts
│   │       │   ├── path
│   │       │   │   ├── index.tsx
│   │       │   │   └── types.ts
│   │       │   └── types.ts
│   │       ├── tsconfig.json
│   │       └── tsup.config.ts
│   ├── form
│   │   ├── input
│   │   │   ├── CHANGELOG.md
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsup.config.ts
│   │   ├── label
│   │   │   ├── CHANGELOG.md
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsup.config.ts
│   │   └── textarea
│   │       ├── CHANGELOG.md
│   │       ├── package.json
│   │       ├── src
│   │       │   ├── index.tsx
│   │       │   └── types.ts
│   │       ├── tsconfig.json
│   │       └── tsup.config.ts
│   ├── grouping-content
│   │   ├── div
│   │   │   ├── block
│   │   │   │   ├── CHANGELOG.md
│   │   │   │   ├── package.json
│   │   │   │   ├── src
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── types.ts
│   │   │   │   ├── tsconfig.json
│   │   │   │   └── tsup.config.ts
│   │   │   ├── flex
│   │   │   │   ├── CHANGELOG.md
│   │   │   │   ├── package.json
│   │   │   │   ├── src
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── types.ts
│   │   │   │   ├── tsconfig.json
│   │   │   │   └── tsup.config.ts
│   │   │   └── grid
│   │   │       ├── CHANGELOG.md
│   │   │       ├── package.json
│   │   │       ├── src
│   │   │       │   ├── index.tsx
│   │   │       │   └── types.ts
│   │   │       ├── tsconfig.json
│   │   │       └── tsup.config.ts
│   │   ├── main
│   │   │   ├── CHANGELOG.md
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   └── csr
│   │   │   │       ├── index.tsx
│   │   │   │       └── types.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsup.config.ts
│   │   ├── menu
│   │   │   ├── CHANGELOG.md
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsup.config.ts
│   │   └── p
│   │       ├── CHANGELOG.md
│   │       ├── package.json
│   │       ├── src
│   │       │   ├── index.tsx
│   │       │   └── types.ts
│   │       ├── tsconfig.json
│   │       └── tsup.config.ts
│   ├── interactive-elements
│   │   └── button
│   │       ├── CHANGELOG.md
│   │       ├── package.json
│   │       ├── src
│   │       │   ├── index.tsx
│   │       │   └── types.ts
│   │       ├── tsconfig.json
│   │       └── tsup.config.ts
│   ├── sections
│   │   ├── aside
│   │   │   ├── CHANGELOG.md
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── generate-structure
│   │   │   │   │   └── index.ts
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsup.config.ts
│   │   ├── footer
│   │   │   ├── CHANGELOG.md
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsup.config.ts
│   │   └── header
│   │       ├── CHANGELOG.md
│   │       ├── package.json
│   │       ├── src
│   │       │   ├── index.tsx
│   │       │   └── types.ts
│   │       ├── tsconfig.json
│   │       └── tsup.config.ts
│   └── semantic
│       └── span
│           ├── CHANGELOG.md
│           ├── package.json
│           ├── src
│           │   ├── index.tsx
│           │   └── types.ts
│           ├── tsconfig.json
│           └── tsup.config.ts
├── nextjs-components
│   ├── general
│   │   ├── CHANGELOG.md
│   │   ├── package.json
│   │   ├── src
│   │   │   └── index.ts
│   │   ├── tsconfig.json
│   │   └── tsup.config.ts
│   └── next-link
│       ├── CHANGELOG.md
│       ├── package.json
│       ├── src
│       │   ├── index.tsx
│       │   └── types.ts
│       ├── tsconfig.json
│       └── tsup.config.ts
└── react-components
    ├── CHANGELOG.md
    ├── package.json
    ├── src
    │   └── index.ts
    ├── tsconfig.json
    └── tsup.config.ts
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
