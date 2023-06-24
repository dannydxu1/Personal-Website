import {
  Box,
  Center,
  Text,
  HStack,
  VStack,
  Button,
  Flex,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";

const PageTitle = (props: {titleName: string, color: string}) => {
  return (
    <HStack>
      <Text
        color="black"
        fontFamily="anybodyVariable"
        fontWeight="extrabold"
        fontSize={"6xl"}
        mt={10}
      >
        {props.titleName}
      </Text>
      <Text
        color={props.color}
        fontFamily="anybodyVariable"
        fontWeight="extrabold"
        fontSize="6xl"
        mt={10}
        ml={-2}
      >
        .
      </Text>
    </HStack>
  );
};

export default PageTitle;
