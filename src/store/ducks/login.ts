import { ActionProps, DataProps, DispatchProps, ResponseProps } from '../../@types/types'
import { EMAIL, PASSWORD, SESSION_KEY } from '../../config/index'

const Types = {
  REQUEST: 'login/REQUEST',
  REQUEST_SUCCESS: 'login/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'login/REQUEST_FAILURE'
}

const Creators = {
  request: () => ({
    type: Types.REQUEST,
    data: {
      loading: true,
      error: false,
    }
  }),
  requestSuccess: (response: ResponseProps) => ({
    type: Types.REQUEST_SUCCESS,
    data: {
      loading: false,
      data: response,
    }
  }),
  requestFailure: () => ({
    type: Types.REQUEST_FAILURE,
    data: {
      loading: false,
      error: true,
    }
  })
}

export function checkLog() {
  return async (dispatch: DispatchProps) => {
    dispatch(Creators.request())
    const isLogged = await localStorage.getItem(`${SESSION_KEY}`)
    if(isLogged) {
      dispatch(Creators.requestSuccess(true))
    } else {
      dispatch(Creators.requestSuccess(false))
    }
  }
}

export function requestLogIn(data: DataProps) {
  return async (dispatch: DispatchProps) => {
    dispatch(Creators.request())
    const { name, password } = data
    try {
      if(name === EMAIL && password === PASSWORD) {
        await localStorage.setItem(`${SESSION_KEY}`, 'true')
        dispatch(Creators.requestSuccess(true))
      }
    } catch(error) {
      dispatch(Creators.requestFailure())
    }
  }
}

export function logOut() {
  return async (dispatch: DispatchProps) => {
    dispatch(Creators.request())
    await localStorage.removeItem(`${SESSION_KEY}`)
    dispatch(Creators.requestSuccess(false))
  }
}

const initialState = {
  loading: false,
  error: false,
  data: false
}

export default function loginState(state = initialState, action: ActionProps) {
  const { type, data } = action

  switch(type) {
    case Types.REQUEST_SUCCESS: {
      return {...state, ...data}
    }
    case Types.REQUEST_FAILURE: {
      return {...state, ...data}
    }
    case Types.REQUEST: {
      return {...state, ...data}
    }

    default: {
      return state
    }
  }
}