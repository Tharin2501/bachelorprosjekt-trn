import React from "react"

const Artikler = () => {

    return(
        <div className="justify-content-center text-center">
            <h1 className="pb-4"> Hent tittel fra strapi</h1>
            <div className="square pb-5">
                <div className="content">
                    <p>This paragraph shoulb be fetched dynamically by strapi.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Artikler;
