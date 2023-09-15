function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addToCart = Function.prototype,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button onClick={() => addToCart({ mainId, displayName, price })} className="btn" >Купить</button>
        {
          [price].map(price => {
            return <span className="right">{price.finalPrice} руб.</span>
          })
        }
      </div>
    </div>
  )
}

export { GoodsItem }
