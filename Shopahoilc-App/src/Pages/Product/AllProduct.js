import { useState } from "react";
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
  SkeletonCircle,
  SkeletonText,
  Grid,
  Skeleton,
  Button,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PorMenue from "./Pro_component/pro_menue";
import { getAllProducts } from "../../Redux/products/actions";

function AllProduct() {
  let [page, setPage] = useState(1);
  const { data } = useSelector((store) => store.products);
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("category");

  let length;
  if (query === "") {
    length = 216;
  } else if (query === "makeup") {
    length = 40;
  } else if (query === "skincare") {
    length = 58;
  } else if (query === "hair") {
    length = 38;
  } else if (query === "fragrance") {
    length = 37;
  } else if (query === "tools") {
    length = 30;
  } else if (query === "bath") {
    length = 39;
  }

  const {
    AllProducts: { loading },
  } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts({ category: query, page: page }));
  }, [dispatch, query, page]);
  if (loading) {
    return (
      <Grid
        w={{
          base: "100%",
          md: "90%",
          lg: "80%",
        }}
        m="auto"
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap="10"
        p="10"
      >
        {new Array(20).fill(0).map(() => (
          <Box w=" 100%" m="auto" boxShadow="lg" bg="white">
            <Skeleton size="10" h="180px" />
            <SkeletonText
              w="80%"
              m="auto"
              mb="20px"
              mt="4"
              noOfLines={4}
              spacing="4"
            />
          </Box>
        ))}
      </Grid>
    );
  }
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
            src="https://pubsaf.global.ssl.fastly.net/prmt/2b3c4a8bcedc1e3939b716fe3b3dc904"
            m="auto"
            mt="1rem"
            alt="Img"
          />
        </div>
      </Hide>

      <div className="prod_el_main">
        <Img src="https://pubsaf.global.ssl.fastly.net/prmt/b37a3d4788a3a4c3f8a92f194d801148" />
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
                boxShadow="md"
              >
                <Link to={`/products/${el._id}`}>
                  <div className="proPageImage">
                    <Img src={el.imageUrl} p="3" />
                    <span className="prolook">Quicklook</span>
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
                  </Box>
                </Link>
              </Box>
            ))}
        </div>
        <div className="pagination">
          <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </Button>
          <Button>{page}</Button>
          <Button
            disabled={page === Math.ceil(length / 20)}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AllProduct;
