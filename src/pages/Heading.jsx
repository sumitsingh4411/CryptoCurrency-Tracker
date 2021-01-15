import React from 'react'
import "../pages/Heading.css";
function Heading() {
    return (
        <ul className="list-group mt-2 ">
             <li className="coinlist list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
                 <span>Name</span>
                 <span>Price in Rs</span>
                 <span>Market_cap</span>
                 <span>Rank</span>
                 <span>price 24h</span>
             </li>
        </ul>
    )
}

export default Heading
