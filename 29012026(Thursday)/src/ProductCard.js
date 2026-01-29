import React from "react";

function ProductCard(props) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>{props.product.name}</h3>
      <p>Price: ₹{props.product.price}</p>
    </div>
  );
}

export default ProductCard;
