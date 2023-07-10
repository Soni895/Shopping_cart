import  { AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return <div className='flex justify-between'>
    
 <div >
 <NavLink to="/" > <img src="../../public/logo.png"></img></NavLink>
 </div>
 <div>
 <NavLink to="/"><div>Home</div></NavLink>
<NavLink to="/cart"> <div><AiOutlineShoppingCart></AiOutlineShoppingCart></div></NavLink>
 </div> 
 
  </div>;
};

export default Navbar;
