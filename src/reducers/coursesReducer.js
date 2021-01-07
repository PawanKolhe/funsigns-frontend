import {
  CREATE_COURSE,
  DELETE_COURSE,
  EDIT_COURSE,
  GET_COURSE,
  GET_COURSES,
} from '../actions/types'
import _ from 'lodash'

const coursesReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_COURSE:
      return { ...state, [action.payload.id]: action.payload }
    case GET_COURSE:
      return { ...state, [action.payload.id]: action.payload }
    case GET_COURSES:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case EDIT_COURSE:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_COURSE:
      return _.omit(state, action.payload)
    default:
      return state
  }
}

export default coursesReducer;
