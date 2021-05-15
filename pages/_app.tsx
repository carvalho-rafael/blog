
import GlobalStyle from "../styles/globalStyle"

import Router from "next/router";
import React, { useContext, useEffect } from "react";
import ThemeSwitchProvider, { CustomThemeContext } from "../contexts/customThemeProvider";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  const { theme } = useContext(CustomThemeContext);

  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  useEffect(() => {
    if (loading)
      document.body.style.cursor = 'wait'
    else
      document.body.style.cursor = 'auto'

  }, [loading]);

  return (
    <>
      <ThemeSwitchProvider>
          <Component {...pageProps} />
          <GlobalStyle />
      </ThemeSwitchProvider>
    </>
  );
}