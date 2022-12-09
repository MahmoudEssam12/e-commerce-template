import {
  Container,
  Grid,
  TextField,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import MainLayout from "../../Layouts/MainLayout";
import RTlLayout from "../../Layouts/RTlLayout";

function Payment() {
  const [selectValue, setSelectValue] = useState("");
  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };
  return (
    <div>
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <h1>الدفع</h1>
        <Grid container spacing={2} sx={{ py: 3 }}>
          <Grid item xs={12} sm={6}>
            <h2>البيانات الشخصيه</h2>
            <FormControl fullWidth size="medium">
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="نوع البطاقه"
                value={selectValue}
                onChange={handleChange}
                sx={{ backgroundColor: "var(--grey-color)" }}
              >
                <MenuItem></MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="cardnumber"
              label="رقم البطاقه"
              name="cardnumber"
              dir="rtl"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="expireDate"
              label="تاريخ الانتهاء"
              name="email"
              dir="rtl"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="cvv"
              label="cvv"
              name="cvv"
              dir="rtl"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h2>بيانات البطاقة</h2>
            <Grid
              container
              spacing={2}
              sx={{ "& > .MuiGrid-item": { paddingTop: 0 } }}
            >
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="fname"
                  label="الاسم الاول"
                  name="fname"
                  dir="rtl"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lname"
                  label="الاسم الثاني"
                  name="lname"
                  dir="rtl"
                />
              </Grid>
            </Grid>
            <FormControl fullWidth size="medium">
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="المحافظه"
                value={selectValue}
                onChange={handleChange}
                sx={{ backgroundColor: "var(--grey-color)" }}
              >
                <MenuItem></MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="عنوان الشحن"
              name="address"
              dir="rtl"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phonenumber"
              label="رقم الهاتف"
              name="phonenumber"
              dir="rtl"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{ py: 1.3, px: 6, fontSize: "1.1rem" }}
          style={{
            backgroundColor: "#000",
            color: "var(--secondary-color)",
          }}
        >
          اتمام الدفع
        </Button>
      </Container>
      <style jsx>
        {`
          h2 {
            margin-bottom: 2rem;
          }
        `}
      </style>
    </div>
  );
}

Payment.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <RTlLayout>{page}</RTlLayout>
    </MainLayout>
  );
};
export default Payment;
