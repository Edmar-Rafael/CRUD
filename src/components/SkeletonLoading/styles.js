import styled from "styled-components";

export const SkeletonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px 5px 5px;
  width: 90%;
  height: 55px;
  border-radius: 4px;
  background-color: #777;
  overflow: hidden;
  position: relative;

  &::before{
    content: '';
    background-image: conic-gradient(
      #cccaca85 20deg,
      #cccaca05 120deg
    );
    width: 200%;
    height: 100%;
    position: absolute;

    animation: rotate 4s linear infinite;
  }

  @keyframes rotate {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg)
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
  margin-left: 4px;
  border-radius: 25px;
  background-color: #aaaaaa;
`