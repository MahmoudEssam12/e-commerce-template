import Link from "next/link";
import React, { useState, useEffect } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CartItem.module.scss";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  quantityHandler,
  selectCartItem,
  removeCartItem,
} from "../../store/slices/cartSlice";
import TableCell from "@mui/material/TableCell";

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #fff",
  borderRadius: "5px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
function CartItem({ img, id, name, merchant, color, price, quantity, size }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [qty, setQty] = useState(quantity);
  const disptach = useDispatch();
  const cartItems = useSelector(selectCartItem);
  const [visible, setVisible] = useState(false);
  const accept = (e) => {
    disptach(removeCartItem(id));
  };

  const reject = () => {};
  // function to delete the cartitem from cart when quantity is 0

  const getQuantity = () => {
    let product = cartItems.find((item) => item.id === id);
    setQty(product?.quantity || 1);
  };

  const updateQuantity = () => {
    disptach(quantityHandler({ type: "add", id }));
  };

  const removeOne = () => {
    if (qty > 1) {
      disptach(quantityHandler({ type: "remove", id }));
    } else {
      handleOpen(true);
    }
  };

  // handle delete cart item button
  const handleRemove = () => {
    handleOpen(true);
  };
  useEffect(() => {
    getQuantity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);
  return (
    <>
      {/* <ConfirmDialog /> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style2, minWidth: 350 }}>
          <p id="child-modal-title" style={{ padding: "1rem 0" }}>
            Are you sure you want to remove this item from cart?
          </p>
          <Button variant="contained" sx={{ mx: 1 }} onClick={accept}>
            remove
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            cancel
          </Button>
        </Box>
      </Modal>
      <TableCell align="center">
        <div className="description">
          <div className={styles.img}>
            <picture>
              <img src={`/images/category ${img}.png`} alt="product" />
            </picture>
          </div>
          <div className={styles.product_details}>
            <h4>{name}</h4>
          </div>
        </div>
      </TableCell>
      <TableCell align="center">
        <div className="size">{size}</div>
      </TableCell>
      <TableCell align="center">{color}</TableCell>
      <TableCell align="center">
        <div className={styles.quantity}>
          <button className="increase-quantity" onClick={updateQuantity}>
            +
          </button>

          <span>{qty}</span>

          <button className="decrease-quantity" onClick={removeOne}>
            -
          </button>
        </div>
      </TableCell>
      <TableCell align="center">
        <button onClick={handleRemove} className="remove-btn">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </TableCell>
      <TableCell align="center">
        <p>{price * qty} جنية</p>
      </TableCell>
      <style jsx>{`
        .description {
          display: flex;
          gap: 5px;
          align-items: center;
        }
        .size {
          display: inline-block;
          background-color: var(--grey-color);
          text-transform: uppercase;
          font-size: 1.1rem;
          margin: auto;
          border-radius: 30%;
          min-width: 35px;
          min-height: 35px;
          padding: 5px;
          text-align: center;
        }
        .increase-quantity {
          background-color: var(--default-color);
          color: var(--secondary-color);
        }
        .decrease-quantity {
          background-color: var(--grey-color);
        }
        .remove-btn {
          width: 35px;
          height: 35px;
          border: none;
          border-radius: 30%;
          font-size: 1.2rem;
          color: #fff;
          background-color: red;
          text-align: center;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default CartItem;
