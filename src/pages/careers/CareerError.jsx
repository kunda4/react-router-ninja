import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function CareerError() {
    const error = useRouteError()
  return (
    <div className="careers-errors">
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to = "/">Back to the Homepage</Link>
    </div>
  )
}
