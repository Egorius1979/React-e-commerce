import React from 'react'
import { useDispatch } from 'react-redux'
import { setSortName, setSortPrice } from '../redux/reducers/goods'

const Sort = () => {
  const dispatch = useDispatch()

  return (
    <div className="">
      <button
        onClick={() => dispatch(setSortName())}
        id="sort-price"
        type="button"
        className="bg-gray-800 w-32 flex-shrink-0 hover:bg-gray-900 py-2 px-2 border border-gray-700 rounded-l text-yellow-500 mr-1"
      >
        sort by A-Z
      </button>
      <button
        onClick={() => dispatch(setSortPrice())}
        id="sort-name"
        type="button"
        className="bg-gray-800 w-32 flex-shrink-0 hover:bg-gray-900 py-2 px-2 border border-gray-700 rounded-r text-yellow-500"
      >
        sort by price
      </button>
    </div>
  )
}

Sort.propTypes = {}

export default Sort
