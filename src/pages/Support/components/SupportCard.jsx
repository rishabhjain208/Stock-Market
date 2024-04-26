import { Text, Icon, Stack, Flex } from "@chakra-ui/react";

import React from "react";
import { IoMdMail } from "react-icons/io";
import ContactCard from "./ContactCard";
const SupportCard = () => {
  return (
    <Flex
      gap={6}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="24rem">
        <Icon as={IoMdMail} boxSize={6} color="p.purple" />
        <Text as="h1" fontWeight="medium" textStyle="h1">
          Contact Us
        </Text>
        <Text fontSize="sm" color="black.60">
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      <ContactCard></ContactCard>
    </Flex>
  );
};

export default SupportCard;
