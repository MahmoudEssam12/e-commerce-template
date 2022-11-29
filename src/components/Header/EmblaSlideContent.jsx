import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function EmblaSlideContent() {
  return (
    <div className="slide-content">
      <h4>SUMMER COLLECTION</h4>
      <h2>Fall - Winter Collections 2030</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. liberom, ac
        odio mattis.
      </p>
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        style={{ backgroundColor: "#000", padding: "0.75rem 2rem" }}
      >
        Shop Now
      </Button>
      <style jsx>
        {`
          .slide-content {
            position: absolute;
            top: 50%;
            left: 0;
            direction: ltr;
            transform: translateY(-50%);
            padding-left: 10rem;
            max-width: 50%;
          }
          h4 {
            color: #0ba3b9;
            text-transform: uppercase;
          }
          h2 {
            font-size: 2.5rem;
            color: var(--default-color);
            margin: 1rem 0;
          }
          p {
            color: rgba(0, 0, 0, 0.7);
            margin-bottom: 1rem;
          }
          @media (max-width: 900px) {
            .slide-content {
              width: 100%;
              max-width: 100%;
              padding-left: 5rem;
            }
          }
          @media (max-width: 420px) {
            .slide-content {
              padding-left: 2rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default EmblaSlideContent;
