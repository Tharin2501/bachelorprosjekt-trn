import React, { useState, useEffect, useContext } from "react"

const CartModalCard = (props) => {



    //const [numberOfProducts, setNumberOfProducts] = useState(productContext.quantity);



    return (


        <div className="row border-top">
            <div className="col-7">
                <div className="row justify-content-center">
                    <div className="book"> <img src={"https://trnbackend.herokuapp.com" + props.productContext.image} alt={""} className="book-img"></img></div>
                    <div className="mx-auto my-auto content-center">
                        {props.productContext.name}

                    </div>
                </div>
            </div>

            <div className="my-auto col-5">
                <div className="row">

                    <div className="col-4 mb-2 mt-1">
                        <h6>{props.productContext.price}nok</h6>

                    </div>



                    <div className="ml-2">
                        <button className="add-btn" onClick={() => props.addToFavoriteFunction()}> Legg til i favoritter</button>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default CartModalCard;