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
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../../Redux/auth/actions";
import { getCart } from "../../Redux/cart/actions";

const initialState = {
  email : "",
  password : ""
}
function Login() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState(initialState);
const authState = useSelector((state) => state.auth.userLogin);
// console.log('authState: ', authState);
const dispatch = useDispatch();
const cartState =useSelector((state) => state.carts)
console.log('cartState: ', cartState);

  React.useEffect(() => {
  }, [onOpen]);
  React.useEffect(() => {
    onOpen();
    if (authState.message==='User does not exist') {
      toast({
        title: authState.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
    if (authState.message==='Password is incorrect') {
      toast({
        title: authState.message,
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
     if(authState.message==='Login successful'){


      dispatch(getCart())
      toast({
        
        title: authState.message ,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });


      setTimeout(() => {
        navigate("/");
      }, 4000);

    }

  }, [ dispatch,onOpen, navigate,authState.error, authState.message, toast]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(authLogin(formData));
  }

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
              <Input type={'email'} placeholder="email" name='email' onChange={handleChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type={'password'} placeholder="password" name='password' onChange={handleChange}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
            onClick={handleSubmit}
            colorScheme="blue" mr={3}>
              Login
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
