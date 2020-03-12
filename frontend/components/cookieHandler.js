import Cookie from "js-cookie"

export const getCart = () => {
    var cart = Cookie.getJSON("rememberMe")
    return cart

}

export const addOneProductToCart = (productToAdd) => {
    var cart = getCart()

    if (cart === "undefined" || cart.length === 0) {
        console.log("YAS kween")

    }

    // endre slik at den stopper når den finner en match å gjør alreadyInCart til index
    //var alreadyInCart = -1;
    const alreadyInCart = cart.findIndex(
        product => product.id === productToAdd.id
    )

    console.log(alreadyInCart)
    /*
    if (alreadyInCart !== -1) {
        cart[alreadyInCart].quantity += productToAdd.quantity
    }
    */

    // add product to end of array
    cart.push(productToAdd)

    console.log(cart)


    const result = JSON.stringify(cart)
    Cookie.set("rememberMe", (result))

}