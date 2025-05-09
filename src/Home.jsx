import { useState } from 'react'
// import './Home.css'

function Home() {
    //   const [count, setCount] = useState(0)

    return (
        <>
        {/* INSERT HEADER HERE */}
            <h1>Chivent</h1>
            <h2>Upcoming Events:</h2>
            <div className="gallery">
                {/* INSERT GALLERY JSX  */}
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default Home