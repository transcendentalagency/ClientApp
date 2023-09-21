// src/components/ProtectedRoute.js

import React from "react"
import { GoogleProvider } from "@react-oauth/google"
import { Redirect, Route } from "react-router-dom"

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        GoogleProvider.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

export default ProtectedRoute
