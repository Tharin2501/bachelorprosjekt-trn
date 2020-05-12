import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src: "../images/carousel/nyhet1.jpg",
        altText: 'Tre sminket kvinner med en lakserosa bakgrunnsfarge.Med tekst som sier "Get the look, Få tips av våre eksperter"',
        caption: '',
        key: '1'
    },
    {
        src: "../images/carousel/nyhet2.jpg",
        altText: 'Salg opp til -40% på utvalgte produkter.',
        caption: '',
        key: '2'
    },
    {
        src: "../images/carousel/nyhet3.jpg",
        altText: 'Typisks huser man finner i San Fransisco med en hippy van foran. Lokalisert i en ørken med en rosa bakgrunn. To av husene til venstra har en bilboard på taket som sier "Benefit San Fransisco kommer snart"',
        caption: '',

        key: '3'
    }
];

const MyCarousel = () => (
    <div className="mx-auto w-100">
        <UncontrolledCarousel items={items} />
    </div>
);


export default MyCarousel;
