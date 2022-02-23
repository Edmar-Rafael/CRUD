import React from "react";
import { useAuth } from '../../hooks/useAuth' 
import { Button } from '../../components'
import { Box, NaviBarContainer } from "./styles";
import { useLocation, useHistory } from "react-router-dom";

function NaviBar() {
  const history = useHistory()
  const isList = useLocation().pathname === '/'
  const {logOut} = useAuth()


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
        onClick={logOut} 
        text={'SAIR'} 
        custom
      />
    </NaviBarContainer>
  )
}

export default NaviBar