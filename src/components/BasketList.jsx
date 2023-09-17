import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const { order = [], handleBasketShow = Function.prototype } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity
    }, 0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item.mainId} {...item} handleBasketShow={handleBasketShow} />
                )) : <li className="collection-item">Корзина пуста</li>
            }
            <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
            <i onClick={handleBasketShow} className="material-icons basket-close">close</i>
        </ul>
    )
}

export { BasketList }