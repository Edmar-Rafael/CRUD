import { createDragon } from "../../services/dragons"

const Types = {
  REQUEST: 'create/REQUEST',
  REQUEST_SUCCESS: 'create/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'create/REQUEST_FAILURE'
}

const Creators = {
  request: () => ({
    type: Types.REQUEST,
    data: {
      loading: true,
      error: false
    }
  }),
  requestSuccess: (response) => ({
    type: Types.REQUEST_SUCCESS,
    data: {
      loading: false,
      data: response
    }
  }),
  requestFailure: () => ({
    type: Types.REQUEST_FAILURE,
    data: {
      loading: false,
      error: true
    }
  })
}

export function requestCreateDragon(data) {
  return async (dispatch) => {
    dispatch(Creators.request())
    try {
      const response = await createDragon(data)
      dispatch(Creators.requestSuccess(response.data))
    } catch(error) {
      dispatch(Creators.requestFailure())
    }
  }
}

const initialState = {
  loading: false,
  error: false,
  data: {}
}

export default function createDragonState(state = initialState, action) {
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