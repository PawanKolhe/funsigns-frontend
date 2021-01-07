import { LOGIN, LOGOUT, GET_LOGGED_IN_USER } from '../actions/types'

const INITIAL_STATE = {
  isLoggedIn: sessionStorage.getItem('jwtToken') ? true : false,
  jwtToken: sessionStorage.getItem('jwtToken')
    ? sessionStorage.getItem('jwtToken')
    : null,
  userType: sessionStorage.getItem('userType')
    ? sessionStorage.getItem('userType')
    : null,
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      sessionStorage.setItem('jwtToken', action.payload.jwtToken)
      sessionStorage.setItem('userType', action.payload.userType)
      return {
        ...state,
        isLoggedIn: true,
        jwtToken: action.payload.jwtToken,
        userType: action.payload.userType,
      }
    case LOGOUT:
      sessionStorage.removeItem('jwtToken')
      sessionStorage.removeItem('userType')
      return { ...state, isLoggedIn: false, jwtToken: null, userType: null }
    case GET_LOGGED_IN_USER:
      sessionStorage.setItem('userType', action.payload.type)
      return {
        ...state,
        isLoggedIn: true,
        userType: action.payload.type,
      }
    default:
      return state
  }
}

export default authReducer;
