import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  // Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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

const CartCrud = () => {
  return (
    <Box w="100%" mt="30px">
      {data.length === 0 ? (
        <Flex
          w="90%"
          p="20px 0px"
          m="auto"
          mt="5px"
          justify={"center"}
          align={"center"}
          gap={3}
          flexDirection="column"
        >
          <Heading fontSize={"30px"}>Add something in cart</Heading>
          <Link to="/products">
            <Button
              background={"black"}
              p="20px 40px"
              color="white"
              borderRadius={"20px"}
              _hover={{ background: "black", color: "white" }}
            >
              Shop New Arrivals
            </Button>
          </Link>
        </Flex>
      ) : (
        data.map((el) => {
          return (
            <Flex
              w="90%"
              // border="1px solid grey"
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
              <Box w="68%">
                <Text fontWeight={"bold"}>{el.brand}</Text>
                <Text>{el.name}</Text>
                <Text>
                  <strong>Category</strong>: {el.category}
                </Text>
                <Flex
                  mt="10px"
                  align={"center"}
                  w={{ lg: "90%", md: "90%", base: "100%" }}
                  gap={{ lg: 3, md: 3, base: 0 }}
                  flexDirection={{ lg: "row", md: "column", base: "column" }}
                >
                  {/* <Select
                    w={{ lg: "80px", md: "100px", sm: "100px" }}
                    m={{ lg: "2px", md: "auto", base: "auto" }}
                    placeholder="1"
                  >
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </Select> */}
                  <Flex w="100px" justify={"center"} align="center" gap={1}>
                    <Button
                      w="50px"
                      h="40px"
                      variant={"ghost"}
                      fontSize="35px"
                      fontWeight={"bold"}
                    >
                      -
                    </Button>
                    <Text fontWeight={"bold"}>1</Text>
                    <Button
                      w="50px"
                      h="40px"
                      variant={"ghost"}
                      fontSize="30px"
                      fontWeight={"bold"}
                    >
                      +
                    </Button>
                  </Flex>
                  <Button
                    variant="link"
                    color={"blue"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Move to loves
                  </Button>
                  <Button
                    variant={"link"}
                    color="blue"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Remove
                  </Button>
                </Flex>
              </Box>
              <Box>
                <Text>
                  <strong>₹</strong>
                  {Math.round(el.price * 81.66)}/-
                </Text>
              </Box>
            </Flex>
          );
        })
      )}
    </Box>
  );
};

export default CartCrud;
