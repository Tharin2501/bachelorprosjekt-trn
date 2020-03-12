import Cookie from "js-cookie"

export const getCart = () => {
    var cart = Cookie.getJSON("rememberMe")
    return cart

}

export const addOneProductToCart = (productToAdd) => {
    var cart = getCart()

    // add product to end of array
    cart.push(productToAdd)


    const result = JSON.stringify(cart)
    Cookie.set("rememberMe", (result))

}