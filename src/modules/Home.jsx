import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import OverviewCard from "../components/OverviewCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error al obtener los productos");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Hero />
      <Categories />
      <div className="flex flex-col text-center w-full">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#8C7064]">
          POPULAR PRODUCTS
        </h1>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ProductCard products={products} />
      )}
      <OverviewCard />
    </>
  );
};

export default Home;
