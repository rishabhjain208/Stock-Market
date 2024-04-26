import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { FaCircleInfo } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { IoArrowUpSharp } from "react-icons/io5";
const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg={"white"}
      p={6}
      borderRadius="xl"
      spacing={16}
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">Total Portfolio Value</Text>
          <Icon as={FaCircleInfo}></Icon>
        </HStack>
        <Text fontSize="24px" fontWeight="medium">
          ₹ 112,312.24
        </Text>
      </Stack>
      <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">Wallet Balances</Text>
          <Icon as={FaCircleInfo}></Icon>
        </HStack>
        <HStack spacing="30px">
          <HStack
            align={{
              base: "flex-start",
              xl: "center",
            }}
            flexDir={{
              base: "column",
              xl: "row",
            }}
          >
            <Text fontSize="24px" fontWeight="medium">
              22.39401000 <Tag colorScheme="gray">BTC</Tag>
            </Text>
          </HStack>
          <HStack>
            <Text fontSize="24px" fontWeight="medium">
              ₹ 1,300.00 <Tag colorScheme="gray">INR</Tag>
            </Text>
          </HStack>
        </HStack>
      </Stack>
      <HStack>
        <Button leftIcon={<Icon as={FaArrowDown} />}>Deposit</Button>
        <Button rightIcon={<Icon as={FaArrowDown} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
