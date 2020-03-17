import { getCart, addOneProductToCart, addOneProductToFavorites } from "../cookieHandler"
export const addtoCart = (productToAdd, quantity) => {



    productToAdd.quantity = quantity

    addOneProductToCart(productToAdd)

}

export const addItemToFavorites = (productToAdd) => {
    productToAdd.quantity = 1
    addOneProductToFavorites(productToAdd)
}