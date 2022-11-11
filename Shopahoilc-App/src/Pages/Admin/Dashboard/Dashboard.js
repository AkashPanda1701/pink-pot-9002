import React, { useEffect } from 'react'
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
    
  } from '@chakra-ui/react'
import {
    Box,
    Image,
    Text,
    SimpleGrid,
    Button,
    
   } from '@chakra-ui/react';
  import { getAllProducts } from "../../../Redux/products/actions";
  import { useSelector, useDispatch } from "react-redux";
 
function Dashboard() {

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    
    const {
      data: { products: data },
    } = useSelector((store) => store.products);

    // console.log(AllProducts, data);
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllProducts());
    }, [dispatch]);


      return (
<Box >
<SimpleGrid   columns={4}  spacingX='40px' spacingY='50px'>

{data &&
            data.map((item) => (
    <Box  margin="auto" padding={8} border='1px' borderColor='lightblue'>
     <div key={item._id}>
        <Image
          src={item.imageUrl}
          alt={`Picture of ${item.name}`}
          roundedTop="lg"
        />
  <Text as='b'   color="black"> {item.name} </Text> <br />
  <Text as="b" color="grey">Category: {item.category}</Text>
  <Text  color="grey" >Brand: {item.brand}</Text>

   {/* <Text color="grey"> Stars:{item.stars}</Text>  */}
  
  <Text  color="grey" >Price: {item.price}₹</Text>

  <Button  marginTop={5} colorScheme='red' variant='outline'>Delete</Button>
  
   <Button onClick={onOpen}  marginTop={5}   marginLeft="5" colorScheme='blue' variant='outline'>Update</Button>
  
        </div>
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
                <FormLabel> name</FormLabel>
                <Input ref={initialRef} placeholder='Product Name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Category</FormLabel>
                <Input placeholder='like: Mackup,hair..' />
              </FormControl>
              
              <FormControl mt={4}>
                <FormLabel>Brand</FormLabel>
                <Input placeholder='Brand Name ' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Price</FormLabel>
                <Input placeholder='In ₹ ' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
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

export default Dashboard