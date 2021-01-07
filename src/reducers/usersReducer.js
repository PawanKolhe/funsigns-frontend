import { GET_LOGGED_IN_USER } from '../actions/types'

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LOGGED_IN_USER:
      return action.payload
    default:
      return state
  }
}

export default usersReducer;
