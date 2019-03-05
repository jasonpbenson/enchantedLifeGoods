import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home(props){
    return(
        <div className="homeContainer">
            <svg viewBox="0 0 700 150">
                <path id="curve" d="M 175 148.6 c 4-6.1 65.5-96.8 178.6-95.6 c 111.3 1.2 170.8 90.3 175.1 97"/>
                <text>
                    <textPath xlinkHref="#curve">
                        It was Nietzsche who defined human beings as hybrids of plants and ghosts 
                    </textPath>
                </text>    
            </svg>
            <svg viewBox="0 0 700 80">
                <circle cx="350" cy="40" r="40"/>
            </svg>
            <svg viewBox="0 0 700 150">
                <path id="curve" d="M 177 0 q 175 120 350 0" stroke="black" strokeWidth="2px"/>
            </svg>
        </div>
    )
}

export default Home;