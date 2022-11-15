import "./Navbar.css";
import Logo from "./Logo.jpg";
import logo2 from "./logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch,  BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../Redux/cart/actions";
import { AUTH_LOGOUT } from "../../Redux/auth/actionTypes";
const Navbar = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const {carts} = useSelector((state) => state.carts);
  const toast = useToast();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <div>
      <nav className="nav1">
        <Link to="/signup">
          <p className="navDis">
            Get FREE shipping on all orders when you join Beauty Insider.
            Exclusions/terms apply.<b>† LEARN MORE</b>▸
          </p>
        </Link>
      </nav>
      <nav className="nav2">
        <div>
          <div className="navLogo">
            <Link to="/">
              <img src={Logo} alt="logo" className="navLogo1" />
              <img src={logo2} alt="logo" className="navLogo2" />
            </Link>
          </div>
          <div>
            <div className="navSearch">
              <BsSearch />
              <input type="search" placeholder="search" />
            </div>
          </div>
          <div className="navIcons">
            <div>
              <RiAdminFill
                fontSize="20px"
                onClick={() => Navigate("/admin/dashboard")}
              />
            </div>
            |
            <div>
              <BsBag fontSize="20px" onClick={() => Navigate("/cart")} />
            </div>
              <div style={{backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '0 5px',position: 'absolute', margin:'0 55px 20px 0', fontSize: '12px'}}>{carts?.length}</div>
            |
            <div>
              <p>
                <Link to="/signup">
                  <AiOutlineUser fontSize="20px" />
                </Link>
                {auth.data.isAuthenticated ? (
                  <Button
                    h="30px"
                    w="70px"
                    colorScheme={'red'}
                    onClick={() => {
                      dispatch({ type: AUTH_LOGOUT });
                      toast({
                        title: "Logged out successfully",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                        position: "top",
                      });
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <span className="navLogin">
                    <Popover>
                      <PopoverTrigger>
                        <Button>Get Started</Button>
                      </PopoverTrigger>
                      <Portal className="xxx">
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverBody p={6}>
                            <Link to="/login" className="xxx">
                              <Button w='80%' borderRadius={'20px'} ml={5} colorScheme="blue">Login</Button>
                            </Link>
                            <br></br>
                            <br></br>
                            <Link to="/signup">
                              <Button borderRadius={'20px'} w='80%' ml={5} bg='blackAlpha.600' color='white' _hover={{bg:'blackAlpha.900'}}>Sign Up</Button>
                            </Link>
                          </PopoverBody>
                        </PopoverContent>
                      </Portal>
                    </Popover>
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </nav>
      <nav className="nav3">
        <div className="navWrapper">
          <input type="radio" name="slide" id="menuBtn" />
          <input type="radio" name="slide" id="cancelBtn" />

          <ul className="navLink">
            <label htmlFor="cancelBtn" className="btn navCancel">
              <MdOutlineCancel />
            </label>
            <li>
              <input type="checkbox" id="showMega" />
              <Link to={`/products?category=`}>
                 New
              </Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All New</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Just Dropped</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">New Makeup</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">New Skincare</Link>
                      </li>
                      <li>
                        <Link to="/products?category=hair">New Haircare</Link>
                      </li>
                      <li>
                        <Link to="/products?category=fragrance">New Fragrance</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">New Bath & Body New</Link>
                      </li>
                      <li>
                        <Link to="">Tools & Brushes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">All Products</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="/products?category=makeup">The Next Big Thing</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Quizzes & Buying Guides</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Clean Beauty Guide</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Clean+ Planet</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-global-navigation-button-holiday-hub-us-can-release.jpg?imwidth=590"
                      alt=""
                    />
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/2022-6-9-haus-lady-gaga-bundle-b-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to={`/products?category=makeup`} className="desktopItem">
                Make Up
              </Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All Makeup</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="/products?category=skincare">Face Foundation</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">BB & CC Creams</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">Tinted Moisturizer</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">Concealer</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">Face Primer</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">Contour Color</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">Correct Face Sets</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Eye</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="/products?category=bath">Eye Palettes</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Mascara</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Eyeliner</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Eyebrow</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Eyelash Serums</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Eye Primer</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Eye Sets</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Lip</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="/products?category=makeup">Lipstick</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Lip Gloss</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Lip Balm & Treatment</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Liquid Lipstick</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Lip Stain</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Lip Liner</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Lip Plumper</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Cheek</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="/products?category=tools">Blush</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Bronzer</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Highlighter</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Contour</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Accessories</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Makeup Palettes</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Cheek Palettes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">New</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="/products?category=bath">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Clean Makeup</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Vegan Makeup</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Mini Size</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Value Size</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath"> Sephora Collection</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to={`/products?category=skincare`} className="desktopItem">
                Skincare
              </Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All Skincare</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="/products?category=bath">Moisturizers</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Night Creams</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Face Oils</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Mists & Essences</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">BB & CC</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Creams Cleansers</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Exfoliators Makeup</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Treatments</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="/products?category=skincare">Face Serums</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">Blemish & Acne</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">Facial Peels</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">Face Masks</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">Sheet Masks</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">Masks</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">Eye Masks</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Eye Care</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="/products?category=makeup">Eye Creams</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Eye Masks</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Sunscreen</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Lip Balms</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Wellness</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">High Tech Tools</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Body Sunscreen</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Shop by Concern</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="/products?category=bath">Acne & Blemishes</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Anti-Aging</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Dark Spots</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Pores</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Dryness</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Fine Lines & Wrinkles</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Dullness</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/2020-12-23-site-dt-botnav-seph-coll-US.jpg?imwidth=294"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/products?category=hair">Hair</Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All Hair</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="/products?category=bath">Shampoo </Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Conditioner</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Scalp Scrub</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Hair oil</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Treatments</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="/products?category=bath">Hair Masks</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Leave-in Conditioners</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Hair Oil</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Hair Serums</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Scalp Treatments</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Hair Supplements</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Thinning & Hair Loss</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">All Hair</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="/products?category=bath">Shampoo </Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Conditioner</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Scalp Scrub</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Hair oil</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/productimages/sku/s2266765-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230"
                      alt=""
                    />
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/slotting-sale-generic-site-desktop-global-navigation-button_copy-only.jpg?imwidth=294"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/products?category=fragrance">Fragrance</Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All Fragrances</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="/products?category=bath">Just Dropped</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">New Makeup</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">New Skincare</Link>
                      </li>
                      <li>
                        <Link to="/products?category=hair">New Haircare</Link>
                      </li>
                      <li>
                        <Link to="/products?category=fragrance">New Fragrance</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">New Bath & Body New</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Tools & Brushes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Fragrance</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="/products?category=tools">The Next Big Thing</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Quizzes & Buying Guides</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Clean Beauty Guide</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Clean+ Planet</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/productimages/sku/s1377159-main-zoom.jpg?imwidth=230"
                      alt=""
                    />
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/productimages/sku/s513168-main-zoom.jpg?imwidth=230"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/products?category=tools">Tools & Brushes</Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All New</header>
                    <ul className="linkBox">
                    <li>
                        <Link to="/products?category=bath">Just Dropped</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">New Makeup</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">New Skincare</Link>
                      </li>
                      <li>
                        <Link to="/products?category=hair">New Haircare</Link>
                      </li>
                      <li>
                        <Link to="/products?category=fragrance">New Fragrance</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">New Bath & Body New</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Tools & Brushes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">All Products</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="/products?category=tools">The Next Big Thing</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Quizzes & Buying Guides</Link>
                      </li>
                      <li>
                        <Link to="/products?category=fragrance">Clean Beauty Guide</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Clean+ Planet</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-global-navigation-button-holiday-hub-us-can-release.jpg?imwidth=590"
                      alt=""
                    />
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/2022-6-9-haus-lady-gaga-bundle-b-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/products?category=bath">Bath & Body</Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All New</header>
                    <ul className="linkBox">
                    <li>
                        <Link to="/products?category=bath">Just Dropped</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">New Makeup</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">New Skincare</Link>
                      </li>
                      <li>
                        <Link to="/products?category=hair">New Haircare</Link>
                      </li>
                      <li>
                        <Link to="/products?category=fragrance">New Fragrance</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">New Bath & Body New</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Tools & Brushes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">All Products</header>
                    <ul className="linkBox">
                    <li>
                        <Link to="/products?category=tools">The Next Big Thing</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Quizzes & Buying Guides</Link>
                      </li>
                      <li>
                        <Link to="/products?category=fragrance">Clean Beauty Guide</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Clean+ Planet</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-global-navigation-button-holiday-hub-us-can-release.jpg?imwidth=590"
                      alt=""
                    />
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/2022-6-9-haus-lady-gaga-bundle-b-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/products?category=skincare">Beauty Under $20</Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All New</header>
                    <ul className="linkBox">
                    <li>
                        <Link to="/products?category=bath">Just Dropped</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">New Makeup</Link>
                      </li>
                      <li>
                        <Link to="/products?category=skincare">New Skincare</Link>
                      </li>
                      <li>
                        <Link to="/products?category=hair">New Haircare</Link>
                      </li>
                      <li>
                        <Link to="/products?category=fragrance">New Fragrance</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">New Bath & Body New</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Tools & Brushes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">All Products</header>
                    <ul className="linkBox">
                    <li>
                        <Link to="/products?category=tools">The Next Big Thing</Link>
                      </li>
                      <li>
                        <Link to="/products?category=bath">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="/products?category=makeup">Quizzes & Buying Guides</Link>
                      </li>
                      <li>
                        <Link to="/products?category=fragrance">Clean Beauty Guide</Link>
                      </li>
                      <li>
                        <Link to="/products?category=tools">Clean+ Planet</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-global-navigation-button-holiday-hub-us-can-release.jpg?imwidth=590"
                      alt=""
                    />
                  </div>
                  <div className="rowBox">
                    <img
                      src="https://www.sephora.com/contentimages/meganav/large/2022-6-9-haus-lady-gaga-bundle-b-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <label htmlFor="menuBtn" className="btn navMenu">
            <FaBars />
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
