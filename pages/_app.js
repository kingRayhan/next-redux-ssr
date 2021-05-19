import App from "next/app";
import "../styles/app.css";
import wrapper from "../store";

class WrappedApp extends App {
  static getInitialProps = (context) =>
    wrapper.getInitialAppProps((store) => async ({ Component, ctx }) => {
      return {
        pageProps: {
          // Call page-level getInitialProps
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
          // Some custom thing for all pages
          appProp: ctx.pathname,
        },
      };
    })(context);

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(WrappedApp);
