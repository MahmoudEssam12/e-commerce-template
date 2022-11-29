import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import { motion } from "framer-motion";
import Head from "next/head";
import OrderCard from "../../components/OrderCard/OrderCard";
import { Container } from "@mui/material";

function Orders() {
  return (
    <motion.div exit={{ y: -30 }} initial={{ y: -30 }} animate={{ y: 0 }}>
      <Head>
        <title>Orders</title>
      </Head>
      <Container maxWidth="xl">
        <div className="orders-wrapper">
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
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
Orders.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Orders;
