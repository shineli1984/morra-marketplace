import "../App.css";
import {  useState } from "react";
import {
  DropdownSm,
  Logo,
  Menu,
  CartIcon,
  UserIcon,
  ProfileImg,
  Close,
  EHT,
  Signout,
  MorraSign,
  // WalletIcon,
} from "../Imports/ImportImages";
import { Link,useNavigate } from "react-router-dom";
import { useIMXContext } from "../context/ImmutableContext";


const Header = () => {
  const navigate = useNavigate();
  const{userPassportData}=useIMXContext()

  const handle_connectWallet = () => {
    navigate('/connectwallet');
  };

  // Profile popup open
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // mobile popup open
  const [isMobileNav, setIsMobileNav] = useState(false);



  return (
    <>

      <header>
        <div className="header-wrapper">
          <div
            className="toggle-btn d-lg-none d-block"
            onClick={() => setIsMobileNav(true)}
          >
            <img src={Menu} alt="menu" />
          </div>
          <div
            className="logo"
            style={{ zIndex: isMobileNav ? "9" : undefined }}
          >
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className={`navigation-items ${isMobileNav ? "active" : null}`}>
            {isMobileNav ? (
              <div onClick={() => setIsMobileNav(false)}>
                <img src={Close} width={"25px"} alt="close" />
              </div>
            ) : null}
            <ul>
              <li>
                <Link to="/profile">Marketplace</Link>
              </li>
              <li>
                <Link to="/inventory">Inventory</Link>
              </li>
              <li className="d-lg-none d-block">
                <Link to="/itempage">About</Link>
              </li>
            </ul>
          </div>
          <div className="cart-login">
            <span className="about">
              {" "}
              <Link to="/itempage">About</Link>
            </span>
            <span>
              <img width={"22px"} src={CartIcon} alt="cart" />
              Cart{" "}
              <span
                style={{ fontSize: "14px", padding: "0", paddingLeft: "5px" }}
              >
                (2)
              </span>
              <img src={DropdownSm} alt="dropdown" />
            </span>
            <div className="header-btn">
              <button onClick={() => userPassportData?setIsProfileOpen(true):handle_connectWallet()} className="mx-3">
                <img
                  src={UserIcon}
                  width={"18px"}
                  style={{ marginRight: "8px" }}
                  alt="usericon"
                />
                <span className="d-lg-block d-none">{userPassportData?`${userPassportData.email.split('@')[0]}`:"Connect Wallet"}</span>
                <img
                  src={DropdownSm}
                  className="d-lg-block d-none"
                  style={{ paddingLeft: "7px" }}
                  alt="dropdown"
                />
              </button>
     
            </div>
          </div>
          {/* <div className='admin d-lg-none d-block'>
                    <img src={Admin} alt='admin'/>
                </div> */}
        </div>

        {/* PROFILE POPUP */}

        <div className={`profile-popup ${isProfileOpen ? "active" : null}`}>
          <div className="profile-wrapper">
            <div className="profile-header">
              <div>
                <div className="picture">
                  <img src={ProfileImg} width={"60px"} alt="profile-img" />
                </div>
                <div>
                  <h4>John Due</h4>
                  <span>View profile</span>
                </div>
              </div>
              <div onClick={() => setIsProfileOpen(false)}>
                <img src={Close} width={"25px"} alt="close" />
              </div>
            </div>
            <div className="profile-body">
              <ul>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/">Offers</Link>
                </li>
                <li>
                  <Link to="/accountsetting">Account settings</Link>
                </li>
                <li>
                  <Link to="/">Activity</Link>
                </li>
              </ul>
              <div className="wallet">
                <div className="flexarea">
                  <div>
                    <div className="picture">
                      <img src={EHT} alt="eht" />
                    </div>
                    <span>ETH</span>
                  </div>
                  <span>1500</span>
                </div>
                <div className="flexarea">
                  <div>
                    <div className="picture">
                      <img src={MorraSign} width={"25px"} alt="morra" />
                    </div>
                    <span>MORRA</span>
                  </div>
                  <span>600</span>
                </div>
              </div>
            </div>
            <div className="profile-bottom">
              <Link to="/signup" className="custom-btn d-block">
                <img src={Signout} alt="signout" />
                SIGN OUT
              </Link>
            </div>
          </div>
        </div>

        {/* PROFILE POPUP */}
      </header>
   
    </>
  );
};

export default Header;
