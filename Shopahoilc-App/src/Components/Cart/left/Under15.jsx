import React, { useEffect } from "react";
import { Box, Button, filter, Flex, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../Redux/products/actions";

const data = [
  {
    imageUrl:
      "https://www.sephora.com/productimages/sku/s2255651-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-value-2020&imwidth=164",
    brand: "SEPHORA COLLECTION",
    name: "Jelly Melt Glossy Lip Tint",
    stars: 4.5,
    numReviews: 396,
    price: 5,
    category: "makeup",
    type: "lip",
    id: 21,
  },
  {
    stars: 4.5,
    imageUrl:
      "https://www.sephora.com/productimages/sku/s2282978-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019&imwidth=164",
    brand: "SEPHORA COLLECTION",
    name: "Clean Foot Mask",
    numReviews: 119,
    price: 5,
    category: "skincare",
    type: "masks",
    id: 75,
  },
  {
    stars: 5,
    imageUrl:
      "https://www.sephora.com/productimages/sku/s2299253-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "SEPHORA COLLECTION",
    name: "Beauty on the Fly Reusable Bag",
    numReviews: 23,
    price: 5,
    category: "tools",
    type: "travel cases",
    id: 170,
  },
  {
    stars: 3.5,
    imageUrl:
      "https://www.sephora.com/productimages/sku/s2282994-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-clean-2019&imwidth=164",
    brand: "SEPHORA COLLECTION",
    name: "Clean Hand Mask",
    numReviews: 56,
    price: 5,
    category: "bath",
    type: "body moisturizers",
    id: 191,
  },
];

const Under15 = () => {
  return (
    <>
      {data?.splice(0, 5).map((el) => {
        return (
          <Flex
            w="98%"
            // border="1px solid grey"
            background="white"
            p="20px 0px"
            m="auto"
            mt="5px"
            key={el.id}
            gap={{ lg: 5, md: 4 }}
            justify={{ base: "center" }}
            align={{ base: "center" }}
            flexDirection={{ lg: "row", md: "row", base: "column" }}
          >
            <Image
              src={el.imageUrl}
              w={{ lg: "auto", md: "auto", base: "150px" }}
              h="100px"
            />
            <Box w="65%">
              <Text fontWeight={"bold"}>{el.brand}</Text>
              <Text>{el.name}</Text>
              <Text>
                <strong>Category</strong>: {el.category}
              </Text>
            </Box>
            <Flex align={"center"} justify={"center"} flexDirection={"column"}>
              <Text>
                <strong>₹</strong>
                {Math.round(el.price * 81.66)}/-
              </Text>
              <Button
                w="100px"
                mt="20px"
                border="2px solid black"
                borderRadius={"20px"}
                _hover={{ backgroundColor: "white", color: "black" }}
                background={"white"}
                color={"black"}
              >
                Add
              </Button>
            </Flex>
          </Flex>
        );
      })}
    </>
  );
};

export default Under15;
