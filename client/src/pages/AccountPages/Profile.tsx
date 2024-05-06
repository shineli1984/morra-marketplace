// import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    AccountSettingIcon,
    ActivityIcon,
    ChangePassIcon,
    InventoryIcon,
    LinkValletIcon,
    OffersIcon,
    ProfileIcon,
    ProfilePageImg,
    SignoutIcon
} from '../../Imports/ImportImages';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Profile() {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className='profile-page account-page'>
                    <Row>
                        <Col lg={4}>
                            <div className='left-panel'>
                                <div className='toparea'>
                                    <div className='picture'>
                                        <img src={ProfilePageImg} alt='profile-img' />
                                    </div>
                                    <div className='title'>
                                        <span>Hi,</span>
                                        <h3>John Smith</h3>
                                    </div>
                                </div>
                                <ul>
                                    <li><Link to='/profile' className='active'><img src={ProfileIcon} alt='profileIcon' />Profile</Link></li>
                                    <li><Link to='/changepassword'><img src={ChangePassIcon} alt='change passowrd' />Change password</Link></li>
                                    <li><Link to=''><img src={OffersIcon} alt='offers icon' />Offers</Link></li>
                                    <li><Link to='/accountsetting'><img src={AccountSettingIcon} alt='account icon' />Account setttings</Link></li>
                                    <li><Link to=''><img src={ActivityIcon} alt='activity icon' />Activity</Link></li>
                                    <li><Link to=''><img src={InventoryIcon} alt='inventory icon' />My Inventory</Link></li>
                                    <li><Link to='/linkwallet'><img src={LinkValletIcon} alt='link vallet' />Link wallet to account</Link></li>
                                    <li><Link to=''><img src={SignoutIcon} alt='profileIcon' />Sign out</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className='right-panel'>
                                <div className='iconarea'>
                                    <img src={ProfileIcon} alt='profileicon' />
                                </div>
                                <h2 className='section-heading'>PROFILE</h2>
                                <p className='section-paragraph'>Lorem ipsum dolor sit amet consectetur. Ipsum ultrices pretium nunc sed aliquet duis. Amet morbi eu orci accumsan ultrices malesuada et fermentum.</p>
                                <div className='form-area'>
                                    <h4>PERSONAL DETAILS</h4>
                                    <Row>
                                        <Col lg={6}>
                                            <div className='form-group'>
                                                <label>FIRST NAME*</label>
                                                <input type='text' placeholder='Smith' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='form-group'>
                                                <label>LAST NAME*</label>
                                                <input type='text' placeholder='Paul' />
                                            </div>
                                        </Col>
                                    </Row>
                                    <h4>ADDRESS DETAILS</h4>
                                    <Row>
                                        <Col lg={6}>
                                            <div className='form-group'>
                                                <label>ADDRESS</label>
                                                <input type='text' placeholder='Address line 1' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='form-group'>
                                                <label>ADDRESS</label>
                                                <input type='text' placeholder='Address line 2' />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <div className='form-group'>
                                                <label>CITY</label>
                                                <input type='text' placeholder='City' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <Row>
                                                <Col lg={6}>
                                                    <div className='form-group'>
                                                        <label>REGION</label>
                                                        <input type='text' placeholder='Region' />
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className='form-group'>
                                                        <label>POSTAL CODE</label>
                                                        <input type='text' placeholder='Postal Code' />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='form-group'>
                                                <label>COUNTRY/REGION</label>
                                                <select>
                                                    <option>Select Country</option>
                                                    <option>Country 1</option>
                                                    <option>Country 2</option>
                                                    <option>Country 3</option>
                                                </select>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className='submit-area-form'>
                                        <button className='custom-btn'>UPDATE</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile