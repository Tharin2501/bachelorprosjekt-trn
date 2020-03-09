const CART_KEY = "cart";
export const calculatePrice = items => {
    return `$${items
        .reduce((acc, item) => acc + item.quantity * item.price, 0)
        .toFixed(2)}`;
};

/* cartÆ*/

export const setCart = (value, cartKey = CART_KEY) => {

    if (window.localStorage) {
        window.localStorage.setItem(cartKey, JSON.stringify(value));
    }
};

export const getCart = (cartKey = CART_KEY) => {
    if (window.localStorage && window.localStorage.getItem(cartKey)) {
        return JSON.parse(window.localStorage.getItem(cartKey));
    }
    return [];
};
