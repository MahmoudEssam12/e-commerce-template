import React from "react";
import Image from "next/image";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Link from "next/link";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
function OfferCard({ name, imgNum, id }) {
  return (
    <div className="offer-card">
      <Link href={`/product/${id}`}>
        <div className="img-wrapper">
          <Image
            src={`/images/category ${imgNum}.png`}
            alt="category card"
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
      </Link>

      <div className="name">
        <Link href={`/products/${name}`}>
          <h3>{name}</h3>
        </Link>
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: "#F12020" }} />}
        />
      </div>
      <div className="price">
        <Rating name="read-only" value={4} readOnly />
        <p>
          <span className="original-price">
            450<span>ج</span>
          </span>
          <span className="current-price">
            350<span>ج</span>
          </span>
        </p>
      </div>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#000",
          color: "var(--secondary-color)",
          width: "100%",
          fontSize: "1.1rem",
        }}
      >
        أضف إلى السلة
      </Button>
      <style jsx>
        {`
          .offer-card {
            flex-basis: calc(100% / 4);
            text-align: center;
            margin-bottom: 2rem;
            gap: 1rem;
            padding: 1rem 2rem;
          }

          .img-wrapper {
            position: relative;
            min-height: 200px;
            border-radius: 10px;

            img {
              object-fit: cover;
              border-radius: 10px;
            }
          }

          h3 {
            font-weight: 400;
          }
          .name,
          .price {
            display: flex;
            justify-content: space-between;
          }
          .price {
            margin-bottom: 1rem;
            span {
              display: inline-block;
              &.current-price {
                margin-right: 5px;
              }
              &.original-price {
                color: #727272;
                text-decoration: line-through;
              }
            }
          }
          @media (max-width: 960px) {
            .offer-card {
              flex-basis: calc(100% / 3);
            }
          }
          @media (max-width: 768px) {
            .offer-card {
              flex-basis: calc(100% / 2);
            }
          }
          @media (max-width: 560px) {
            .offer-card {
              flex-basis: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default OfferCard;
