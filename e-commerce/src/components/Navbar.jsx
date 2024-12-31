import React from "react";
import {Link, NavLink} from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"
import { useSelector} from "react-redux";
function Navbar(){
    const cart=useSelector(state=>state.cart);
    console.log(cart);
    return(
        <div className="bg-slate-900">
            <nav className="flex justify-between items-center h-20 max-w-6xl  bg-slate-900 mx-auto">
                <Link to='/'>
                    <img src="../src/assets/logo.png" alt="logo" className="sm:h-14 h-10  "/>
                </Link>
                
                <div className="flex list-none items-center space-x-6 mr-5 text-slate-100 -tracking-tighterr font-medium">
                    <NavLink to="/" 
                    className={({ isActive }) =>
                    `${isActive ? `text-green-400 underline underline-offset-8` : `text-slate-100`} cursor-pointer hover:text-green-400 transition duration-300 ease-in text-xl font-bold`}>
                        <li>Home</li>
                    </NavLink>

                    <NavLink to="/cart" className={({ isActive }) =>
                    `${isActive ? `text-green-400` : `text-slate-100`} text-2xl cursor-pointer hover:text-green-400 transition transform duration-200`} >
                       {({ isActive }) => (
                        <>
                            <FaShoppingCart size={30}/>
                            <div
                                className={`absolute text-lg w-6 h-6 flex justify-center items-center -top-1 -right-2 rounded-full animate-bounce ${
                                isActive ? `bg-slate-100 text-green-600` : `bg-green-600 text-slate-100`
                                }`}
                            >
                                {cart.length}
                            </div>
                        </>
                        )}
                    </NavLink>
                </div>
            </nav>

        </div>
    );
}
export default Navbar;