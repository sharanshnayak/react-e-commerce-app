import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/slice/slice.js";
import { FaRegStar } from "react-icons/fa";
import toast from "react-hot-toast";

function Product({product}){
    const cart=useSelector(state=>state.cart);
    const dispatch=useDispatch();

    function addProduct(){
        dispatch(addItem(product));
        toast.success("Item added to cart!");
    }

    function removeProduct(){
        dispatch(removeItem(product.id));
        toast.error("Item removed from cart!");
    }

    return(
        <div className="group hover:scale-105 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 sm:ml-5 rounded-xl border-2 border-slate-400">
            <div>
                <h1 className="truncate w-40 mt-1 text-gray-900 font-bold text-lg  text-left">{product.title}</h1>
            </div>
            <div>
                <h1 className=" w-40 text-gray-500 font-medium text-[12px] text-left">{`${product.description.split(" ").slice(0, 8).join(" ")}...`}</h1>
            </div>
            <div className="h-[180px]">
                <img src={product.image} alt={product.category} className="w-full h-full object-contain"/>
            </div>
            <div className="flex justify-between items-center w-full mt-5">
                <p className="text-green-600 font-semibold">{`$${product.price}`}</p>
                {
                    cart.some(item=> item.id===product.id)?
                    <button className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-bold p-1 px-3 text-md uppercase tracking-wide" onClick={removeProduct}>Remove Item</button>
                    : <button className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-bold p-1 px-3 text-md uppercase tracking-wide" onClick={addProduct}>Add to Cart</button>
                }
            </div>
            <div className="flex gap-2 w-[100%] justify-start items-center">
                <div className="flex justify-center items-center gap-1 bg-green-600 text-slate-200 font-semibold text-2xl p-2 rounded-xl border-2 border-teal-500">
                    <p>{product.rating.rate}</p>
                    <FaRegStar size={25} color="white"/>
                </div>
                <p className="text-lg font-semibold text-gray-600">{product.rating.count} Reviews</p>
            </div>
        </div>
    );
}

export default Product;