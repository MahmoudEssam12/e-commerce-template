import Head from "next/head";
import React, { useState, useEffect } from "react";
import MainLayout from "../../Layouts/MainLayout";
import styles from "../../styles/Cart.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, Grid } from "@mui/material";
import CartItem from "../../components/CartItem/CartItem";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectCartItem } from "../../store/slices/cartSlice";
import { motion } from "framer-motion";
import CartCard from "../../components/CartCard/CartCard";
import RTlLayout from "../../Layouts/RTlLayout";
function createData(id, name, merchant, color, price, img, quantity, size) {
  return { id, name, merchant, color, price, img, quantity, size };
}

const rows = [
  createData(1, "Frozen yoghurt", "Ahmed", "ابيض", 120, 1, 1, "s"),
  createData(2, "yoghurt", "Ahmed", "اسود", 120, 2, 1, "m"),
  createData(3, "Frozen", "Ahmed", "احمر", 120, 3, 1, "xl"),
];

function Cart() {
  const router = useRouter();
  const [voucherValue, setVoucherValue] = useState("");
  const [step, setStep] = useState(1);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const handleChange = (e) => {
    setVoucherValue(e.target.value);
  };

  // make a slice in the store for the cart
  // implement the add to cart btn in the product page and the button of the product cart
  // fetch the data from the store in this file
  // create an array of prices and quantites from the array of products
  const items = useSelector(selectCartItem);
  const getTotalOrderCost = () => {
    if (items.length) {
      let arrayOfPrices = items.map(
        (item) => Number(item.price) * Number(item.quantity)
      );
      let orderPrice = arrayOfPrices.reduce((prev, current) => prev + current);
      return orderPrice;
    }
    return 0;
  };
  const getTotalCost = () => {
    // create an array of numbers from items array
    // with reduce method accumelate the arr of numbers
    //then return that number to the total cost div
    if (items.length) {
      let arrayOfPrices = items.map(
        (item) => Number(item.price) * Number(item.quantity)
      );
      let orderPrice = arrayOfPrices.reduce((prev, current) => prev + current);
      // add the delivery cost on the order price
      return orderPrice;
    }
    return 0;
  };

  // useEffect to update the total cost when quantity changes
  useEffect(() => {
    getTotalOrderCost();
    getTotalCost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);
  return (
    <div className={styles.cartWrapper}>
      <Head>
        <title>Cart</title>
      </Head>
      <Container maxWidth="lg">
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">الوصف</TableCell>
                <TableCell align="center">الحجم</TableCell>
                <TableCell align="center">اللون</TableCell>
                <TableCell align="center">الكميه</TableCell>
                <TableCell align="center">حذف</TableCell>
                <TableCell align="center">السعر</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "& td": { fontSize: "1.2rem" },
                  }}
                >
                  <CartItem
                    id={row.id}
                    name={row.name}
                    merchant={row.merchant}
                    color={row.color}
                    price={row.price}
                    img={row.img}
                    quantity={row.quantity}
                    key={row.id}
                    size={row.size}
                  />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={2} className={styles.cart_details}>
          <Grid item xs={12} sm={6} md={3}>
            <CartCard title="خصم" value="0.00ج" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CartCard title="اجمالي المشتريات" value="500ج" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CartCard title="مصاريف الشحن" value="50ج" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CartCard title="الاجمالي" value="550ج" />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <RTlLayout>
              <TextField
                margin="none"
                fullWidth
                id="coupon"
                label="اضافة كوبون"
                name="coupon"
                autoComplete="coupon"
                dir="rtl"
              />
            </RTlLayout>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Button
              fullWidth
              variant="contained"
              sx={{ py: 1.2, fontSize: "1.2rem" }}
              style={{
                backgroundColor: "#000",
                color: "var(--secondary-color)",
              }}
            >
              اضافه كوبون
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Button
              fullWidth
              variant="contained"
              sx={{ py: 1.2, fontSize: "1.2rem" }}
              style={{
                backgroundColor: "#000",
                color: "var(--secondary-color)",
              }}
              onClick={() => router.push("/cart/payment")}
            >
              ادفع الان
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Cart.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Cart;
