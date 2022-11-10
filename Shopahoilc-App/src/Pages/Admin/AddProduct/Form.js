import {
    FormControl,
    FormLabel,
    Input,
    Button,Box
  } from "@chakra-ui/react";
  import reducer from "../reducer";
  import { useReducer } from "react";
  const initialState = {
    name: "",
    url: "",
    category: "",
    price : "",
    brand: ""
  };
  
  const Form = () => {
    const [reducerState, dispatch] = useReducer(reducer, initialState);
  
    function submit() {
      console.log({
        name: reducerState.name,
        Imageurl: reducerState.Imageurl,
        category: reducerState.category,
        price: reducerState.price,
        brand: reducerState.brand,
      });
    }

   
    return (
      <FormControl margin="auto" width="70%" bg="white" id="form" ml={40} p={100}>

        <Box marginLeft="40">
        <FormLabel>Product Name</FormLabel>
        <Input
        mb="15px"
       width="70%"
          type="text"
          placeholder="Product name"
          value={reducerState.name}
          onChange={(e) =>
            dispatch({
              type: "UPDATE",
              value: e.target.value,
              key: "name"
            })
          }
        />
        <FormLabel>Image Url</FormLabel>
        <Input
        mb="15px"
        width="70%"
          type="url"
          placeholder="Product image url"
          value={reducerState.Imageurl}
          onChange={(e) =>
            dispatch({
              type: "UPDATE",
              value: e.target.value,
              key: "Imageurl"
            })
          }
        />
        <FormLabel>Category</FormLabel>
        <Input
        mb="15px"
        width="70%"
          type="text"
          placeholder="like... Mackup,hair and mant more"
          value={reducerState.category}
          onChange={(e) =>
            dispatch({
              type: "UPDATE",
              value: e.target.value,
              key: "category"
            })
          }
        />

<FormLabel>Brand</FormLabel>
        <Input
        mb="15px"
        width="70%"
          type="text"
          placeholder="enter brand name"
          value={reducerState.brand}
          onChange={(e) =>
            dispatch({
              type: "UPDATE",
              value: e.target.value,
              key: "brand"
            })
          }
        />

        <FormLabel>Price</FormLabel>
        <Input
        mb="15px"
        width="70%"
          type="number"
          placeholder="in indian ruppes..."
          value={reducerState.price}
          onChange={(e) =>
            dispatch({
              type: "UPDATE",
              value: e.target.value,
              key: "price"
            })
          }
        />
        <br />
        <Button onClick={() => submit()} mt={4} colorScheme="teal" type="submit">
          submit
        </Button>

        <Button ml="200"mt={4} colorScheme="red" type="button">
          reset
        </Button>

        </Box>
      </FormControl>
    );
  };
  export default Form;
  