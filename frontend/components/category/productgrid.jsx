
import React from "react"
import ProductgridCard from "./productgridCard";

const Productgrid = (props) => {
    //console.log(props.productgrid[0].id);
    return (
        <div>
            <div className="container-fluid px-sm-1 py-5 mx-auto">
                <div className="row justify-content-center">
                    {props.productgrid.map((product, i) => {
                        return <ProductgridCard productcard={product} />
                    })}

                </div>
            </div>

        </div >

    );
};
export default Productgrid;