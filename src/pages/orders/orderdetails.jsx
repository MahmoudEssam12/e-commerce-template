import React from "react";
import SingleOrderCard from "../../components/OrderCard/SingleOrderCard";
import MainLayout from "../../Layouts/MainLayout";
import { Container } from "@mui/material";
import Head from "next/head";
import { motion } from "framer-motion";

function OrderDetails() {
  return (
    <motion.div exit={{ y: -30 }} initial={{ y: -30 }} animate={{ y: 0 }}>
      <Head>
        <title>Orders</title>
      </Head>
      <Container maxWidth="xl">
        <div className="orders-wrapper">
          <SingleOrderCard />
          <SingleOrderCard />
          <SingleOrderCard />
          <SingleOrderCard />
          <SingleOrderCard />
        </div>
      </Container>
      <style jsx>
        {`
          .orders-wrapper {
            min-height: 80vh;
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            @media (max-width: 880px) {
              justify-content: center;
            }
          }
        `}
      </style>
    </motion.div>
  );
}

OrderDetails.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default OrderDetails;
