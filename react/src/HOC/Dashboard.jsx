import React from 'react'

import WithAuth from './Hoc'

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

export default WithAuth(Dashboard)