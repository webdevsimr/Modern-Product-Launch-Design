import React from "react";
import Home from "@/components/homepage";
import Head from "next/head";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Moderen Product Launch</title>
        <meta name="description" content="This is my website description" />
        <meta name="keywords" content="nextjs, react, seo" />
      </Head>
      <Home />;
    </>
  );
};

export default Homepage;
