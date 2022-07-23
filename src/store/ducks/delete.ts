import { ActionProps, DispatchProps, ResponseProps } from "../../@types/types"
import { deleteDragon } from "../../services/dragons"

const Types = {
  REQUEST: 'delete/REQUEST',
  REQUEST_SUCCESS: 'delete/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'delete/REQUEST_FAILURE'
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

export function requestDeleteDragon(id: number) {
  return async (dispatch: DispatchProps) => {
    dispatch(Creators.request())
    try {
      const response = await deleteDragon(id)
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

export default function deleteDragonState(state = initialState, action: ActionProps) {
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