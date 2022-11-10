import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Checkout() {
  return (
    <>
      <Flex
        w="100%"
        h="80px"
        borderBottom={"2px solid grey"}
        justify={"center"}
        align="center"
      >
        <Heading>Shopaholic</Heading>
      </Flex>
      <Image src="https://media.istockphoto.com/id/516457688/photo/thank-you-hanging-fabric-word.jpg?b=1&s=170667a&w=0&k=20&c=VzqoErt31c84Z1MaaGtxsLjpDzJJAiKZDjaWojkV8uU=" />
      <Flex
        flexDirection={{ lg: "row", md: "column", base: "column" }}
        w="80%"
        m="auto"
        justify={"space-between"}
        align="flex-start"
        mt="20px"
      >
        {/* left side */}
        <Box w={{ lg: "55%", md: "100%", base: "100%" }}>
          <Box pb="30px" borderBottom="2px solid black">
            <Heading>Checkout</Heading>
          </Box>
          <Heading mt="10px" fontSize={"28px"}>
            Shipping Address
          </Heading>
          <FormControl mt="20px" isRequired>
            <Stack spacing={6}>
              <Flex justify={"space-between"}>
                <Input type={"text"} w="48%" placeholder="First name" />
                <Input type={"text"} w="48%" placeholder="Last name" />
              </Flex>
              <Input type={"number"} placeholder="Phone" />
              <Input type={"text"} placeholder="Street Address" />
              <Input w="50%" type={"number"} placeholder="ZIP/POSTAL CODE" />
            </Stack>
          </FormControl>
          <Button
            w="250px"
            h="50px"
            borderRadius={"40px"}
            mt="50px"
            background={"black"}
            color="white"
          >
            Save & Continue
          </Button>
        </Box>

        {/* right side */}

        <Stack
          w={{ lg: "35%", md: "100%", base: "100%" }}
          border="1px solid grey"
          borderRadius={"5px"}
          h="100%"
          p="10px 20px"
          mt={{ md: "20px" }}
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

          {/* credit card program */}

          <Box
            w={{ lg: "100%", md: "100%", base: "100%" }}
            border="1px solid grey"
            borderRadius="5px"
            h={{ lg: "auto", md: "auto", base: "auto" }}
            p="10px"
          >
            <Text fontWeight={"bold"} fontSize={{ lg: "", md: "", base: "" }}>
              The Sephora Credit Card Program
            </Text>
            <HStack
              alignItems="center"
              ml="10px"
              mt="10px"
              spacing={{ lg: 16, md: 6, sm: 5 }}
            >
              <Box w={{ lg: "50px", md: "70px", base: "100px" }}>
                {" "}
                <Image src="https://www.sephora.com/contentimages/creditcard/cardicon/CreditCard.svg" />
              </Box>
              <Box w={{ lg: "450px", md: "450px", sm: "550px" }}>
                <Text>
                  Save 25% on this order when you open and use either Sephora
                  Credit Card today*
                </Text>
              </Box>
            </HStack>
            <Text ml="10px" fontSize="14px" color="grey">
              *Subject to credit approval. Exclusions apply.
            </Text>
            <Link href="https://www.sephora.com/creditcard?icid2=ccBannerMessageNewStatusApp:See_Details">
              <Button
                display={"block"}
                m="auto"
                mt="10px"
                border="2px solid black"
                background="none"
                borderRadius="20px"
                _hover={{ background: "none", textDecoration: "none" }}
              >
                See Details
              </Button>
            </Link>
            <Divider mt="10px" />
            <Button
              w="80%"
              display={"block"}
              m="auto"
              mt="10px"
              borderRadius={"20px"}
            >
              Place Order
            </Button>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export default Checkout;
