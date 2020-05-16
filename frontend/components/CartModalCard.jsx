import React, { useState, useEffect, useContext } from "react"

const CartModalCard = (props) => {



    //const [numberOfProducts, setNumberOfProducts] = useState(productContext.quantity);



    return (


        <div className="row border-top">
            <div className="col-7">
                <div className="row justify-content-start">
                    <div className="book"> <img src={"https://trnbackend.herokuapp.com" + props.productContext.image} alt={""} className="book-img"></img></div>
                    <div className="mx-auto my-auto">
                        {props.productContext.name}

                    </div>
                </div>
            </div>

            <div className="my-auto col-5">
                <div className="row">

                    <div className="col-4 mb-3 mt-1">
                        <h6>{props.productContext.price}nok</h6>
                    </div>

                    <div className="ml-2">
                        <button className="text-nowrap add-btn"> Legg til i favoritter</button>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default CartModalCard;