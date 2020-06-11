import axios from 'axios'

const SET_CURRENCY = 'SET_CURRENCY'
const SET_EURO = 'SET_EURO'
const SET_USD = 'SET_USD'
const SET_CAD = 'SET_CAD'
const SET_SORT_NAME = 'SET_SORT_NAME'
const SET_SORT_PRICE = 'SET_SORT_PRICE'
const REMOVE_AMOUNT = 'REMOVE_AMOUNT'
const ADD_AMOUNT = 'ADD_AMOUNT'

const initialState = {
  currency: {},
  currencyName: 'EUR',
  multiplier: 1,
  sorting: 'title',
  amount: 0,
  price: 0,
  cart: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCY:
      return { ...state, currency: action.currency }
    case SET_EURO:
      return { ...state, multiplier: action.multiplier, currencyName: 'EUR' }
    case SET_USD:
      return { ...state, multiplier: action.multiplier, currencyName: 'USD' }
    case SET_CAD:
      return { ...state, multiplier: action.multiplier, currencyName: 'CAD' }
    case SET_SORT_NAME:
      return { ...state, sorting: action.sorting }
    case SET_SORT_PRICE:
      return { ...state, sorting: action.sorting }
    case ADD_AMOUNT:
      return {
        ...state,
        amount: action.amount,
        price: action.price,
        cart: action.cart
      }
    case REMOVE_AMOUNT:
      return {
        ...state,
        amount: action.amount,
        price: action.price,
        cart: action.cart
      }

    default:
      return state
  }
}

export function setCurrency() {
  return function (dispatch) {
    axios
      .get('/api/currencies')
      .then((it) => dispatch({ type: SET_CURRENCY, currency: it.data.rates }))
  }
}

export function setEURO() {
  return { type: SET_EURO, multiplier: 1 }
}

export function setUSD(currency) {
  return { type: SET_USD, multiplier: currency.USD }
}

export function setCAD(currency) {
  return { type: SET_CAD, multiplier: currency.CAD }
}

export function setSortName() {
  return { type: SET_SORT_NAME, sorting: 'title' }
}

export function setSortPrice() {
  return { type: SET_SORT_PRICE, sorting: 'price' }
}

export function addAmount(cart, id, amount, currentPrice, prodPrice) {
  return {
    type: ADD_AMOUNT,
    amount: amount + 1,
    price: currentPrice + prodPrice,
    cart: { ...cart, [id]: !cart[id] ? 1 : cart[id] + 1 }
  }
}

export function removeAmount(cart, id, amount, currentPrice, prodPrice) {
  return {
    type: ADD_AMOUNT,
    amount: !cart[id] ? amount : amount - 1,
    price: !cart[id] ? currentPrice : currentPrice - prodPrice,
    cart:
      cart[id] === 1 || !cart[id] ? { ...cart, [id]: undefined } : { ...cart, [id]: cart[id] - 1 }
  }
}
