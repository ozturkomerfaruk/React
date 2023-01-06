import React from 'react'
import { useNavigate } from "react-router-dom"

export default function About({name}) {
    const navigate = useNavigate()
    return (
        <div>
            <h1>This is our About page.</h1>
            <p>Our company {name} specializes in whatever, and does whatever. 
               Some more information follows here.....
            </p>
            <br/>
            {/* This is how you would go to a new route programatically */}
            <button onClick={()=>navigate('/contact')}>Go to contact page</button>
        </div>
    )
} //end-About