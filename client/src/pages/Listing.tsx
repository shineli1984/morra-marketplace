import {useState,useEffect} from 'react'
import Header from '../components/Header';
import { settingsMain } from '../Resources/Slider';
import { productListing2 } from '../Resource/localData';
import Slider from 'react-slick';
import useWindowDimensions from '../components/WindowDimensions';
import Col from 'react-bootstrap/esm/Col';
import { Close, HideFilter, 
    // NextIcon1, NextIcon2, PreviousIcon1, PreviousIcon2, 
    Search, SortBy } from '../Imports/ImportImages';
import Row from 'react-bootstrap/esm/Row';
import Accordion from 'react-bootstrap/Accordion';
import AccordionBox from '../components/AccordionBox';
// import ProductBox from '../components/ProductBox';
import Footer from '../components/Footer';
import { ListingSlidesData } from '../Resource/localData';
import ProductListing from '../components/ProductListing';


function Listing() {
    // scroll to top
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    // filter state
    const {width} = useWindowDimensions();
    const [activeFilter , setActiveFilter] = useState(width < 993 ? false : true);
    const [ setNav1] = useState<any | null>(null);
    // const [nav1, setNav1] = useState<any | null>(null);
    const [nav2, setNav2] = useState<any | null>(null);
    const [slider1, setSlider1] = useState<any | null>(null);
    const [slider2] = useState<any | null>(null);
    // const [slider2, setSlider2] = useState<any | null>(null);

  
    useEffect(() => {
      setNav1(slider1);
      setNav2(slider2);
    });

    useEffect(()=>{
        if(width < 993) {setActiveFilter(false)}
        if(width > 993) {setActiveFilter(true)}
    },[width])

  return (
    <div>
        <Header/>
        {/* HOMEPAGE BANNER */}
        <section className='homepage-banner listing-banner'>
            <Slider {...settingsMain} asNavFor={nav2} ref={slider => (setSlider1(slider))}>
                {ListingSlidesData.map((slide) =>
                <div className='banner-content'>
                    <img className="slick-slide-image" alt='image' src={width < 640 ? slide.imageUrlMob : slide.imageUrl} />
                    <div className="meta" key={slide.id}>
                        <h1 className="page-title slick-slide-title">{slide.title}</h1>
                        <p className="slick-slide-desc page-paragraph">{slide.desc}</p>
                        <div className='banner-btn'>
                        <a href='' className='custom-btn'>SHOP NOW</a>
                    </div>
                    </div>
                </div>
                )}
            </Slider>
        </section>
        {/* HOMEPAGE BANNER */}
        {/* LITING AREA */}
        <section className='listing-main'>
            <div className='container'>
                <div className='listing-wrapper'>
                    <Row className='top-buttons'>
                        <Col lg={3}>
                            <button onClick={() => setActiveFilter(!activeFilter)}>
                                <img src={HideFilter} alt='hide-filter'/>
                                {activeFilter ? 'Hide Filters' : 'Show Filters' }
                                
                            </button>
                            {width < 993 ?  
                            <button>
                                <img src={SortBy} alt='sort-by'/>
                                Sort By
                            </button> : null}
                        </Col>
                        <Col lg={9}>
                            <div className='textbox'>
                                <input type='text' placeholder='Keywords'/>
                                <img src={Search} alt='search'/>
                            </div>
                            {width > 992 ? 
                            <button>
                                <img src={SortBy} alt='sort-by'/>
                                Sort By
                            </button>
                            : null
                            }
                        </Col>
                    </Row>
                    <Row>
                        {activeFilter ? (
                            <Col lg={3}>
                                 <div className='filter-area'>
                                 <h3>FILTER BY</h3>
                                 {activeFilter && width < 993 ? 
                                 <img src={Close} onClick={() => setActiveFilter(false)} className='filterclose' width={'21px'} alt='close'/>
                                 : null
                                 }
                                 
                                 <Accordion defaultActiveKey="0">
                                     <AccordionBox eventKey="0" title="EVENTS">
                                         <ul>
                                         <li className="term-checkbox">
                                             <input type="checkbox" name="" id="chk1"/>
                                             <label htmlFor="chk1">Action</label>
                                             <span>67</span>
                                         </li>
                                         <li className="term-checkbox">
                                             <input type="checkbox" name="" id="chk2"/>
                                             <label htmlFor="chk2">Action</label>
                                             <span>67</span>
                                         </li>
                                         <li className="term-checkbox">
                                             <input type="checkbox" name="" id="chk3"/>
                                             <label htmlFor="chk3">Action</label>
                                             <span>67</span>
                                         </li>
                                         </ul>
                                     </AccordionBox>
                                 </Accordion>
                                 <Accordion defaultActiveKey="1">
                                     <AccordionBox eventKey="0" title="PRICE">
                                         <ul>
                                         <li className="term-checkbox">
                                             <input type="checkbox" name="" id="chk4"/>
                                             <label htmlFor="chk4">Action</label>
                                             <span>67</span>
                                         </li>
                                         <li className="term-checkbox">
                                             <input type="checkbox" name="" id="chk5"/>
                                             <label htmlFor="chk5">Action</label>
                                             <span>67</span>
                                         </li>
                                         <li className="term-checkbox">
                                             <input type="checkbox" name="" id="chk6"/>
                                             <label htmlFor="chk6">Action</label>
                                             <span>67</span>
                                         </li>
                                         </ul>
                                     </AccordionBox>
                                 </Accordion>
                                 <Accordion defaultActiveKey="2">
                                     <AccordionBox eventKey="0" title="GENRE">
                                         <ul>
                                         <li className="term-checkbox">
                                             <input type="checkbox" name="" id="chk7"/>
                                             <label htmlFor="chk7">Action</label>
                                             <span>67</span>
                                         </li>
                                         <li className="term-checkbox">
                                             <input type="checkbox" name="" id="chk8"/>
                                             <label htmlFor="chk8">Action</label>
                                             <span>67</span>
                                         </li>
                                         <li className="term-checkbox">
                                             <input type="checkbox" name="" id="chk9"/>
                                             <label htmlFor="chk9">Action</label>
                                             <span>67</span>
                                         </li>
                                         </ul>
                                     </AccordionBox>
                                 </Accordion>
                                 <div className='actions'>
                                     <button className='custom-btn'>
                                     APPLY
                                     </button>
                                 </div>
                             </div>
                            
                           
                            </Col>
                        ) : null}
                        
                        <Col lg={activeFilter ? '9' : '12'}>
                            <div className='listing-pictures'>
                            <ProductListing products={productListing2}/>   
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
        {/* LITING AREA */}
       <Footer/>
    </div>
  )
}

export default Listing