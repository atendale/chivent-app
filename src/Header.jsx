import { useState } from 'react'
import EventData from "./EventData.json"
import Cart from "./Cart.jsx"

function Header({cartToggle, cartView}) {
    return (
        <>
            <header>
                <div>
                   <h1>CHIVENT</h1> 
                </div>
                <nav>
                    <div className="cart-toggle-wrapper">
                        {/* Cart items visibility toggle */}
                        <button className="toggleCart" onClick={cartToggle}>
                            {cartView ? (console.log(cartView),
                                <p>Back</p>) : (
                                <p>Cart</p>)}
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Header