import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import { ButtonProps } from "@chakra-ui/react";
import NavItem from "./NavItem";

const NavigationContent: React.FC<ButtonProps> = ({ color, ...props }) => (
  <>
    <NavItem
      text="Agregar torrent"
      color="green"
      icon={<AddIcon />}
      callback={function (): void {}}
      {...props}
    />
    <NavItem
      text="Eliminar torrent"
      color="red"
      icon={<CloseIcon />}
      callback={function (): void {}}
      {...props}
    />
  </>
);

export default NavigationContent;
