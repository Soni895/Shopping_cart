import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {add,remove} from '../redux/Slices/cartSlice'

const Product = ({item}) => {

  const cart =useSelector((state)=>state);
  const dispatch=useDispatch();
   const addtocart=()=>
   {
dispatch(add(item));
toast.success("Item Added To your Cart",{
  position: toast.POSITION.TOP_CENTER
 });
   }

   const removefromcart=()=>
   {
    dispatch(remove(item.id));
toast.error("Item Remove To your Cart",{
  position: toast.POSITION.TOP_CENTER
 });

   }
  return <div>
<p> {item.title}</p>
<p>{item.description}</p>
<img src={item.image}></img>
<p>{item.price}</p>

  {
    false ? (<button  onClick={removefromcart} >Remove Item</button>):(<button onClick={addtocart}>Add To Cart</button>)
  }


  </div>;
};

export default Product;
