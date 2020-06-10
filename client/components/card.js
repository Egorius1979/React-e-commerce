import React from 'react'
import object from '../../server/data.json'
// import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className="flex flex-wrap">
      {object.map((it) => {
        return (
          <div key={it.title} className="card p-2">
            <div className="card__title">{it.title}</div>
            <div>
              <img className="flex card__image" src={`${it.image}`} alt="pic" />
            </div>
            <div className="card__price">{it.price}</div>

            <div className="flex justify-between">
              <div>
                <button className="card__button" type="button">
                  +
                </button>
              </div>
              <div>
                <button className="card__button" type="button">
                  -
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
