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
      
      <Box>
      {isList ? (
        <Button
          onClick={() => navigate('/create')} 
          text={handleLanguage('createDragon')} 
          custom
        >
          <Icons faIcon={faArrowRight} fa_arrow />
        </Button>
      ) : (
        <Button 
          onClick={() => navigate('/')} 
          text={handleLanguage('back')} 
          custom
          toLeft
        >
          <Icons faIcon={faArrowRight} rotation={180} fa_arrow toLeft />
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
        custom
      />
    </NaviBarContainer>
  )
}

export default NaviBar