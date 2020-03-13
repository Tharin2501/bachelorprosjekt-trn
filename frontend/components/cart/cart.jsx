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

