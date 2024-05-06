import { useState, useEffect } from 'react';
import Header from '../components/Header';
import MorraGame from '../components/MorraGame';
import { ShadowVault } from '../Imports/ImportImages';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "react-slick"; 
import { morraGameProduct, productListing, bestSelling, Trending, comingSoon, slidesData } from '../Resource/localData';
import ProductBox from '../components/ProductBox';
import Footer from '../components/Footer';
import useWindowDimensions from '../components/WindowDimensions';
import { settingsMain, settings1, settingsThumbs, settings } from '../Resources/Slider';
import { Link } from 'react-router-dom';

const Home = () => {
  const { width } = useWindowDimensions();
  const [nav1, setNav1] = useState<any | null>(null);
  const [nav2, setNav2] = useState<any | null>(null);
  const [slider1, setSlider1] = useState<any | null>(null);
  const [slider2, setSlider2] = useState<any | null>(null);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });
  return (
    <div>
      {/* HEADER */}
      <Header />
      {/* HEADER */}
      {/* HOMEPAGE BANNER */}
      <section className='homepage-banner'>
        <div className='container'>
          <Slider {...settingsMain} asNavFor={nav2} ref={slider => (setSlider1(slider))}>
            {slidesData.map((slide) =>
              <div className='banner-content'>
                <img className="slick-slide-image" alt='image' src={width < 640 ? slide.imageUrlMob : slide.imageUrl} />
                <div className="meta" key={slide.id}>
                  <h1 className="page-title slick-slide-title">{slide.title}</h1>
                  <p className="slick-slide-desc page-paragraph">{slide.desc}</p>
                  <div className='banner-btn'>
                    <Link to='/listing' className='custom-btn'>SHOP NOW</Link>
                  </div>
                </div>
              </div>
            )}
          </Slider>
          <div className="thumbnail-slider-wrap">
            <Slider
              {...settingsThumbs}
              asNavFor={nav1}
              ref={slider => (setSlider2(slider))}>
              {slidesData.map((slide) =>
                <div className="slick-slide" key={slide.id}>
                  <img className="slick-slide-image" src={slide.imageUrl} />
                  <span>{slide.title}</span>
                </div>
              )}
            </Slider>
          </div>
        </div>
      </section>
      {/* HOMEPAGE BANNER */}
      {/* MORRA GAMES */}
      <section className='morra-games common-styles'>
        <div className='container'>
          <h2 className='section-heading'>Morra Games</h2>
          {width < 767 ? (
            <Slider {...settings1}>
              {
                morraGameProduct.map((item, index) => (
                  <div className='col-lg-6 col-md-6' key={index}>
                    <MorraGame data={item} />
                  </div>
                ))
              }
            </Slider>
          ) : (
            <Row>
              {
                morraGameProduct.map((item, index) => (
                  <Col lg={6} md={6} key={index}>
                    <MorraGame data={item} />
                  </Col>
                ))
              }
            </Row>
          )}
        </div>
      </section>
      {/* MORRA GAMES */}
      {/* LATEST ITEMS */}
      <section className='latest-items common-styles'>
        <div className='container'>
          <div className='section-wrapper'>
            <h2 className='section-heading'>Latest Item</h2>
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
      {/* BEST SELLING */}
      <section className='best-selling common-styles'>
        <div className='container'>
          <div className='section-wrapper'>
            <h2 className='section-heading'>Best Selling</h2>
            <div className='style-item-slider'>
              <Slider {...settings}>
                {
                  bestSelling.map((item, index) => (
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
      {/* BEST SELLING */}
      {/* SHADOW VAULT */}
      <section className='shadow-vault'>
        <div className='container'>
          <Row>
            <Col lg={5}>
              <div className='picture'>
                <img src={ShadowVault} width={"100%"} alt='shadow-vault' />
              </div>
            </Col>
            <Col lg={7}>
              <div className='shadow-content'>
                <h2 className='section-heading'>Best games to play <br /> right now</h2>
                <p className='section-paragraph'>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <div className='shadowvault-btn'>
                  <Link to='/listing' className='custom-btn'>SHOP NOW</Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* SHADOW VAULT */}
      {/* TRENDING */}
      <section className='trending common-styles'>
        <div className='container'>
          <div className='section-wrapper'>
            <h2 className='section-heading'>Trending</h2>
            <div className='style-item-slider'>
              <Slider {...settings}>
                {
                  Trending.map((item, index) => (
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
      {/* TRENDING */}
      {/* COMING SOON */}
      <section className='coming-soon common-styles'>
        <div className='container'>
          <div className='section-wrapper'>
            <h2 className='section-heading'>Coming soon</h2>
            <div className='style-item-slider'>
              <Slider {...settings}>
                {
                  comingSoon.map((item, index) => (
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
      {/* COMING SOON */}
      {/* FOOTER */}
      <Footer />
      {/* FOOTER */}
    </div>
  )
}

export default Home