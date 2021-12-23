import styled from "styled-components";

export const ContainerBox = styled.div`
   width: 100%;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   overflow: hidden;

   &.list{
      padding-top: 80px;
   }

   &.homeCreate{
      padding-top: 150px ;
   }
`