import {
  CREATE_ASSIGNMENT,
  DELETE_ASSIGNMENT,
  EDIT_ASSIGNMENT,
  GET_ASSIGNMENT,
  GET_ASSIGNMENTS,
} from '../actions/types'
import _ from 'lodash'

const assignmentsReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ASSIGNMENT:
      return { ...state, [action.payload.id]: action.payload }
    case GET_ASSIGNMENT:
      return { ...state, [action.payload.id]: action.payload }
    case GET_ASSIGNMENTS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case EDIT_ASSIGNMENT:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_ASSIGNMENT:
      return _.omit(state, action.payload)
    default:
      return state
  }
}

export default assignmentsReducer;
