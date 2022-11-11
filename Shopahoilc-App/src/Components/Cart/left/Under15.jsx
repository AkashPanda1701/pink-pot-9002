import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const data = [
  {
    imageUrl:
      "https://www.sephora.com/productimages/sku/s2518959-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Rare Beauty by Selena Gomez",
    name: "Soft Pinch Liquid Blush",
    stars: 4.5,
    numReviews: 2300,
    price: 20,
    category: "makeup",
    type: "face",
    id: 1,
  },
];

const Under15 = () => {
  return (
    <>
      {data.length === 0 ? (
        <Flex
          w="90%"
          p="20px 0px"
          m="auto"
          mt="5px"
          justify={"center"}
          align={"center"}
        >
          <Heading fontSize={"30px"}>Add something in cart</Heading>
        </Flex>
      ) : (
        data.map((el) => {
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
              <Flex
                align={"center"}
                justify={"center"}
                flexDirection={"column"}
              >
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
        })
      )}
    </>
  );
};

export default Under15;
