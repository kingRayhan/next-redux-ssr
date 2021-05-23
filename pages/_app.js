import React from "react";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

import { wrapper } from "../store";
import "../styles/app.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
  </>
);

export default wrapper.withRedux(MyApp);
