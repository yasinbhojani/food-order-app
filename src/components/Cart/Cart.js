import React, { useContext } from "react";
import cartContext from "../../context/cart-context";

import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  const cartCloseHandler = () => {
    props.onCloseClick();
  };

  const mappedItems = cartCtx.items.map((item) => {
    if (item.quantity > 0) {
      return (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      );
    }
    return "";
  });

  return (
    <Modal>
      <div className={styles["cart-container"]}>
        {mappedItems}
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>${cartCtx.totalAmount.toFixed(2)}</span>
        </div>
        <div className={styles.controls}>
          <button onClick={cartCloseHandler}>close</button>
          <button>order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
