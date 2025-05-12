/*
* Template page for displaying a specific event
* Uses Event useState to select the event who's data is to be displayed
*/

function EventPage({ event, closeEventPage, selectedEvents, setSelectedEvents, reformatDate }) {

    let inCart = selectedEvents.some(inCart => inCart.id === event.id)

    // Allows single button to Add AND Remove event from cart
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

            <div className="EventInfo">
                <div className="closeEvent-wrapper">
                    <button className="closeEvent" onClick={closeEventPage}>Back to Event Gallery</button>
                </div>
                {event ? (
                    <div key={event.id} className="EP-event">
                        <img
                            src={event.imageUrl}
                            alt={event.title}
                            className="EP-event-image"
                        />


                        <div className="EP-event-data">
                            <h3>{event.title}</h3>
                            <div className='EP-description'>
                                <p>{event.description}</p>
                            </div>
                            <div className="EP-start-date">
                                <h4>{reformatDate(event.startDate)}</h4>
                            </div>
                            <div className="EP-location">
                                <h4>{event.location}</h4>
                            </div>
                            <div className="EP-times">
                                <h5>{event.startTime} to {event.endTime}</h5>
                            </div>
                            <div className="EP-price">
                                {event.price != 0 ? (<h5> &#36; {event.price}</h5>) : (<h5> Free </h5>)}
                            </div>
                        </div>
                        {/* Dual use cart toggle button (add/remove from cart) */}
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