import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Flex,
  Icon,
  Stack,
  Text,
  Box,
  Grid,
  Divider,
  Button,
} from "@chakra-ui/react";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";
const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC  Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];

  return (
    <CustomCard>
      <Text mb="6" fontSize="sm" color="black.80">
        Recent Transactions
      </Text>
      <Stack spacing={4}>
        {transactions.map((transactions, i) => (
          <Fragment key={transactions.id}>
            {i !== 0 && <Divider />}
            <Flex gap={4}>
              <Grid
                placeItems="center"
                borderRadius="full"
                bg="black.5"
                boxSize={10}
              >
                <Icon as={transactions.icon} />
              </Grid>
              <Flex justify={"space-between"} w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{transactions.text}</Text>
                  <Text fontSize="sm" color="black.80">
                    {transactions.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h6">{transactions.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" colorScheme="gray" mt="10px">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
