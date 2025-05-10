import { useState } from 'react'
import EventData from "./EventData.json"
import Cart from "./Cart.jsx"

function Header({cartToggle, cartView}) {
    return (
        <>
            <header>
                <h1>Chivent</h1>
                <nav>
                    <div className="cart-toggle-wrapper">
                        <button className="toggleCart" onClick={cartToggle}>
                            {cartView ? (console.log(cartView),
                                <p>Close Cart</p>) : (
                                <p>Open Cart</p>)}
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Header