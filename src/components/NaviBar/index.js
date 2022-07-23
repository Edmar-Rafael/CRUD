import React from "react";
import { Button } from '../../components'
import { Box, NaviBarContainer } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/ducks/login";
import LanguageToggle from "../LanguageToggle";
import handleLanguage from "../../resources/LangSource";
import Icon from "../Icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function NaviBar() {
  const navigate = useNavigate()
  const isList = useLocation().pathname === '/'
  useSelector(({changeLanguageState}) => changeLanguageState)

  const dispatch = useDispatch()


  return (
    <NaviBarContainer>
      
      <Box>
      {isList ? (
        <Button
          onClick={() => navigate('/create')} 
          text={handleLanguage('createDragon')} 
          custom='true'
        >
          <Icon icon={faArrowRight} fa_arrow='true'/>
        </Button>
      ) : (
        <Button 
          onClick={() => navigate('/')} 
          text={handleLanguage('back')} 
          custom='true'
          toLeft='true'
        >
          <Icon icon={faArrowRight} rotation={180} fa_arrow='true' toLeft='true'/>
        </Button>
      )}
      </Box>
      <Box>
        <LanguageToggle/>
        <ToastContainer theme='colored' closeOnClick/>
      </Box>
      <Button 
        onClick={() => dispatch(logOut())}
        text={handleLanguage('exit')} 
        custom='true'
      />
    </NaviBarContainer>
  )
}

export default NaviBar