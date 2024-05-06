// import React from 'react'
import { useEffect } from 'react'
import { passportInstance } from '../config.ts';
import Header from '../components/Header.tsx';
import { Row } from 'react-bootstrap';

const PassportLoginSuccess = () => {
  useEffect(() => {
    passportInstance.loginCallback();
  }, []);
  return (
    <main className='height-page-style'>
      <Header />
      <section className='login'>
        <Row>
        <div className='login-content'>
              <h2>Passport Login Successfull</h2>
              <p>Redirecting....</p>
              
            </div>
        </Row>
      </section>
    </main>
  )
}

export default PassportLoginSuccess