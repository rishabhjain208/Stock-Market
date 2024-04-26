import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
const Sidenav = () => {
  const location = useLocation();
  const isActiveLink = (link) => {
    return location.pathname === link;
  };
  const navLink = [
    {
      icons: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icons: GrTransaction,
      text: "Transactions",
      link: "/Transaction",
    },
  ];
  return (
    <Stack
      bg="white"
      justifyContent="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      maxW={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
      <Box>
        <Heading pl="30px" fontSize="20px" pt="56px" as="h1">
          @CODING
        </Heading>
        <Box mt="6" mx="3">
          {navLink.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                py="3"
                borderRadius="10px"
                px="4"
                cursor="pointer"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
              >
                <Icon as={nav.icons}></Icon>
                <Text>{nav.text}</Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="10px">
        <Link to="/support">
          <HStack
            py="3"
            borderRadius="10px"
            px="4"
            cursor="pointer"
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
          >
            <BiSupport />
            <Text>Support</Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
