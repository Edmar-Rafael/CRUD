import React from "react";
import { Button } from '../../components'
import { Box, NaviBarContainer } from "./styles";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/ducks/login";

function NaviBar() {
  const history = useHistory()
  const isList = useLocation().pathname === '/'

  const dispatch = useDispatch()


  return (
    <NaviBarContainer>
      <Box>
      {isList ? (
        <Button
          onClick={() => history.push('/create')} 
          text={'CRIAR DRAGÃO'} 
          custom
        />
      ) : (
        <Button 
          onClick={() => history.push('/')} 
          text={'VOLTAR'} 
          custom
        />
      )}
      </Box>
      <Button 
        onClick={() => dispatch(logOut())}
        text={'SAIR'} 
        custom
      />
    </NaviBarContainer>
  )
}

export default NaviBar