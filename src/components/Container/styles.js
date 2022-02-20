import styled from "styled-components";

export const ContainerBox = styled.div`
   width: 100%;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   overflow: hidden;

   &.list{
      min-height: 656px;
      height: 656px;
      padding-top: 80px;
   }

   &.homeCreate{
      justify-content: center;
   }
`