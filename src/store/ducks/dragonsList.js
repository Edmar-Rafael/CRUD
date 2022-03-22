import { getDragons } from '../../services/dragons'

const Types = {
  REQUEST: 'dragonsList/REQUEST',
  REQUEST_SUCCESS: 'dragonsList/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'dragonsList/REQUEST_FAILURE',
}

const Creators = {
  request: () => ({
    type: Types.REQUEST,
    data: {
      loading: true,
      error: false,
    }
  }),
  requestSuccess: (response) => ({
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

export function requestDragons() {
  return async (dispatch) => {
    dispatch(Creators.request())
    try {
      const response = await getDragons()
      dispatch(Creators.requestSuccess(response.data))
    } catch(error) {
      dispatch(Creators.requestFailure())
    }
  }
}

const initialState = {
  loading: true,
  error: false,
  data: []
}

export default function dragonsState(state = initialState, action) {
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