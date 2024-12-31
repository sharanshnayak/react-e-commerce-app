import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import './App.css'

function App() {


  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App
