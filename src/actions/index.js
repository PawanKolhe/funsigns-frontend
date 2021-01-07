import {
  LOGIN,
  LOGOUT,
  CREATE_ASSIGNMENT,
  DELETE_ASSIGNMENT,
  EDIT_ASSIGNMENT,
  GET_ASSIGNMENT,
  GET_ASSIGNMENTS,
  GET_COURSES,
  CREATE_COURSE,
  EDIT_COURSE,
  GET_STUDENTS,
  GET_LOGGED_IN_USER,
} from './types'

import axios from 'axios'

export const login = (jwtToken, userType) => {
  return {
    type: LOGIN,
    payload: { jwtToken, userType },
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
  }
}

// Assignments ---------------------------------------------------------------

export const getAssignments = () => async (dispatch, getState) => {
  const { jwtToken } = getState().auth
  try {
    const response = await axios.get(
      'https://funsigns.herokuapp.com/assignments',
      {
        headers: { Authorization: 'Bearer ' + jwtToken },
      }
    )
    dispatch({
      type: GET_ASSIGNMENTS,
      payload: response.data,
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

export const createAssignment = (formValues) => async (dispatch, getState) => {
  const { jwtToken } = getState().auth
  const response = await axios.post(
    'https://funsigns.herokuapp.com/assignments',
    formValues,
    { headers: { Authorization: 'Bearer ' + jwtToken } }
  )
  dispatch({
    type: CREATE_ASSIGNMENT,
    payload: response.data,
  })
}

export const getAssignment = (id) => async (dispatch, getState) => {
  const { jwtToken } = getState().auth
  const response = await axios.get(
    `https://funsigns.herokuapp.com/assignments/${id}`,
    {
      headers: { Authorization: 'Bearer ' + jwtToken },
    }
  )
  dispatch({
    type: GET_ASSIGNMENT,
    payload: response.data,
  })
}

export const editAssignment = (id, formValues) => async (
  dispatch,
  getState
) => {
  const { jwtToken } = getState().auth
  const response = await axios.patch(
    `https://funsigns.herokuapp.com/assignments/${id}`,
    formValues,
    {
      headers: { Authorization: 'Bearer ' + jwtToken },
    }
  )
  dispatch({
    type: EDIT_ASSIGNMENT,
    payload: response.data,
  })
}

export const deleteAssignment = (id) => async (dispatch, getState) => {
  const { jwtToken } = getState().auth
  await axios.delete(`https://funsigns.herokuapp.com/assignments/${id}`, null, {
    headers: { Authorization: 'Bearer ' + jwtToken },
  })
  dispatch({
    type: DELETE_ASSIGNMENT,
    payload: id,
  })
}

// Courses ---------------------------------------------------------------

export const getCourses = () => async (dispatch, getState) => {
  const { jwtToken } = getState().auth
  try {
    const response = await axios.get('https://funsigns.herokuapp.com/courses', {
      headers: { Authorization: 'Bearer ' + jwtToken },
    })
    dispatch({
      type: GET_COURSES,
      payload: response.data,
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

export const createCourse = (formValues) => async (dispatch, getState) => {
  const { jwtToken } = getState().auth
  try {
    const response = await axios.post(
      'https://funsigns.herokuapp.com/courses',
      formValues,
      {
        headers: { Authorization: 'Bearer ' + jwtToken },
      }
    )
    dispatch({
      type: CREATE_COURSE,
      payload: response.data,
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

export const editCourse = (id, formValues) => async (dispatch, getState) => {
  const { jwtToken } = getState().auth
  const response = await axios.patch(
    `https://funsigns.herokuapp.com/assignments/${id}`,
    formValues,
    {
      headers: { Authorization: 'Bearer ' + jwtToken },
    }
  )
  dispatch({
    type: EDIT_COURSE,
    payload: response.data,
  })
}

// Users ---------------------------------------------------------------

export const getLoggedInUser = () => async (dispatch, getState) => {
  const { jwtToken } = getState().auth
  try {
    const response = await axios.get(
      'https://funsigns.herokuapp.com/users/me',
      {
        headers: { Authorization: 'Bearer ' + jwtToken },
      }
    )
    dispatch({
      type: GET_LOGGED_IN_USER,
      payload: response.data,
    })
  } catch (err) {
    console.log(err)
    return null
  }
}

// Students ---------------------------------------------------------------

export const getStudents = () => async (dispatch, getState) => {
  const { jwtToken } = getState().auth
  try {
    const response = await axios.get(
      'https://funsigns.herokuapp.com/students',
      {
        headers: { Authorization: 'Bearer ' + jwtToken },
      }
    )
    dispatch({
      type: GET_STUDENTS,
      payload: response.data,
    })
  } catch (err) {
    console.log(err)
    return null
  }
}
