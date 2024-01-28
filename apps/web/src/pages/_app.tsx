import { Main } from "@robust-ui/nextjs-components";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { lazy, Suspense } from "react";
// import Nav from "@/components/nav";
// import LogRocket from "logrocket";
import Nav from "@/components/nav";
import Sub from "@/components/sub";

const Background = lazy(() => import("@/components/background"));
// LogRocket.init("zenwcu/portfolio");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Analytics /> */}
      {/* <SpeedInsights /> */}
      <Suspense>
        <Background />
      </Suspense>
      <Main>
        <Nav />
        <Component {...pageProps} />
        <Sub />
      </Main>
    </>
  );
}
