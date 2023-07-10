import { AiTwotoneDelete } from 'react-icons/ai';
const CartItem = ({item}) => {
  return <div>
  <div><img src={item.image}></img></div>
  <div>
  <p> {item.title}</p>
  <p>{item.description}</p>
  <div>
  <p>{item.price}</p>
  <button>
     <AiTwotoneDelete/>
  </button>
  </div>
  </div>
  

  


  
  
    </div>;
  
};

export default CartItem;
