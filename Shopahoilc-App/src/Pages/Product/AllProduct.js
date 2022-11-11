import React from "react";
import "./AllProduct.css";
import { useEffect } from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import {
  Accordion,
  Show,
  Hide,
  Img,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PorMenue from "./Pro_component/pro_menue";
import { getAllProducts } from "../../Redux/products/actions";

function AllProduct() {
  const { AllProducts, data } = useSelector((store) => store.products);
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("category");
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts({ category: query }));
  }, [dispatch, query]);

  return (
    <div className="product_body">
      <Hide below="1000px">
        <div className="product_el_one ">
          <h1 Style="font-size:2.1rem">BB & CC Creams</h1>

          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <h5>Price</h5>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div>
                  <input type="checkbox" />
                  <label>Bellow-500</label>
                </div>

                <div>
                  <input type="checkbox" />
                  <label>Bellow-500</label>
                </div>

                <div>
                  <input type="checkbox" />
                  <label>Bellow-500</label>
                </div>

                <div>
                  <input type="checkbox" />
                  <label>Bellow-500</label>
                </div>

                <div>
                  <input type="checkbox" />
                  <label>Bellow-500</label>
                </div>

                <div>
                  <input type="checkbox" />
                  <label>Bellow-500</label>
                </div>

                <div>
                  <label>Max:</label>
                  <input Style={"width:50px"} />
                  <label>Min:</label>
                  <input Style={"width:50px"} />
                </div>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <h5 Style={"font-size=12.5px"}> Ratings</h5>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div>
                  <input type="checkbox" />
                  <label>4 & up</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>3 & up</label>
                </div>

                <div>
                  <input type="checkbox" />
                  <label>2 & up</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>1 & up</label>
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Img
            src="https://pubsaf.global.ssl.fastly.net/prmt/c51f158aecb4ec7f50e6cd8d3c3cc53b"
            m="auto"
            mt="1rem"
            alt="Img"
          />
        </div>
      </Hide>

      <div className="prod_el_main">
        <Img src="https://pubsaf.global.ssl.fastly.net/prmt/a6dc8a737b657f4258f633774d92ed79" />
        <Show below="1000px">
          <PorMenue />
        </Show>
        <div className="product_el_two">
          {data &&
            data.map((el) => (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Link to={`/products/${el._id}`}>
                  <Img src={el.imageUrl} />
                </Link>

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
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {el.numReviews} reviews
                    </Box>
                  </Box>
                  <Box>
                    {el.price * 70}
                    <Box as="span" color="gray.600" fontSize="sm"></Box>
                  </Box>
                </Box>
              </Box>
            ))}
        </div>
      </div>
    </div>
  );
}

export default AllProduct;
