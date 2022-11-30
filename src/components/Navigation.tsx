import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import SidebarContent from "./SidebarContent";

const Navigation: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.300", "gray.800")}>
      <DesktopNav display={{ base: "none", md: "block" }} />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />

      <Box px="4" pb="4" pt={{ base: "4", md: "0" }} h="calc(100vh - 4.5rem)">
        {children}
      </Box>
    </Box>
  );
};

export default Navigation;
