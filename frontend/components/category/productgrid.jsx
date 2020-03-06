
import React from "react"
import { ProductgridCard } from "./productgridCard"

export const Productgrid = () => {
    return (
        <div>
            <div className="container-fluid px-sm-1 py-5 mx-auto">
                <div className="row justify-content-center">

                    <ProductgridCard />
                    <ProductgridCard />
                    <ProductgridCard />
                </div>
            </div>

        </div >

    );
};