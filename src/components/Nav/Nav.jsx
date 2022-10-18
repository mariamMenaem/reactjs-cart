import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "react-use-cart"
function Nav() {
    const {
        isEmpty,
        totalUniqueItems,
    } = useCart();
    return (
        <>
            <div className='navbar'>
                <div className='nav-brand'>
                    <Link to="/" className='navlink'>Ecommerce</Link>
                </div>
                <div className='nav-links'>
                    <Link to='/' className='navlink'>Home</Link>
                    <Link to='/cart' className='navlink'>cart {!isEmpty&&(<span>{totalUniqueItems}</span>)}</Link>

                </div>
            </div>
            
        </>
    )
}

export default Nav
