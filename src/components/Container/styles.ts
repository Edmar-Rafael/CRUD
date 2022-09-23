import styled from "styled-components";

export const ContainerBox = styled.div`
   width: 100%;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;

   &.list{
      min-height: 656px;
      height: 656px;
   }

   &.homeCreate{
      justify-content: center;
   }
`