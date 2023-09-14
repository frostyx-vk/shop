function BasketList(props) {
    const {order} = props;

    return (
        <div className="collection">
            <a href="#!" className="collection-item active">Корзина</a>
            <a href="#!" className="collection-item">Alvin</a>
            <a href="#!" className="collection-item">Alvin</a>
            <a href="#!" className="collection-item">Alvin</a>
            <a href="#!" className="collection-item active">Общая стоимость</a>
        </div>
    )
}

export { BasketList }