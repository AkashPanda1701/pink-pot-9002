<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useEffect } from "react";
import { StarIcon } from "@chakra-ui/icons";
import "./Dashboard.css";
import { Link } from "react-router-dom";
>>>>>>> 057a69c8754c928407bae9a32ec7a26e9b9e23d4
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Img,
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
import {
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../../../Redux/products/actions";
import { useSelector, useDispatch } from "react-redux";

function Dashboard() {
<<<<<<< HEAD
  const [product, setProduct] = useState({});
=======
  
>>>>>>> 057a69c8754c928407bae9a32ec7a26e9b9e23d4
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { data } = useSelector((store) => store.products);
<<<<<<< HEAD
=======

  //  console.log( data);

>>>>>>> 057a69c8754c928407bae9a32ec7a26e9b9e23d4
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleformData = ({ target }) => {
    let val = target.value;
    if (target.name === "price") {
      val = +target.value;
    }
    setProduct({ ...product, [target.name]: val });
  };
  const handleSubmit = () => {
    dispatch(updateProduct(product._id, product));
  };
  return (
<<<<<<< HEAD
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
                  <Text color="grey">Price: {item.price}₹</Text>
                  <Flex>
                    <Button
                      marginTop={5}
                      colorScheme="red"
                      variant="outline"
                      onClick={() => dispatch(deleteProduct(item._id))}
                    >
                      Delete
                    </Button>

                    <Button
                      onClick={() => {
                        onOpen();
                        setProduct(item);
                      }}
                      marginTop={5}
=======
    // <Box>
    //   <SimpleGrid
    //     templateColumns={{
    //       base: "repeat(2,1fr)",
    //       md: "repeat(3,1fr)",
    //       lg: "repeat(4,1fr)",
    //     }}
    //     gap={4}
    //   >
    //     {data &&
    //       data.map((item) => (
    //         <Grid
    //           border="1px"
    //           borderColor="lightblue"
    //           alignItems={"center"}
    //           justifyContent={"center"}
    //         >
    //           <Box m={6} >
    //             <div key={item._id}>
    //               <Image
    //                 src={item.imageUrl}
    //                 alt={`Picture of ${item.name}`}
    //                 roundedTop="lg"
    //               />
    //               <Text as="b" color="black">
    //                 {" "}
    //                 {item.name.slice(0, 20)}...{" "}
    //               </Text>{" "}
    //               <br />
    //               <Text as="b" color="grey">
    //                 Category: {item.category}
    //               </Text>
    //               <Text color="grey">Brand: {item.brand.slice(0, 10)}</Text>
    //               {/* <Text color="grey"> Stars:{item.stars}</Text>  */}
    //               <Text color="grey">Price: {item.price}₹</Text>
    //               <Flex>
    //                 <Button marginTop={5} colorScheme="red" variant="outline">
    //                   Delete
    //                 </Button>

    //                 <Button
    //                   onClick={onOpen}
    //                   marginTop={5}
    //                   marginLeft="5"
    //                   colorScheme="blue"
    //                   variant="outline"
    //                 >
    //                   Update
    //                 </Button>
    //               </Flex>
    //             </div>
    //           </Box>
    //         </Grid>
    //       ))}

    //     <Modal
    //       initialFocusRef={initialRef}
    //       finalFocusRef={finalRef}
    //       isOpen={isOpen}
    //       onClose={onClose}
    //     >
    //       <ModalOverlay />
    //       <ModalContent>
    //         <ModalHeader>Create your account</ModalHeader>
    //         <ModalCloseButton />
    //         <ModalBody pb={6}>
    //           <FormControl>
    //             <FormLabel> name</FormLabel>
    //             <Input ref={initialRef} placeholder="Product Name" />
    //           </FormControl>

    //           <FormControl mt={4}>
    //             <FormLabel>Category</FormLabel>
    //             <Input placeholder="like: Mackup,hair.." />
    //           </FormControl>

    //           <FormControl mt={4}>
    //             <FormLabel>Brand</FormLabel>
    //             <Input placeholder="Brand Name " />
    //           </FormControl>

    //           <FormControl mt={4}>
    //             <FormLabel>Price</FormLabel>
    //             <Input placeholder="In ₹ " />
    //           </FormControl>
    //         </ModalBody>

    //         <ModalFooter>
    //           <Button colorScheme="blue" mr={3}>
    //             Save
    //           </Button>
    //           <Button onClick={onClose}>Cancel</Button>
    //         </ModalFooter>
    //       </ModalContent>
    //     </Modal>
    //   </SimpleGrid>
    // </Box>
    <div className="product_el_two">
          {data &&
            data.map((el) => (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
              >
                <Link >
                  <div className="proPageImage">
                    <Img src={el.imageUrl} p="3" />
                    {/* <span className="prolook">Quicklook</span> */}
                  </div>

                  <Box p="6">
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                    >
                      {el.name}
                    </Box>
                    <Box display="flex" mt="2" alignItems="center">
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            color={i < el.stars ? "teal.500" : "gray.300"}
                          />
                        ))}
                    </Box>
                    <Box mt="2" color="gray.600" fontSize="sm">
                      {el.numReviews} reviews
                    </Box>
                    <Box>
                      ₹ {el.price * 81}
                      <Box as="span" color="gray.600" fontSize="sm"></Box>
                    </Box>
                    <Button  colorScheme="red" variant="outline">
                       Delete
                   </Button>

                   <Button
                      onClick={onOpen}
                      
>>>>>>> 057a69c8754c928407bae9a32ec7a26e9b9e23d4
                      marginLeft="5"
                      colorScheme="blue"
                      variant="outline"
                    >
                      Update
                    </Button>
                  </Box>
                </Link>

              </Box>
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
                <FormLabel> Image URL</FormLabel>
                <Input
                  onChange={handleformData}
                  ref={initialRef}
                  type="url"
                  name="imageUrl"
                  value={product.imageUrl}
                />
              </FormControl>
              <FormControl>
                <FormLabel> name</FormLabel>
                <Input
                  onChange={handleformData}
                  ref={initialRef}
                  placeholder="Product Name"
                  name="name"
                  value={product.name}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Category</FormLabel>
                <Input
                  onChange={handleformData}
                  name="category"
                  placeholder="like: Mackup,hair.."
                  value={product.category}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Brand</FormLabel>
                <Input
                  onChange={handleformData}
                  placeholder="Brand Name"
                  name="brand"
                  value={product.brand}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Price</FormLabel>
                <Input
                  onChange={handleformData}
                  placeholder="In ₹ "
                  value={product.price}
                  name="price"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        </div>
  );
}

export default Dashboard;
