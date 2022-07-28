import React from "react";
import { Button, Icons } from '../../components'
import { Box, NaviBarContainer } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { logOut } from "../../store/ducks/login";
import LanguageToggle from "../LanguageToggle";
import handleLanguage from "../../resources/LangSource";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from "../../@types/types";

function NaviBar() {
  const navigate = useNavigate()
  const isList = useLocation().pathname === '/'
  useAppSelector(({changeLanguageState}) => changeLanguageState)

  const dispatch = useAppDispatch()


  return (
    <NaviBarContainer>
      
      {isList ? (
        <Button
          onClick={() => navigate('/create')} 
          text={handleLanguage('createDragon')}
          navi_bar
        >
          <Icons faIcon={faArrowRight} fa_arrow />
        </Button>
      ) : (
        <Button 
          onClick={() => navigate('/')} 
          text={handleLanguage('back')} 
          navi_bar
          toLeft
        >
          <Icons faIcon={faArrowRight} rotation={180} fa_arrow />
        </Button>
      )}
      <Box>
        <LanguageToggle/>
        <ToastContainer theme='colored' closeOnClick/>
      </Box>
      <Button 
        onClick={() => dispatch(logOut())}
        text={handleLanguage('exit')} 
        navi_bar
      />
    </NaviBarContainer>
  )
}

export default NaviBar