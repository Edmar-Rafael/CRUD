import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeLanguage } from '../../store/ducks/changeLanguage'
import { Button } from '../../components'
import { ArrowBox, BorderToggle, Drop, LanguageToggleContainer } from "./styles"
import Separator from "../Separator"
import Icon from "../Icons"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

function LanguageToggle({topY}) {
  const [show, toggleShow] = useState(false)
  const { language } = useSelector(({changeLanguageState}) => changeLanguageState)
  const dispatch = useDispatch()

  useEffect(() => {
    toggleShow(false)
  }, [language])

  function toggleLanguage(lang) {
    dispatch(changeLanguage(lang))
  }

  function showSelectedLanguage() {
    if(language === 'pt-Br') {
      return 'pt-Br'
    } else if(language === 'eng') {
      return 'Eng'
    } else {
      return 'Finn'
    }
  }
  

  return (
    <LanguageToggleContainer>
      <Button 
        onClick={() => toggleShow(!show)} 
        text={showSelectedLanguage()}
        show={show}
        selected_lang
      >
        <ArrowBox>
          <Icon icon={faChevronDown} show={show} fa_chevron drop/>
        </ArrowBox>
      </Button>
      <Drop show={show} topY={topY}>
        <BorderToggle lang={language === 'pt-Br'}>
          <Button 
            onClick={() => toggleLanguage('pt-Br')} 
            lang={language === 'pt-Br'}
            text={'pt-Br'}
            lang_select
          />
        </BorderToggle>
        <Separator y={5}/>
        <BorderToggle lang={language === 'eng'}>
          <Button 
            onClick={() => toggleLanguage('eng')} 
            lang={language === 'eng'}
            text={'Eng'}
            lang_select
          />
        </BorderToggle>
      </Drop>
    </LanguageToggleContainer>
  )
}

export default LanguageToggle