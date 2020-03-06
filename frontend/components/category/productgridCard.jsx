
import React, { useState, useEffect } from "react"
import { FaHeart, FaMinusCircle } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";

export const ProductgridCard = () => {

    // change color of hearthfunction
    const [heartColor, setheartColor] = useState("black");

    function changeHeartcolor() {
        if (heartColor === "black") {
            setheartColor("red")
        } else {
            setheartColor("black")
        }
    }
    ///// end chage color of hearthfunction

    return (

        <div className="d-flex">
            <div className="card card-1">
                <div className="pr-3 row justify-content-end">
                    <a onClick={(() => changeHeartcolor())}><FaHeart color={heartColor} /></a>
                </div>
                <div className="product-pic"> <img className="pic1" src="https://trnbackend.herokuapp.com/files/SPF50+Anthelios.jpg" /> </div>
                <small className="category"> lepper</small>
                <h5 className="product-name"> Test</h5>
                <div className="row px-3 justify-content-between">
                    <p className="price">200kr</p>
                    <p className="price">100ml</p>

                </div>
                <div className="row px-3 justify-content-between">
                    <div className="fas fa-minus-circle" ></div>
                    <small> 2</small>
                    <div className="fas fa-plus-circle" ></div>
                </div>

                <button type="button" className="btn btn-dark">Buy</button>
            </div>
        </div>
    );
};