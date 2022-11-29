import React from "react";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Link from "next/link";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const navLinks = [
  { href: "/settings", name: "معلومات الحساب" },
  { href: "/settings/changeemail", name: "تغيير البريد الإلكتروني" },
  { href: "/settings/changepassword", name: "تغيير كلمة المرور" },
];
function SettingsLayout({ children }) {
  const router = useRouter();

  return (
    <div className="settings-wrapper">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <motion.div exit={{ x: 30 }} initial={{ x: 30 }} animate={{ x: 0 }}>
            <aside>
              <div className="avatar">
                <Avatar
                  alt="Remy Sharp"
                  src="/images/avatar.png"
                  sx={{ width: 100, height: 100, mx: "auto" }}
                />
                <Image
                  src="/edit.png"
                  alt="edit"
                  width={24}
                  height={24}
                  style={{
                    position: "relative",
                    top: "-25px",
                    left: "30px",
                    cursor: "pointer",
                  }}
                />
                <h2>أحمد موسى</h2>
              </div>
              <ul>
                {navLinks.map((link) => {
                  return (
                    <li
                      key={link.href}
                      className={`${
                        router.pathname === link.href ? "active" : ""
                      }`}
                    >
                      <Link href={link.href}>
                        <div className="nav-link-wrapper">
                          <span> {link.name}</span>

                          <ArrowBackIosNewIcon />
                        </div>
                      </Link>
                    </li>
                  );
                })}

                <li className="nav-link-wrapper">تسجيل الخروج</li>
              </ul>
            </aside>
          </motion.div>
        </Grid>
        <Grid item md={9}>
          <main>
            <Container maxWidth="lg">{children}</Container>
          </main>
        </Grid>
      </Grid>
      <style jsx>
        {`
          aside {
            background-color: #f0eeee;
            height: 100%;
            .avatar {
              text-align: center;
              position: relative;
              padding: 2rem 0;
              border-bottom: 1px solid #ccc;
            }
          }
          h2 {
            font-size: 1.1rem;
            margin-top: -23px;
          }
          ul {
            list-style: none;
            text-align: center;
            li {
              font-size: 1.1rem;
              display: block;
              padding: 0.5rem;
              padding-right: 3rem;
              border-bottom: 1px solid #ccc;
              font-family: "cairo";
              font-weight: 500;

              &.active {
                background-color: #fff;
              }
              &:last-child {
                border-bottom: none;
                text-align: right;
              }
            }
          }
          .nav-link-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}

export default SettingsLayout;
