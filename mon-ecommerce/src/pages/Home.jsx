import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import { useStore } from "../store";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { products, setProducts, addToCart } = useStore();

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Home;
