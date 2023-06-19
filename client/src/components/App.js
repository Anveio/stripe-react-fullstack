import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

import Checkout from './Payment/Checkout'
import PageHeader from './Navigation/PageHeader'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Path } from 'constants/routes'
import { loginWithJwt } from 'api/login'
import AuthLayout from './Auth/AuthLayout'
import {
  loginSuccess,
  loginFailure,
  LoginAction,
  loginRequest
} from 'actions/login'
import Home from './Home/index'
import './app.scss'
import Introduction from './Introduction'

const App = ({ currentUser, onBoot }) => {
  useEffect(() => {
    if (currentUser.token && !currentUser.loggedIn) {
      onBoot(currentUser.token)
    }
  })

  return (
    <main id='appContainer'>
        <PageHeader />
        <Introduction />
        <Route exact path={Path.HOME} component={Home} />
        <Route path={Path.AUTH} component={AuthLayout} />
        <Route path={Path.CHECKOUT} component={Checkout} />
    </main>
  )
}

const mapState = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatch = (dispatch) => ({
  onBoot: async (jwt) => {
    dispatch(loginRequest)
    try {
      const response = await loginWithJwt(jwt)
      dispatch(loginSuccess(response.email, jwt))
    } catch (e) {
      dispatch(
        loginFailure({
          email: 'Failed to log you in automatically. Please log in again.'
        })
      )
    }
  }
})

export default connect(
  mapState,
  mapDispatch
)(App)
