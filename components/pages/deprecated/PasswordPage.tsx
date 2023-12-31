import { useState, useEffect } from "react"; // Added useEffect
import { useRouter } from "next/router";
import {
  Box,
  HStack,
  VStack,
  Tooltip,
  Center,
  Flex,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";

const PasswordPage = () => {
  const [input, setInput] = useState<string>("");
  const router = useRouter();
  const toast = useToast();

  // The password you want to use to allow access
  const PASSWORD: string = "password";
  // Hint for the password
  const passwordHint: string = "Enter anything to continue :)";

  // State to hold the current time
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Function to update the current time
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toString(); // You can format the time as per your preference
      setCurrentTime(formattedTime);
    };

    // Update the time initially and then every second
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push("/main");
    }
  };

  return (
    <Center
      h="100vh"
      w="100vw"
      bg="black"
      color="limegreen"
      p={5}
      fontFamily="monospace"
    >
      <Box>
        <Flex flexDirection="column" height="100%" fontSize="xl">
          <Box as="span" fontFamily="monospace">
            Last login: {currentTime} {/* Display the current time */}
          </Box>
          <Box as="span" fontFamily="monospace">
            danny@dev:~$ sudo enter-portfolio
          </Box>
          <Flex mt={2}>
            <Box as="span" fontFamily="monospace">
              [sudo] password for danny:
            </Box>
            <Tooltip label={passwordHint} placement="right" hasArrow>
              <Input
                variant="unstyled"
                type="password"
                value={input}
                onChange={handleInput}
                onKeyPress={handleKeyPress}
                autoFocus
                autoComplete="off"
                size="lg"
                htmlSize={30}
                width="auto"
                paddingLeft={2}
                _focus={{
                  boxShadow: "none",
                  cursor: "block", // Set cursor to block
                  color: "white", // Set text color to white
                }}
                sx={{
                  "::placeholder": {
                    color: "white",
                  },
                  backgroundColor: "transparent",
                  caretColor: "white",
                  "::selection": {
                    backgroundColor: "limegreen",
                  },
                  "::-ms-clear": {
                    display: "none",
                  },
                }}
              />
            </Tooltip>
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
};

export default PasswordPage;
