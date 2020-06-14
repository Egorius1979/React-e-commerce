import axios from 'axios'

const SET_LOG = 'SET_LOG'

const initialState = {
  logsArray: []
}

export default (state = initialState, action) => {
  if (action.type.includes('@@')) return state
  if (action.type === SET_LOG) return { ...state, logsArray: action.logsArray }
  return axios.post('/api/v1/logs', action)
}

export function getLogs() {
  return function (dispatch) {
    fetch('/api/v1/logs')
      .then((response) => response.json())
      .then((it) => dispatch({ type: SET_LOG, logsArray: [...it] }))
  }
}
