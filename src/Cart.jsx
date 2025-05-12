import { useState } from 'react'
import EventData from "./EventData.json"

function Cart({ selectedEvents, setSelectedEvents, cartView, setCartView }) {

    let price = 0.00

    // Remove event from current cart, updates price
    function removeFromCart(event) {
        let inCart = selectedEvents.some(inCart => inCart.id === event.id)
        if (inCart) {
            let updatedEvents = selectedEvents.filter(cartEvent => cartEvent.id !== event.id)
            setSelectedEvents(updatedEvents)
            inCart = false
        }
        else {
            (setSelectedEvents((prevEvents) => [...prevEvents, event]))
            inCart = true
        }
        priceCalc()
    }

    // display for total price of all events currently in cart
    function priceCalc() {
        selectedEvents.forEach(event => {
            price = price + event.price
        });
    }

    priceCalc()

    if (cartView == true) {
        console.log('Cart Opened')
        return (
            <>
                <div className="Cart">
                    <h2>Your Cart:</h2>
                    {/* if any events are in cart, display them */}
                    {selectedEvents.length > 0 ? (
                        selectedEvents.map((event) => (
                            <div key={event.id} className="event">
                                <img
                                    src={event.imageUrl}
                                    alt={event.title}
                                    className="event-image"
                                />

                                <div className="event-data">
                                    <h3>{event.title}</h3>
                                    <div className="start-date">
                                        <h4>{event.startDate}</h4>
                                    </div>
                                    <div className="location">
                                        <h4>{event.location}</h4>
                                    </div>
                                    <div className="times">
                                        <h5>{event.startTime} to {event.endTime}</h5>
                                    </div>
                                    <div className="price">
                                        {event.price != 0 ? (<h5> &#36; {event.price}</h5>) : (<h5> Free </h5>)}
                                    </div>
                                </div>
                                {/* Allow removal of item from cart */}
                                <div className="remove-ticket-wrapper">
                                    <button className="remove-ticket" onClick={() => removeFromCart(event)}>Remove</button>
                                </div>
                            </div>
                        )))
                        // Else, notify user of empty cart
                        : (
                            <p>Hmm... No events in cart. <br /> Lets add some, yea?</p>
                        )}
                </div>

                <div className='footer'>
                    <hr />
                    <div className='price-calculator'>
                        <p>Total Price: ${price.toFixed(2)}</p>
                    </div>
                </div>

            </>
        )
    }
}
export default Cart