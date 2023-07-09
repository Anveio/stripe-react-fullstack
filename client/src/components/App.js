import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Checkout from './Payment/Checkout'
import PageHeader from './Navigation/PageHeader'
import AuthLayout from './Auth/AuthLayout'

import { loginWithJwt } from 'api/login'
import { loginSuccess, loginFailure, LoginAction, loginRequest } from 'actions/login'
import './app.scss'

import Home from './Home'
import SuperClass from './SuperClass'
import MagicCalendars from './MagicCalendars'
import Blog from './Blog'
import MeetTheTeam from './MeetTheTeam'
import ContactUs from './ContactUs'
import GeniusMarketingServices from './GeniusMarketingServices'

const App = ({ currentUser, onBoot }) => {
  useEffect(() => {
    if (currentUser.token && !currentUser.loggedIn) {
      onBoot(currentUser.token)
    }
  })

  return (
    <main id='appContainer'>
      <Route path={paths.home} component={Home}/>
      <Route path= {paths.SuperClass} component={SuperClass} />
      <Route path= {paths.MagicCalendars} component={MagicCalendars} />
      <Route path= {paths.Blog} component={Blog} />
      <Route path= {paths.MeetTheTeam} component={MeetTheTeam} />
      <Route path= {paths.ContactUs} component={ContactUs} />
      <Route path= {paths.GeniusMarketingServices} component={GeniusMarketingServices} />
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
