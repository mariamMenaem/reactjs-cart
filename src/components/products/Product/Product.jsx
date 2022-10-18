import React from 'react'
import "./Product.css";
import { useCart , CartProvider } from 'react-use-cart'
function Product({ products }) {
    const { addItem  } = useCart();
    return (
        <CartProvider>
            <h2 className='text-center'>Products</h2>
        <div className='products-container'>
        
            {products.map((product) => {
                return (
                    <div className="product-card" key={product.id}>
                        <div className="post-card" key={product.id}>
                            <div className="badge">{product.discountPercentage}% OFF</div>
                            <div className="product-tumb">
                                <img src={product.thumbnail} alt=""></img>
                            </div>
                            <div className="product-details">
                                <span className="product-catagory">{product.category}</span>
                                <h4><a href="">{product.title}</a></h4>
                                <p>{product.description}</p>
                                <div className="product-bottom-details">
                                    <div className="product-price"><small>{product.price}</small></div>
                                    <div class="product-links">

                                        <button onClick={() => addItem(product)}>Add to Cart</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                );
            })}

        </div>
        </CartProvider>
    )
}

export default Product
