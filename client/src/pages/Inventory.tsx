import { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    DeleteIcon,
    EditIcon,
    InventoryPic1,
    // InventoryPic2
} from '../Imports/ImportImages';
import { Link } from 'react-router-dom';

function Inventory() {
    const [key, setKey] = useState('home');
    return (
        <div className='inventory-page'>
            <Header />
            <div className='inventory-tabs'>
                <div className='container'>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k: string | any) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Inventory">
                            <div className='tabbox'>
                                <h2 className='section-heading'>
                                    Inventory
                                </h2>
                                <Row>
                                    <Col lg={3} md={4} xs={6}>
                                        <div className='common-styles'>
                                            <div className='picture'>
                                                <img src={InventoryPic1} alt='inventory1' />
                                            </div>
                                            <div className='meta'>
                                                <div className='flexarea'>
                                                    <h3>War Hospital</h3>
                                                    <div>
                                                        <img src={DeleteIcon} alt='delete' />
                                                        <img src={EditIcon} alt='edit' />
                                                    </div>
                                                </div>
                                                <div className='flexarea'>
                                                    <h4>Game</h4>
                                                    <span className='price'>19.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={4} xs={6}>
                                        <div className='common-styles'>
                                            <div className='picture'>
                                                <img src={InventoryPic1} alt='inventory1' />
                                            </div>
                                            <div className='meta'>
                                                <div className='flexarea'>
                                                    <h3>War Hospital</h3>
                                                    <div>
                                                        <img src={DeleteIcon} alt='delete' />
                                                        <img src={EditIcon} alt='edit' />
                                                    </div>
                                                </div>
                                                <div className='flexarea'>
                                                    <h4>Game</h4>
                                                    <span className='price'>19.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={4} xs={6}>
                                        <div className='common-styles'>
                                            <div className='picture'>
                                                <img src={InventoryPic1} alt='inventory1' />
                                            </div>
                                            <div className='meta'>
                                                <div className='flexarea'>
                                                    <h3>War Hospital</h3>
                                                    <div>
                                                        <img src={DeleteIcon} alt='delete' />
                                                        <img src={EditIcon} alt='edit' />
                                                    </div>
                                                </div>
                                                <div className='flexarea'>
                                                    <h4>Game</h4>
                                                    <span className='price'>19.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={4} xs={6}>
                                        <div className='common-styles'>
                                            <div className='picture'>
                                                <img src={InventoryPic1} alt='inventory1' />
                                            </div>
                                            <div className='meta'>
                                                <div className='flexarea'>
                                                    <h3>War Hospital</h3>
                                                    <div>
                                                        <img src={DeleteIcon} alt='delete' />
                                                        <img src={EditIcon} alt='edit' />
                                                    </div>
                                                </div>
                                                <div className='flexarea'>
                                                    <h4>Game</h4>
                                                    <span className='price'>19.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className='add-item'>
                                    <Link to='/addproduct' className='custom-btn'>ADD ITEM</Link>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Activity">
                            <div className='tabbox'>
                                <h2 className='section-heading'>
                                    Activity
                                </h2>
                                <Row>
                                    <Col lg={3} md={4} xs={6}>
                                        <div className='common-styles'>
                                            <div className='picture'>
                                                <img src={InventoryPic1} alt='inventory1' />
                                            </div>
                                            <div className='meta'>
                                                <div className='flexarea'>
                                                    <h3>War Hospital</h3>
                                                    <div>
                                                        <img src={DeleteIcon} alt='delete' />
                                                        <img src={EditIcon} alt='edit' />
                                                    </div>
                                                </div>
                                                <div className='flexarea'>
                                                    <h4>Game</h4>
                                                    <span className='price'>19.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={4} xs={6}>
                                        <div className='common-styles'>
                                            <div className='picture'>
                                                <img src={InventoryPic1} alt='inventory1' />
                                            </div>
                                            <div className='meta'>
                                                <div className='flexarea'>
                                                    <h3>War Hospital</h3>
                                                    <div>
                                                        <img src={DeleteIcon} alt='delete' />
                                                        <img src={EditIcon} alt='edit' />
                                                    </div>
                                                </div>
                                                <div className='flexarea'>
                                                    <h4>Game</h4>
                                                    <span className='price'>19.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={4} xs={6}>
                                        <div className='common-styles'>
                                            <div className='picture'>
                                                <img src={InventoryPic1} alt='inventory1' />
                                            </div>
                                            <div className='meta'>
                                                <div className='flexarea'>
                                                    <h3>War Hospital</h3>
                                                    <div>
                                                        <img src={DeleteIcon} alt='delete' />
                                                        <img src={EditIcon} alt='edit' />
                                                    </div>
                                                </div>
                                                <div className='flexarea'>
                                                    <h4>Game</h4>
                                                    <span className='price'>19.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={4} xs={6}>
                                        <div className='common-styles'>
                                            <div className='picture'>
                                                <img src={InventoryPic1} alt='inventory1' />
                                            </div>
                                            <div className='meta'>
                                                <div className='flexarea'>
                                                    <h3>War Hospital</h3>
                                                    <div>
                                                        <img src={DeleteIcon} alt='delete' />
                                                        <img src={EditIcon} alt='edit' />
                                                    </div>
                                                </div>
                                                <div className='flexarea'>
                                                    <h4>Game</h4>
                                                    <span className='price'>19.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className='add-item'>
                                    <Link to='/addproduct' className='custom-btn'>ADD ITEM</Link>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Inventory