import "./SingleProduct.css";
import Data from "./data.json";
import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useToast,
  Select,
} from "@chakra-ui/react";
const responsive1 = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 9,
    slidesToSlide: 9,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};
function SingleProduct() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const toast = useToast();
  const data = Data[0];
  const [fav, setFav] = useState(true);
  const auth = true;
  const stars = data[0].stars;
  const reviews = data[0].numReviews;
  const handleChange = (value) => setValue(value);
  const checkAuth = () => {
    if (auth) {
      setFav(!fav);
      toast({
        title: "Product Added",
        description: "We have added your product",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Login Required",
        description: "Cannot add products without login",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };
  console.log(value);
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  console.log(ratingStar);
  useEffect(() => {
    setLoading(false);
  }, []);
  console.log(data);
  if (loading) {
    return <div></div>;
  }

  return (
    <>
      <div className="singleProduct">
        <div>
          <img src={data[0].imageUrl} alt="productImage" />
        </div>
        <div>
          <div className="proNames">
            <h1>{data[0].brand}</h1>
            <p>{data[0].name}</p>
          </div>
          <div className="proRatings">
            {ratingStar}
            {stars}
            <span>( {reviews} Custumer reviews )</span>
          </div>
          <div className="proPrices">
            <p>
              Old Price :{" "}
              <span className="proOld">
                $ {data[0].price + data[0].price / 10}
              </span>
            </p>
            <p>
              New Price : <span>$ {data[0].price} ( 10% off)</span>
            </p>
          </div>
          <div className="proDetails">
            <h1>About The Product :</h1>
            <ul>
              <li>
                <span className="proTick">
                  <TiTick />
                </span>
                Color : <span>All colors available</span>
              </li>
              <li>
                <span className="proTick">
                  <TiTick />
                </span>
                Available : <span>In Stock</span>
              </li>
              <li>
                <span className="proTick">
                  <TiTick />
                </span>
                Category : <span>{data[0].category}</span>
              </li>
              <li>
                <span className="proTick">
                  <TiTick />
                </span>
                Shipping Area : <span>All over the world</span>
              </li>
              <li>
                <span className="proTick">
                  <TiTick />
                </span>
                Shipping fee : <span>Free shipping</span>
              </li>
            </ul>
          </div>
          <div className="proQuantity">
            <p>Quantity :</p>
            <Flex className="proSlider">
              <NumberInput
                maxW="100px"
                mr="2rem"
                value={value}
                onChange={handleChange}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Slider
                flex="1"
                focusThumbOnChange={false}
                value={value}
                onChange={handleChange}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize="sm" boxSize="32px" children={value} />
              </Slider>
            </Flex>
            <Select placeholder="Select Size" className="proSlider" width="sm">
              <option value="option1">Small</option>
              <option value="option2">Medium</option>
              <option value="option3">Large</option>
            </Select>
          </div>
          <div className="proAdd">
            <button onClick={checkAuth}>Add to Basket</button>
            <div onClick={checkAuth}>
              {fav ? <AiFillHeart /> : <AiOutlineHeart />}
            </div>
          </div>
        </div>
      </div>
      <div className="proContainer">
        <h1 className="homeHead">You may also like</h1>
        <div className="hc1">
          <Carousel
            responsive={responsive1}
            customTransition="1s"
            transitionDuration={1000}
          >
            {Data[1].map((elem, index) => {
              return (
                <div key={index} className="proCon">
                  <div>
                    <img src={elem.imageUrl} alt="proImg" />
                    <span className="homeLook">Quiclook</span>
                  </div>
                  <div>
                    <h1>{elem.brand}</h1>
                    <p>{elem.name}</p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
