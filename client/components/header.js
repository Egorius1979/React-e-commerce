import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Currency from './currency'
import Sort from './sort'
import exploited from '../assets/static/images/exploited-1.png'
import exploited1 from '../assets/static/images/exploited-2.png'

const Header = () => {
  const amount = useSelector((store) => store.goods.amount)
  const price = useSelector((store) => store.goods.price)
  const multiplier = useSelector((store) => store.goods.multiplier)
  const currencyName = useSelector((store) => store.goods.currencyName)

  return (
    <div className="bg-gray-900 text-white text-xl pb-4 pt-4 ">
      <ul className="hidden md:flex items-center justify-between">
        <div>
          <img src={exploited} alt="Vasya, punk's not dead!!!" />
        </div>
        <div className="flex-col">
          <Link to="/">
            <li id="brand-name" className="mr-20 text-blue-400 hover:text-blue-700 pb-12">
              Main Page!
            </li>
          </Link>
          <Link to="/logs">
            <li id="logs" className="ml-6 text-red-600 hover:text-red-800">
              Logs!
            </li>
          </Link>
        </div>
        <li className="mr-20 text-sm pb-20">
          <Sort />
        </li>
        <li className="mr-20 text-sm pb-20">
          <Currency />
        </li>
        <div className="flex-col">
          <li className="mr-4 pb-12 w-40 text-sm">
            {`Total Price: ${(price * multiplier).toFixed(2)} ${currencyName}`}
          </li>
          <div className="ml-5 flex items-center">
            <div className="mr-3">Cart:</div>
            <Link to="/basket">
              <div className="bg-green-700 text-center rounded-b-lg border border-red-900 p-1 w-10 text-black text-sm">
                {amount}
              </div>
            </Link>
          </div>
        </div>
        <div>
          <img src={exploited1} alt="Vasya, punk's not dead!!!" />
        </div>
      </ul>
    </div>
  )
}

Header.propTypes = {}

export default Header
