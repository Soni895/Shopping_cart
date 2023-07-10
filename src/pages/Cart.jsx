import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cart}=useSelector((state)=>state);
  return <div>
  {
    cart.length>0?(
      Cart.map(
           (item)=>(<CartItem item={item} key={item.id} index={item.index}></CartItem>)
      )
      ):(
      <div>
        <h2>Your Cart Is Empty Cart</h2>
        <NavLink to="/"> Shop Now</NavLink>
      </div>
       
       
  
    )
  }
  </div>;
};

export default Cart;
