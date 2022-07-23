import { ActionProps, DispatchProps, ResponseProps } from '../../@types/types'
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

export function requestDragons() {
  return async (dispatch: DispatchProps) => {
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

export default function dragonsState(state = initialState, action: ActionProps) {
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