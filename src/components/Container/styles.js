import styled from "styled-components";

export const ContainerBox = styled.div`
   width: 100%;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;

   &.list{
      min-height: 656px;
      height: 656px;
      justify-content: center;
   }

   &.homeCreate{
      justify-content: center;
   }
`