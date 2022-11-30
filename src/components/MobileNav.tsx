import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  FlexProps,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav: React.FC<MobileProps> = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="4.5rem"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="ghost"
        onClick={onOpen}
        aria-label="open menu"
        icon={<HamburgerIcon />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Torrent Router
      </Text>
    </Flex>
  );
};

export default MobileNav;
