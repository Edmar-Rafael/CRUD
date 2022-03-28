import store from '../../store'
import ptBr from './ptBr'
import eng from './eng'

function handleLanguage(key) {
  const state = store.getState()

  if(state.changeLanguageState.language === 'pt-Br') {
    return ptBr[key]
  } else {
    return eng[key]
  }
}

export default handleLanguage