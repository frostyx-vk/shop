import { useState } from "react";

function BasketItem(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
        removeFromCart,
    } = props;

    return (
        <li className="collection-item">
            {displayName}
            <span>-</span>
            x{quantity}
            <span>+</span> 
            = {price.finalPrice * quantity} руб.
            <span className="secondary-content" onClick={() => removeFromCart(mainId)}>
                <i className="material-icons">
                    close
                </i>
            </span>
        </li>
    );
}

export { BasketItem }   