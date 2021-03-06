import styled from "styled-components";
import Colors from "../../resources/Colors";

export const DeleteButtonBox = styled.div`
  width: 47px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 9px 8px 10px #000009;
  border-radius: 10px;
  border: none;
  position: relative;
  overflow: hidden;
  background: ${Colors.delButton};

  &::before{
    content: '';
    background-image: conic-gradient(
      #ee0000 20deg,
      transparent 120deg
    );
    width: 150%;
    height: 150%;
    position: absolute;

    animation: rotate 2s linear infinite;
  }


  @keyframes rotate {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(-360deg)
    }
  }

  &.mobile_delete_modal{
    @media(max-width: 500px){
      width: 120px;
      &::before{
        height: 340%;
      }
    }
  }

  @media(max-width: 800px){
    width: 37px;
    height: 37px;
    border-radius: 8px;
  }
`