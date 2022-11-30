import { Button, ButtonProps } from "@chakra-ui/react";

export interface NavItemProps extends ButtonProps {
  text: string;
  color: string;
  icon: any;
  callback: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  text,
  color,
  icon,
  callback,
  ...rest
}) => {
  return (
    <Button colorScheme={color} leftIcon={icon} onClick={callback} {...rest}>
      {text}
    </Button>
  );
};

export default NavItem;
