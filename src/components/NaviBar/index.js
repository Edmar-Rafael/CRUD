import React from "react";
import { Button } from '../../components'
import { Box, NaviBarContainer } from "./styles";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/ducks/login";
import LanguageToggle from "../LanguageToggle";
import handleLanguage from "../../resources/LangSource";

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
        />
      ) : (
        <Button 
          onClick={() => history.push('/')} 
          text={handleLanguage('back')} 
          custom
        />
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