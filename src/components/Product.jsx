const Product = ({item}) => {
  return <div>
<p> {item.title}</p>
<p>{item.description}</p>
<img src={item.image}></img>
<p>{item.price}</p>
<button>
  {
   true? ("remove item"):("add to cart")
  }
</button>


  </div>;
};

export default Product;
