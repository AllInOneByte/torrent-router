import { Box, useColorModeValue } from "@chakra-ui/react";

function App() {
  return (
    <Box
      borderRadius="1rem"
      bgColor={useColorModeValue("white", "gray.700")}
      h="full"
      w="full"
    ></Box>
  );
}

export default App;
