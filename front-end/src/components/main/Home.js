import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home(props){
    return(
        <div className="homeContainer">
            <svg viewBox="0 0 700 225">
                <path id="curve" d="M 175 125 c 4-6.1 65.5-96.8 178.6-95.6 c 111.3 1.2 170.8 90.3 175.1 97"/>
                <text>
                    <textPath xlinkHref="#curve">
                        it was Nietzsche who defined human beings as hybrids of plants and ghosts 
                    </textPath>
                </text>    
                <Link to="/goods"><circle className="iris" cx="350" cy="112" r="70" fill="#5fb4ba"/></Link>
                <Link to="/goods"><circle className="pupil" cx="350" cy="112" r="30" fill="black"/></Link>
                <Link to="/goods"><circle className="spot" cx="368" cy="112" r="10" fill="white"/></Link>
                <path id="curve" d="M 177 135 q 175 120 350 0" stroke="black" strokeWidth="2px"/>
            </svg>
        </div>
    )
}

export default Home;