import React from "react"
import Marquee from "react-double-marquee"


export const MyMarquee = () => (
    <div style={{width: '100%', whiteSpace: 'nowrap', backgroundColor: "red"}}>
        <Marquee delay={0} childMargin={5} speed={0.10}>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </Marquee>
    </div>
);
