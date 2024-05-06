import { useState, useEffect } from 'react';
import { Heart, NextIcon2, PreviousIcon2 } from '../Imports/ImportImages';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useWindowDimensions from './WindowDimensions';

interface Product {
    img: string;
    title: string;
    subTitle: string;
    price: string;
    salePrice: string | null;
}

interface ProductListingProps {
    products: Product[];
}

const ProductListing = ({ products }: ProductListingProps) => {
    const { width } = useWindowDimensions();
    const [activeFilter] = useState(width < 993 ? false : true);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 40;

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    // Calculate total number of pages
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Function to handle page change
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    // Function to handle next page
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Function to handle previous page
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            {/* Render current products */}
            <Row>
                {currentProducts.map((product, index) => (
                    <Col className='common-styles' xs={6} lg={activeFilter ? '3' : '2'} key={index}>
                        <div className='slide-item'>
                            <div className='picture'>
                                <img src={product.img} width={'100%'} alt={product.title} />
                                <div className='hoveritem'>
                                    <div className='heart'>
                                        <img src={Heart} width={'14px'} alt='heart' />
                                    </div>
                                    <span>buy now</span>
                                </div>
                            </div>
                            <div className='meta'>
                                <div className='flexarea'>
                                    <h3>{product.title}</h3>
                                    {product.salePrice === null ? null : <span>sale</span>}
                                </div>
                                <div className='flexarea'>
                                    <h4>{product.subTitle}</h4>
                                    <span className='price'>{product.price}</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
            {/* Render pagination controls */}
            <div className='bottom-navigation'>
                {/* Previous page button */}
                <div>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        <img src={PreviousIcon2} width={'8px'} alt='prev-icon1' />
                    </button>
                    {/* Page numbers */}
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button className='number' key={i + 1} onClick={() => handlePageChange(i + 1)} disabled={currentPage === i + 1}>
                            {i + 1}
                        </button>
                    ))}
                    {/* Next page button */}
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        <img src={NextIcon2} width={'8px'} alt='next-icon1' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductListing;
