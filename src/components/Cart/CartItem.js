import React, { useContext } from "react";
import cartContext from "../../context/cart-context";

import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const cartCtx = useContext(cartContext);

  return (
    <div className={styles["cart-item"]}>
      <div>
        <h3 className={styles.name}>{props.name}</h3>
        <div className={styles.pqcontainer}>
          <span className={styles.price}>${props.price}</span>
          <span className={styles.quantity}>x{props.quantity}</span>
        </div>
      </div>
      <div className={styles.controls}>
        <button onClick={() => {cartCtx.deleteItem(props.id)}}>-</button>
        <button onClick={() => {cartCtx.addItem(props)}}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
