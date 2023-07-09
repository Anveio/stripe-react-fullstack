import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import SuperClass from './SuperClass'
import MagicCalendars from './MagicCalendars'
import Blog from './Blog'
import MeetTheTeam from './MeetTheTeam'
import ContactUs from './ContactUs'
import GeniusMarketingServices from './GeniusMarketingServices'
import Checkout from './Payment/Checkout'
import PageHeader from './Navigation/PageHeader'
import AuthLayout from './Auth/AuthLayout'

import { paths } from '../constants/routes'
import { loginWithJwt } from 'api/login'
import { loginSuccess, loginFailure, LoginAction, loginRequest } from 'actions/login'
import './app.scss'

const App = ({ currentUser, onBoot }) => {
  useEffect(() => {
    if (currentUser.token && !currentUser.loggedIn) {
      onBoot(currentUser.token)
    }
  })

  return (
    <div id='appContainer'>
      <Route path={paths.home} component={Home}/>
      <Route path= {paths.superClass} component={SuperClass} />
      <Route path= {paths.magicCalendars} component={MagicCalendars} />
      <Route path= {paths.blog} component={Blog} />
      <Route path= {paths.meetTheTeam} component={MeetTheTeam} />
      <Route path= {paths.contactUs} component={ContactUs} />
      <Route path= {paths.geniusMarketingServices} component={GeniusMarketingServices} />
    </div>
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
