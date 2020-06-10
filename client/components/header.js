import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCurrency,
  setEURO,
  setUSD,
  setCAD,
  setSortName,
  setSortPrice
} from '../redux/reducers/goods'

// import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=" p-6">
      <ul className="flex items-center">
        <li className="mr-20">
          <a id="brand-name" className="text-blue-500 hover:text-blue-800" href="/">
            Main Page!
          </a>
        </li>
        <li className="mr-20">
          <a href="#">
            <Currency />
          </a>
        </li>
        <li className="mr-20">
          <a href="#">
            <Sort />
          </a>
        </li>
        <li className="mr-6">
          <a className="text-gray-400 cursor-not-allowed" href="#">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  )
}

const Currency = () => {
  const currency = useSelector((store) => store.goods.currency)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrency())
  }, [])

  return (
    <div>
      <ul className="flex flex-row grid grid-cols-3 divide-x divide-gray-600 border-black border-2 rounded-full p-2">
        <li>
          <button
            onClick={() => dispatch(setEURO())}
            className="text-green-700 w-12 hover:text-red-800 text-center"
            type="button"
          >
            EUR
          </button>
        </li>
        <li>
          <button
            onClick={() => dispatch(setUSD(currency))}
            className="text-green-700 w-12 hover:text-red-800 text-center"
            type="button"
          >
            USD
          </button>
        </li>
        <li>
          <button
            onClick={() => dispatch(setCAD(currency))}
            className="text-green-700 w-12 hover:text-red-800 text-center"
            type="button"
          >
            CAD
          </button>
        </li>
      </ul>
    </div>
  )
}

const Sort = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <button
        onClick={() => dispatch(setSortName())}
        id="sort-price"
        type="button"
        className=" mr-1 text-yellow-900 hover:text-red-800 text-center rounded-l-lg border-gray-600 border p-2 w-40"
      >
        sorting A-Z
      </button>
      <button
        onClick={() => dispatch(setSortPrice())}
        id="sort-name"
        type="button"
        className="text-yellow-900 hover:text-red-800 text-center rounded-r-lg border-gray-600 border p-2 w-40"
      >
        sorting by price
      </button>
    </div>
  )
}

Header.propTypes = {}

export default Header
