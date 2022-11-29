import React from "react";
import SignLayout from "../../Layouts/SignLayout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { motion } from "framer-motion";
function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <motion.div exit={{ x: 30 }} initial={{ x: 30 }} animate={{ x: 0 }}>
      <Typography
        component="h1"
        variant="h5"
        sx={{
          fontFamily: "cairo",
          fontWeight: "700",
          alignSelf: "flex-end",
        }}
      >
        تسجيل الدخول
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
          autoComplete="current-password"
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
          تسجيل الدخول
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="/login/emailConfirmation" variant="body2">
              هل نسيت كلمة المرور؟
            </Link>
          </Grid>
          <Grid item>
            <Link href="/register" variant="body2">
              {"ليس لديك حساب؟ إنشاء حساب"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
}

Login.getLayout = function getLayout(page) {
  return <SignLayout>{page}</SignLayout>;
};
export default Login;
