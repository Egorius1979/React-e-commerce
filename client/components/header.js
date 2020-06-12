import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Currency from './currency'
import Sort from './sort'

const Header = () => {
  const amount = useSelector((store) => store.goods.amount)
  const price = useSelector((store) => store.goods.price)
  const multiplier = useSelector((store) => store.goods.multiplier)
  const currencyName = useSelector((store) => store.goods.currencyName)

  return (
    <div className="p-6">
      <ul className="flex items-center">
        <Link to="/">
          <li id="brand-name" className="mr-20 text-blue-500 hover:text-blue-800">
            Main Page!
          </li>
        </Link>
        <li className="mr-20">
          <Currency />
        </li>
        <li className="mr-20">
          <Sort />
        </li>
        <Link to="/basket">
          <div className="flex items-center bg-green-300 rounded-b-lg border border-red-700 p-2 w-20">
            <div className="mr-2">Cart:</div>
            <div className="">{amount}</div>
          </div>
        </Link>
        <li className="ml-10 mr-1">{(price * multiplier).toFixed(2)}</li>
        <li>{currencyName}</li>
      </ul>
    </div>
  )
}

Header.propTypes = {}

export default Header
