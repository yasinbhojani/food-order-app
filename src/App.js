import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const cartVisibilityHandler = () => {
    if (cartIsVisible) {
      setCartIsVisible(false);
    } else {
      setCartIsVisible(true);
    }
  };

  return (
    <>
      {cartIsVisible ? <Cart onCloseClick={cartVisibilityHandler} /> : ""}
      <div>
        <Header onCartClick={cartVisibilityHandler} />
        <Meals />
      </div>
    </>
  );
}

export default App;
