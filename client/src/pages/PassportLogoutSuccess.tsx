// import React from 'react'
import { useEffect } from 'react'
import {  LOGOUT_URL, passportInstance } from '../config.ts'; 
import Header from '../components/Header.tsx';
import { Row } from 'react-bootstrap';
import { useIMXContext } from '../context/ImmutableContext.tsx';

const PassportLogoutSuccess = () => {
  const{setuserPassportData,navigate}=useIMXContext()
  useEffect(() => {
    const handle = async () =>{
      await passportInstance.logoutSilentCallback(LOGOUT_URL); 
      setuserPassportData(null)
      navigate("/")
    } 
    handle()
  }, []);
  return (
    <main className='height-page-style'>
      <Header />
      <section className='login'>
        <Row>
        <div className='login-content'>
              <h2>Passport Logout Successfull</h2>
              <p>Redirecting....</p>
              
            </div>
        </Row>
      </section>
    </main>
  )
}

export default PassportLogoutSuccess