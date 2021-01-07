import {
  DELETE_STUDENT,
  EDIT_STUDENT,
  GET_STUDENT,
  GET_STUDENTS,
} from '../actions/types'
import _ from 'lodash'

const studentsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_STUDENT:
      return { ...state, [action.payload.id]: action.payload }
    case GET_STUDENTS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case EDIT_STUDENT:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_STUDENT:
      return _.omit(state, action.payload)
    default:
      return state
  }
}

export default studentsReducer;
