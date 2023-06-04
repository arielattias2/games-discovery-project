import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreItemSkeleton = () => {
  return (
    <>
      <HStack>
        <Skeleton marginBottom={2} width={"50px"} height={"50px"}></Skeleton>
        <SkeletonText
          marginRight={2}
          width={"100px"}
          height={"30px"}
        ></SkeletonText>
      </HStack>
    </>
  );
};

export default GenreItemSkeleton;
