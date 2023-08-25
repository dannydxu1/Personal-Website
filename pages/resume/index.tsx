import { Box, Text } from "@chakra-ui/react";

const ResumePage = () => {
  return (
    <Box p={8} w="100vw" h="100vh">
      <embed
        src="/Danny_Xu_Resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </Box>
  );
};

export default ResumePage;
