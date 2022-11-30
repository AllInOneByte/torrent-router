import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  IconButton,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NavigationContent from "./NavigationContent";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent: React.FC<SidebarProps> = ({ onClose, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <IconButton
          aria-label="toggle dark mode"
          icon={colorMode == "light" ? <MoonIcon /> : <SunIcon />}
          variant="ghost"
          onClick={toggleColorMode}
        />
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          align="center"
        >
          Torrent Router
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <SimpleGrid columns={2} spacing="1rem" px="1rem">
        <NavigationContent h="6rem" />
      </SimpleGrid>
    </Box>
  );
};

export default SidebarContent;
