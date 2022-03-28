const Types = {
  CHANGE_REQUEST: 'changeLanguage/REQUEST',
}

const Creators = {
  changeRequest: (lang) => ({
    type: Types.CHANGE_REQUEST,
    data: {
      language: lang
    }
  })
}

export function changeLanguage(lang) {
  return (dispatch) => {
    dispatch(Creators.changeRequest(lang))
  }
}

const initialState = {
  language: 'pt-Br'
}

export default function changeLanguageState(state = initialState, action) {
  const {type, data} = action

  console.log(action)

  switch(type) {
    case Types.CHANGE_REQUEST: {
      return {...state, ...data}
    }

    default: {
      return state
    }
  }
}