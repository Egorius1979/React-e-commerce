import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeAmount, addAmount } from '../redux/reducers/goods'
import object from '../../server/data.json'
import Header from './header'

const Cart = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <GoodsInCart />
    </div>
  )
}

const GoodsInCart = () => {
  const currencyName = useSelector((store) => store.goods.currencyName)
  const multiplier = useSelector((store) => store.goods.multiplier)
  const sorting = useSelector((store) => store.goods.sorting)
  const amount = useSelector((store) => store.goods.amount)
  const price = useSelector((store) => store.goods.price)
  const cart = useSelector((store) => store.goods.cart)
  const dispatch = useDispatch()

  return (
    <div>
      {object
        .sort((a, b) => (sorting === 'title' ? a.title.localeCompare(b.title) : b.price - a.price))
        .filter((it) => cart[it.id])
        .map((it) => {
          return (
            <div key={it.id} className="card p-2 bg-gray-800 text-white">
              <div className="product__title card__title justify-center">{it.title}</div>
              <div>
                <img className="product__image card__image " src={`${it.image}`} alt="pic" />
              </div>
              <div className="product__price card__price">
                {(it.price * multiplier).toFixed(2)}
                <div className="currency text-xs">{currencyName}</div>
              </div>
              <div className="flex items-center justify-center text-center">
                <div>
                  <button
                    onClick={() => dispatch(removeAmount(cart, it.id, amount, price, it.price))}
                    className="card__button mr-2 product__remove"
                    type="button"
                  >
                    -
                  </button>
                </div>
                <div className="product__amout  mr-2 w-10">{cart[it.id]}</div>
                <div>
                  <button
                    onClick={() => dispatch(addAmount(cart, it.id, amount, price, it.price))}
                    className="card__button"
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center text-center pb-4 pt-3">
                <div className="mr-2">price:</div>
                <div className="mr-2 product__total_price">
                  {(cart[it.id] * it.price * multiplier).toFixed(2)}
                </div>
                <div className="">{currencyName}</div>
              </div>
            </div>
          )
        })}

      <div id="total-amount" className="flex justify-center items-center pt-10">
        <div className="mr-2">Total Price:</div>
        <div className="mr-2">{(price * multiplier).toFixed(2)}</div>
        <div className="">{currencyName}</div>
      </div>
    </div>
  )
}

Cart.propTypes = {}

export default Cart
