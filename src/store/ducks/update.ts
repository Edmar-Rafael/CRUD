import { ActionProps, DataProps, DispatchProps, ResponseProps } from "../../@types/types"
import { updateDragon } from "../../services/dragons"

const Types = {
  REQUEST: 'update/REQUEST',
  REQUEST_SUCCESS: 'update/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'update/REQUEST_FAILURE'
}

const Creators = {
  request: () => ({
    type: Types.REQUEST,
    data: {
      loading: true,
      error: false
    }
  }),
  requestSuccess: (response: ResponseProps) => ({
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

export function requestUpdateDragon(id: number, data: DataProps) {
  return async (dispatch: DispatchProps) => {
    dispatch(Creators.request())
    try {
      const response = await updateDragon(id, data)
      dispatch(Creators.requestSuccess(response.data))
    } catch(error) {
      dispatch(Creators.requestFailure())
    }
  }
}

const initialState = {
  loading: true,
  error: false,
  data: {}
}

export default function updateDragonState(state = initialState, action: ActionProps) {
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