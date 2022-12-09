import React from "react";

function ProductColorBox({ bg }) {
  return (
    <div
      style={{
        width: "30px",
        height: "30px",
        backgroundColor: bg,
        borderRadius: "5px",
      }}
    ></div>
  );
}

export default ProductColorBox;
