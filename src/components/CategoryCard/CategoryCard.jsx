import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryCard({ name, imgNum }) {
  return (
    <div className="category-card">
      <Link href={`/category/${name}`}>
        <div className="img-wrapper">
          <Image
            src={`/images/category ${imgNum}.png`}
            alt="category card"
            style={{
              transition: "all .3s ease",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            fill
          />
        </div>
        <h3>{name}</h3>
      </Link>

      <style jsx>
        {`
          .category-card {
            flex-basis: calc(100% / 5);
            text-align: center;
            margin-bottom: 2rem;
            transition: all 0.3s ease;
            position: relative;
          }

          .img-wrapper {
            position: relative;
            min-height: 200px;
            min-width: 200px;
            margin: auto;
            overflow: hidden;
            border-radius: 10px;
            img {
              object-fit: cover;
              border-radius: 10px;
              transition: all 0.3s ease;
            }
          }

          h3 {
            font-weight: 400;
          }

          @media (max-width: 768px) {
            .category-card {
              flex-basis: calc(100% / 3);
            }
          }
          @media (max-width: 630px) {
            .category-card {
              flex-basis: calc(100% / 2);
            }
          }
          @media (max-width: 415px) {
            .category-card {
              flex-basis: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default CategoryCard;
