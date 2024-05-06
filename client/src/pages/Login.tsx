// import React from 'react'
// import { useEffect } from 'react'
// import { passportInstance } from '../config.ts';
import Header from '../components/Header.tsx';
import { Row, Col } from 'react-bootstrap';
import { ConfirmPassword, Email, MorraLogo, Password } from '../Imports/ImportImages.ts';
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <main className='height-page-style'>
      <Header />
      <section className='login'>
        <Row>
          <Col lg={6}>
            <div className='logo-area'>
              <img src={MorraLogo} alt='morra-logo' />
            </div>
          </Col>
          <Col lg={6}>
            <div className='login-content'>
              <h2>Create Account</h2>
              <p>To continue, create an account with Morra</p>
              <div className='login-body'>
                <div className='form-group'>
                  <label>EMAIL ADDRESS</label>
                  <div className='field-area'>
                    <input type='text' placeholder='Your email...' />
                    <img src={Email} alt='email' />
                  </div>
                </div>
                <div className='form-group'>
                  <label>PASSWORD</label>
                  <div className='field-area'>
                    <input type='password' placeholder='Password' />
                    <img src={Password} alt='password' />
                  </div>
                </div>
                <div className='form-group'>
                  <label>CONFIRM PASSWORD</label>
                  <div className='field-area'>
                    <input type='password' placeholder='Confirm Password' />
                    <img src={ConfirmPassword} alt='Confirm Password' />
                  </div>
                </div>
                <div>
                  <li className="term-checkbox">
                    <input type="checkbox" name="" id="chk1" />
                    <label htmlFor="chk1">I agree to gamestudio Terms & Conditions </label>
                  </li>
                </div>
                <div className='actions'>
                  <Link to='/' className='custom-btn'>
                    SIGN IN
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </main>
  )
}

export default Login