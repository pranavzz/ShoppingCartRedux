// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { add,remove } from "../redux/Slices/cartSlice";

// const Product = ({post}) => {

//   const {cart}=useSelector((state)=>state);
//   // const [selected,setSelected] = useState(false);
//   const dispatch = useDispatch();
//   const addToCart = ()=>{
//     dispatch(add(post));
//     alert("Item added to cart");
//   }
//   const removeFromCart = ()=>{
//     dispatch(remove(post.id));
//     alert("Item removed from cart");
//   }
  
//   return <div>

//     <div className="col mb-5">
//     <div>
//       <p>{post.title}</p>
//     </div>
//     <div>
//       <p>{post.description}</p>
//     </div>
//     <div>
//       {/* use props through img tag like this */}
//       <img src={post.image}/>
//     </div>
//     <div>
//     <p>{post.price}</p>
//   </div>
//   <div>
//     {/* Prop passed does it exists in cart? then (remove) else (add) */}
//     {
//       cart && Array.isArray(cart) && cart.some((p) => p.id === post.id)?
//       (<button onClick={removeFromCart}>Remove Item</button>):
//       (<button onClick={addToCart}>Add Item</button>)

//     }
//   </div>

//     </div>
   
//   </div>;
// };

// export default Product;
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    alert("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    alert("Item removed from cart");
  };

  const slicedDesc = post.description.slice(0,100);

  return (
    <div className="col mb-4">
      <div className="card hover-effect h-100">
        <div className="view overlay">
        <img src={post.image} className="card-img-top imageCard p-4" alt={post.title} />
        </div>
        <div className="card-body ">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{slicedDesc}...</p>
        <p className="card-text">${post.price.toFixed(2)}</p>
        <div className="d-grid">
          {cart && Array.isArray(cart) && cart.some((p) => p.id === post.id) ? (
            <button className="btn btn-danger" onClick={removeFromCart}>
              Remove Item
            </button>
          ) : (
            <button className="btn btn-primary" onClick={addToCart}>
              Add to cart
            </button>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Product;

