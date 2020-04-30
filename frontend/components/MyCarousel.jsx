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
    <div className="row">
    <div className="mx-auto col-10">
        <UncontrolledCarousel items={items}/>
    </div>
    </div>
);


export default MyCarousel;
