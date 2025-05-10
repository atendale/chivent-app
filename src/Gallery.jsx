// import { useState } from 'react'
// // import './Home.css'
// import EventData from "./EventData.json"
// import Gallery from "./Gallery.jsx"

// function Gallery(onEventPage, setEventPage, selectedEvents, setSelectedEvents) {

//     function viewEvent(event){
//         // setEventPage(event)
//     }

//     return (
//         <>
//             {/* INSERT HEADER HERE */}
//             <h1>Chivent</h1>
//             <h2>Upcoming Events:</h2>
//             <div className="gallery">
//                 {EventData.length > 0 ? (
//                     EventData.map((event) => (
//                         <div key={event.id} className="event">
//                             <img
//                                 src={event.imageUrl}
//                                 alt={event.title}
//                                 className="event-image"
//                             />
//                             <h3>{event.title}</h3>

//                             <div className="event-data">
//                                 <div className="start-date">
//                                     <h4>{event.startDate}</h4>
//                                 </div>
//                                 <div className="location">
//                                     <h4>{event.location}</h4>
//                                 </div>
//                                 <div className="times">
//                                     <h5>{event.startTime} to {event.endTime}</h5>
//                                 </div>
//                                 <div className="price">
//                                     <h5> &#36; {event.price}</h5> {/*&#36; if $ not working*/}
//                                 </div>
//                             </div>
//                             <div className="more">
//                                 <button className="view-event" onClick={() => viewEvent(event)}>View Event</button>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No Events found</p>
//                 )}
//             </div>
//         </>
//     )
// }

// export default Gallery