import { AiTwotoneDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify'; 
import {remove} from '../redux/Slices/cartSlice';
const CartItem = ({item}) => {

const dispatch=useDispatch();
  const removefromcart=()=>
   {
    dispatch(remove(item.id));
toast.error("Item Remove To your Cart",{
  position: toast.POSITION.TOP_CENTER
 });

   }
  return <div>
  <div><img src={item.image}></img></div>
  <div>
  <p> {item.title}</p>
  <p>{item.description}</p>
  <div>
  <p>{item.price}</p>
  <button onClick={removefromcart}>
  <span><AiTwotoneDelete/></span>
     
  </button>
  </div>
  </div>
  

  


  
  
    </div>;
  
};

export default CartItem;
