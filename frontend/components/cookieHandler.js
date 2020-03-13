import Cookie from "js-cookie"

export const getCookieArray = (cookieName) => {
    var cart = Cookie.getJSON(cookieName)
    return cart

}

export const saveCookieArrayToCookie = (arrayToSave, cookieName) => {
    const result = JSON.stringify(arrayToSave)
    Cookie.set(cookieName, (result))
}

export const calculatePrice = () => {


    if (typeof window !== "undefined") {

        var cart = getCookieArray("cartStorage")
        console.log(cart)
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

/* <--CART -->*/
export const addOneProductToCart = (productToAdd) => {
    var cart = getCookieArray("cartStorage")
    /*
    if (cart === "undefined" || cart.length === 0) {
        console.log("Cart not defined")
        cart.push(productToAdd)
        //return
    }
    */
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

    saveCookieArrayToCookie(cart, "cartStorage")


}

export const removeOneProduct = (productToRemove) => {
    var cart = getCookieArray("cartStorage")

    if (cart === "undefined" || cart.length === 0) {
        console.log("Cart does not exsist")

    }

    const filteredCart = cart.filter(
        product => product.id !== productToRemove.id
    )

    saveCookieArrayToCookie(filteredCart, "cartStorage")
}
/* <--CART END -->*/


/* <--FAV -->*/
export const addOneProductToFavorites = () => {
    var favorites = getCookieArray()
    console.log(favorites.favoritesStorage)

    const alreadyInCart = favorites.favoritesStorage.findIndex(
        product => product.id === productToAdd.id
    )
    // nytt produkt
    if (alreadyInCart === -1) {
        favorites.push(productToAdd)
    } else {
        // NADA
    }
    saveCookieArrayToCookie(favorites, "favoritesStorage")
}
/* <--FAV END-->*/