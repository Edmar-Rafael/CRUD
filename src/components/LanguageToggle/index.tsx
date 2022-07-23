import React, { useEffect, useState } from "react"
import { changeLanguage } from '../../store/ducks/changeLanguage'
import { Button } from '../../components'
import { ArrowBox, BorderToggle, Drop, LanguageToggleContainer } from "./styles"
import Separator from "../Separator"
import Icon from "../Icons"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch, useAppSelector } from "../../@types/types"

function LanguageToggle() {
  const [show, toggleShow] = useState(false)
  const { language } = useAppSelector(({changeLanguageState}) => changeLanguageState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    toggleShow(false)
  }, [language])

  function toggleLanguage(lang: string) {
    dispatch(changeLanguage(lang))
  }
  

  return (
    <LanguageToggleContainer onMouseLeave={() => toggleShow(false)}>
      <Button 
        onClick={() => toggleShow(!show)}
        text={language}
        show={show}
        select_lang
      >
        <ArrowBox>
          <Icon faIcon={faChevronDown} show={show} fa_chevron drop/>
        </ArrowBox>
      </Button>
      <Drop show={show}>
        <BorderToggle selectedLang={language === 'pt-Br'}>
          <Button 
            onClick={() => toggleLanguage('pt-Br')} 
            selectedLang={language === 'pt-Br'}
            text={'pt-Br'}
            lang_select
          />
        </BorderToggle>
        <Separator y={5}/>
        <BorderToggle selectedLang={language === 'Eng'}>
          <Button 
            onClick={() => toggleLanguage('Eng')} 
            selectedLang={language === 'Eng'}
            text={'Eng'}
            lang_select
          />
        </BorderToggle>
        <Separator y={5}/>
        <BorderToggle selectedLang={language === 'Fin'}>
          <Button 
            onClick={() => toggleLanguage('Fin')} 
            selectedLang={language === 'Fin'}
            text={'Fin'} 
            lang_select
          />
        </BorderToggle>
      </Drop>
    </LanguageToggleContainer>
  )
}

export default LanguageToggle