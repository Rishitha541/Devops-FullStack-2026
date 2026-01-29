import React, { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {

  const [products] = useState([
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Mobile", price: 30000 },
    { id: 3, name: "Headphones", price: 3000 }
  ]);

  return (
    <div>
      <h2>Product List</h2>

      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}

    </div>
  );
}

export default ProductList;
