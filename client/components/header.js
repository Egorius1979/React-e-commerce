import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Currency from './currency'
import Sort from './sort'
import exploited from '../assets/static/images/exploited-1.png'
import exploited1 from '../assets/static/images/exploited-2.png'
import cartIcon from '../assets/static/images/cart-red-48.png'

const Header = () => {
  const amount = useSelector((store) => store.goods.amount)
  const price = useSelector((store) => store.goods.price)
  const multiplier = useSelector((store) => store.goods.multiplier)
  const currencyName = useSelector((store) => store.goods.currencyName)

  return (
    <div className="bg-gray-900 text-white text-xl py-4">
      <div className="hidden md:flex items-center justify-between">
        <div>
          <img src={exploited} alt="Vasya, punk's not dead!!!" />
        </div>
        <div className="flex-col">
          <div id="brand-name" className="mr-20 text-blue-400 hover:text-blue-700 mb-12 ">
            <Link to="/">Main Page!</Link>
          </div>
          <div id="logs" className="ml-6 inline-block text-red-600 hover:text-red-800">
            <Link to="/logs">Logs!</Link>
          </div>
        </div>
        <div className="mr-20 text-sm mb-20">
          <Sort />
        </div>
        <div className="mr-20 text-sm mb-20">
          <Currency />
        </div>
        <div className="flex-col mt-4">
          <div className="mb-6 w-40 text-sm">
            {`Total Price: ${(price * multiplier).toFixed(2)} ${currencyName}`}
          </div>
          <div className="flex pt-4 ml-10 text-sm">
            <Link to="/basket">
              <div className="text-center goods">{amount}</div>
              <img className="ml-2 " src={cartIcon} alt="cart" />
            </Link>
          </div>
        </div>
        <div>
          <img src={exploited1} alt="Vasya, punk's not dead!!!" />
        </div>
      </div>
    </div>
  )
}

export default Header
