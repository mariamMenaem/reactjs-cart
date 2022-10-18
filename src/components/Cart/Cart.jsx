import React from 'react'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
import "./Cart.css"


function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) {
    return (
      <h2>Your Cart Is Empty</h2>
    )
  }
  return (
    <>

      <div>
        <div class="shopping-cart">

          <div class="title">
            Shopping Bag
          </div>

          {/* <p>cart ({totalUniqueItems}) total items ({totalItems}) </p> */}
          {items.map((item, indx) => {
            return (

              <>

                <div class="item" key={item.id}>
                  <div class="buttons" onClick={() => removeItem(item.id)}>
                    <span class="delete-btn"></span>

                  </div>

                  <div class="image">
                    <img src={item.thumbnail} alt=""></img>
                  </div>

                  <div class="description">
                    <span>{item.title}</span>
                    <span>{item.category}</span>

                  </div>

                  <div class="quantity">
                    <button class="plus-btn" onClick={() => updateItemQuantity(item.id, item.quantity + 1)} type="button" name="button">
                      <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt="" />
                    </button>
                    <span>{item.quantity}</span>
                    <button class="minus-btn" onClick={() => updateItemQuantity(item.id, item.quantity - 1)} type="button" name="button">
                      <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt="" />
                    </button>
                  </div>

                  <div class="total-price">{item.price * item.quantity}</div>

                </div>


              </>
            );
          })}
          <div className='cart-total'>
            <h4>Cart Total : {cartTotal}</h4>
            <Link className='checkout-btn' to="/checkout" items={items}>checkout</Link>
          </div>
        </div>
      </div>

    </>

  )
}

export default Cart
