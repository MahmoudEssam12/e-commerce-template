import React from "react";
import SignLayout from "../../Layouts/SignLayout";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function EmailConfirmation() {
  const router = useRouter();
  return (
    <motion.div
      exit={{ opacity: 0, x: 20 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      style={{ width: "100%" }}
    >
      <h1>تأكيد البريد الإلكتروني</h1>
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
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2, py: 1, fontSize: "1.2rem", width: "100%" }}
        style={{
          backgroundColor: "#000",
          color: "var(--secondary-color)",
        }}
        onClick={() => router.push("/login/changePassword")}
      >
        تأكيد
      </Button>
      <style jsx>
        {`
          h1 {
            text-align: var(--align-text);
          }
        `}
      </style>
    </motion.div>
  );
}
EmailConfirmation.getLayout = function getLayout(page) {
  return <SignLayout>{page}</SignLayout>;
};
export default EmailConfirmation;
