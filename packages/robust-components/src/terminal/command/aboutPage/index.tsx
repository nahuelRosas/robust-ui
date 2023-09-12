import { Flex } from "@/layout";
import { Span, Text } from "@/typography";
import { Link } from "@/link";
import React from "react";

function Factory() {
  return (
    <Flex
      flexDirection="column"
      fontSize="0.9em"
      optimizedWidth
      justifyContent="center">
      <Span fontSize="0.9em">About Robust</Span>
      <Text fontSize="0.9em" optimizedWidth p="0.5em">
        Hi, I&apos;m Nahuel Rosas and I would like to introduce you to Robust -
        an open-source React component system with real-time CSS customization
        through props. With Robust, you can easily create and style your UI
        components using familiar React syntax.
      </Text>
      <Text fontSize="0.9em" optimizedWidth p="0.5em">
        Robust provides a wide range of pre-built components that can be
        customized using props such as `display=&quot;flex&quot;`,
        `position=&quot;absolute&quot;`, and many more. These props allow you to
        quickly adjust the styling and behavior of the components to suit your
        needs, saving you time and effort in development.
      </Text>
      <Text fontSize="0.9em" optimizedWidth p="0.5em">
        The best part about Robust is its real-time CSS feature. As you modify
        the props of a component, the CSS styles are automatically updated,
        providing instant visual feedback without the need to manually write or
        reload CSS files.
      </Text>
      <Text fontSize="0.9em" optimizedWidth p="0.5em">
        If you&apos;re interested in exploring Robust and leveraging its power
        for your React projects, feel free to check out the project on GitHub:
        <Link href="https://github.com/nahuelrosas/robust" fontWeight="700">
          https://github.com/nahuelrosas/robust
        </Link>
      </Text>
      <Text fontSize="0.9em" optimizedWidth p="0.5em">
        Join the open-source community and contribute to the development of
        Robust. Help us build a robust foundation for React components with
        dynamic CSS customization.
      </Text>
    </Flex>
  );
}

export const AboutPage = React.memo(Factory);
