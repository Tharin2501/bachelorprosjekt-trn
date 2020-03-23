import "bootstrap/dist/css/bootstrap.min.css";
const Highlight3Articles = (props) => {

    return (
        <div classname="container">

            <div className="row">
                <div className="col-lg">

                    <div className="jumbotron featured-article">

                        <img src="images/hudpleievelger.png"></img>



                    </div>
                </div>
                {/* featured article end*/}
                <div className="col-sm">
                    <ul >
                        <li>
                            <div className="jumbotron">

                                <img src="images/groon.png"></img>


                            </div>
                        </li>

                        <li>
                            <div className="jumbotron">

                                <img src="images/red.png"></img>



                            </div>
                        </li>
                    </ul>
                </div>





            </div>
        </div>

    )

}

export default Highlight3Articles