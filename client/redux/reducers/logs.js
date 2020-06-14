import axios from 'axios'

const SET_LOG = 'SET_LOG'

const initialState = {
  logsArray: []
}

export default (state = initialState, action) => {
  if (action.type.includes('@@')) return state
  if (action.type === SET_LOG) return { ...state, logsArray: action.logsArray }
  axios.post('/api/v1/logs', action)
  return { ...state, logsArray: [...state.logsArray, action] }
}

export function getLogs() {
  return function (dispatch) {
    axios.get('/api/v1/logs').then((it) => dispatch({ type: SET_LOG, logsArray: it.data }))
  }
}
