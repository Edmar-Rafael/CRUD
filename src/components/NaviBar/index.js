import React from "react";
import { Button } from '../../components'
import { Box, NaviBarContainer } from "./styles";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/ducks/login";
import LanguageToggle from "../LanguageToggle";
import handleLanguage from "../../resources/LangSource";
import Icon from "../Icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function NaviBar() {
  const history = useHistory()
  const isList = useLocation().pathname === '/'
  useSelector(({changeLanguageState}) => changeLanguageState)

  const dispatch = useDispatch()


  return (
    <NaviBarContainer>
      <Box>
      {isList ? (
        <Button
          onClick={() => history.push('/create')} 
          text={handleLanguage('createDragon')} 
          custom
        >
          <Icon icon={faArrowRight} fa_arrow/>
        </Button>
      ) : (
        <Button 
          onClick={() => history.push('/')} 
          text={handleLanguage('back')} 
          custom
          toLeft
        >
          <Icon icon={faArrowRight} fa_arrow toLeft rotation={180}/>
        </Button>
      )}
      </Box>
      <Box>
        <LanguageToggle/>
      </Box>
      <Button 
        onClick={() => dispatch(logOut())}
        text={handleLanguage('exit')} 
        custom
      />
    </NaviBarContainer>
  )
}

export default NaviBar