import { Provider } from "@robust-ui/nextjs-components";
import { Analytics } from "@vercel/analytics/react";
import React, { lazy, Suspense } from "react";
import type { AppProps } from "next/app";
import Nav from "@/components/nav";
import Sub from "@/components/sub";
const Background = lazy(() => import("@/components/background"));
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      {/* <Suspense>
        <Background />
      </Suspense> */}
      <Provider bg="transparent">
        <Nav />
        <Component {...pageProps} />
        <Sub />
      </Provider>
    </>
  );
}
