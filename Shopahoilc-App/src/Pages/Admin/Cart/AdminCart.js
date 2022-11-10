import React from "react";
import {FormLabel,Input} from "@chakra-ui/react"
import reducer from "../reducer";
import {Box,
Image,
Text,
Button,
SimpleGrid,
} from "@chakra-ui/react"
import { useState, useReducer , useEffect} from "react";
import axios from "axios";
  const initialState = {
    name: "",
  };

function AdminCart() {
  const [reducerState, dispatch] = useReducer(reducer, initialState);

  const [data, setProd] = useState([])
  useEffect(() => {
      axios.get("http://localhost:8080/data").then((d) => {
        setProd(d.data);
      });
    }, []);
   // console.log(data)

  return (
    <div>
       <FormLabel >Enter Cart Id :</FormLabel>
        <Input
        borderColor="black"
        mb="15px"
       width="30%"
          type="text"
          placeholder=" Enter Product Id"
          value={reducerState.name}
          onChange={(e) =>
            dispatch({
              type: "UPDATE",
              value: e.target.value,
              key: "name"
            })
          }
        />
        <SimpleGrid mt={10}  columns={4}  spacingX='40px' spacingY='50px'>
    {data.map((item) => (
    <Box  margin="auto" padding={8} border='1px' borderColor='lightblue'>
     <div key={item.id}>
        <Image
          src={item.imageUrl}
          alt={`Picture of ${item.name}`}
          roundedTop="lg"
        />
  <Text as='b'   color="black"> {item.name} </Text> <br />
  <Text as="b" color="grey">Category: {item.category}</Text>
  <Text  color="grey" >Brand: {item.brand}</Text>

   <Text color="grey"> Stars:{item.stars}</Text> 
  
  <Text  color="grey" >Price: {item.price}</Text>

  <Button  marginTop={5} colorScheme='red' variant='outline'>Cancle</Button>
  
  
        </div>
        </Box>

      ))}
</SimpleGrid>
    </div>
  );
}

export default AdminCart;
