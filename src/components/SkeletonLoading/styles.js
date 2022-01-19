import styled from "styled-components";

export const SkeletonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 91.2%;
  height: 65px;
  border-radius: 4px;
  background-color: #777;
  overflow: hidden;
  position: relative;

  &::before{
    content: '';
    background-image: conic-gradient(
      #cccaca85 20deg,
      #cccaca06 120deg
    );
    width: 199%;
    height: 100%;
    margin-top: -130px;
    position: absolute;

    animation: rotate 3s linear infinite;

    @media(max-width: 500px){
      animation: rotate 1.5s linear infinite;
    }
    @media(max-width: 800px){
      width: 195%;
    }
  }

  @keyframes rotate {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(-360deg)
    }
  }
`

export const SkeletonItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 25%;
  padding-left: 10px;
  font-size: 20px;
  color: #aaa;
`

export const SkeletonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 25%;
`

export const SkeletonButton = styled.div`
  width: 45px;
  height: 45px;
  margin-right: 6px;
  border-radius: 25px;
  background-color: #aaaaaa;
`