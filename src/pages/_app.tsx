import Head from "next/head";
import "../../assets/css/theme.css";
// import "../../assets/css/theme.min.css";
import "../../assets/css/base.css";
import "../../assets/css/main.css";
import "../../assets/css/responsive.css";
import LoadingPage from "@/components/LoadingPage";
import AOS from "aos";
import "aos/dist/aos.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "lazysizes";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoadingPage, setIsLoadingPage] = useState<string>("active");

  useEffect(() => {
    let scrollpos = window.scrollY;
    const header = document.getElementById("navScroll");
    const header_height = header?.offsetHeight || 0;
    const add_class_on_scroll = () =>
      header?.classList.add("scrolled", "shadow-sm");
    const remove_class_on_scroll = () =>
      header?.classList.remove("scrolled", "shadow-sm");
    window.addEventListener("scroll", function () {
      scrollpos = window.scrollY;
      if (scrollpos >= header_height) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
    });
  }, []);

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
      <Layout>
        <LoadingPage isLoadingPage={isLoadingPage} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
