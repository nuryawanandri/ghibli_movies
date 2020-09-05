import React from "react";
import withReduxSaga from "next-redux-saga";

import { wrapper } from "../store";

import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <Layout route={router.route}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(withReduxSaga(MyApp));
