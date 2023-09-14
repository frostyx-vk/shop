function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;
    return (
        <div className="cart blue lighten-1 white-text" onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {quantity ? quantity.map(count => <span className="cart-quantity">{count.quantity}</span>) : null}
        </div>
    )
}

export { Cart }