import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeLanguage } from '../../store/ducks/changeLanguage'
import { Button } from '../../components'
import { BorderToggle, LanguageToggleContainer } from "./styles"
import Separator from "../Separator"

function LanguageToggle() {
  const { language } = useSelector(({changeLanguageState}) => changeLanguageState)
  const dispatch = useDispatch()

  function toggleLanguage(lang) {
    dispatch(changeLanguage(lang))
  }
  

  return (
    <LanguageToggleContainer>
      <BorderToggle lang={language === 'pt-Br'}>
        <Button 
          onClick={() => toggleLanguage('pt-Br')} 
          lang={language === 'pt-Br'}
          text={'Português'}
          lang_select
        />
      </BorderToggle>

      <Separator x={50} />

      <BorderToggle lang={language === 'eng'}>
        <Button 
          onClick={() => toggleLanguage('eng')} 
          lang={language === 'eng'}
          text={'English'}
          lang_select
        />
      </BorderToggle>
    </LanguageToggleContainer>
  )
}

export default LanguageToggle