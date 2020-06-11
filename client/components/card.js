import React from 'react'
// , { useState, useEffect }
import { useDispatch, useSelector } from 'react-redux'
import object from '../../server/data.json'
import { removeAmount, addAmount } from '../redux/reducers/goods'

const Card = () => {
  const currencyName = useSelector((store) => store.goods.currencyName)
  const multiplier = useSelector((store) => store.goods.multiplier)
  const sorting = useSelector((store) => store.goods.sorting)
  const amount = useSelector((store) => store.goods.amount)
  const price = useSelector((store) => store.goods.price)
  const cart = useSelector((store) => store.goods.cart)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-wrap">
      {object
        .sort((a, b) => (sorting === 'title' ? a.title.localeCompare(b.title) : b.price - a.price))
        .map((it) => {
          return (
            <div key={it.id} className="card p-2">
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
                <div className="bg-teal-200">{cart[it.id]}</div>
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

Card.propTypes = {}

export default Card
