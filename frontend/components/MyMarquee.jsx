import React, {Component} from "react"
import Marquee from "react-double-marquee"


export const MyMarquee = () => (

    <div style={{width: '100%', whiteSpace: 'nowrap', backgroundColor: "red"}}>
        <Marquee delay={0} childMargin={150} speed={0.10} >
            aaaaaaaaaaaaaaaaa
            bbbbbbbbbbbbbbbbb
            ddddddddddddddddd
        </Marquee>
    </div>
);
