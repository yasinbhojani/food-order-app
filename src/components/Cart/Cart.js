import React, { useContext } from "react";
import cartContext from "../../context/cart-context";

import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);

  const totalItems = cartCtx.items.reduce(
    (currValue, item) => currValue + item.quantity,
    0
  );

  const cartCloseHandler = () => {
    props.onCloseClick();
  };

  const orderHandler = () => {
    console.log("FOOD ORDERED!");
    alert("order is on its way");
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
    <Modal onClose={props.onCloseClick}>
      <div className={styles["cart-container"]}>
        <div className={styles["cart-items"]}>{mappedItems}</div>
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>${cartCtx.totalAmount.toFixed(2)}</span>
        </div>
        <div className={styles.controls}>
          <button onClick={cartCloseHandler}>close</button>
          {totalItems === 0 ? (
            ""
          ) : (
            <button onClick={orderHandler}>order</button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
