import React, { useContext, useState } from "react";
import cartContext from "../../../context/cart-context";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  // const [quantity, setQuantity] = useState(0);
  const cartCtx = useContext(cartContext);
  const index = cartCtx.items.findIndex((item) => {
    if (item.id === props.id) {
      return true;
    }
  });

  let quantity = 0;
  if (index != -1) {
    quantity = cartCtx.items[index].quantity;
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles["form-inner"]}>
        <label>Amount</label>
        <input type="number" step="1" value={quantity} readOnly />
      </div>
      <button
        className={styles.btn}
        onClick={() => {
          props.addItemtoCart();
        }}
      >
        +Add
      </button>
    </form>
  );
};

export default MealItemForm;
