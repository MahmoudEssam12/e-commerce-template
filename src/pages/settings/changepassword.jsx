import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import RTlLayout from "../../Layouts/RTlLayout";
import SettingsLayout from "../../Layouts/SettingsLayout";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
function ChangePassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <motion.div exit={{ x: -30 }} initial={{ x: -30 }} animate={{ x: 0 }}>
      <Container maxWidth="md" sx={{ py: 2 }}>
        <h2>تغيير كلمة المرور</h2>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="currentPassword"
            label="كلمة المرور الحالية"
            name="currentPassword"
            dir="rtl"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="newPassword"
            label="كلمة المرور الجديدة"
            name="newPassword"
            dir="rtl"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmNewPassword"
            label="تأكيد كلمة المرور الجديدة"
            type="confirmNewPassword"
            id="confirmNewPassword"
            dir="rtl"
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
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
                حفظ
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, py: 1, fontSize: "1.2rem" }}
                style={{
                  backgroundColor: "#fff",
                  color: "var(--default-color)",
                  borderColor: "var(--default-color)",
                  borderWidth: "2px",
                }}
              >
                إلغاء
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </motion.div>
  );
}
ChangePassword.getLayout = function getLayout(page) {
  return (
    <RTlLayout>
      <MainLayout>
        <SettingsLayout>{page}</SettingsLayout>
      </MainLayout>
    </RTlLayout>
  );
};
export default ChangePassword;
