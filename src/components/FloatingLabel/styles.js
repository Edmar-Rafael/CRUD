import styled from "styled-components";
import Colors from "../../resources/Colors";

export const Label = styled.label`
   font-size: 18px;
   color: ${Colors.label};
   font-weight: 100;
   font-family: 'Noto-sans';
   width: 70%;
   max-width: 99%;
   padding: 0 4px 2px 4px;
   margin-left: 11px;
   text-align: start;
   transform-origin: 0 0;
   transform: translateY(-38px);
   transition: all .3s;
   background-color: ${Colors.background};
   z-index: 9;
   pointer-events: none;
   `