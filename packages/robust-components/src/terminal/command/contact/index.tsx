import React from "react";
import { Flex } from "@/layout";
import { Span } from "@/typography";
import { Link } from "@/link";
function Contact() {
  return (
    <Flex
      flexDirection="column"
      fontSize="0.9em"
      optimizedWidth
      justifyContent="center"
    >
      <Span>Contact information</Span>
      <Flex>
        <Span color="brightPink">Email:</Span>
        <Link href="mailto:nahuel.rosas@mi.unc.edu.ar" color="green">
          nahuel.rosas@mi.unc.edu.ar
        </Link>
      </Flex>
      <Flex>
        <Span color="brightPink">Project:</Span>
        <Link href="https://github.com/nahuelRosas/Robust" color="green">
          https://github.com/nahuelRosas/Robust
        </Link>
      </Flex>
    </Flex>
  );
}

export const ContactPage = React.memo(Contact);
