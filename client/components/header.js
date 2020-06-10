import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrency } from '../redux/reducers/goods'

// import { Link } from 'react-router-dom'

const Header = () => {
  // const { userName, userRepo } = useParams()

  return (
    <div>
      <ul className="flex">
        <li className="mr-6">
          <a id="brand-name" className="text-blue-500 hover:text-blue-800" href="/">
            Main Page!
          </a>
        </li>
        <li className="mr-6">
          <a href="#">
            <Currency />
          </a>
        </li>
        <li className="mr-6">
          <a className="text-blue-500 hover:text-blue-800" href="#">
            Link
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
  // const currency = useSelector((store) => store.goods.currency)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrency())
  }, [])

  return (
    <div className="flex">
      <ul>
        <li>
          <button className="mr-2 text-green-700 hover:text-red-800" type="button">
            EUR
          </button>
        </li>
        <li>
          <button className="mr-2 text-green-700 hover:text-red-800" type="button">
            USD
          </button>
        </li>
        <li>
          <button className="mr-2 text-green-700 hover:text-red-800" type="button">
            CAD
          </button>
        </li>
      </ul>
    </div>
  )
}

Header.propTypes = {}

export default Header
