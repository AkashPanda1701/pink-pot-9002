import {
  Button,
  FormControl,
  FormLabel,
  Img,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  React.useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose} size={{base:'sm',md:'lg'}}>
        <ModalOverlay 
        onClick={()=>{
          navigate('/')
        }}
        />
        <ModalContent>
          <ModalHeader>Login / Start Shopping</ModalHeader>
           <Img src='https://shopyourwardrobe.com/wp-content/uploads/2013/01/cost-of-being-a-shopaholic.jpg'/>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type={'email'} placeholder="email" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type={'password'} placeholder="password" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button
              onClick={() => {
                onClose();
                navigate("/");
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Login;
