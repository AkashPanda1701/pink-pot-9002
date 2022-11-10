import { Box, Button, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Right = () => {
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };

  return (
    <Stack
      w={{ lg: "35%", md: "35%", base: "100%" }}
      border="1px solid grey"
      borderRadius={"5px"}
      h="100%"
      p="10px 20px"
      mb="10px"
    >
      <Flex w="100%" justify={"space-between"}>
        <Text>Merchandise Subtotal</Text>
        <Text fontWeight={"bold"}>$15.00</Text>
      </Flex>
      <Flex w="100%" justify={"space-between"}>
        <Text>Shipping & Handling</Text>
        <Text fontWeight={"bold"}>TBD</Text>
      </Flex>
      <Flex w="100%" justify={"space-between"}>
        <Text>Estimated Tax & Other Fees</Text>
        <Text fontWeight={"bold"}>TBD</Text>
      </Flex>
      <Divider />
      <Flex w="100%" justify={"space-between"}>
        <Text>Estimated Total</Text>
        <Text fontWeight={"bold"}>$15.00</Text>
      </Flex>
      <Box w="70%">
        <Text>
          or 4 payments of $3.75 with <strong>Klarna.</strong> or{" "}
          <strong>afterpay</strong>
        </Text>
      </Box>
      <Text fontSize={"12px"} color="grey">
        Shipping & taxes calculated during checkout
      </Text>
      <Flex justify={"center"}>
        <Button
          w="70%"
          background={"#cf112c"}
          color="white"
          borderRadius={"20px"}
          _hover={{ background: " rgb(226, 3, 15)", color: "white" }}
          onClick={checkout}
        >
          Checkout
        </Button>
      </Flex>
    </Stack>
  );
};

export default Right;
