import React from "react";
import styles from "./OrderCard.module.scss";
import Rating from "@mui/material/Rating";
import Image from "next/image";

function SingleOrderCard() {
  return (
    <div className="order-card">
      <div className={`imgs-wrapper ${styles.singleOrderImg}`}>
        <Image
          src={"/images/category 1.png"}
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
        <Rating name="read-only" value={4} readOnly />
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
          flex-basis: 25%;
        }
        .order-details {
          flex-grow: 1;
          text-align: center;
          p {
            text-align: center;
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default SingleOrderCard;
