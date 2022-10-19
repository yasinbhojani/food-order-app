import React from "react";

import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css"

const Header = (props) => {
  return (
    <header>
      <div className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onCartClick={props.onCartClick}/>
      </div>
      <div className={styles['image-div']}>
        <img src={mealsImg} alt="a table full of food" />
      </div>
    </header>
  );
};

export default Header;
