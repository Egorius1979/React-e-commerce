import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import object from '../../server/data.json'
import { removeAmount, addAmount } from '../redux/reducers/goods'

const Card = () => {
  const { currencyName, multiplier, sorting, amount, price, cart } = useSelector((s) => s.goods)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-wrap justify-center p-4 bg-black">
      {object
        .sort((a, b) => (sorting === 'title' ? a.title.localeCompare(b.title) : b.price - a.price))
        .map((it) => {
          return (
            <div key={it.id} className="card p-4 mr-4 mb-4 bg-gray-800 text-white">
              <div className="card__title">{it.title}</div>
              <div>
                <img className="flex card__image" src={`${it.image}`} alt="pic" />
              </div>
              <div className="card__price">
                {(it.price * multiplier).toFixed(2)}
                <div className="currency text-xs">{currencyName}</div>
              </div>
              <div className="flex justify-between">
                <div>
                  <button
                    onClick={() => dispatch(removeAmount(cart, it.id, amount, price, it.price))}
                    className="card__button"
                    type="button"
                  >
                    -
                  </button>
                </div>
                <div className="card__product-amount">{cart[it.id]}</div>
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
            </div>
          )
        })}
    </div>
  )
}

export default Card
