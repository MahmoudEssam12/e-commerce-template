import Image from "next/image";
import React from "react";
import Button from "@mui/material/Button";
import styles from "./OrderCard.module.scss";
import { useRouter } from "next/router";
function OrderCard() {
  const router = useRouter();
  return (
    <div className="order-card">
      <div className={`imgs-wrapper ${styles.imgs}`}>
        <Image
          src={"/images/category 1.png"}
          alt="category"
          width={45}
          height={45}
        />
        <Image
          src={"/images/category 2.png"}
          alt="category"
          width={45}
          height={45}
        />
        <Image
          src={"/images/category 3.png"}
          alt="category"
          width={45}
          height={45}
        />
        <Image
          src={"/images/category 4.png"}
          alt="category"
          width={45}
          height={45}
        />
      </div>
      <div className="order-info">
        <p>
          <span>عدد المنتجات:</span> <span>4</span>
        </p>
        <p>
          <span>الحالة:</span> <span>في الشحن</span>
        </p>
        <p>
          <span>تاريخ الطلب:</span> <span>10/11/2022</span>
        </p>
        <p>
          <span>تاريخ التوصيل:</span> <span>10/11/2022</span>
        </p>
      </div>
      <div className="order-details">
        <p>250ج</p>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, py: 1, fontSize: "1.2rem" }}
          style={{
            backgroundColor: "#000",
            color: "var(--secondary-color)",
          }}
          onClick={() => router.push("/orders/orderdetails")}
        >
          اظهار المنتجات
        </Button>
      </div>
      <style jsx>{`
        .order-card {
          display: flex;
          gap: 5px;
          background-color: #f8f8f8;
          border-radius: 5px;
          max-width: 580px;
          padding: 1rem;
          flex-basis: 49%;
          @media (max-width: 880px) {
            flex-basis: 100%;
            flex-wrap: wrap;
            gap: 1rem;
          }
        }
        .imgs-wrapper {
          display: flex;
          flex-wrap: wrap;
          img {
            flex-basis: 50%;
          }
        }
        .order-details {
          flex-grow: 1;
          p {
            text-align: center;
            font-size: 1.2rem;
            font-weight: 600;
          }
        }
      `}</style>
    </div>
  );
}

export default OrderCard;
