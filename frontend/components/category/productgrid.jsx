
import React from "react"
import ProductgridCard from "./productgridCard";


const Productgrid = ({ productgrid }) => {


    return (
        <div>

            <div className="container-fluid px-sm-1 py-5 mx-auto">
                <div className="row justify-content-center">
                    {productgrid.map((product) => {

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