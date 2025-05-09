import { useState } from 'react'
// import './Home.css'
import EventData from "./EventData.json"

function Home() {
    //   const [count, setCount] = useState(0)

    return (
        <>
        {/* INSERT HEADER HERE */}
            <h1>Chivent</h1>
            <h2>Upcoming Events:</h2>
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
                
                            <h4>{event.description}</h4>
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
                    ))
                ) : (
                    <p>No Events found</p>
                )}
            </div>
        </>
    )
}

export default Home