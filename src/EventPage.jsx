import { useState } from 'react'
// import './Home.css'
import EventData from "./EventData.json"

function EventPage({ event, closeEventPage }) {

    return (
        <>
            {/* INSERT HEADER HERE */}
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

                        <div className="event-data">
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
                                <h5> &#36; {event.price}</h5> {/*&#36; if $ not working*/}
                            </div>
                        </div>
                    </div>
                )
                 : (
                <p>No Events found</p>
                )}
            </div>
        </>
    )
}

export default EventPage