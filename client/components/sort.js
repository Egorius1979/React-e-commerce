import React from 'react'
import { useDispatch } from 'react-redux'
import { setSortName, setSortPrice } from '../redux/reducers/goods'

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

Sort.propTypes = {}

export default Sort
