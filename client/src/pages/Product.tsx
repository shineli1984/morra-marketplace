import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {
    // HeartIcon,
    // BannerImage2,
    Rating,
    AvatarLogo,
    AwardBadge,
    Information,
    DropdownW,
    IOS,
    ANDROID
} from '../Imports/ImportImages';
import Accordion from 'react-bootstrap/Accordion';
import AccordionBox from '../components/AccordionBox';
// import DataTable from '../components/DataTable';
import { ListingSlidesData, productListing } from '../Resource/localData';
import ProductBox from '../components/ProductBox';
// import { slidesData } from '../Resource/localData';
import Slider from 'react-slick';
import { settings, settingsThumbs } from '../Resources/Slider';
import useWindowDimensions from '../components/WindowDimensions';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import { settingsMain2, settingsThumbs } from '../Resources/Slider';


function Product(
    // props:any
) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [allowThumbnailSlide, setAllowThumbnailSlide] = useState(true);

    const handleThumbnailClick = (index: number) => {
        setCurrentSlideIndex(index);
        // Disable the thumbnail slider from sliding temporarily
        setAllowThumbnailSlide(false);
        if (slider2) {
            slider2.slickGoTo(index);
        }
    };

    useEffect(() => {
        // Re-enable thumbnail slider sliding after a short delay
        const timer = setTimeout(() => {
            setAllowThumbnailSlide(true);
        }, 1000); // Adjust the delay time as needed
        return () => clearTimeout(timer);
    }, [currentSlideIndex]);



    // slider
    const [nav1, setNav1] = useState<any | null>(null);
    const [nav2, setNav2] = useState<any | null>(null);
    const [slider1, setSlider1] = useState<any | null>(null);
    const [slider2, setSlider2] = useState<any | null>(null);


    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    }, [slider1, slider2]);

    const settingsMain2 = {
        // infinite: true,
        // slidesToShow: 1,
        // slidesToScroll: 0,
        // autoplay : true,
        // arrows: true,
        // fade: true,
        // // asNavFor: nav2,
        // // afterChange: (index) => setCurrentSlideIndex(index)
        // responsive: [
        //     {
        //       breakpoint: 640,
        //       settings: {
        //         fade : true,
        //         autoplay: false,
        //         slidesToShow: 1,
        //         arrows: false,
        //         slidesToScroll: 1,
        //       }
        //     }
        //   ]
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 0,
        autoplay: false,
        arrows: true,
        fade: true,
        beforeChange: () => {
            // Allow thumbnail slider to slide again before main slider slides
            setAllowThumbnailSlide(true);
        }
    };

    const mobsettingsThumbs = {
        // infinite: true,
        // slidesToShow: 3,
        // slidesToScroll: 1,
        // arrows: false,
        // focusOnSelect: true,
        // swipeToSlide: true,
        // // asNavFor: nav1,
        // autoplay: false, 
        // touchMove: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        swipeToSlide: true,
        autoplay: false, // Enable/disable autoplay based on allowThumbnailSlide state
        touchMove: true,
        draggable: allowThumbnailSlide
    };

    //  const goToNext = () => {
    //     let newIndex = currentSlideIndex + 3;
    //     if (newIndex >= ListingSlidesData.length) {
    //         newIndex = ListingSlidesData.length - 1;
    //     }
    //     setCurrentSlideIndex(newIndex);
    //     if (slider1 && slider2) {
    //         slider1.slickGoTo(newIndex);
    //         slider2.slickGoTo(newIndex);
    //     }
    // };

    // const goToPrev = () => {
    //     let newIndex = currentSlideIndex - 3;
    //     if (newIndex < 0) {
    //         newIndex = 0;
    //     }
    //     setCurrentSlideIndex(newIndex);
    //     if (slider1 && slider2) {
    //         slider1.slickGoTo(newIndex);
    //         slider2.slickGoTo(newIndex);
    //     }
    // };

    // const handleThumbnailClick = (index) => {
    //     setCurrentSlideIndex(index);
    //     if (slider2) {
    //         // Set the flag to prevent thumbnail slider from sliding
    //         setAllowThumbnailSlide(false);
    //         slider2.slickGoTo(index);
    //     }
    // };

    // const handleThumbnailClick = (index) => {
    //     setCurrentSlideIndex(index);
    //     if (slider2) {
    //         // Disable autoplay temporarily
    //         slider2.slickPause();
    //         slider2.slickGoTo(index);
    //         // Enable autoplay after a delay (adjust the delay time as needed)
    //         setTimeout(() => {
    //             slider2.slickPlay();
    //         }, 10000); // 1000 milliseconds = 1 second
    //     }
    // };

    const [key, setKey] = useState('home');

    const { width } = useWindowDimensions();
    // const [searchQuery, setSearchQuery] = useState('');
    // const [tableData, setTableData] = useState([
    //     { column1: 'Transfer', column2: '0.920 ETH', column3: 'SamaxX', column4: 'Virgo_NFT_Liquidity_P...', column5: '13d ago' },
    //     { column1: 'Sale', column2: '0.779 WETH', column3: 'SamaxX', column4: 'Virgo_NFT_Liquidity_P...', column5: '13d ago' },
    //     { column1: 'Transfer', column2: '0.920 ETH', column3: 'Tkoll', column4: 'SamaxX', column5: '28d ago' },
    //     { column1: 'Sale', column2: '0.779 WETH', column3: 'SamaxX', column4: 'Virgo_NFT_Liquidity_P...', column5: '13d ago' },
    //     { column1: 'Transfer', column2: '0.920 ETH', column3: 'Tkoll', column4: 'SamaxX', column5: '28d ago' }
    // ]);
    // interface SelectedItem {
    //     name: string;
    //     id: number;
    // }
    // const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);

    // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSearchQuery(event.target.value);
    // };

    // const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === 'Enter') {
    //         const firstFilteredItem = tableData.find(item => item.column1.toLowerCase().startsWith(searchQuery.toLowerCase()));
    //         if (firstFilteredItem) {
    //             handleRowClick(firstFilteredItem);
    //         } else {
    //             setSelectedItems([]);
    //         }
    //     }
    // };

    // const handleRowClick = (item: any) => {
    //     const firstWord = item.column1.split(' ')[0];
    //     if (!selectedItems.includes(firstWord)) {
    //         setSelectedItems([...selectedItems, { name: firstWord, id: Math.random() }]);
    //     }
    // };

    // const handleRowKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, item: any) => {
    //     if (event.key === 'Enter') {
    //         handleRowClick(item);
    //     }
    // };
    // const filteredData = tableData.filter((item) =>
    //     item.column1.toLowerCase().startsWith(searchQuery.toLowerCase())
    // );

    // const clearAllSelectedItems = () => {
    //     setSelectedItems([]);
    // };

    // const deleteItem = (id: any) => {
    //     setSelectedItems(selectedItems.filter((item: any) => item.id !== id));
    // };

    return (
        <div>
            <Header />
            <div className='item-page product-gamepage'>
                <div className='breadcrumb'>
                    <div className='container'>
                        <div className='flexarea'>
                            <Link to=''>
                                Games
                            </Link>
                            <Link to=''>
                                Avatar: Frontiers of Pandora
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='items-grid'>
                    <div className='container'>
                        <h2 className='section-heading'>Holigan #899</h2>
                        <div className='rating'>
                            <img src={Rating} alt='rating1' />
                            <img src={Rating} alt='rating1' />
                            <img src={Rating} alt='rating1' />
                            <img src={Rating} alt='rating1' />
                            <img src={Rating} alt='rating1' />
                            <span>
                                5.0
                            </span>
                        </div>
                        <Row>
                            <Col lg={8}>
                                <div className='item-box'>
                                    {width > 993 ? (
                                        <>
                                            <Slider {...settingsMain2} asNavFor={nav2} ref={slider => (setSlider1(slider))}>
                                                {ListingSlidesData.map((slide ,index) =>
                                                    <div key={index} className='banner-content'>
                                                        <img className="slick-slide-image" alt='image' src={width < 640 ? slide.imageUrl : slide.imageUrl} />
                                                    </div>
                                                )}
                                            </Slider>
                                            <div className="thumbnail-slider-wrap">
                                                <Slider
                                                    {...settingsThumbs}
                                                    asNavFor={nav1}
                                                    ref={slider => (setSlider2(slider))}>
                                                    {ListingSlidesData.map((slide) =>
                                                        <div className="slick-slide" key={slide.id}>
                                                            <img className="slick-slide-image" src={slide.imageUrl} />
                                                        </div>
                                                    )}
                                                </Slider>
                                            </div>
                                        </>
                                    ) : (
                                        null
                                    )}
                                    <Accordion defaultActiveKey="0">
                                        <AccordionBox eventKey="0" title="Description">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                            </p>
                                            <div className='flexarea'>
                                                <div className='info'>
                                                    <span>Genres</span>
                                                    <span>Shooter</span>
                                                </div>
                                                <div className='info'>
                                                    <span>Features</span>
                                                    <span>Multiplayer, Extraction, Strategy</span>
                                                </div>
                                            </div>
                                        </AccordionBox>
                                    </Accordion>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className='item-info'>
                                    {width < 993 ? (
                                        <>
                                            <div>
                                                <Slider className='product-slider' {...settingsMain2} ref={slider => (setSlider2(slider))}>
                                                    {ListingSlidesData.map((slide) =>
                                                        <div className='banner-content' key={slide.id}>
                                                            <img className="slick-slide-image" alt='image' src={slide.imageUrl} />
                                                        </div>
                                                    )}
                                                </Slider>
                                                <div className="thumbnail-slider-wrap">
                                                    <div>
                                                        <Slider {...mobsettingsThumbs} ref={slider => (setSlider1(slider))}>
                                                            {ListingSlidesData.map((slide, index) =>
                                                                <div className="slick-slide" key={slide.id} onClick={() => handleThumbnailClick(index)}>
                                                                    <img className="slick-slide-image" src={slide.imageUrl} alt="Slide" />
                                                                </div>
                                                            )}
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        null
                                    )}
                                    <div className='timer'>
                                        <img src={AvatarLogo} alt='avatarlogo' />
                                    </div>
                                    <div className='price'>
                                        <h4>FREE</h4>
                                        <div className='blockchain'>
                                            BLOCKCHAIN / NFT SUPPORTED
                                        </div>
                                        <div className='actions'>
                                            <button className='custom-btn'>JOIN WAITLIST</button>
                                            <button className='custom-btn'>CHAT</button>
                                            {/* <button className='custom-btn'>ADD TO CART</button> */}
                                            {/* <div className='heart'>
                                        <img src={HeartIcon} alt='heart'/>
                                    </div> */}
                                        </div>
                                    </div>
                                    <div className='gamemode'>
                                        <div className='flexarea'>
                                            <div>
                                                <h4>Developer</h4>
                                            </div>
                                            <div>
                                                <span>Morra Games <img src={AwardBadge} alt='award-badge' /></span>
                                            </div>
                                        </div>
                                        <div className='flexarea'>
                                            <div>
                                                <h4>Publishers</h4>
                                            </div>
                                            <div>
                                                <span>Morra Games<img src={Information} alt='information' /></span>
                                            </div>
                                        </div>
                                        <div className='flexarea'>
                                            <div>
                                                <h4>Token</h4>
                                            </div>
                                            <div>
                                                <span>Yes</span>
                                            </div>
                                        </div>
                                        <div className='flexarea'>
                                            <div>
                                                <h4>Blockchain</h4>
                                            </div>
                                            <div>
                                                <span>Immutable zkEVM</span>
                                            </div>
                                        </div>
                                        <div className='flexarea'>
                                            <div>
                                                <h4>Release Date</h4>
                                            </div>
                                            <div>
                                                <span>Early Access</span>
                                            </div>
                                        </div>
                                        <div className='flexarea'>
                                            <div>
                                                <h4>Platform</h4>
                                            </div>
                                            <div>
                                                <img src={IOS} alt='ios' />
                                                <img src={ANDROID} alt='ios' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='editions'>
                                        <img src={DropdownW} alt='dropdown' />
                                        See All Editions
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                {/* LATEST ITEMS */}
                <section className='collections item-packages common-styles'>
                    <div className='container'>
                        <div className='section-wrapper'>
                            <h2 className='section-heading'>In-game Items Package</h2>
                            <div className='style-item-slider'>
                                <Slider {...settings}>
                                    {
                                        productListing.map((item, index) => (
                                            <div key={index}>
                                                <ProductBox data={item} />
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
                {/* LATEST ITEMS */}
                {/* SYSTEM REQUIREMENTS */}
                <section className='system-requirements'>
                    <div className='container'>
                        <div className='requirements-info'>
                            <h2 className='section-heading'>System Requirements</h2>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k: any) => setKey(k)}
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="IOS">
                                    <Row>
                                        <Col xs={6}>
                                            <div className='gamemode'>
                                                <h4>Minimum</h4>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>OS</h4>
                                                    </div>
                                                    <div>
                                                        <span>IOS</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Processor</h4>
                                                    </div>
                                                    <div>
                                                        <span>3.2 GHz Dual Core Processor</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Memory</h4>
                                                    </div>
                                                    <div>
                                                        <span>6 GB</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Storage</h4>
                                                    </div>
                                                    <div>
                                                        <span>30 GB</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Direct X</h4>
                                                    </div>
                                                    <div>
                                                        <span>11</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Graphics</h4>
                                                    </div>
                                                    <div>
                                                        <span>GeForce GTX 660, Radeon R7 <br />
                                                            370 or equivalent with 2 GB of <br />
                                                            Video RAM</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Login Accounts Required</h4>
                                                    </div>
                                                    <div>
                                                        <span>Morra Games</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Languages Supported</h4>
                                                    </div>
                                                    <div>
                                                        <span>Audio: English  |  Text: English</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={6}>
                                            <div className='gamemode'>
                                                <h4>Recommended</h4>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>OS</h4>
                                                    </div>
                                                    <div>
                                                        <span>IOS</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Processor</h4>
                                                    </div>
                                                    <div>
                                                        <span>3.2 GHz Dual Core Processor</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Memory</h4>
                                                    </div>
                                                    <div>
                                                        <span>6 GB</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Storage</h4>
                                                    </div>
                                                    <div>
                                                        <span>30 GB</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Direct X</h4>
                                                    </div>
                                                    <div>
                                                        <span>11</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Graphics</h4>
                                                    </div>
                                                    <div>
                                                        <span>GeForce GTX 660, Radeon R7 <br />
                                                            370 or equivalent with 2 GB of <br />
                                                            Video RAM</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Login Accounts Required</h4>
                                                    </div>
                                                    <div>
                                                        <span>Morra Games</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Languages Supported</h4>
                                                    </div>
                                                    <div>
                                                        <span>Audio: English  |  Text: English</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="profile" title="ANDROID">
                                    <Row>
                                        <Col xs={6}>
                                            <div className='gamemode'>
                                                <h4>Minimum</h4>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>OS</h4>
                                                    </div>
                                                    <div>
                                                        <span>ANDROID</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Processor</h4>
                                                    </div>
                                                    <div>
                                                        <span>3.2 GHz Dual Core Processor</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Memory</h4>
                                                    </div>
                                                    <div>
                                                        <span>6 GB</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Storage</h4>
                                                    </div>
                                                    <div>
                                                        <span>30 GB</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Direct X</h4>
                                                    </div>
                                                    <div>
                                                        <span>11</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Graphics</h4>
                                                    </div>
                                                    <div>
                                                        <span>GeForce GTX 660, Radeon R7 <br />
                                                            370 or equivalent with 2 GB of <br />
                                                            Video RAM</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Login Accounts Required</h4>
                                                    </div>
                                                    <div>
                                                        <span>Morra Games</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Languages Supported</h4>
                                                    </div>
                                                    <div>
                                                        <span>Audio: English  |  Text: English</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={6}>
                                            <div className='gamemode'>
                                                <h4>Recommended</h4>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>OS</h4>
                                                    </div>
                                                    <div>
                                                        <span>ANDROID</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Processor</h4>
                                                    </div>
                                                    <div>
                                                        <span>3.2 GHz Dual Core Processor</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Memory</h4>
                                                    </div>
                                                    <div>
                                                        <span>6 GB</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Storage</h4>
                                                    </div>
                                                    <div>
                                                        <span>30 GB</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Direct X</h4>
                                                    </div>
                                                    <div>
                                                        <span>11</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Graphics</h4>
                                                    </div>
                                                    <div>
                                                        <span>GeForce GTX 660, Radeon R7 <br />
                                                            370 or equivalent with 2 GB of <br />
                                                            Video RAM</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Login Accounts Required</h4>
                                                    </div>
                                                    <div>
                                                        <span>Morra Games</span>
                                                    </div>
                                                </div>
                                                <div className='flexarea sm-column'>
                                                    <div>
                                                        <h4>Languages Supported</h4>
                                                    </div>
                                                    <div>
                                                        <span>Audio: English  |  Text: English</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </section>
                {/* SYSTEM REQUIREMENTS */}


            </div>

            <Footer />
        </div>
    )
}

export default Product