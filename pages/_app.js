import React from "react";
import withReduxSaga from "next-redux-saga";

import { wrapper } from "../store";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(withReduxSaga(MyApp));
