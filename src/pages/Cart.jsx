import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = () => {

  // console.log("Hi");
  const {cart} = useSelector((state)=>state)|| { cart: [] };
  const [totalAmount,setTotalAmount] = useState(0);
  
  useEffect(() => {
    // Ensure that cart is defined and is an array before calling reduce
    console.log(cart);
    if (Array.isArray(cart) && cart.length > 0) {
      const calculatedTotal = cart.reduce((acc, curr) => acc + curr.price, 0);
      setTotalAmount(calculatedTotal);
    } else {
      setTotalAmount(0); // Set total amount to 0 if cart is not defined or is empty
    }
  }, [cart]);

  // amount will depend on cart

  // if (!Array.isArray(cart)) {
  //   return <div>Error: Cart is not an array.</div>;
  // }

  console.log(cart.length);
  console.log("Hi");
  return <div>
    {
      cart.length>0?
      (
        <div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 p-5">
          {
          cart.map((item,index)=>{
            return <CartItem key={item.id} item={item}/>
          })                                          // remember to write under {}
                                                     // remember to use return keyword
        }
          </div>
        
  <div className="container mt-5 mb-5">
  <div className="row">
    <div className="col-12 col-md-6">
      <div className="bg-light p-3">
        <h5>Your Cart</h5>
        <hr />
        <p>
          <span>Total Items: {cart.length}</span>
        </p>
      </div>
    </div>
    <div className="col-12 col-md-6">
      <div className="bg-light p-3">
        <h5>Summary</h5>
        <hr />
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  </div>
</div>
        </div>
      ):
      (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
            <p className="mb-4">Cart is empty!</p>
            <Link to="/">
                <button className="btn btn-primary">Shop Now</button>
            </Link>
        </div>
      )
    }
  </div>;
};

export default Cart;
