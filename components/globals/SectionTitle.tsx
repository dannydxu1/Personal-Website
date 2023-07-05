import { Flex, Divider, Text, useMediaQuery } from "@chakra-ui/react";

const SectionTitle = (props: {
  titleName: string;
  rightAlign: boolean;
  color: string;
}) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex alignItems="center" width={isMobile ? "100%" : "45vw"} maxW="800px">
      <Divider
        flex="1"
        borderColor="black"
        borderWidth="1px"
        ml={0}
        mr={5}
        mt={-2}
      />
      <Text
        fontWeight="extrabold"
        fontFamily="anybodyVariable"
        fontSize={isMobile ? "4xl" : "5xl"}
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
        fontSize={isMobile ? "4xl" : "6xl"}
        ml={-2}
      >
        .
      </Text>
      <Divider
        flex="1"
        borderColor="black"
        borderWidth="1px"
        ml={5}
        mr={0}
        mt={-2}
      />
    </Flex>
  );
};

export default SectionTitle;
