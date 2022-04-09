import store from '../../store'
import ptBr from './ptBr'
import eng from './eng'
import fin from './fin'

function handleLanguage(key) {
  const state = store.getState()

  if(state.changeLanguageState.language === 'pt-Br') {
    return ptBr[key]
  } else if(state.changeLanguageState.language === 'Eng'){
    return eng[key]
  } else {
    return fin[key]
  }
}

export default handleLanguage