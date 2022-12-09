import { Container } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";

function Footer() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <footer>
      <Container maxWidth="lg">
        <div className="footer-wrapper">
          <div className="col">
            <h4>الإبلاغ عن المشكله</h4>
            <div className="form">
              <textarea
                name="feedback"
                placeholder="اكتب مشكلتك هنا"
                id="feedback"
                cols="30"
                rows="3"
              ></textarea>
              {/* <TextField
                id="multiline"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                sx={{
                  backgroundColor: "#0f0f0f",
                  borderRadius: "10px",
                }}
                style={{ color: "#fff" }}
              /> */}
              <Button
                variant="contained"
                style={{
                  backgroundColor: "var(--secondary-color)",
                  color: "#000",
                  padding: "0.5rem 3rem",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  fontFamily: "cairo",
                }}
              >
                إرسال
              </Button>
            </div>
          </div>
          <div className="col">
            <ul>
              <li className="active">
                <Link href="/">الرئيسية</Link>
              </li>
              <li>
                <Link href="/favourits">المفضلة</Link>
              </li>
              <li>
                <Link href="/settings">الإعدادات</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <style jsx>
        {`
          footer {
            background-color: var(--default-color);
            padding: 2rem 0;
          }
          .footer-wrapper {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 2rem;
            @media (max-width: 768px) {
              justify-content: center;
            }
          }
          h4 {
            color: #fff;
            margin-bottom: 1rem;
          }
          textarea {
            background-color: #0f0f0f;
            color: #fff;
            font-size: 1.2rem;
            padding: 1rem;
            border-radius: 10px;
            resize: none;
          }
          .form {
            display: flex;
            gap: 1rem;
            align-items: flex-end;
            flex-wrap: wrap;
          }
          ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            li {
              color: var(--secondary-color);
              font-size: 1.2rem;
              position: relative;
              padding-bottom: 0.5rem;
              font-weight: 600;
              font-family: "cairo";
              text-align: center;
            }
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
