import React from "react";
import Query from "../../components/query"
import PRODUCTS_QUERY from "../../apollo/queries/product/products"
import Productgrid from "../../components/category/productgrid";
import NOSSR from "react-no-ssr"
const ProductsComonent = (props) => {
    return (
        <Query query={PRODUCTS_QUERY} id={null}>
            {({ data: { products } }) => {
                return (
                    <div>
                        <h1>Makeup</h1>
                        <p>

                            Festlook eller hverdagsmakeup uansett hva du er ute etter finner
                            du alt innen makeup hos Tax Free. Den perfekte maskaraen.
                            Foundations til alle hudtyper og med forskjellige dekkevne.
                            Settingsprayer, concealere, primere og rouger i alle
                            konsistenser – til forskjellige anledninger. Lek deg med
                            øyenskyggene våre og skap det uttrykket du ønsker. Til leppene
                            har vi lippgloss, leppestift, leppepomader og lipliner alt fra
                            den mest shiny til den matteste matte. Her finner du også
                            makeupsett i forskjellige fasonger og farger. Finn din favoritt
                            sminke hos oss til en god pris.
              </p>
                        <NOSSR>
                            <div className="row">
                                <div className="col-md-3 order-md-last">
                                    <button type="button" data-toggle="collapse" data-target="#filters" className="d-block d-md-none btn btn-primary btn-block mb-3"> Filters &dtrif;</button>
                                    <div id="filters" className="collapse d-md-block">
                                        <p> <a href="#"> Test </a></p>
                                        <p> <a href="#"> Test1 </a></p>
                                        <p> <a href="#"> Test2 </a></p>
                                        <p> <a href="#"> Test3 </a></p>
                                        <p> <a href="#"> Test4 </a></p>

                                    </div>
                                </div>
                                <div className="col-md-9 order-md-first">
                                    <Productgrid productgrid={products} />;
                        </div>

                            </div>
                        </NOSSR>
                    </div>

                );
            }}
        </Query>

    )

}

export default ProductsComonent