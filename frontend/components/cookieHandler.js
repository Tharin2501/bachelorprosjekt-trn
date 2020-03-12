import Cookie from "js-cookie"

export const getCart = () => {
    var cart = Cookie.getJSON("rememberMe")
    return cart

}

export const addOneProductToCart = (productToAdd) => {
    var cart = getCart()

    if (cart === "undefined" || cart.length === 0) {
        console.log("YAS kween")
        cart.push(productToAdd)
    }

    // -1 = betyr at den er ikke i listen
    const alreadyInCart = cart.findIndex(
        product => product.id === productToAdd.id
    )
    // nytt produkt
    if (alreadyInCart === -1) {
        cart.push(productToAdd)
    } else {

        cart[alreadyInCart].quantity += productToAdd.quantity
    }



    console.log(cart)


    const result = JSON.stringify(cart)
    Cookie.set("rememberMe", (result))

}