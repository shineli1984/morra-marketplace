// import React from 'react'
import { useEffect } from 'react'
import Header from '../components/Header.tsx';
import { Row } from 'react-bootstrap';
import { useIMXContext } from '../context/ImmutableContext.tsx';

const PassportLogoutSuccess = () => {
  const{logoutSuccessCallback}=useIMXContext()
  useEffect(() => {
    logoutSuccessCallback()
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