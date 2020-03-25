
import React, { useState, useEffect, useContext } from "react"
import ProductgridCard from "./productgridCard";


const Productgrid = ({ productgrid }) => {

    //console.log(productgrid)


    return (
        <div>

            <div className="container-fluid px-sm-1 py-5 mx-auto">
                <div className="row justify-content-center">
                    {productgrid.map((product, i, ) => {

                        return (

                            <div key={product.id}>
                                {/*console.log(product)*/}
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