import React, { useState } from "react";
import { motion } from "framer-motion";
import VerificationInput from "../../components/VerificationInputs/VerificationInputs";
import SignLayout from "../../Layouts/SignLayout";
import Button from "@mui/material/Button";
function Verification() {
  const [loading, setLoading] = useState(false);
  return (
    <motion.div
      exit={{ opacity: 0, x: 20 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h1 style={{ textAlign: "right" }}>رمز التحقق</h1>
      <VerificationInput
        length={6}
        label={"تم ارسال كود في رساله نصيه لرقم هاتفك "}
        loading={loading}
        onComplete={(code) => {
          setLoading(true);
          console.log(code);
          setTimeout(() => setLoading(false), 10000);
        }}
      />
      <p>
        لم تستلم الكود؟
        <a href="#">اعادة ارسال</a>
      </p>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2, py: 1, fontSize: "1.2rem", width: "100%" }}
        style={{
          backgroundColor: "#000",
          color: "var(--secondary-color)",
        }}
      >
        انتهيت
      </Button>
      <style jsx>
        {`
          p {
            margin-bottom: 1rem;
            text-align: right;
            a {
              text-decoration: underline;
              font-weight: 600;
            }
          }
        `}
      </style>
    </motion.div>
  );
}

Verification.getLayout = function getLayout(page) {
  return <SignLayout>{page}</SignLayout>;
};
export default Verification;
