import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import React, { useState, useContext } from "react";
const CartModal = (props) => {

    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    const goToCart = () => {
        router.push("/shoppingcart")
    }
    return (
        <Modal isOpen={modal} toggle={toggleModal} className={className}>
            <ModalHeader toggle={toggleModal}>Produktet er nå lagt i din handlekurven</ModalHeader>
            <ModalBody>

                <CartModalCard productContext={productContext} addToFavoriteFunction={changeHeartcolorAndAddToFavorite}></CartModalCard>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggleModal}>Fortsett å handle</Button>
                <Button color="secondary" onClick={goToCart}>Gå til handllekurv</Button>
            </ModalFooter>
        </Modal>
    )
}

export default CartModal;