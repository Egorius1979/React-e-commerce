import axios from 'axios'

const SET_CURRENCY = 'SET_CURRENCY'
const SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY'
const SET_SORT = 'SET_SORT'
const SET_AMOUNT = 'SET_AMOUNT'

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
    case SET_CURRENT_CURRENCY:
      return { ...state, multiplier: action.multiplier, currencyName: action.currencyName }
    case SET_SORT:
      return { ...state, sorting: action.sorting }
    case SET_AMOUNT:
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

export function setCurrency(currency) {
  if (!currency.length) {
    return function (dispatch) {
      axios
        .get('/api/v1/currencies')
        .then((it) => dispatch({ type: SET_CURRENCY, currency: it.data.rates }))
    }
  }
  return { type: SET_CURRENCY, currency }
}

export function setEURO() {
  return { type: SET_CURRENT_CURRENCY, multiplier: 1, currencyName: 'EUR' }
}

export function setUSD(currency) {
  return { type: SET_CURRENT_CURRENCY, multiplier: currency.USD, currencyName: 'USD' }
}

export function setCAD(currency) {
  return { type: SET_CURRENT_CURRENCY, multiplier: currency.CAD, currencyName: 'CAD' }
}

export function setSortName() {
  return { type: SET_SORT, sorting: 'title' }
}

export function setSortPrice() {
  return { type: SET_SORT, sorting: 'price' }
}

export function addAmount(cart, id, amount, currentPrice, prodPrice) {
  return {
    type: SET_AMOUNT,
    amount: amount + 1,
    price: currentPrice + prodPrice,
    cart: { ...cart, [id]: !cart[id] ? 1 : cart[id] + 1 }
  }
}

export function removeAmount(cart, id, amount, currentPrice, prodPrice) {
  return {
    type: SET_AMOUNT,
    amount: !cart[id] ? amount : amount - 1,
    price: !cart[id] ? currentPrice : currentPrice - prodPrice,
    cart:
      cart[id] === 1 || !cart[id] ? { ...cart, [id]: undefined } : { ...cart, [id]: cart[id] - 1 }
  }
}
