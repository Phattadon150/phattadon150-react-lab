import React from "react";
import Product from "./Product/Product";

function Home({ products }) {
  return (
    <div>
      <h1>All Products</h1>
      <div className="product-list">
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;
