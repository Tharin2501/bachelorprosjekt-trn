import Cookie from "js-cookie"

export const getCart = () => {
    var cart = Cookie.getJSON("rememberMe")
    return cart

}

export const addOneProductToCart = (productToAdd) => {
    var cart = getCart()
    // endre slik at den stopper når den finner en match
    const alreadyInCart = cart.map((product, i) => {
        if (product.id === productToAdd.id) {
            //console.log("alreadyincart")

            return i
        }

    })
    console.log(alreadyInCart)
    if (alreadyInCart !== -1) {
        cart[alreadyInCart].quantity += productToAdd.quantity
    }


    // add product to end of array
    cart.push(productToAdd)

    console.log(cart)


    const result = JSON.stringify(cart)
    Cookie.set("rememberMe", (result))

}