import  { AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
// import img from "../../public/android-chrome-512x512.png"
const Navbar = () => {
  return <div className='flex justify-between'>
    
 <div >
 <NavLink to="/" > <img src="../../public/android-chrome-512x512.png"></img></NavLink>
 </div>   
 <NavLink to="/"><div>Home</div></NavLink>
<NavLink to="/cart"> <div><AiOutlineShoppingCart></AiOutlineShoppingCart></div></NavLink>
  </div>;
};

export default Navbar;
