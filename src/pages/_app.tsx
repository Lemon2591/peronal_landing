import Head from "next/head";
import "../../public/assets/css/base.css";
import "../../public/assets/css/main.css";
import "../../public/assets/css/responsive.css";

import LoadingPage from "@/components/LoadingPage";
import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect } from "react";

import type { AppProps } from "next/app";

// import "@antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoadingPage, setIsLoadingPage] = useState<string>("active");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      return setIsLoadingPage("non-active");
    }, 2500);

    return () => {
      clearTimeout(timeOut);
    };
  });

  return (
    <>
      <Head>
        {/* <meta name="twitter:image" content="https://www.gcode.jp/images/ogp-pc.png" /> */}
      </Head>
      <LoadingPage isLoadingPage={isLoadingPage} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
