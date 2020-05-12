import { addOneProductToCart, addOneProductToFavorites } from "../cookieHandler"
export const addtoCart = (productToAdd, quantity) => {



    productToAdd.quantity = quantity

    addOneProductToCart(productToAdd)

}

export const addItemToFavorites = (productToAdd) => {
    productToAdd.quantity = 1
    addOneProductToFavorites(productToAdd)
}

export const changeNumberOfProducts = (value, count) => {
    if (value === "increaseAmount") {
        if (count < 99) {
            return count + 1
        } else {
            alert("U cant add more then 99 products")
        }

    } else {
        if ((count - 1) >= 1) {
            return count - 1
        } else {

            alert("U cant have minus products")
        }
    }
}