import React, { useState, useEffect, useContext } from "react"
import CartListCard from "./cartListCard"
const CartList = (props) => {



    return (
        <div div className="container px-4 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-5">
                    <h4 className="heading">Shopping Bag</h4>
                </div>
                <div className="col-7">
                    <div className="row text-right">

                        <div className="col-4">
                            <h6 className="mt-2">Quantity</h6>
                        </div>
                        <div className="col-4">
                            <h6 className="mt-2">Price</h6>
                        </div>

                    </div>
                </div>
            </div>

            <CartListCard></CartListCard>
            <CartListCard></CartListCard>
            <CartListCard></CartListCard>

        </div>

    );
};

export default CartList;