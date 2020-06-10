import axios from 'axios'

const SET_CURRENCY = 'SET_CURRENCY'

const initialState = {
  currency: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCY:
      return { ...state, currency: action.currency }
    default:
      return state
  }
}

export function setCurrency() {
  return function (dispatch) {
    axios
      .get('https://api.exchangeratesapi.io/latest')
      .then((it) => dispatch({ type: SET_CURRENCY, currency: it.data }))
  }
}
