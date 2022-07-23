import { ActionProps, DispatchProps } from "../../@types/types"

const Types = {
  CHANGE_REQUEST: 'changeLanguage/REQUEST',
}

const Creators = {
  changeRequest: (lang: string) => ({
    type: Types.CHANGE_REQUEST,
    data: {
      language: lang
    }
  })
}

export function changeLanguage(lang: string) {
  return (dispatch: DispatchProps) => {
    dispatch(Creators.changeRequest(lang))
  }
}

const initialState = {
  language: 'pt-Br'
}

export default function changeLanguageState(state = initialState, action: ActionProps) {
  const {type, data} = action

  switch(type) {
    case Types.CHANGE_REQUEST: {
      return {...state, ...data}
    }

    default: {
      return state
    }
  }
}