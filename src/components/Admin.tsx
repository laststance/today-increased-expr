import React from 'react'
import { RouteComponentProps } from '@reach/router'

const Admin: React.FC<RouteComponentProps> = ({ children }) => {
  // @TODO if login
  return <>{children}</>
  // if !login
  // return <Login />
}

export default Admin