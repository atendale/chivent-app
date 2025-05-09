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
                    EventData.map((events) => (
                        <div key={EventData._id} className="event">
                            <h3>{EventData.title}</h3>
                            <img
                                src={EventData.imageURL}
                                alt={EventData.title}
                                className="event-image"
                            />
                            <div className="event-data">
                                <div className="start-date">
                                    <h4>{EventData.startDate}</h4>
                                </div>
                                <div className="location">
                                    <h4>{EventData.stats[1]}</h4>
                                </div>
                                <div className="stat">
                                    <h5>{EventData.startTime} to {EventData.endTime}</h5>
                                </div>
                                <div className="price">
                                    <h5> &#36; {EventData.price}</h5> {/*&#36; if $ not working*/}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No Events found</p>
                )}
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default Home