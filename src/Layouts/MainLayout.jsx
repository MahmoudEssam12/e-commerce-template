import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
function MainLayout(props) {
  return (
    <>
      <Head>
        <title>E-commerce</title>
      </Head>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
