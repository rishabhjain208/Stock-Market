import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Button, Stack, Text } from "@chakra-ui/react";

const InfoCard = ({ imgUrl, text, tagText }) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize="cover" bgRepeat="no-repeat">
      <Tag bg="p.purple" color="white" borderRadius="full">
        {tagText}
      </Tag>
      <Text mt="4" fontWeight="meduim" textStyle="h5">
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
