import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const StatePage = () => {
    const location = useLocation()

    console.log('Location State:', location.state.online)
    console.log('Query Params:', location.search)

    const stateOnline = location.state.online
        ? 'Online'
        : 'Offline'

    const paramOnline = location.search.online
        ? 'Online'
        : 'Offline'

    return (
        <div>
            <h1> State: {stateOnline}</h1>
            <h3> State: {paramOnline}</h3>
        </div>
    )
}

export default StatePage
