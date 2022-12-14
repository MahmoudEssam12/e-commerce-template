import React from "react";
import OfferCard from "../OfferCard/OfferCard";
import { Container } from "@mui/material";
import DividerText from "../DividerText/DividerText";
function OffersRow() {
  return (
    <div className="grey-bg">
      <Container maxWidth="lg">
        <DividerText title="العروض" />
        <div className="offers-row">
          <OfferCard name="نظglassارات" imgNum={1} id={1} />
          <OfferCard name="نظارات" imgNum={1} id={2} />
          <OfferCard name="نظارات" imgNum={1} id={3} />
          <OfferCard name="نظارات" imgNum={1} id={4} />
        </div>
      </Container>

      <style jsx>
        {`
          .offers-row {
            padding: 2rem 0;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
        `}
      </style>
    </div>
  );
}

export default OffersRow;
