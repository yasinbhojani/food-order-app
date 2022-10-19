import React, { useReducer } from "react";

const cartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  deleteItem: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const dupCartItems = [...state.cartItems];
    const index = dupCartItems.findIndex((item) => {
      if (item.id === action.item.id) {
        return true;
      }
      return false;
    });

    if (index === -1) {
      const newCartItem = {
        id: action.item.id,
        name: action.item.name,
        price: action.item.price,
        quantity: 1,
      };

      let total = state.total + action.item.price;

      return {
        cartItems: [...state.cartItems, newCartItem],
        total: total,
      };
    } else {
      dupCartItems[index].quantity = dupCartItems[index].quantity + 1;
      let total = state.total + dupCartItems[index].price;

      return {
        cartItems: dupCartItems,
        total: total,
      };
    }
  }

  if (action.type === "DEL") {
    console.log(action.id);

    const dupCartItems = [...state.cartItems];

    const index = dupCartItems.findIndex((item) => {
      if (item.id === action.id) {
        return true;
      }
      return false;
    });

    if (index !== -1) {
      dupCartItems[index].quantity = dupCartItems[index].quantity - 1;
      let total = state.total - dupCartItems[index].price;

      return {
        cartItems: dupCartItems,
        total: total,
      };
    } else {
      return state;
    }
  }

  return state;
};

export const CartContextProvider = (props) => {
  const [cart, cartDispatch] = useReducer(cartReducer, {
    cartItems: [],
    total: 0,
  });

  const addItemtoCart = (item) => {
    cartDispatch({ type: "ADD", item: item });
  };

  const deleteItemfromCart = (id) => {
    cartDispatch({ type: "DEL", id: id });
  };

  return (
    <cartContext.Provider
      value={{
        items: cart.cartItems,
        totalAmount: cart.total,
        addItem: addItemtoCart,
        deleteItem: deleteItemfromCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default cartContext;
