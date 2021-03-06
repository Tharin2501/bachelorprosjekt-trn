import React from "react"
import Ticker from 'react-ticker'

const names = ["Norges største parfymeri", "Alltid åpent", "Ingen moms", "Spar Tid", "Merkevarer"];

// If you don’t pass in an initial value, reduce will assume the first item in your array is your initial value
export const MyMarquee = () => {

    return (
        <div>
            <div style={{ backgroundColor: "lightblue" }}>

                <Ticker offset="0.1%" mode="chain" move={false} speed={3}>

                    {(index) => (
                        <div className="marquee-container">

                            {names.map(name =>

                                <li key={name}> {name} </li>)
                                .reduce((accumulator, curr, ) => [accumulator, <div key={name} className="px-4" />, curr], [])}


                        </div>
                    )}
                </Ticker>

            </div >

        </div>
    )
};
