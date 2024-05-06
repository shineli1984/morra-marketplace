// import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AccountSettingIcon, ActivityIcon, ChangePassIcon, Information, InventoryIcon, LinkValletIcon, OffersIcon, ProfileIcon, ProfilePageImg, SignoutIcon, VerifyEmailIcon } from '../../Imports/ImportImages';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function AccountSetting() {
  return (
    <div>
        <Header/>
        <div className='container'>
            <div className='account-setting-page account-page'>
                <Row>
                    <Col lg={4}>
                        <div className='left-panel'>
                            <div className='toparea'>
                                <div className='picture'>
                                    <img src={ProfilePageImg} alt='profile-img'/>
                                </div>
                                <div className='title'>
                                    <span>Hi,</span>
                                    <h3>John Smith</h3>
                                </div>
                            </div>
                            <ul>
                                <li><Link to='/profile' ><img src={ProfileIcon} alt='profileIcon'/>Profile</Link></li>
                                <li><Link to='/changepassword'><img src={ChangePassIcon} alt='change passowrd'/>Change password</Link></li>
                                <li><Link to=''><img src={OffersIcon} alt='offers icon'/>Offers</Link></li>
                                <li><Link to='/accountsetting' className='active'><img src={AccountSettingIcon} alt='account icon'/>Account setttings</Link></li>
                                <li><Link to=''><img src={ActivityIcon} alt='activity icon'/>Activity</Link></li>
                                <li><Link to=''><img src={InventoryIcon} alt='inventory icon'/>My Inventory</Link></li>
                                <li><Link to='/linkwallet'><img src={LinkValletIcon} alt='link vallet'/>Link wallet to account</Link></li>
                                <li><Link to=''><img src={SignoutIcon} alt='profileIcon'/>Sign out</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className='right-panel'>
                            <div className='iconarea'>
                                <img src={AccountSettingIcon} alt='accountsettingicon'/>
                            </div>
                            <h2 className='section-heading'>ACCOUNT SETTINGS</h2>
                            <p className='section-paragraph'>Lorem ipsum dolor sit amet consectetur. Ipsum ultrices pretium nunc sed aliquet duis. Amet morbi eu orci accumsan ultrices malesuada et fermentum.</p>
                            <div className='form-area'>
                                <h4>ACCOUNT INFORMATION</h4>
                                <Row>
                                    <Col lg={6}>
                                        <div className='form-group'>
                                            <label>FIRST NAME*</label>
                                            <div className='manage-input'>
                                                <div className="input-group">
                                                    <input type="text" placeholder="Smith"/>
                                                    <span className="icon"><img src={Information} alt='accountsettingicon'/></span>
                                                </div>
                                                <div className='icon-container'>
                                                    <img src={VerifyEmailIcon} alt='accountsettingicon'/>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='form-group'>
                                            <label>LAST NAME*</label>
                                            <div className='manage-input'>
                                                <div className="input-group">
                                                    <input type="text" placeholder="Smith"/>
                                                    <span className="icon"><img src={Information} alt='accountsettingicon'/></span>
                                                </div>
                                                <div className='icon-container'>
                                                    <img src={VerifyEmailIcon} alt='accountsettingicon'/>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='form-group'>
                                            <label>LANGUAGE</label>
                                            <select>
                                                <option>Select Language</option>
                                                <option>English</option>
                                                <option>Hindi</option>
                                                <option>Gujarati</option>
                                            </select>
                                        </div>
                                    </Col>
                                </Row>
                                <h4>COMPANY</h4>
                                <p className='section-paragraph'>Lorem ipsum dolor sit amet consectetur. Ipsum ultrices pretium nunc sed aliquet duis. Amet morbi eu orci accumsan ultrices malesuada et fermentum.</p>
                                <Row>
                                    <Col lg={6}>
                                        <div className='form-group'>
                                            <label>COMPANY NAME</label>
                                            <input type='text' placeholder='Enter'/>
                                        </div>
                                    </Col>
                                </Row>
                                <h4>COMPANY ADDRESS</h4>
                                <Row>
                                    <Col lg={6}>
                                        <div className='form-group'>
                                            <label>ADDRESS</label>
                                            <input type='text' placeholder='Address line 1'/>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='form-group'>
                                            <label>ADDRESS</label>
                                            <input type='text' placeholder='Address line 2'/>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <div className='form-group'>
                                            <label>CITY</label>
                                            <input type='text' placeholder='City'/>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className='form-group'>
                                                <label>REGION</label>
                                                <input type='text' placeholder='Region'/>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='form-group'>
                                                <label>POSTAL CODE</label>
                                                <input type='text' placeholder='Postal Code'/>
                                            </div>
                                        </Col>
                                    </Row>
                                    </Col>
                                </Row>
                                <div className='submit-area-form'>
                                    <button className='custom-btn'>UPDATE</button>
                                </div>
                            </div>
                            <div className='form-area delete-area'>
                                <h4>DELETE ACCOUNT</h4>
                                <p className='section-paragraph'>Lorem ipsum dolor sit amet consectetur. Ipsum ultrices pretium nunc sed aliquet duis. Amet morbi eu orci accumsan ultrices malesuada et fermentum. </p>
                                <div className='submit-area-form'>
                                    <button className='custom-btn'>REQUEST ACCOUNT DELETE</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AccountSetting