import { useState } from 'react'
import EventData from "./EventData.json"
import EventPage from "./EventPage.jsx"
import Header from "./Header.jsx"
import Cart from "./Cart.jsx"

function Home() {
    const [onEventPage, setEventPage] = useState(null) //tracks what (if any) specific event page is requested
    const [selectedEvents, setSelectedEvents] = useState([]) //tracks events in current cart
    const [cartView, setCartView] = useState(false) //tracks if cart is open

    // Open specific event's page
    function viewEvent(event) {
        console.log('Opening Event Page' + event.title)
        setEventPage(event)
    }

    // Close specific event's page
    function closeEventPage() {
        setEventPage(null)
        console.log('Event Page Closed')
    }

    // Toggle the Cart's visibility
    function cartToggle() {
        closeEventPage()
        cartView ? (setCartView(false)) : (setCartView(true))
        console.log('cart toggled')
    }

    // Reformat "YYYY-MM-DD" into "Month DD"
    function reformatDate(strDate) {
        const date = new Date(strDate);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
        });
    }


    return (
        <>
            <Header cartToggle={cartToggle} cartView={cartView} />

            {/* If cart clicked, display cart */}
            {cartView ? (
                <Cart selectedEvents={selectedEvents} setSelectedEvents={setSelectedEvents} cartView={cartView} setCartView={setCartView} />
            ) : 
            // Else if specific event page requested => display 
                (onEventPage ? (
                    <EventPage event={onEventPage} closeEventPage={closeEventPage} selectedEvents={selectedEvents} setSelectedEvents={setSelectedEvents} reformatDate={reformatDate} />
                ) : (
                    // Else, show main page event gallery
                    <div className="gallery">
                        <h2>Upcoming Events:</h2>
                        {EventData.length > 0 ? (
                            EventData.map((event) => (
                                <div key={event.id} className="event">
                                    <img
                                        src={event.imageUrl}
                                        alt={event.title}
                                        className="event-image"
                                    />
                                    <h3>{event.title}</h3>
                                    <div className="event-data">
                                        <div className="start-date">
                                            <h4>{reformatDate(event.startDate)}</h4>
                                        </div>
                                        <div className="location">
                                            <h4>{event.location}</h4>
                                        </div>
                                    </div>
                                    <div className="view-event-wrapper">
                                        <button className="view-event" onClick={() => viewEvent(event)}>View Event</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            // If no events in database 
                            <p>No Events found</p>
                        )}
                    </div>
                )
                )}

        </>
    )
}
export default Home