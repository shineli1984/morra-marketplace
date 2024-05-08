// import React from 'react'
import { useEffect, useState } from "react";
import { PUBLISHABLE_KEY, passportInstance } from "../config.ts";
import Header from "../components/Header.tsx";
import { Row, Col } from "react-bootstrap";
import { MorraLogo } from "../Imports/ImportImages.ts";
import { checkout, config } from "@imtbl/sdk";
import { useIMXContext } from "../context/ImmutableContext.tsx";
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
// const checkoutSDK = new checkout.Checkout();
const ConnectWallet = () => {
  const{getUserPassportData,setImxConnectionData,navigate}=useIMXContext()

  
  const [connect, 
    setConnect
  ] =
    useState<checkout.Widget<typeof checkout.WidgetType.CONNECT>>();

  
  const Connect__Passport__Handle = async () => {
    try {
 
      const baseConfig1 = {
        environment: config.Environment.SANDBOX,
        publishableKey: PUBLISHABLE_KEY,
      };

      const checkoutSDK1 = new checkout.Checkout({
        baseConfig: baseConfig1,
        passport: passportInstance,
      });
      const widgets = await checkoutSDK1.widgets({
        config: { theme: checkout.WidgetTheme.DARK },
      });
      const connect = widgets.create(checkout.WidgetType.CONNECT);
      setConnect(connect);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  
  useEffect(() => {
    if (!connect) return;

    connect.mount("connect");

    connect.addListener(
      checkout.ConnectEventType.SUCCESS,
      (data: checkout.ConnectionSuccess) => {
        console.log("success", data);
        setImxConnectionData(data)
        getUserPassportData()
        navigate('/');

        // connect.unmount();
      }
    );
    connect.addListener(
      checkout.ConnectEventType.FAILURE,
      (data: checkout.ConnectionFailed) => {
        console.log("failure", data);
        getUserPassportData()

      }
    );
    connect.addListener(checkout.ConnectEventType.CLOSE_WIDGET, () => {
      getUserPassportData()
      connect.unmount();
        navigate('/');

    });
  }, [connect]);

  
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
              <div id="connect"></div>
            </div>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default ConnectWallet;
