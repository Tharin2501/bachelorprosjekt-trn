import React from "react"
import Ticker from 'react-ticker'

const names = ["Norges største parfymeri", "Alltid åpent", "Ingen moms", "Spar Tid", "Merkevarer"];

export const MyMarquee = () => (
    <div style={{ backgroundColor: "lightgrey" }}>
        <Ticker direction="toRight" mode="chain" speed={10}>

            {(index) => (
                <div className="row px-4">
                    {names.map(name =>
                        <li key={name}> {name} </li>)
                        .reduce((prev, curr) => [prev, <div key={name} className="px-2" />, curr])}
                </div>
            )}
        </Ticker>
    </div>
);
