import { SettingsIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  Flex,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import NavigationContent from "./NavigationContent";

const DesktopNav: React.FC<BoxProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box w="full" h="4.5rem" {...props}>
      <Flex
        h="full"
        alignItems="center"
        mx="1rem"
        justifyContent="space-between"
        direction={"row"}
      >
        <Flex gap="1rem" p="0">
          <NavigationContent />
        </Flex>
        <IconButton
          aria-label="toggle dark mode"
          icon={<SettingsIcon />}
          onClick={toggleColorMode}
        />
      </Flex>
    </Box>
  );
};

export default DesktopNav;
