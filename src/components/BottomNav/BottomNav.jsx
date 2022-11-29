import React from "react";
import Link from "next/link";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import BottomNavStyle from "./BottomNavStyle";
import styles from "./BottomNav.module.css";
const navLinks = [
  { href: "/", name: "الرئيسية" },
  { href: "/favourits", name: "المفضلة" },
  { href: "/settings", name: "الإعدادات" },
];

function BottomNav() {
  const router = useRouter();
  return (
    <nav className={`pages-nav ${styles.pagesNav}`}>
      <Container maxWidth="xl">
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>
                <span className={router.pathname === link.href ? "active" : ""}>
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <style jsx>{BottomNavStyle}</style>
    </nav>
  );
}

export default BottomNav;
