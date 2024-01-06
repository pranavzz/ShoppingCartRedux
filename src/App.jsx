import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route,Routes } from "react-router-dom";

const App = () => {
  return <div>
    <div>
      <Navbar/>
    </div>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
    <div>
      
    </div>
  </div>;
};

export default App;
