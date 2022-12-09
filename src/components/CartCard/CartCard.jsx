import React from "react";

function CartCard({ title, value }) {
  return (
    <div className="cart-card">
      <h4>{title}</h4>
      <p>{value}</p>
      <style jsx>
        {`
          .cart-card {
            background-color: var(--grey-color);
            padding: 2rem;
            display: flex;
            justify-content: space-between;
            box-shadow: 0 4px 7px 0px #ededed;
          }
        `}
      </style>
    </div>
  );
}

export default CartCard;
