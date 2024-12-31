import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/slice/slice.js";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

function Product({ product, itemIndex }) {
  const dispatch = useDispatch();
  
  // console.log(itemIndex);

  function removeProduct() {
    console.log(product.id);
    dispatch(removeItem(product.id));
    toast.error("Item removed from cart!");
  }

  return (
    <div className={`flex items-center p-2 md:p-5 justify-between ${itemIndex!==1 ? 'border-b-2 border-slate-500' : ""}  mt-2 mb-2 md:mx-5 `}>
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img src={product.image} className="object-cover" />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <div>
            <h1 className="text-xl text-slate-700 font-semibold">
              {product.title}
            </h1>
          </div>
          <div>
            <h1 className="text-base text-slate-700 font-medium">{`${product.description
              .split(" ")
              .slice(0, 15)
              .join(" ")}...`}</h1>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">{`$${product.price}`}</p>
            <div className=" bg-red-300 group hover:bg-red-500 text-red-700 hover:text-black hover:scale-105 transition-transform ease-in-out duration-500 cursor-pointer rounded-full p-3 mr-3">
              <MdDelete onClick={removeProduct} size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
