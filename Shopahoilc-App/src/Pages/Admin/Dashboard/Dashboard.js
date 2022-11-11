import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { Box, Image, Text, SimpleGrid, Button } from "@chakra-ui/react";
import { getAllProducts } from "../../../Redux/products/actions";
import { useSelector, useDispatch } from "react-redux";

function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { data } = useSelector((store) => store.products);

  // console.log(AllProducts, data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  //responsive done

  return (
    <Box>
      <SimpleGrid
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={4}
      >
        {data &&
          data.map((item) => (
            <Grid
              border="1px"
              borderColor="lightblue"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box m={6}>
                <div key={item._id}>
                  <Image
                    src={item.imageUrl}
                    alt={`Picture of ${item.name}`}
                    roundedTop="lg"
                  />
                  <Text as="b" color="black">
                    {" "}
                    {item.name.slice(0, 20)}...{" "}
                  </Text>{" "}
                  <br />
                  <Text as="b" color="grey">
                    Category: {item.category}
                  </Text>
                  <Text color="grey">Brand: {item.brand.slice(0, 10)}</Text>
                  {/* <Text color="grey"> Stars:{item.stars}</Text>  */}
                  <Text color="grey">Price: {item.price}₹</Text>
                  <Flex>
                    <Button marginTop={5} colorScheme="red" variant="outline">
                      Delete
                    </Button>

                    <Button
                      onClick={onOpen}
                      marginTop={5}
                      marginLeft="5"
                      colorScheme="blue"
                      variant="outline"
                    >
                      Update
                    </Button>
                  </Flex>
                </div>
              </Box>
            </Grid>
          ))}

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel> name</FormLabel>
                <Input ref={initialRef} placeholder="Product Name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Category</FormLabel>
                <Input placeholder="like: Mackup,hair.." />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Brand</FormLabel>
                <Input placeholder="Brand Name " />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Price</FormLabel>
                <Input placeholder="In ₹ " />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </SimpleGrid>
    </Box>
  );
}

export default Dashboard;
