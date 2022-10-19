import React, { useContext } from "react";

import CartIcon from "../../assets/CartIcon";
import styles from "./HeaderCartButton.module.css";
import cartContext from "../../context/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(cartContext);
  let totalqty = 0;

  for (let item of cartCtx.items) {
    totalqty = totalqty + item.quantity;
  }

  return (
    <button className={styles.btn} onClick={props.onCartClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.text}>Your Cart</span>
      <span className={styles.badge}>{totalqty}</span>
    </button>
  );
};

export default HeaderCartButton;
