import React from 'react'
import "./AllProduct.css" 
import {useEffect,useState} from "react"
import axios from "axios"
import { StarIcon,ChevronDownIcon } from '@chakra-ui/icons'
import { Show, Hide } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,Image,Button
} from '@chakra-ui/react'
import PorMenue from './Pro_component/pro_menue'


function AllProduct() {
  const [data,setdata]=useState() 
  useEffect(()=>{
    axios("http://localhost:3004/post").then(res=>setdata(res.data))
  },[])

  return (
    <div>
      {/* <div>Navebar</div>   */}
      <div>
        <div className="product_body">
          <Hide below="1000px">
        <div  className='product_el_one ' >
          <h1 Style="font-size:2.1rem" >BB & CC Creams</h1>


        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <h5>Price</h5>
          
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <div>
     <input type="checkbox"/>
      <lable>Bellow-500</lable>
      </div>

      <div>
     <input type="checkbox"/>
      <lable>Bellow-500</lable>
      </div>

      <div>
     <input type="checkbox"/>
      <lable>Bellow-500</lable>
      </div>

       <div>
     <input type="checkbox"/>
      <lable>Bellow-500</lable>
      </div>

      <div>
     <input type="checkbox"/>
      <lable>Bellow-500</lable>
      </div>

      <div>
     <input type="checkbox"/>
      <lable>Bellow-500</lable>
      </div>

      <div>
       <lable>Max:</lable><input Style={"width:50px"}  />
       <lable>Min:</lable><input Style={"width:50px"}  />

      </div>
    
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <h5 Style={"font-size=12.5px"}>  Ratings</h5>
        
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div>
      <input type="checkbox"/>
      <lable>
        4 & up
      </lable>
    </div>
    <div>
      <input type="checkbox"/>
      <lable>
        3 & up
      </lable>
    </div>

    <div>
      <input type="checkbox"/>
      <lable>
        2 & up
      </lable>
    </div>
    <div>
      <input type="checkbox"/>
      <lable>
        1 & up
      </lable>
    </div>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<img src="https://pubsaf.global.ssl.fastly.net/prmt/c51f158aecb4ec7f50e6cd8d3c3cc53b" Style="margin:auto;margin-top:1rem"/>
        </div>
        </Hide>


       


        <div className='prod_el_main'>
          <img src="https://pubsaf.global.ssl.fastly.net/prmt/a6dc8a737b657f4258f633774d92ed79" />
          <Show below="1000px">
   <PorMenue/>
        </Show>
       <div className='product_el_two' >
        
          {data && data.map(el=>(
              <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Image src={el.imageUrl}/>
        
              <Box p='6'>
        
                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={1}
                >
                  {el.name}
                </Box>
         <Box display='flex' mt='2' alignItems='center'>
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < el.stars ? 'teal.500' : 'gray.300'}
                      />
                    ))}
                  <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    {el.numReviews} reviews
                  </Box>
                </Box>
                <Box>
                  {el.price*70}
                  <Box as='span' color='gray.600' fontSize='sm'>
                    
                  </Box>
                </Box>
        
               
              </Box>
            </Box>
          ))}
          </div>
          </div>
        </div>
        
      </div>
      {/* <div>Footer</div> */}
    </div>
  )
}

export default AllProduct
