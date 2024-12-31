import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Item from "../components/item.jsx";
import { Link } from "react-router-dom";
function Cart() {
  const cart = useSelector((state) => state.cart);
  // console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);
  const [summaryTop, setSummaryTop] = useState(0); // Initial top value for the summary section

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, item) => acc + item.price, 0));
  }, [cart]);

  useEffect(() => {
    const handleScroll = () => {
      // Dynamically calculate the `top` value based on the scroll position
      const scrollTop = window.scrollY;
      setSummaryTop(scrollTop);
      console.log(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {cart.length !== 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2 ">
            {cart.map((product, index) => {
              return (
                <Item
                  key={product.id}
                  product={product}
                  itemIndex={cart.length - index}
                ></Item>
              );
            })}
          </div>

          <div className="w-[100%] md:w-[40%] min-h-full bg-gray-200 mt-0  flex flex-col md:fixed md:right-0" style={{ top: `${summaryTop<=80 ? 80-summaryTop : 0}px` }} >
            <div className="flex flex-col p-5 gap-5 my-14 justify-between">
              <div className="flex flex-col gap-5 ">
                <div className="font-semibold text-xl text-green-800 ">
                  YOUR CART
                </div>
                <div className="font-semibold text-5xl text-green-700  -mt-5">
                  SUMMARY
                </div>
                <p className="text-xl font-bold text-black">
                  <span className="text-gray-700 font-semibold text-xl">
                    Total Items
                  </span>
                  {`: ${cart.length}`}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-bold">
                  {" "}
                  <span className="text-gray-700 font-semibold">
                    Total Amount
                  </span>
                  {`: ${totalAmount}`}
                </p>
                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <Link to='/'>
            <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
