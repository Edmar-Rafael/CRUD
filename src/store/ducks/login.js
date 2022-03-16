
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