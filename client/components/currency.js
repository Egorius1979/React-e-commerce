import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setCurrency, setEURO, setUSD, setCAD } from '../redux/reducers/goods'

const Currency = () => {
  const currency = useSelector((store) => store.goods.currency)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!Object.keys(currency).length) {
      axios.get('/api/v1/currencies').then((it) => dispatch(setCurrency(it.data.rates)))
    }
  }, [])

  return (
    <div>
      <ul className="grid grid-cols-3 divide-x divide-gray-600 border-2 rounded-full p-2">
        <li>
          <button
            onClick={() => dispatch(setEURO())}
            className="text-green-700 w-12 hover:text-red-800 text-center text-xs lg:text-base"
            type="button"
          >
            EUR
          </button>
        </li>
        <li>
          <button
            onClick={() => dispatch(setUSD(currency))}
            className="text-green-700 w-12 hover:text-red-800 text-center text-xs lg:text-base"
            type="button"
          >
            USD
          </button>
        </li>
        <li>
          <button
            onClick={() => dispatch(setCAD(currency))}
            className="text-green-700 w-12 hover:text-red-800 text-center text-xs lg:text-base"
            type="button"
          >
            CAD
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Currency
