import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrency, setEURO, setUSD, setCAD } from '../redux/reducers/goods'

const Currency = () => {
  const currency = useSelector((store) => store.goods.currency)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrency())
  })

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

Currency.propTypes = {}

export default Currency
