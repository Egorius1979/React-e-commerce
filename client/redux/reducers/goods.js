import axios from 'axios'

const SET_CURRENCY = 'SET_CURRENCY'
const SET_EURO = 'SET_EURO'
const SET_USD = 'SET_USD'
const SET_CAD = 'SET_CAD'
const SET_SORT_NAME = 'SET_SORT_NAME'
const SET_SORT_PRICE = 'SET_SORT_PRICE'

const initialState = {
  currency: {},
  baseCurrency: 1,
  currencyName: 'EUR',
  sorting: 'title'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCY:
      return { ...state, currency: action.currency }
    case SET_EURO:
      return { ...state, baseCurrency: action.baseCurrency, currencyName: 'EUR' }
    case SET_USD:
      return { ...state, baseCurrency: action.baseCurrency, currencyName: 'USD' }
    case SET_CAD:
      return { ...state, baseCurrency: action.baseCurrency, currencyName: 'CAD' }
    case SET_SORT_NAME:
      return { ...state, sorting: action.sorting }
    case SET_SORT_PRICE:
      return { ...state, sorting: action.sorting }
    default:
      return state
  }
}

export function setCurrency() {
  return function (dispatch) {
    axios
      .get('https://api.exchangeratesapi.io/latest')
      .then((it) => dispatch({ type: SET_CURRENCY, currency: it.data.rates }))
  }
}

export function setEURO() {
  return { type: SET_EURO, baseCurrency: 1 }
}

export function setUSD(currency) {
  return { type: SET_USD, baseCurrency: currency.USD }
}

export function setCAD(currency) {
  return { type: SET_CAD, baseCurrency: currency.CAD }
}

export function setSortName() {
  return { type: SET_SORT_NAME, sorting: 'title' }
}

export function setSortPrice() {
  return { type: SET_SORT_PRICE, sorting: 'price' }
}
