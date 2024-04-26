import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import {
  Button,
  Card,
  Flex,
  Icon,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import { MdFileDownload } from "react-icons/md";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 213,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];
  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={MdFileDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList
            pt="4"
            display="flex"
            w="full"
            // justifyContent="space-between"
          >
            {tabs.map((tabs) => (
              <Tab key={tabs.name} display="flex" gap="2" pb="4">
                {tabs.name}{" "}
                <Tag colorScheme="gray" borderRadius="full">
                  {tabs.count}
                </Tag>
              </Tab>
            ))}

            <InputGroup maxW="200px" pr="5" ml="350px">
              <InputLeftElement pointerEvents="none">
                <FaSearch color="gray.300" />
              </InputLeftElement>
              <Input type="search" placeholder="Search......" />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
