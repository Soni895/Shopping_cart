import { useEffect, useState } from "react";
import {  toast } from 'react-toastify';
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
 const API_URL = "https://fakestoreapi.com/products";
async function datafatch()
{
  setloading(true);
try{
  const response= await fetch(API_URL);
  const data=await response.json();
  console.log(data);
  setdata(data);

  
}

  catch(error)
  {
   toast.error("something went wrong",{
    position: toast.POSITION.TOP_CENTER
   });
   setdata([]);
  }
  setloading(false);
}
const [data,setdata]=useState([]);
const [loading ,setloading]=useState([]);
useEffect(
()=>datafatch(),[]);

  return <div>
{
  loading?(<Spinner></Spinner>):(
  data.length>0 ?(
    data.map((item)=>{
      return<Product item={item} key={item.id}></Product>

    })
  ):(
    <div>No data found</div>
  )

  )
}


  </div>;
};

export default Home;
