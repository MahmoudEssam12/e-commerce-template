import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import SignLayout from "../../Layouts/SignLayout";

function ChangePassword() {
  return (
    <motion.div
      exit={{ opacity: 0, x: 20 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h1>تغيير كلمة المرور</h1>
      <TextField
        margin="normal"
        required
        fullWidth
        name="newpassword"
        label="كلمة المرور الجديدة"
        type="password"
        id="newpassword"
        dir="rtl"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="reEnterPassword"
        label="تأكيد كلمة المرور الجديدة"
        type="password"
        id="reEnterPassword"
        dir="rtl"
      />
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2, py: 1, fontSize: "1.2rem", width: "100%" }}
        style={{
          backgroundColor: "#000",
          color: "var(--secondary-color)",
        }}
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
ChangePassword.getLayout = function getLayout(page) {
  return <SignLayout>{page}</SignLayout>;
};
export default ChangePassword;
