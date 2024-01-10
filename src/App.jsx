import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { Route,Routes } from "react-router-dom";

const App = () => {
  return <div>
    <div>
      <Navbar/>
    </div>
    <div className="mt-5">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
    <div>   
    </div>
    <div>
      <Footer/>
    </div>
  </div>;
};

export default App;
