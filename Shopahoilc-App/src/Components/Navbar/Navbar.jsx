import "./Navbar.css";
import Logo from "./Logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch, BsTruck, BsBag } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const Auth = false;
  const user = true;
  const Navigate = useNavigate();
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
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div>
            <div className="navSearch">
              <BsSearch />
              <input type="search" placeholder="search" />
            </div>
          </div>
          <div>
            <div>
              <BsTruck fontSize="20px" onClick={() => Navigate("/orders")} />
            </div>
            |
            <div>
              <AiOutlineHeart
                fontSize="20px"
                onClick={() => Navigate("/wishlist")}
              />
            </div>
            |
            <div>
              <BsBag fontSize="20px" onClick={() => Navigate("/cart")} />
            </div>
            |
            <div>
              {Auth ? (
                user ? (
                  <AiOutlineUser fontSize="20px" />
                ) : (
                  <RiAdminLine fontSize="20px" />
                )
              ) : (
                <p onClick={() => Navigate("/login")}>
                  <AiOutlineUser fontSize="20px" />
                  <span className="navLogin">Login</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </nav>
      <nav className="nav3">
        <div className="navWrapper">
          <input type="radio" name="slide" id="menuBtn" />
          <input type="radio" name="slide" id="cancelBtn" />

          <ul className="navLink">
            <label for="cancelBtn" className="btn navCancel">
              <MdOutlineCancel />
            </label>
            <li>
              <Link to="" className="desktopItem">
                New
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobileItem">
                New
              </label>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All New</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Just Dropped</Link>
                      </li>
                      <li>
                        <Link to="">New Makeup</Link>
                      </li>
                      <li>
                        <Link to="">New Skincare</Link>
                      </li>
                      <li>
                        <Link to="">New Haircare</Link>
                      </li>
                      <li>
                        <Link to="">New Fragrance</Link>
                      </li>
                      <li>
                        <Link to="">New Bath & Body New</Link>
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
                        <Link to="">The Next Big Thing</Link>
                      </li>
                      <li>
                        <Link to="">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="">Quizzes & Buying Guides</Link>
                      </li>
                      <li>
                        <Link to="">Clean Beauty Guide</Link>
                      </li>
                      <li>
                        <Link to="">Clean+ Planet</Link>
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
              <Link to="">MakeUp</Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All Makeup</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Face Foundation</Link>
                      </li>
                      <li>
                        <Link to="">BB & CC Creams</Link>
                      </li>
                      <li>
                        <Link to="">Tinted Moisturizer</Link>
                      </li>
                      <li>
                        <Link to="">Concealer</Link>
                      </li>
                      <li>
                        <Link to="">Face Primer</Link>
                      </li>
                      <li>
                        <Link to="">Contour Color</Link>
                      </li>
                      <li>
                        <Link to="">Correct Face Sets</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Eye</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Eye Palettes</Link>
                      </li>
                      <li>
                        <Link to="">Mascara</Link>
                      </li>
                      <li>
                        <Link to="">Eyeliner</Link>
                      </li>
                      <li>
                        <Link to="">Eyebrow</Link>
                      </li>
                      <li>
                        <Link to="">Eyelash Serums</Link>
                      </li>
                      <li>
                        <Link to="">Eye Primer</Link>
                      </li>
                      <li>
                        <Link to="">Eye Sets</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Lip</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Lipstick</Link>
                      </li>
                      <li>
                        <Link to="">Lip Gloss</Link>
                      </li>
                      <li>
                        <Link to="">Lip Balm & Treatment</Link>
                      </li>
                      <li>
                        <Link to="">Liquid Lipstick</Link>
                      </li>
                      <li>
                        <Link to="">Lip Stain</Link>
                      </li>
                      <li>
                        <Link to="">Lip Liner</Link>
                      </li>
                      <li>
                        <Link to="">Lip Plumper</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Cheek</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Blush</Link>
                      </li>
                      <li>
                        <Link to="">Bronzer</Link>
                      </li>
                      <li>
                        <Link to="">Highlighter</Link>
                      </li>
                      <li>
                        <Link to="">Contour</Link>
                      </li>
                      <li>
                        <Link to="">Accessories</Link>
                      </li>
                      <li>
                        <Link to="">Makeup Palettes</Link>
                      </li>
                      <li>
                        <Link to="">Cheek Palettes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">New</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="">Clean Makeup</Link>
                      </li>
                      <li>
                        <Link to="">Vegan Makeup</Link>
                      </li>
                      <li>
                        <Link to="">Mini Size</Link>
                      </li>
                      <li>
                        <Link to="">Value Size</Link>
                      </li>
                      <li>
                        <Link to=""> Sephora Collection</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="">Skincare </Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All Skincare</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Moisturizers</Link>
                      </li>
                      <li>
                        <Link to="">Night Creams</Link>
                      </li>
                      <li>
                        <Link to="">Face Oils</Link>
                      </li>
                      <li>
                        <Link to="">Mists & Essences</Link>
                      </li>
                      <li>
                        <Link to="">BB & CC</Link>
                      </li>
                      <li>
                        <Link to="">Creams Cleansers</Link>
                      </li>
                      <li>
                        <Link to="">Exfoliators Makeup</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Treatments</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Face Serums</Link>
                      </li>
                      <li>
                        <Link to="">Blemish & Acne</Link>
                      </li>
                      <li>
                        <Link to="">Facial Peels</Link>
                      </li>
                      <li>
                        <Link to="">Face Masks</Link>
                      </li>
                      <li>
                        <Link to="">Sheet Masks</Link>
                      </li>
                      <li>
                        <Link to="">Masks</Link>
                      </li>
                      <li>
                        <Link to="">Eye Masks</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Eye Care</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Eye Creams</Link>
                      </li>
                      <li>
                        <Link to="">Eye Masks</Link>
                      </li>
                      <li>
                        <Link to="">Sunscreen</Link>
                      </li>
                      <li>
                        <Link to="">Lip Balms</Link>
                      </li>
                      <li>
                        <Link to="">Wellness</Link>
                      </li>
                      <li>
                        <Link to="">High Tech Tools</Link>
                      </li>
                      <li>
                        <Link to="">Body Sunscreen</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Shop by Concern</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Acne & Blemishes</Link>
                      </li>
                      <li>
                        <Link to="">Anti-Aging</Link>
                      </li>
                      <li>
                        <Link to="">Dark Spots</Link>
                      </li>
                      <li>
                        <Link to="">Pores</Link>
                      </li>
                      <li>
                        <Link to="">Dryness</Link>
                      </li>
                      <li>
                        <Link to="">Fine Lines & Wrinkles</Link>
                      </li>
                      <li>
                        <Link to="">Dullness</Link>
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
              <Link to="">Hair</Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All Hair</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Shampoo </Link>
                      </li>
                      <li>
                        <Link to="">Conditioner</Link>
                      </li>
                      <li>
                        <Link to="">Scalp Scrub</Link>
                      </li>
                      <li>
                        <Link to="">Hair oil</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Treatments</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Hair Masks</Link>
                      </li>
                      <li>
                        <Link to="">Leave-in Conditioners</Link>
                      </li>
                      <li>
                        <Link to="">Hair Oil</Link>
                      </li>
                      <li>
                        <Link to="">Hair Serums</Link>
                      </li>
                      <li>
                        <Link to="">Scalp Treatments</Link>
                      </li>
                      <li>
                        <Link to="">Hair Supplements</Link>
                      </li>
                      <li>
                        <Link to="">Thinning & Hair Loss</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">All Hair</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Shampoo </Link>
                      </li>
                      <li>
                        <Link to="">Conditioner</Link>
                      </li>
                      <li>
                        <Link to="">Scalp Scrub</Link>
                      </li>
                      <li>
                        <Link to="">Hair oil</Link>
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
              <Link to="">Fragrance</Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All Fragrances</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Just Dropped</Link>
                      </li>
                      <li>
                        <Link to="">New Makeup</Link>
                      </li>
                      <li>
                        <Link to="">New Skincare</Link>
                      </li>
                      <li>
                        <Link to="">New Haircare</Link>
                      </li>
                      <li>
                        <Link to="">New Fragrance</Link>
                      </li>
                      <li>
                        <Link to="">New Bath & Body New</Link>
                      </li>
                      <li>
                        <Link to="">Tools & Brushes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="rowBox">
                    <header className="navHeader">Fragrance</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">The Next Big Thing</Link>
                      </li>
                      <li>
                        <Link to="">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="">Quizzes & Buying Guides</Link>
                      </li>
                      <li>
                        <Link to="">Clean Beauty Guide</Link>
                      </li>
                      <li>
                        <Link to="">Clean+ Planet</Link>
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
              <Link to="">Tools & Brushes</Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All New</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Just Dropped</Link>
                      </li>
                      <li>
                        <Link to="">New Makeup</Link>
                      </li>
                      <li>
                        <Link to="">New Skincare</Link>
                      </li>
                      <li>
                        <Link to="">New Haircare</Link>
                      </li>
                      <li>
                        <Link to="">New Fragrance</Link>
                      </li>
                      <li>
                        <Link to="">New Bath & Body New</Link>
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
                        <Link to="">The Next Big Thing</Link>
                      </li>
                      <li>
                        <Link to="">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="">Quizzes & Buying Guides</Link>
                      </li>
                      <li>
                        <Link to="">Clean Beauty Guide</Link>
                      </li>
                      <li>
                        <Link to="">Clean+ Planet</Link>
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
              <Link to="">Bath & Body</Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All New</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Just Dropped</Link>
                      </li>
                      <li>
                        <Link to="">New Makeup</Link>
                      </li>
                      <li>
                        <Link to="">New Skincare</Link>
                      </li>
                      <li>
                        <Link to="">New Haircare</Link>
                      </li>
                      <li>
                        <Link to="">New Fragrance</Link>
                      </li>
                      <li>
                        <Link to="">New Bath & Body New</Link>
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
                        <Link to="">The Next Big Thing</Link>
                      </li>
                      <li>
                        <Link to="">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="">Quizzes & Buying Guides</Link>
                      </li>
                      <li>
                        <Link to="">Clean Beauty Guide</Link>
                      </li>
                      <li>
                        <Link to="">Clean+ Planet</Link>
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
              <Link to="">Beauty Under $20</Link>
              <div className="megaBox">
                <div className="contentBox">
                  <div className="rowBox">
                    <header className="navHeader">All New</header>
                    <ul className="linkBox">
                      <li>
                        <Link to="">Just Dropped</Link>
                      </li>
                      <li>
                        <Link to="">New Makeup</Link>
                      </li>
                      <li>
                        <Link to="">New Skincare</Link>
                      </li>
                      <li>
                        <Link to="">New Haircare</Link>
                      </li>
                      <li>
                        <Link to="">New Fragrance</Link>
                      </li>
                      <li>
                        <Link to="">New Bath & Body New</Link>
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
                        <Link to="">The Next Big Thing</Link>
                      </li>
                      <li>
                        <Link to="">Bestsellers</Link>
                      </li>
                      <li>
                        <Link to="">Quizzes & Buying Guides</Link>
                      </li>
                      <li>
                        <Link to="">Clean Beauty Guide</Link>
                      </li>
                      <li>
                        <Link to="">Clean+ Planet</Link>
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
          <label for="menuBtn" className="btn navMenu">
            <FaBars />
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
