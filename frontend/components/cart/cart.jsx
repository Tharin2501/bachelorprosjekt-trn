import Cookie from "js-cookie";
import { useState, useEffect } from "react";

const Cart = ({ initialRememberValue = 1 }) => {
    const [cartStorage, setcartStorage] = useState(() =>
        JSON.parse(initialRememberValue)
    );

    useEffect(() => {
        Cookie.set("cartStorage", JSON.stringify(cartStorage));
    }, [cartStorage]);

    return (
        <div>
            remember me
            <input
                type="checkbox"
                value={cartStorage}
                checked={cartStorage}
                onChange={e => setcartStorage(e.target.checked)}
            />
        </div>
    );
};

Cart.getInitialProps = ({ req }) => {
    const cookies = parseCookies(req);

    return {
        initialRememberValue: cookies.cartStorage
    };
};

export default Cart;

