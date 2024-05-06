import { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AccountSettingIcon, ActivityIcon, ChangePassIcon, Close, InventoryIcon, LinkValletIcon, OffersIcon, ProfileIcon, ProfilePageImg, SignoutIcon } from '../../Imports/ImportImages';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Modal } from 'react-bootstrap';

function ChangePass() {
    const [showModal, setShowModal] = useState(false);

    const handleModalShow = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

    // const handleChangePassword = () => {
    //     handleModalClose();
    // };
  return (
    <div>
        <Header/>
        <div className='container'>
            <div className='changepassword-page account-page'>
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
                                <li><Link to='/profile'><img src={ProfileIcon} alt='profileIcon'/>Profile</Link></li>
                                <li><Link to='/changepassword' className='active'><img src={ChangePassIcon} alt='change passowrd'/>Change password</Link></li>
                                <li><Link to=''><img src={OffersIcon} alt='offers icon'/>Offers</Link></li>
                                <li><Link to='/accountsetting'><img src={AccountSettingIcon} alt='account icon'/>Account setttings</Link></li>
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
                                <img src={ChangePassIcon} alt='profileicon'/>
                            </div>
                            <h2 className='section-heading'>Change Password</h2>
                            <p className='section-paragraph'>Lorem ipsum dolor sit amet consectetur. Ipsum ultrices pretium nunc sed aliquet duis. Amet morbi eu orci accumsan ultrices malesuada et fermentum.</p>
                            <div className='form-area'>
                                <Row>
                                    <Col lg={12}>
                                        <div className='form-group'>
                                            <label>CURRENT PASSWORD*</label>
                                            <input type='password' placeholder='Password'/>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className='form-group'>
                                            <label>NEW PASSWORD*</label>
                                            <input type='password' placeholder='New Password'/>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className='form-group'>
                                            <label>CONFIRM NEW PASSWORD*</label>
                                            <input type='password' placeholder='Confirm New Password'/>
                                        </div>
                                    </Col>
                                </Row>
                                <div className='submit-area-form'>
                                    <button className='custom-btn' onClick={handleModalShow}>CHANGE PASSWORD</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Modal show={showModal} className='model-background' onHide={handleModalClose} centered>
                        <Modal.Body className='modelbody-background'>
                        <div className="close-icon" onClick={handleModalClose}>
                            <img src={Close} alt='close'/>
                        </div>
                            <h2 className='section-heading'>UNSAVED DETAILS</h2>
                            <p className='section-paragraph'>You are attemptind to leave this page without saving your changes</p>
                            <button className='leave-btn custom-btn'>LEAVE WITHOUT SAVING</button>
                            <button className='dont-leave-btn custom-btn' >DONT LEAVE</button>
                        </Modal.Body>
                    </Modal>
            </Row>

            </div>

        </div>

        
        <Footer/>
    </div>
  )
}

export default ChangePass