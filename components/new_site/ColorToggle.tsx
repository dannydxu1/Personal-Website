import { useColorMode, Box, Switch } from "@chakra-ui/react";

const ColorToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Switch
        id="colorSwitch"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        orientation="vertical"
        colorScheme="blue"
        style={{ transform: "rotate(90deg)" }}
      />
    </Box>
  );
};

export default ColorToggle;
