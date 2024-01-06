
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
const CartItem = (item) => {

  const dispatch = useDispatch();
  const removeFromCart = () =>{
    dispatch(remove(item.item.id));
    alert("Item Removed");
  }
  console.log("hi-item");
  console.log(item.item.id);
  console.log(item);

  return <div>
    <div className="col mb-4">
      <div className="card" style={{ width: '300px'}} >
      <div className="view overlay">
        <img src={item.item.image} className="card-img-top imageCard p-4"/>
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.item.title}</h5>
        <p className="card-title">{item.item.description}</p>
        <p>
        <h4 className="card-text">${item.item.price}</h4>
        </p>
        <div className="d-grid"> <button onClick={removeFromCart} className="btn btn-danger">Delete</button></div>
       
      </div>
      </div>
    </div>
  </div>;
};

export default CartItem;
