// import React from 'react'
import { Logo ,GoTop } from '../Imports/ImportImages'

function Footer() {

  return (
    <div>
        <footer>
            <div className='container'>
                <div className='footer-wrapper position-relative'>
                    <div style={{position:'absolute',right:'0',width:'fit-content',cursor:'pointer',top:'16px'}} onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>
                        <img src={GoTop} width={'35px'} alt='go-top' />
                    </div>
                    <div className='logo-content'>
                        <a href=''>
                            <img src={Logo} alt='logo'/>
                        </a>
                        <p className='section-paragraph'>
                        © 2024 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
                        VAT included in all prices where applicable.
                        </p>
                    </div>
                    <div className='footer-bottom'>
                        <div className='footer-box'>
                            <ul className='nav-list'>
                                <li><a href=''>Home</a></li>
                                <li><a href=''>About us</a></li>
                                <li><a href=''>Marketplace</a></li>
                                <li><a href=''>Inventory</a></li>
                            </ul>
                        </div>
                        <p className='section-paragraph'>
                        Powered By
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer