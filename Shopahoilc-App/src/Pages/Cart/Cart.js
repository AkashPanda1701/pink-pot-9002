import { Box, Flex, Heading, useToast } from "@chakra-ui/react";
import React from "react";
import "./Cart.css";
import Left from "../../Components/Cart/left/Left";
import Right from "../../Components/Cart/right/Right";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart() {
  const auth = useSelector((store) => store.auth);
  const toast = useToast();
  const navigate = useNavigate();

  if (!auth.data.isAuthenticated) {
    toast({
      title: "Login Error",
      description: "Please login first to access cart",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
    navigate("/signup");
  }

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
