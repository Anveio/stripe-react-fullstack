import { configureApiRoot } from 'utils/config'

export const paths = {
  home: '/',
  superClass: '/super-class',
  magicCalendars: '/magic-calendars',
  blog: '/blog',
  meetTheTeam: '/team',
  contactUs: '/contact',
  geniusMarketingServices: '/services',
}

export enum ApiEndpoint {
  LOGIN_WITH_PASSWORD = '/auth/password',
  LOGIN_WITH_JWT = '/auth/jwt',
  SIGNUP = '/signup',
  PAYMENT = '/stripe'
}

export const ROOT_API_URL = configureApiRoot();
