function BasketItem(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
        removeFromCart = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    return (
        <li className="collection-item">
            {displayName}
            <i className="material-icons basket-quantity" onClick={() => decQuantity(mainId)}>remove</i>
            x{quantity}{' '}
            <i className="material-icons basket-quantity" onClick={() => incQuantity(mainId)}>add</i> 
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