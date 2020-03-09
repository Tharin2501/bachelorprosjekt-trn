import Cookie from "js-cookie";
import { useState, useEffect } from "react";
import parsCookies from "./parseCookies";

//const CART_KEY = "cart";


const Cart = ({ initialRememberValue = 1 }) => {
    const [rememberMe, setRememberMe] = useState(() =>
        JSON.parse(initialRememberValue)
    );

    useEffect(() => {
        Cookie.set("rememberMe", JSON.stringify(rememberMe));
    }, [rememberMe]);

    return (
        <div>
            remember me
        <input
                type="checkbox"
                value={rememberMe}
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
            />
        </div>
    );
};

Cart.getInitialProps = ({ req }) => {
    const cookies = parseCookies(req);

    return {
        initialRememberValue: cookies.rememberMe
    };
};

export default Cart;





/*
export const calculatePrice = items => {
    return `$${items
        .reduce((acc, item) => acc + item.quantity * item.price, 0)
        .toFixed(2)}`;
};

/* cartÆ*/
/*
export const setCart = (value, cartKey = CART_KEY) => {

    if (localStorage) {
        localStorage.setItem(cartKey, JSON.stringify(value));
    }
};


export const getCart = (cartKey = CART_KEY) => {
    if (localStorage && localStorage.getItem(cartKey)) {
        return JSON.parse(localStorage.getItem(cartKey));
    }
    return [];
};

*/
