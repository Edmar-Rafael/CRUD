import React from "react";
import { Separator } from "..";
import { SkeletonBox, SkeletonButton, SkeletonContainer, SkeletonItem } from "./styles";

type SkeletonProps = {
  newSize?: number
}

function SkeletonLoading({newSize}: SkeletonProps) {
  const size = new Array(newSize || 5).fill(1)

  return (
    <>
    {size.map((el, index) => 
      <>
        <SkeletonContainer key={index}>
          <SkeletonItem>-- / -- / ----</SkeletonItem>
          <SkeletonItem>Nome/ Name</SkeletonItem>
          <SkeletonItem>Tipo/ Type</SkeletonItem>
          <SkeletonBox>
            <SkeletonButton />
            <SkeletonButton />
          </SkeletonBox>
        </SkeletonContainer>
        <Separator />
      </>
    )}
    </>
  )
}

export default SkeletonLoading