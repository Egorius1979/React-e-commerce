import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLogs } from '../redux/reducers/logs'

const Log = () => {
  const logs = useSelector((store) => store.logs.logsArray)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLogs())
  }, [])

  return (
    <div className="flex flex-col p-3 divide-y-4">
      {logs.map((it) => (
        <div key={it.date}>
          <div className="mr-2 text-red-900">{it.date}:</div>
          <div>{JSON.stringify(it.action)}</div>
        </div>
      ))}
    </div>
  )
}

Log.propTypes = {}

export default Log
