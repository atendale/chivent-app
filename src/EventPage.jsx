import { useState } from 'react'
// import './Home.css'
import EventData from "./EventData.json"

function EventPage({ event, closeEventPage, selectedEvents, setSelectedEvents, reformatDate }) {

    let inCart = selectedEvents.some(inCart => inCart.id === event.id)

    const toggleEventInCart = () => {
        if (inCart) {
            let updatedEvents = selectedEvents.filter(cartEvent => cartEvent.id !== event.id)
            setSelectedEvents(updatedEvents)
            inCart = false
        }
        else {
            (setSelectedEvents((prevEvents) => [...prevEvents, event]))
            inCart = true
        }
    }

    return (
        <>
            <div>
                <button className="closeEvent" onClick={closeEventPage}>Back to Event Gallery</button>
            </div>
            <div className="EventInfo">
                {event ? (
                    <div key={event.id} className="event">
                        <img
                            src={event.imageUrl}
                            alt={event.title}
                            className="event-image"
                        />
                        <h3>{event.title}</h3>
                        <div className='description'>
                            <p>{event.description}</p>
                        </div>

                        <div className="event-data">
                            <div className="start-date">
                                <h4>{reformatDate(event.startDate)}</h4>
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
                        <div className="cart-Toggle-wrapper">
                            <button className="cart-Toggle" key={inCart} onClick={toggleEventInCart}>
                                {inCart ? (<p>Remove From Cart</p>) : (<p>Add to Cart</p>)}
                            </button>
                        </div>
                    </div>
                )
                    : (
                        <p>Requested Event Not Found</p>
                    )}
            </div>
        </>
    )
}

export default EventPage