import { Container } from "@mui/material";
import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import DividerText from "../DividerText/DividerText";
function CategoryRow() {
  return (
    <div className="grey-bg">
      <Container maxWidth="lg">
        <DividerText title="الفئات" />
        <div className="category-row">
          <CategoryCard name="نظارات" imgNum={1} />
          <CategoryCard name="نظارات" imgNum={2} />
          <CategoryCard name="نظارات" imgNum={3} />
          <CategoryCard name="نظارات" imgNum={4} />
          <CategoryCard name="نظارات" imgNum={5} />
          <CategoryCard name="نظارات" imgNum={5} />
          <CategoryCard name="نظارات" imgNum={4} />
          <CategoryCard name="نظارات" imgNum={3} />
          <CategoryCard name="نظارات" imgNum={2} />
          <CategoryCard name="نظارات" imgNum={1} />
        </div>
      </Container>
      <style jsx>
        {`
          .wrapper {
            background-color: #f7f7f7;
          }
          .category-row {
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

export default CategoryRow;
