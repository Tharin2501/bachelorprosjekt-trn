import React from 'react';
import {UncontrolledCarousel} from 'reactstrap';

const items = [
    {
        src: "../images/carousel/nyhet1.jpg",
        altText: 'Slide 1',
        caption: '',
        key: '1'
    },
    {
        src: "../images/carousel/nyhet2.jpg",
        altText: 'Slide 2',
        caption: '',
        key: '2'
    },
    {
        src: "../images/carousel/nyhet3.jpg",
        altText: 'Slide 3',
        caption: '',

        key: '3'
    }
];

const MyCarousel = () => (
    <div className="mx-auto w-100">
        <UncontrolledCarousel items={items}/>
    </div>
);


export default MyCarousel;
