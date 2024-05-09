// import React from 'react'
import { useEffect } from "react";
import Header from "../components/Header.tsx";
import { Row, Col } from "react-bootstrap";
import { MorraLogo } from "../Imports/ImportImages.ts";
import { useIMXContext } from "../context/ImmutableContext.tsx";
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
// const checkoutSDK = new checkout.Checkout();
const ConnectWallet = () => {
  const{Connect__Passport__Handle}=useIMXContext()

  
  useEffect(() => {
    Connect__Passport__Handle();
  }, []);

  return (
    <main className="height-page-style">
      <Header />
      <section className="login">
        <Row>
          <Col lg={6}>
            <div className="logo-area">
              <img src={MorraLogo} alt="morra-logo" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="login-content">
              {/* <h2>Connect with:</h2> */}
              <div id="connectModal"></div>
            </div>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default ConnectWallet;
