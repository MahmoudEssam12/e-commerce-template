import { Container } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import CategoryRow from "../components/CategoryRow/CategoryRow";
import Header from "../components/Header/Header";
import OffersRow from "../components/OffersRow/OffersRow";
import MainLayout from "../Layouts/MainLayout";
import styles from "./../styles/Home.module.scss";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div exit={{ y: -30 }} initial={{ y: -30 }} animate={{ y: 0 }}>
      <Head>
        <title>E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />
        <CategoryRow />
        <section className="white-bg">
          <Container maxWidth="lg">
            <div className={styles.imgSection}>
              <div className={styles.content}>
                <h2>Triper Solid Men R-neck Multicolor T-Shirt</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent nostra, per inceptos himenaeos.
                </p>
              </div>
              <div className={styles.imgWrapper}>
                <Image src="/images/white-shirt.png" alt="white shirt" fill />
              </div>
            </div>
          </Container>
        </section>
        <OffersRow />
      </div>
    </motion.div>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
