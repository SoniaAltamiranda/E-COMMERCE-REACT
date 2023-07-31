import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
        setError("");
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
        setLoading(false);
        setError(
          "Hubo un problema al cargar los productos. Por favor, intenta nuevamente más tarde."
        );
      });
  }, []);

  return (
    <div>
      <Categories />

      <div className="flex flex-col text-center w-full">
        <h1 className="text-lg text-[#8C7064] tracking-widest font-medium title-font mb-4">
          ALL THE PRODUCTS
        </h1>
      </div>
      {loading ? (
        <div>Loading products...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ProductCard products={products} />
      )}
    </div>
  );
};

export default Products;
