import React from "react"
import Ticker from 'react-ticker'

const array = ["Norges største parfymeri","Alltid åpent","Ingen moms"];

function rand(min, max) {
    let offset = min;
    let range = (max - min) + 1;
    return Math.floor(Math.random() * range) + offset
}

export const MyMarquee = () => (
    <div style={{backgroundColor: "lightgrey"}}>
    <Ticker
        direction="toRight"
        mode="smooth"
        speed={10}
    >
        {(index) => (
            <li>{array[rand(0, array.length - 1)]}</li>
        )}
    </Ticker>
    </div>
);
