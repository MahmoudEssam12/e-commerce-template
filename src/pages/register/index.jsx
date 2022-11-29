import React from "react";
import SignLayout from "../../Layouts/SignLayout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
function register() {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    router.push("/register/verification");
  };
  return (
    <motion.div exit={{ x: 30 }} initial={{ x: 30 }} animate={{ x: 0 }}>
      <Head>
        <title>Register</title>
      </Head>
      <Typography
        component="h1"
        variant="h5"
        sx={{
          fontFamily: "cairo",
          fontWeight: "700",
          alignSelf: "flex-end",
        }}
      >
        إنشاء حساب
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="الإسم الثاني"
              name="lastname"
              autoComplete="lastname"
              dir="rtl"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="الإسم الأول"
              name="firstname"
              autoComplete="firstname"
              dir="rtl"
            />
          </Grid>
        </Grid>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="البريد الإلكتروني"
          name="email"
          autoComplete="email"
          dir="rtl"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="كلمة المرور"
          type="password"
          id="password"
          dir="rtl"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="تأكيد كلمة المرور"
          type="password"
          id="confirmPassword"
          dir="rtl"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="phonenumber"
          label="رقم الهاتف"
          name="phonenumber"
          autoComplete="phonenumber"
          dir="rtl"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="address"
          label="العنوان"
          name="address"
          autoComplete="address"
          dir="rtl"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, py: 1, fontSize: "1.2rem" }}
          style={{
            backgroundColor: "#000",
            color: "var(--secondary-color)",
          }}
        >
          انشاء حساب
        </Button>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Link
              href="/login"
              variant="body2"
              style={{ textAlign: "right", display: "block", width: "100%" }}
            >
              {" لديك حساب؟تسجيل الدخول "}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
}
register.getLayout = function getLayout(page) {
  return <SignLayout>{page}</SignLayout>;
};
export default register;
