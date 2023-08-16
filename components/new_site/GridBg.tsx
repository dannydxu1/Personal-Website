import { Box } from "@chakra-ui/react";

const GridBackground = () => {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      backgroundImage={`
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,0,0,0.1) 20px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(0,0,0,0.1) 20px),
        repeating-linear-gradient(0deg, transparent, transparent 99px, rgba(0,0,0,0.5) 100px),
        repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(0,0,0,0.5) 100px)
      `}
      zIndex={-1}
    />
  );
};

export default GridBackground;
