import React, { FC, useEffect, useState } from "react";
import Head from "next/head";

const Layout: FC<{ children?: any; webViewMobile: boolean; web: string }> = ({
  children,
}) => {
  const dataSeo = {};

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      {/* <MetaSeo {...dataSeo} /> */}
      <div>
        {/* end header */}

        {children}
        {/* footer */}
      </div>
    </>
  );
};

export default React.memo(Layout);
