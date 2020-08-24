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
    <div className="flex flex-col p-2 divide-y-2">
      {logs.map((it) => {
        return (
          <div className="pt-2" key={it.date}>
            <div className="text-red-900 ">{Date(it.date)}:</div>
            <div>{JSON.stringify(it.action)}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Log
