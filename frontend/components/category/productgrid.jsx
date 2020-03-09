
import React, { useState, useEffect, useContext } from "react"
import ProductgridCard from "./productgridCard";


const Productgrid = (props) => {



    return (
        <div>
            <div className="container-fluid px-sm-1 py-5 mx-auto">
                <div className="row justify-content-center">
                    {props.productgrid.map((product, i, ) => {

                        return (

                            <div key={product.id}>
                                <ProductgridCard key={product.id} productcard={product} />
                            </div>

                        )
                    })}

                </div>
            </div>

        </div >

    );
};
export default Productgrid;