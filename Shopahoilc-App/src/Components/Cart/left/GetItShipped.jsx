import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CartCrud from "./CartCrud";
import Under15 from "./Under15";

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
  {
    imageUrl:
      "https://www.sephora.com/productimages/sku/s2116028-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Charlotte Tilbury",
    name: "Hollywood Flawless Filter",
    stars: 4.5,
    numReviews: 1700,
    price: 15,
    category: "makeup",
    type: "face",
    id: 2,
  },
  {
    imageUrl:
      "https://www.sephora.com/productimages/sku/s2428837-main-zoom.jpg?imwidth=270&pb=allure-clean-2020&imwidth=164",
    brand: "ILIA",
    name: "Super Serum Skin Tint SPF 40 Foundation",
    stars: 4,
    numReviews: 2500,
    price: 48,
    category: "makeup",
    type: "face",
    id: 3,
  },
  {
    imageUrl:
      "https://www.sephora.com/productimages/sku/s1478403-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "NARS",
    name: "Radiant Creamy Concealer",
    stars: 4.5,
    numReviews: 12300,
    price: 13,
    category: "makeup",
    type: "face",
    id: 4,
  },
  {
    imageUrl:
      "https://www.sephora.com/productimages/sku/s2551851-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Charlotte Tilbury",
    name: "Beautiful Skin Medium Coverage Liquid Foundation with Hyaluronic Acid",
    stars: 4.5,
    numReviews: 287,
    price: 44,
    category: "makeup",
    type: "face",
    id: 5,
  },
  {
    imageUrl:
      "https://www.sephora.com/productimages/sku/s2431864-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Fenty Beauty by Rihanna",
    name: "Eaze Drop Blurring Skin Tint",
    stars: 4,
    numReviews: 1100,
    price: 32,
    category: "makeup",
    type: "face",
    id: 6,
  },
  {
    imageUrl:
      "https://www.sephora.com/productimages/sku/s2116333-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Charlotte Tilbury",
    name: "Airbrush Flawless Finish Setting Powder",
    stars: 4,
    numReviews: 1600,
    price: 25,
    category: "makeup",
    type: "face",
    id: 7,
  },
  {
    imageUrl:
      "https://www.sephora.com/productimages/sku/s2514586-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "NARS",
    name: "Light Reflecting Advanced Skincare Foundation",
    stars: 4.5,
    numReviews: 233,
    price: 49,
    category: "makeup",
    type: "face",
    id: 8,
  },
  {
    imageUrl:
      "https://www.sephora.com/productimages/sku/s2407294-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Charlotte Tilbury",
    name: "Mini Hollywood Flawless Filter",
    stars: 4,
    numReviews: 218,
    price: 15,
    category: "makeup",
    type: "face",
    id: 9,
  },
  {
    imageUrl:
      "https://www.sephora.com/productimages/sku/s2362168-main-zoom.jpg?imwidth=270&imwidth=164",
    brand: "Rare Beauty by Selena Gomez",
    name: "Positive Light Liquid Luminizer Highlight",
    stars: 4.5,
    numReviews: 634,
    price: 22,
    category: "makeup",
    type: "face",
    id: 10,
  },
  {
    imageUrl:
      "https://www.sephora.com/productimages/sku/s2157659-main-zoom.jpg?imwidth=270&pb=2020-03-sephora-value-2020&imwidth=164",
    brand: "SEPHORA COLLECTION",
    name: "Eye Love Eyeshadow Palette",
    stars: 4,
    numReviews: 468,
    price: 10,
    category: "makeup",
    type: "eye",
    id: 11,
  },
  {
    imageUrl:
      "https://www.sephora.com/productimages/sku/s2370773-main-zoom.jpg?imwidth=270&pb=2020-03-allure-best-2019&imwidth=164",
    brand: "Kaja",
    name: "Beauty Bento Bouncy Eyeshadow Trio",
    stars: 4.5,
    numReviews: 1600,
    price: 21,
    category: "makeup",
    type: "eye",
    id: 12,
  },
];

const GetItShipped = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count, setCount] = useState(0);
  console.log('setCount: ', setCount);
  
  const [display, setDisplay] = useState(false);
  return (
    <Box
      w="100%"
      background="#E2E8F0"
      mt="30px"
      h="auto"
      borderRadius="5px"
      p="10px"
    >
      <Heading fontSize="20px">Get It Shipped({count})</Heading>
      <Box
        background="white"
        w={{ lg: "100%" }}
        borderRadius="10px"
        h="auto"
        m="auto"
        p="10px 0px"
        mt="20px"
      >
        <Flex gap={3} p="10px">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            // class="css-psp8z9 eanm77i0"
            data-comp="Icon StyledComponent "
            width="30px"
          >
            <path d="M16.014 3.067c.258 0 .468.209.468.467V6.03h3.256c.149 0 .289.07.376.19l3.795 5.17c.06.082.091.178.091.278v5.216c0 .257-.21.466-.467.466l-2.637.001a3.501 3.501 0 01-6.852-.297H8.956a3.5 3.5 0 01-6.852.297h-.95a.467.467 0 01-.468-.467L.685 11H.393C.177 11 0 10.774 0 10.5s.177-.5.393-.5h.292V9H.348C.156 9 0 8.774 0 8.5S.156 8 .348 8h.337V7H.417C.187 7 0 6.774 0 6.5S.188 6 .417 6h.268v-.15a2.787 2.787 0 012.616-2.778l.17-.005zM5.5 14a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm12 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 1a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-12 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm12 1a.5.5 0 100 1 .5.5 0 000-1zm-12 0a.5.5 0 100 1 .5.5 0 000-1zM15.547 4H3.47c-1.02 0-1.849.83-1.849 1.85V6h3.962c.23 0 .417.226.417.5s-.188.5-.417.5H1.62v1h3.031c.192 0 .348.226.348.5s-.156.5-.348.5H1.621v1h1.986c.216 0 .393.226.393.5s-.177.5-.393.5H1.621v5.417h.38a3.5 3.5 0 016.979-.297h5.04a3.5 3.5 0 016.98.38l-.003-.083h2.067v-4.596l-3.561-4.858h-3.489a.468.468 0 01-.467-.465V4zm3.127 4c.13 0 .25.07.325.187l1.973 3.12c.085.134.095.31.028.455a.393.393 0 01-.351.238H16.44c-.219 0-.397-.197-.397-.44V8.44c0-.243.178-.44.397-.44h2.233zm-.205.88h-1.632v2.24h3.048L18.47 8.88zM9.925 6c.294 0 .535.242.535.536 0 .293-.241.535-.535.535h-1.39A.537.537 0 018 6.536C8 6.242 8.24 6 8.535 6h1.39z"></path>
          </svg>
          <Box w="65%">
            <Text>
              Beauty Insiders enjoy FREE standard shipping on all orders.{" "}
              <Button
                onClick={onOpen}
                variant="link"
                background="none"
                _hover={{ background: "none" }}
              >
                Free Returns
              </Button>{" "}
              on all purchases.*
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Free Returns</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Heading fontSize={17}>Return Products for Free</Heading>
                    <Text>
                      New or gently used products can be returned in person to
                      any Sephora store or by mail with our pre-paid return
                      shipping label. No return shipping or handling fees apply.
                      Buy Online, Pick Up In Store, Instacart and Same-Day
                      Delivery orders can only be returned in store. Gift cards
                      and intimate devices are not eligible for returns.{" "}
                      <Link
                        target="_blank"
                        href="https://www.sephora.com/beauty/returns-exchanges"
                        color="blue"
                      >
                        Learn more
                      </Link>
                    </Text>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      background="black"
                      color="white"
                      w="250px"
                      onClick={onClose}
                    >
                      Got it
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Text>
          </Box>
        </Flex>
        {/* select your samples */}
        <Flex
          flexDirection={{ lg: "row", md: "row", base: "column" }}
          mt="20px"
          justify="space-around"
        >
          <Box
            textAlign="center"
            p="5px"
            h="auto"
            w={{ lg: "45%", md: "45%", base: "100%" }}
            border="2px solid whitesmoke"
          >
            <Text>Shop more awesome makeup products</Text>
            <Flex justify="center" align="center" gap={2}>
              <Button
                fontSize={{ lg: "16px", md: "14px" }}
                variant="link"
                textDecoration="none"
                color="black"
                onClick={() => setDisplay(!display)}
              >
                EXPLORE MORE
              </Button>
              <ChevronDownIcon fontSize="18px" />
            </Flex>
          </Box>
          <Box
            p="5px"
            h="auto"
            w={{ lg: "45%", md: "45%", base: "100%" }}
            border="2px solid whitesmoke"
          >
            <Flex align="center">
              <Box>
                <Text fontWeight="bold">Want free shipping?</Text>
                <Text fontSize="14px">
                  Sign in to get free shipping for this purchase.
                </Text>
              </Box>
              <NavLink to="/login">
                <Button>Sign In</Button>
              </NavLink>
            </Flex>
          </Box>
        </Flex>
        {/* free samples div */}
        {display ? (
          <SimpleGrid
            id="select-your-samples"
            h="auto"
            gap={5}
            p="10px"
            w="90%"
            columns={{ lg: 6, md: 4, base: 3 }}
            m="auto"
            mt="20px"
          >
            {data.map((el) => {
              return (
                <Box key={el.id}>
                  <Image mb="10px" src={el.imageUrl} h="80px" />
                  <NavLink to="/products">
                    <Button
                      _hover={{ backgroundColor: "white", color: "black" }}
                      background={"black"}
                      color={"white"}
                    >
                      View
                    </Button>
                  </NavLink>
                </Box>
              );
            })}
          </SimpleGrid>
        ) : null}
        <CartCrud />
      </Box>
      <Text my={2} fontWeight={"bold"}>
        Add These Under 1250
      </Text>
      <Under15 />
    </Box>
  );
};

export default GetItShipped;
