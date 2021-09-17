import React from "react";
import Layout from "../components/Layout";
import Editor from "../components/Editor";

function Me({
  details,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
  cartState,
  toggleCartOpen
}) {
  return (
    <Layout
      incrementQuantity={incrementQuantity}
      decrementQuantity={decrementQuantity}
      removeFromCart={removeFromCart}
      clearCart={clearCart}
      cartState={cartState}
      toggleCartOpen={toggleCartOpen}
    >
      <Editor details={details} addToCart={addToCart} />;
    </Layout>
  );
}

Me.getInitialProps = async function() {
  return {
    details: {
      id: "1",
      name: "Geno Ferollo",
      description: [
        "Current Age: 20",
        "Current Rank: #2 ",
        "Known for: #1 (from 2017 till 2020)",
        "Type: Not edible, doesn't bite",
        "Status: Senior Developer"
      ]
    }
  };
};

export default Me;
