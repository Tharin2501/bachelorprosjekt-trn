import Cookie from "js-cookie"

export const getCookieArray = (cookieName) => {
    var cart = Cookie.getJSON(cookieName)
    return cart

}

export const saveCookieArrayToCookie = (arrayToSave, cookieName) => {
    const result = JSON.stringify(arrayToSave)
    Cookie.set(cookieName, (result))
}

export const removeOneProduct = (productToRemove, removefromCookie) => {
    var cart = getCookieArray(removefromCookie)

    if (cart === "undefined" || cart.length === 0) {
        console.log("Cart does not exsist")

    }

    const filteredCart = cart.filter(
        product => product.id !== productToRemove.id
    )

    saveCookieArrayToCookie(filteredCart, removefromCookie)
}

export const calculatePrice = () => {


    if (typeof window !== "undefined") {

        var cart = getCookieArray("cartStorage")
        var totalprice = 0

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


export const calculateCollectMePoints = (priceToCalculateFrom) => {
    if (priceToCalculateFrom < 10) {
        return 0;
    }
    var collectMePoints = priceToCalculateFrom / 10;
    collectMePoints = Math.floor(collectMePoints);
    return collectMePoints;
}

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

export const changeProductQuantityInCart = (productToChange) => {
    if (productToChange.quantity == 0) {
        removeOneProduct(productToChange, "cartStorage")
    } else {
        var cart = getCookieArray("cartStorage")

        // -1 = betyr at den ikke i listen
        const alreadyInCart = cart.findIndex(
            product => product.id === productToChange.id
        )
        // nytt produkt
        if (alreadyInCart === -1) {
            cart.push(productToChange)
        } else {

            cart[alreadyInCart].quantity = productToChange.quantity
        }

        saveCookieArrayToCookie(cart, "cartStorage")
    }



}


/* <--CART END -->*/


/* <--FAV -->*/
export const addOneProductToFavorites = (productToAdd) => {
    var favorites = getCookieArray("favoritesStorage")
    console.log(favorites)

    const alreadyInCart = favorites.findIndex(
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

