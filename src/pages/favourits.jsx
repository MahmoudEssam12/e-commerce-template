import React from "react";
import MainLayout from "../Layouts/MainLayout";
import Head from "next/head";
import OfferCard from "../components/OfferCard/OfferCard";
import { Container } from "@mui/material";
import DividerText from "../components/DividerText/DividerText";
import { motion } from "framer-motion";
function Favourits() {
  return (
    <motion.div exit={{ y: -30 }} initial={{ y: -30 }} animate={{ y: 0 }}>
      <Head>
        <title>E-commerce - favourits</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="favourits">
        <div className="grey-bg" style={{ minHeight: "80vh" }}>
          <Container maxWidth="lg">
            <div className="favourits-row">
              <OfferCard name="نظارات" imgNum={1} />
              <OfferCard name="نظارات" imgNum={1} />
              <OfferCard name="نظارات" imgNum={1} />
              <OfferCard name="نظارات" imgNum={1} />
            </div>
          </Container>

          <style jsx>
            {`
              .favourits-row {
                padding: 2rem 0;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
              }
            `}
          </style>
        </div>
      </div>
    </motion.div>
  );
}

Favourits.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Favourits;
