import "../styles/app.css";
import { wrapper } from "../store";
import React from "react";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
