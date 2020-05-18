import React, { useState } from "react"
import { FaHeart, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { removeOneProduct, addOneProductToCart } from "../cookieHandler"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addtoCart } from "../cart/cartHandler"
import Link from "next/link";
import Cookie from "js-cookie"
import { useRouter } from "next/router";
import CartModalCardFavorite from "../cartModalCardFavorite"
import { Media, MediaContextProvider } from "../media"
// heavy influence https://bbbootstrap.com/snippets/shopping-cart-checkout-payment-options-86973257
const FavoritesCard = (props) => {
    const productContext = {
        id: props.CartListCard.id,
        name: props.CartListCard.name,
        quantity: props.CartListCard.quantity,
        price: props.CartListCard.price,
        image: props.CartListCard.image,

    }

    const {
        buttonLabel,
        className
    } = props;

    const router = useRouter();

    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    const goToCart = () => {
        router.push("/shoppingcart")
    }


    const [numberOfProducts, setNumberOfProducts] = useState(productContext.quantity);

    const addToCartClikerHandler = () => {

        addtoCart(productContext, numberOfProducts)
        props.newPriceFunction();
        toggleModal();
    }

    return (
        <MediaContextProvider>
            <Media at="sm">

                <div className="row border-top">
                    <div className="col-7">
                        <div className="row justify-content-start">
                            <div className="book"><Link href={{ pathname: "/produktside", query: { id: productContext.id } }}><img
                                src={"https://trnbackend.herokuapp.com" + productContext.image} className="book-img"
                                alt={""}></img></Link></div>
                            <div className="my-auto mx-auto">
                                <Link href={{ pathname: "/produktside", query: { id: productContext.id } }}><a><h6
                                    className="">{productContext.name}</h6></a></Link>

                            </div>
                        </div>
                    </div>

                    <div className="my-auto col-5">
                        <div className="row">
                            <div className="col-8">

                                <a onClick={(() => changeNumberofProducts("decAmount"))}><FaMinusCircle alt={"pluss"}
                                /></a>
                                <small> {numberOfProducts}</small>
                                <a onClick={(() => changeNumberofProducts("increaseAmount"))}> <FaPlusCircle alt={"minus"}
                                /></a>
                            </div>
                            <div className="col-4 mb-3 mt-1">
                                <h6>{productContext.price} nok</h6>
                            </div>
                            <div className="ml-2">
                                <button className="delete-btn" onClick={(() => deleteProduct(productContext))}> Fjern</button>
                                <button className="add-btn" onClick={(() => addToCartClikerHandler())}> Legg til handlekurv
                        </button>
                            </div>

                        </div>

                        <Modal isOpen={modal} toggle={toggleModal} className={className}>
                            <ModalHeader toggle={toggleModal}>Produktet er nå lagt i din handlekurven</ModalHeader>
                            <ModalBody>

                                <CartModalCardFavorite productContext={productContext} goToCart={goToCart}></CartModalCardFavorite>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggleModal}>Fortsett å handle</Button>
                                <Button color="secondary" onClick={goToCart}>Gå til handllekurv</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                </div>


            </Media>
            <Media greaterThan="sm">

                <div className="row border-top">
                    <div className="col-7">
                        <div className="row justify-content-start">
                            <div className="book"><Link href={{ pathname: "/produktside", query: { id: productContext.id } }}><img
                                src={"https://trnbackend.herokuapp.com" + productContext.image} className="book-img"
                                alt={""}></img></Link></div>
                            <div className="my-auto mx-auto">
                                <Link href={{ pathname: "/produktside", query: { id: productContext.id } }}><a><h6
                                    className="">{productContext.name}</h6></a></Link>

                            </div>
                        </div>
                    </div>

                    <div className="my-auto col-5">
                        <div className="row">
                            <div className="col-8">
                                <div className="row pl-2">
                                    <a className="p-3 facircle" onClick={(() => changeNumberofProducts("decAmount"))}><FaMinusCircle alt={"pluss"}
                                    /></a>
                                    <h5 className="pt-3"> {numberOfProducts}</h5>
                                    <a className="p-3 facircle" onClick={(() => changeNumberofProducts("increaseAmount"))}> <FaPlusCircle alt={"minus"}
                                    /></a>
                                </div>
                            </div>
                            <div className="col-4 mb-3 mt-1">
                                <h6>{productContext.price} nok</h6>
                            </div>
                            <div className="ml-2">
                                <button className="delete-btn" onClick={(() => deleteProduct(productContext))}> Fjern</button>
                                <button className="add-btn" onClick={(() => addToCartClikerHandler())}> Legg til handlekurv
                        </button>
                            </div>

                        </div>


                    </div>
                    <Modal isOpen={modal} toggle={toggleModal} className={className}>
                        <ModalHeader toggle={toggleModal}>Produktet er nå lagt i din handlekurven</ModalHeader>
                        <ModalBody>

                            <CartModalCardFavorite productContext={productContext} goToCart={goToCart}></CartModalCardFavorite>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggleModal}>Fortsett å handle</Button>
                            <Button color="secondary" onClick={goToCart}>Gå til handllekurv</Button>
                        </ModalFooter>
                    </Modal>
                </div>

            </Media>

        </MediaContextProvider >



    );

    function changeNumberofProducts(value) {
        if (value === "increaseAmount") {
            if (numberOfProducts < 99) {
                setNumberOfProducts(numberOfProducts + 1)
            } else {
                alert("U cant add more then 99 products")

            }

        } else {
            if ((numberOfProducts - 1) >= 1) {
                setNumberOfProducts(numberOfProducts - 1)
            } else {

            }
        }
    }

    function deleteProduct(productContext) {

        removeOneProduct(productContext, "favoritesStorage")
        props.setFavorites(Cookie.getJSON("favoritesStorage"))

    }


};

export default FavoritesCard;
