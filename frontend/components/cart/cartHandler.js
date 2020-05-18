import { addOneProductToCart, addOneProductToFavorites, changeProductQuantityInCart } from "../cookieHandler"
export const addtoCart = (productToAdd, quantity) => {



    productToAdd.quantity = quantity

    addOneProductToCart(productToAdd)

}

export const ChangeQuantityOfProductsOnProduct = (productToChange, quantity) => {
    productToChange.quantity = quantity
    console.log(quantity)
    changeProductQuantityInCart(productToChange)
}

export const addItemToFavorites = (productToAdd) => {
    productToAdd.quantity = 1
    addOneProductToFavorites(productToAdd);
}

export const changeNumberOfProducts = (value, count) => {
    if (value === "increaseAmount") {
        if (count < 99) {
            return count + 1
        } else {
            alert("Man kan ikke legge til mer enn 99 av samme produkt")
            return count;
        }

    } else {
        if ((count - 1) >= 1) {
            return count - 1
        } else {


            return 1;
        }
    }
}