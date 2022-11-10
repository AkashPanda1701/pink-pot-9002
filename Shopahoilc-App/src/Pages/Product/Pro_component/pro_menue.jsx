import {Menu,MenuButton,MenuList,MenuGroup,MenuDivider} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import "../AllProduct.css"
export default function PorMenue(){
    return(<div className="Prod_menu" Style="margin:0.7rem">
             <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList>
  <MenuGroup title='Filter'>
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
       <lable>Max:</lable><input Style={"width:50px"} />
       <lable>Min:</lable><input Style={"width:50px"} />

      </div>
    
    </AccordionPanel>
  </AccordionItem>

      </Accordion>
    </MenuGroup>
    <MenuDivider />

    <MenuGroup title='Filter'>
    <Accordion allowToggle>
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
    </MenuGroup>
    </MenuList>
</Menu>
        </div>
        ) 
    
}

