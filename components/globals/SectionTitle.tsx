import { Flex, Divider, Text } from "@chakra-ui/react";

const SectionTitle = (props: {
  titleName: string;
  rightAlign: boolean;
  color: string;
}) => {
  return (
    <Flex alignItems="center" width="45vw">
      {props.rightAlign ? (
        <Divider
          flex="1"
          borderColor="black"
          borderWidth="1px"
          ml={0}
          mr={5}
          mt={-2}
        />
      ) : null}

      <Text
        fontWeight="extrabold"
        fontFamily="anybodyVariable"
        fontSize="6xl"
        textAlign="center"
        mx={2}
        ml={0}
        color="black"
      >
        {props.titleName}
      </Text>
      <Text
        color={props.color}
        fontFamily="anybodyVariable"
        fontWeight="extrabold"
        fontSize="6xl"
        ml={-2}
      >
        .
      </Text>
      {props.rightAlign ? null : (
        <Divider
          flex="1"
          borderColor="black"
          borderWidth="1px"
          ml={5}
          mr={0}
          mt={-2}
        />
      )}
    </Flex>
  );
};

export default SectionTitle;

// <HStack>
//   <Text
//     color="black"
//     fontFamily="anybodyVariable"
//     fontWeight="extrabold"
//     fontSize={"6xl"}
//     mt={10}
//   >
//     {props.titleName}
//   </Text>
//   <Text
//     color={props.color}
//     fontFamily="anybodyVariable"
//     fontWeight="extrabold"
//     fontSize="6xl"
//     mt={10}
//     ml={-2}
//   >
//     .
//   </Text>
// </HStack>;
