import "./SingleProduct.css";
import data from "./data.json";
import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
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
} from "@chakra-ui/react";

function SingleProduct() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const toast = useToast();
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

    <div className="singleProduct">
      <div>
        <img src={data[0].imageUrl} alt="productImage" />
      </div>
      <div>
        <div className="proNames">
          <p>{data[0].brand}</p>
          <p>{data[0].name}</p>
        </div>
        <div className="proRatings">
          {ratingStar}
          {stars}({reviews} Custumer reviews)
        </div>
        <div className="proPrices">
          <p>
            Old Price : <span>$ {data[0].price + data[0].price / 10}</span>
          </p>
          <p>
            New Price : <span>$ {data[0].price} ( 10% off)</span>
          </p>
        </div>
        <div className="proDetails">
          <ul>
            <li>
              Color : <span>All colors available</span>
            </li>
            <li>
              Available : <span>In Stock</span>
            </li>
            <li>
              Category : <span>{data[0].category}</span>
            </li>
            <li>
              Shipping Area : <span>All over the world</span>
            </li>
            <li>
              Shipping fee : <span>Free shipping</span>
            </li>
          </ul>
        </div>
        <div className="proQuantity">
          <p>Quantity :</p>
          <Flex>
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
        </div>
        <div className="proAdd">
          <button onClick={checkAuth}>Add to Basket</button>
          <div onClick={checkAuth}>
            {fav ? <AiFillHeart /> : <AiOutlineHeart />}
          </div>
        </div>
      </div>

    </div>
  );
}

export default SingleProduct;
