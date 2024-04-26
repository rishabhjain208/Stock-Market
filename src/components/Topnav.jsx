import {
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const Topnav = ({ title, onOpen }) => {
  return (
    <Box px="4" boxShadow="xl" bg="white">
      <HStack
        maxWidth="70rem"
        h="16"
        ml="200px"
        alignItems="center"
        justifyContent="space-between"
        m="auto"
      >
        <Icon
          _hover={{
            // bg: "#F3F3F7",
            color: "#797E82",
          }}
          color="#171717"
          cursor="pointer"
          as={GiHamburgerMenu}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontSize="28px">{title}</Heading>
        <Menu>
          <MenuButton as={Button}>
            <Icon w={8} h={8} boxSize={6} fontSize="24px" color="#101112">
              <FaUserAlt />
            </Icon>
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
