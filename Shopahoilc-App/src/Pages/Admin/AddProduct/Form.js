import { FormControl, FormLabel, Input, Button, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../Redux/products/actions";
const initialState = {
  name: "",
  imageUrl: "",
  category: "",
  price: 0,
  brand: "",
  numReviews: "",
  stars: 0,
  type: "",
};

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  function handleChange({ target }) {
    let val = target.value;
    if (target.name === "price" || target.name === "stars") {
      val = +target.value;
    }
    setFormData({ ...formData, [target.name]: val });
  }
  function submit() {
    dispatch(addProduct(formData));
  }

<<<<<<< HEAD
  return (
    <FormControl margin="auto" width="70%" bg="white" id="form" ml={40}>
      <Box marginLeft="40">
        <FormLabel>Product Name</FormLabel>
        <Input
          mb="15px"
          width="70%"
=======
   
    return (
      <FormControl 
      // margin="auto" width="70%" bg="white" id="form" ml={40} p={100}
      >

        <Box marginLeft="10%">
        <FormLabel>Product Name</FormLabel>
        <Input
      //   mb="15px"
       width="70%"
>>>>>>> 057a69c8754c928407bae9a32ec7a26e9b9e23d4
          type="text"
          placeholder="Product name"
          name="name"
          onChange={handleChange}
        />
        <FormLabel>Image Url</FormLabel>
        <Input
<<<<<<< HEAD
          mb="15px"
          width="70%"
=======
        // mb="15px"
        width="70%"
>>>>>>> 057a69c8754c928407bae9a32ec7a26e9b9e23d4
          type="url"
          placeholder="Product image url"
          name="imageUrl"
          onChange={handleChange}
        />
        <FormLabel>Category</FormLabel>
        <Input
<<<<<<< HEAD
          mb="15px"
          width="70%"
=======
        // mb="15px"
        width="70%"
>>>>>>> 057a69c8754c928407bae9a32ec7a26e9b9e23d4
          type="text"
          placeholder="product category"
          name="category"
          onChange={handleChange}
        />

        <FormLabel>Brand</FormLabel>
        <Input
<<<<<<< HEAD
          mb="15px"
          width="70%"
=======
        // mb="15px"
        width="70%"
>>>>>>> 057a69c8754c928407bae9a32ec7a26e9b9e23d4
          type="text"
          placeholder="enter brand name"
          name="brand"
          onChange={handleChange}
        />
        <FormLabel>Reviews</FormLabel>
        <Input
          mb="15px"
          width="70%"
          type="number"
          placeholder="No. of Reviews"
          name="numReviews"
          onChange={handleChange}
        />
        <FormLabel>Rating</FormLabel>
        <Input
          mb="15px"
          width="70%"
          type="text"
          placeholder="enter rating"
          name="stars"
          onChange={handleChange}
        />
        <FormLabel>Type</FormLabel>
        <Input
          mb="15px"
          width="70%"
          type="text"
          placeholder="Enter product type"
          name="type"
          onChange={handleChange}
        />

        <FormLabel>Price</FormLabel>
        <Input
<<<<<<< HEAD
          mb="15px"
          width="70%"
=======
        // mb="15px"
        width="70%"
>>>>>>> 057a69c8754c928407bae9a32ec7a26e9b9e23d4
          type="number"
          placeholder="Product price in $"
          name="price"
          onChange={handleChange}
        />
        <br />
        <Button
          onClick={() => submit()}
          mt={4}
          colorScheme="teal"
          type="submit"
        >
          submit
        </Button>

<<<<<<< HEAD
        <Button ml="200" mt={4} colorScheme="red" type="button">
=======
        <Button ml="10%" mt={4} colorScheme="red" type="button">
>>>>>>> 057a69c8754c928407bae9a32ec7a26e9b9e23d4
          reset
        </Button>
      </Box>
    </FormControl>
  );
};
export default Form;
