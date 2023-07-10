import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const [totalamount,settotalamount]=useState(0);
  const {cart}=useSelector((state)=>state);

  useEffect(
()=>
{
  settotalamount(
    cart.reduce((acc,curr)=>acc+curr.price,0));
},[cart]);
  return <div>
  {
    cart.length>0?(
      <div>
      <div>
      {
      Cart.map(
           (item)=>(<CartItem item={item} key={item.id} index={item.index}></CartItem>)
      )
      }
      </div>
      <div>
       
          <div> Your Cart</div>
          <div> Summary</div>
          <div><span>Total items:{Cart.length}</span></div>
          
         <div>
          <p> Total Amount: ${totalamount}</p>
          <div>Checkout</div>
         </div>

      </div>


      </div>
     

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
