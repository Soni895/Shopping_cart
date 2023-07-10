import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Cart from "./pages/Cart";


const App = () => {
  
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/cart" element={<Cart></Cart>}/>
      </Routes>
    </div>
  );
};

export default App;
