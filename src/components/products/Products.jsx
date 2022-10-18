import React from 'react'
import Product from './Product/Product';
import{useState , useEffect} from "react"

function Products() {
    const [products, setProducts] = useState([]);
    function loadProduct(){
        fetch("https://dummyjson.com/products?limit=7")
        .then((response) => response.json())
        .then((data) => {
          console.log(data.products);
          setProducts(data.products);
        });
      }
      useEffect(() => {loadProduct()} , [])
  return (
    <div>
      <div className="banner">
                <div className="border"> </div>
                <h2>Don't be late for the superdeal</h2>
                <p>We'll save you a lot
                    and take every cent you earn</p>
                <button >Shop Now</button>
                <div className="border border-bottom"> </div>

            </div>
   {products && <Product products ={products}/>}
   </div>
  )
}

export default Products
