    import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AccountSettingIcon, ActivityIcon, ChangePassIcon, InventoryIcon, LinkValletIcon, OffersIcon, ProfileIcon, ProfilePageImg, SignoutIcon, WalletIcon } from '../../Imports/ImportImages';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function LinkWallet() {
  return (
    <div>
        <Header/>
        <div className='container'>
            <div className='linkwallet-page account-page'>
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
                                <li><Link to='/changepassword'><img src={ChangePassIcon} alt='change passowrd'/>Change password</Link></li>
                                <li><Link to=''><img src={OffersIcon} alt='offers icon'/>Offers</Link></li>
                                <li><Link to='/accountsetting'><img src={AccountSettingIcon} alt='account icon'/>Account setttings</Link></li>
                                <li><Link to=''><img src={ActivityIcon} alt='activity icon'/>Activity</Link></li>
                                <li><Link to=''><img src={InventoryIcon} alt='inventory icon'/>My Inventory</Link></li>
                                <li><Link to='/linkwallet' className='active'><img src={LinkValletIcon} alt='link vallet'/>Link wallet to account</Link></li>
                                <li><Link to=''><img src={SignoutIcon} alt='profileIcon'/>Sign out</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className='right-panel'>
                            <div className='iconarea'>
                                <img src={LinkValletIcon} alt='profileicon'/>
                            </div>
                            <h2 className='section-heading'>LINK WALLET</h2>
                            <p className='section-paragraph'>Lorem ipsum dolor sit amet consectetur. Ipsum ultrices pretium nunc sed aliquet duis. Amet morbi eu orci accumsan ultrices malesuada et fermentum.</p>
                            <div className='centered-container'>
                                    <img src={WalletIcon} alt="Wallet-Icon" />
                                    <div className='submit-area-form'>
                                        <button className='custom-btn'>LINK WALLET TO ACCOUNT</button>
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

export default LinkWallet