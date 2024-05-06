// import { useState } from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PlusIcon, ProductImage1, ProductImage2, ProductImage3, ProductImage4 } from '../Imports/ImportImages';
import { Link } from 'react-router-dom';


function AddProduct() {
    // const [key, setKey] = useState('home');
    return (
        <>
            <div className='addproduct-page'>
                <Header />
                <div className='container'>
                <div className='breadcrumb'>
                    <div className='container'>
                        <div className='flexarea'>
                            <Link to=''>
                                Marketplace
                            </Link>
                            <Link to=''>
                            Jewel Run
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div>
                        <h2 className='section-heading'>Add Product</h2>
                    </div>
                    <Row>
                        <Col lg={6}>
                            <div className='tabbox'>
                                <div className='form-area'>
                                    <h4>BASIC INFORMATION</h4>
                                    <div className='form-group'>
                                        <label>INPUT YOUR PRODUCT NAME</label>
                                        <input type='text' placeholder='Enter' />
                                    </div>
                                    <div className='form-group'>
                                        <label>INPUT YOUR DESCRIPTIONS HERE</label>
                                        <textarea rows={9} placeholder="Enter"></textarea>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='tabbox'>
                                <div className='form-area'>
                                    <h4>PRODUCT IMAGE & VIDEO</h4>
                                    <div className='image-container'>
                                        <div>
                                            <img src={ProductImage1} alt="product-image-1" />
                                        </div>
                                        <div>
                                            <img src={ProductImage2} alt="product-image-2" />
                                        </div>
                                        <div>
                                            <img src={ProductImage3} alt="product-image-3" />
                                        </div>
                                        <div>
                                            <img src={ProductImage4} alt="product-image-4" />
                                        </div>
                                        <div className='add-image-container'>
                                            <div className='add-image-section'>
                                                <img src={PlusIcon} alt="product-image-1" />
                                                <span>Add Image</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='tabbox'>
                                <div className=' form-area'>
                                    <h4>PRODUCT PRICE</h4>

                                    <div className='form-group'>
                                        <label>PRODUCT PRICE</label>
                                        <input type='text' placeholder='Enter price' />
                                    </div>
                                    <div className='form-group'>
                                        <label>DISCOUNT PERCENTAGE</label>
                                        <input type='text' placeholder='Enter discount' />

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className='right-tab-manage' style={{marginTop:"-130px"}}>
                            <div className='tabbox category-box'>
                                <div>
                                    <div className=' form-area'>
                                        <h4>CATEGORY</h4>
                                        <div className='form-group'>
                                            <label>PRODUCT CATEGORY</label>
                                            <select>
                                                <option>Select Category</option>
                                                <option>Product 1</option>
                                                <option>Product 2</option>
                                                <option>Product 3</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='tabbox'>
                                <div className=' form-area'>
                                    <h4>SYSTEM REQUIRMENTS</h4>
                                    <div className='form-group'>
                                        <label>SYSTEM REQUIRMENTS</label>
                                        <textarea rows={5} placeholder="Type here"></textarea>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className='add-item'>
                            <button className='custom-btn'>ADD ITEM</button>
                        </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default AddProduct