import { useState } from 'react'
// import './Home.css'
import EventData from "./EventData.json"
import EventPage from "./EventPage.jsx"
import Header from "./Header.jsx"
import Cart from "./Cart.jsx"
// import Gallery from "./Gallery.jsx"

function Home() {
    const [onEventPage, setEventPage] = useState(null)
    const [selectedEvents, setSelectedEvents] = useState([])
    const [cartView, setCartView] = useState(false)

    function viewEvent(event) {
        console.log('Opening Event Page' + event.title)
        setEventPage(event)
    }

    function closeEventPage() {
        setEventPage(null)
        console.log('Event Page Closed')
    }

    function cartToggle() {
        cartView ? (setCartView(false)) : (setCartView(true))
        console.log('cart toggled')
    }

    function reformatDate(strDate) {
        const date = new Date(strDate);
        return date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
        });
    }

    console.log(cartView)
    console.log(selectedEvents)


    return (
        <>
            <Header cartToggle={cartToggle} cartView={cartView} />
            <h1>Chivent</h1>
            <h2>Upcoming Events:</h2>
            {cartView ? (
                <Cart selectedEvents={selectedEvents} setSelectedEvents={setSelectedEvents} cartView={cartView} setCartView={setCartView} />
            ) :
                (onEventPage ? (
                    <EventPage event={onEventPage} closeEventPage={closeEventPage} selectedEvents={selectedEvents} setSelectedEvents={setSelectedEvents} reformatDate={reformatDate} />
                ) : (
                    <div className="gallery">
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
                                    <div className="more">
                                        <button className="view-event" onClick={() => viewEvent(event)}>View Event</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No Events found</p>
                        )}
                    </div>
                )
                )}

        </>
    )
}
export default Home