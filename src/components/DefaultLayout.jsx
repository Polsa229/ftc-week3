// @flow strict

import * as React from "react";
import NavigationBar from "./NavigationBar";
import BackToTop from "./BackToTop";

function DefaultLayout({ children }) {
  return (
    <div className="relative max-w-screen min-h-screen overflow-x-hidden max-w-screen-3xl mx-auto">
      <NavigationBar />
      <main>{children}</main>
      <BackToTop />
    </div>
  );
}

export default DefaultLayout;
