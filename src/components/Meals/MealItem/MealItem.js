import React, { useContext } from "react";

import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";
import cartContext from "../../../context/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(cartContext);

  const addItemtoCart = () => {
    cartCtx.addItem(props);
  };

  return (
    <li className={styles["meal-item"]}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>{props.price}</p>
      </div>
      <MealItemForm addItemtoCart={addItemtoCart} id={props.id}/>
    </li>
  );
};

export default MealItem;
