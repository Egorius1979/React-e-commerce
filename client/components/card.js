import React from 'react'
import './card.scss'
import object from '../../server/data.json'
// import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className="flex flex-wrap">
      {object.map((it) => {
        return (
          <div key={it.title} className="card p-2">
            <div>
              <img className="flex card__image" src={`${it.image}`} alt="pic" />
            </div>
            <div className="card__price">{it.price}</div>
          </div>
        )
      })}
    </div>
  )
}

Card.propTypes = {}

export default Card
