import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import "./Cart.css";
import Left from "../../Components/Cart/left/Left";
import Right from "../../Components/Cart/right/Right";

function Cart() {
  return (
    <Box
      w={{ lg: "90%", md: "100%", base: "100%" }}
      h="auto"
      m="auto"
      mt="20px"
      mb="20px"
      // border="1px solid red"
      p="10px"
    >
      <Heading
        fontSize={{ lg: "25px", md: "20px", base: "25px" }}
        pb={{ lg: "20px", md: "20px", base: "10px" }}
      >
        My Basket
      </Heading>
      {/* height is just for temporary use */}
      <Flex
        gap={{ lg: "15px", md: "15px" }}
        h="auto"
        flexDirection={{ lg: "row", md: "row", base: "column-reverse" }}
      >
        <Left />
        <Right />
      </Flex>
    </Box>
  );
}

export default Cart;
