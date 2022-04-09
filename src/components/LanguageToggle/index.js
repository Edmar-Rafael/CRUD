import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeLanguage } from '../../store/ducks/changeLanguage'
import { Button } from '../../components'
import { ArrowBox, BorderToggle, Drop, LanguageToggleContainer } from "./styles"
import Separator from "../Separator"
import Icon from "../Icons"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

function LanguageToggle() {
  const [show, toggleShow] = useState(false)
  const { language } = useSelector(({changeLanguageState}) => changeLanguageState)
  const dispatch = useDispatch()

  useEffect(() => {
    toggleShow(false)
  }, [language])

  function toggleLanguage(lang) {
    dispatch(changeLanguage(lang))
  }
  

  return (
    <LanguageToggleContainer onMouseLeave={() => toggleShow(false)}>
      <Button 
        onClick={() => toggleShow(!show)}
        text={language}
        show={show}
        selected_lang
      >
        <ArrowBox>
          <Icon icon={faChevronDown} show={show} fa_chevron drop/>
        </ArrowBox>
      </Button>
      <Drop show={show}>
        <BorderToggle lang={language === 'pt-Br'}>
          <Button 
            onClick={() => toggleLanguage('pt-Br')} 
            lang={language === 'pt-Br'}
            text={'pt-Br'}
            lang_select
          />
        </BorderToggle>
        <Separator y={5}/>
        <BorderToggle lang={language === 'Eng'}>
          <Button 
            onClick={() => toggleLanguage('Eng')} 
            lang={language === 'Eng'}
            text={'Eng'}
            lang_select
          />
        </BorderToggle>
        <Separator y={5}/>
        <BorderToggle lang={language === 'Fin'}>
          <Button 
            onClick={() => toggleLanguage('Fin')} 
            lang={language === 'Fin'}
            text={'Fin'} 
            lang_select/>
        </BorderToggle>
      </Drop>
    </LanguageToggleContainer>
  )
}

export default LanguageToggle