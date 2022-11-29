import React from "react";
import SettingsLayout from "../../Layouts/SettingsLayout";
import MainLayout from "../../Layouts/MainLayout";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import RTlLayout from "../../Layouts/RTlLayout";
import { motion } from "framer-motion";
function Settings() {
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
        <h2>معلومات الحساب</h2>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
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
          </Grid>

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
Settings.getLayout = function getLayout(page) {
  return (
    <RTlLayout>
      <MainLayout>
        <SettingsLayout>{page}</SettingsLayout>
      </MainLayout>
    </RTlLayout>
  );
};
export default Settings;
