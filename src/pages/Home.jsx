import React, { useEffect, useState } from "react";
import "../App.css";
import { FaFilter } from "react-icons/fa"; // Importing the filter icon
import Product from "../components/Product.jsx";
function Home() {
  const url = "https://fakestoreapi.com/products";
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("All");
  const [filter, setFilter] = useState("");

  async function fetchProducts() {
    console.log("Loader start");
    setLoader(true); // Set loader to true at the start
    try {
      const response = await fetch(url);
      const productsData = await response.json();
      setProducts(productsData);
      setItems(productsData);
      console.log(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      console.log("Loader end");
      setLoader(false); // Set loader to false after data is fetched
    }
  }

  function fetchCategoryBasedProducts() {
    setLoader(true);
    if (category === "All") {
      setItems(products);
      setLoader(false);
      return;
    }
    const newItems = products.filter(
      (product) => product.category === category
    );
    setItems(newItems);
    setLoader(false);
  }
  function fetchFilterBasedProducts() {
    setLoader(true);
    if (filter === "ascendingPrice") {
      setItems((prevItems) =>
        [...prevItems].sort((item1, item2) => item1.price - item2.price)
      );
    }
    if (filter === "descendingPrice") {
      setItems((prevItems) =>
        [...prevItems].sort((item1, item2) => item2.price - item1.price)
      );
    }
    if (filter === "rating") {
      setItems((prevItems) =>
        [...prevItems].sort(
          (item1, item2) => item1.rating.rate - item2.rating.rate
        )
      );
    }
    setLoader(false);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    fetchCategoryBasedProducts();
  }, [category]);
  useEffect(() => {
    fetchFilterBasedProducts();
  }, [filter]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setFilter("");
    console.log("Selected Category: ", e.target.value); // Handle the filter logic
  };
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    console.log("Selected Filter: ", e.target.value); // Handle the filter logic
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex justify-end gap-4 mt-4 mr-5 font-bold text-gray-900 text-xl">
        <div>
          <select
            className="border-2 border-gray-500 rounded-lg  py-2 pl-2"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="All">Sort by</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <select
              className="border-2 border-gray-500 rounded-lg  py-2 pl-8 pr-2"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="none">Select Filter</option>
              <option value="ascendingPrice">Price (Low to High)</option>
              <option value="descendingPrice">Price (High to Low)</option>
              <option value="rating">Rating</option>
            </select>
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />{" "}
          </div>
        </div>
      </div>
      {loader === true ? (
        <div className="spinner  absolute bottom-[50%] left-[50%] "></div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
          {items.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                category={category}
                filter={filter}
              ></Product>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
