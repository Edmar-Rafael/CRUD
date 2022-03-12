import { createDragon } from "../../services/dragons"

const Types = {
  REQUEST: 'creating/REQUEST',
  REQUEST_SUCCESS: 'creating/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'creating/REQUEST_FAILURE'
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

export function requestCreating() {
  return async (dispatch) => {
    dispatch(Creators.request())
    try {
      const response = await createDragon()
      dispatch(Creators.requestSuccess(response.data))
    } catch(error) {
      dispatch(Creators.requestFailure)
    }
  }
}

const initialState = {
  loading: true,
  error: false,
  data: {}
}

export default function creatingState(state = initialState, action) {
  const { type, data } = action

  switch(type) {
    case Types.REQUEST_SUCCESS: {
      return {...state, ...data}
    }
    case Types.REQUEST_FAILURE: {
      return {...state, ...data}
    }

    default: {
      return state
    }
  }
} 