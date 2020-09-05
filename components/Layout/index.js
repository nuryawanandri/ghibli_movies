import React from "react";
import Link from "next/link";

import Styles from "./index.scss";

const Layout = (props) => (
  <div>
    {props.route === "/" ? (
      <div className={Styles.headerContainerHome}>
        <img src="/static/images/ghibli_studio.png" />
      </div>
    ) : (
      <div className={Styles.headerContainer}>
        <Link href="/">
          <a>
            <img src="/static/images/ghibli_studio.png" />
          </a>
        </Link>
      </div>
    )}
    {props.children}
  </div>
);

export default Layout;
