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

    // -1 = betyr at den ikke i listen
    const alreadyInCart = cart.findIndex(
        product => product.id === productToAdd.id
    )
    // nytt produkt
    if (alreadyInCart === -1) {
        cart.push(productToAdd)
    } else {

        cart[alreadyInCart].quantity += productToAdd.quantity
    }

    const result = JSON.stringify(cart)
    Cookie.set("rememberMe", (result))

}

export const removeOneProduct = (productToRemove) => {
    var cart = getCart()

    if (cart === "undefined" || cart.length === 0) {
        console.log("Cart does not exsist")

    }

    const filteredCart = cart.filter(
        product => product.id !== productToRemove.id
    )

    const result = JSON.stringify(filteredCart)
    Cookie.set("rememberMe", (result))
}


export const calculatePrice = () => {


    if (typeof window !== "undefined") {

        var cart = getCart()
        var totalprice = 0
        console.log(cart)
        if (cart === "undefined" || cart.length === 0) {
            console.log("Cart does not exsist")
            return totalprice
        }

        cart.map((product, i) => {
            totalprice += product.quantity * product.price
        })

        return totalprice
    }
    return 0


};
