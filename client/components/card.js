import React from 'react'
// , { useState, useEffect }
import { useSelector } from 'react-redux'
import object from '../../server/data.json'

// import { Link } from 'react-router-dom'

const Card = () => {
  const multiplier = useSelector((store) => store.goods.baseCurrency)
  const currencyName = useSelector((store) => store.goods.currencyName)
  const sorting = useSelector((store) => store.goods.sorting)
  // const [sort, setSort] = useState('')

  // useEffect(() => setSort(sorting), [sorting])

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
                  <button className="card__button" type="button">
                    -
                  </button>
                </div>
                <div>
                  <button className="card__button" type="button">
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
