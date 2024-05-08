import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import {
  ItemPPicture,
  Settings,
  HeartIcon,
  Graph,
  MorraSign,
  ItemActivity,
  Close,
  // CalendarIcon
} from "../Imports/ImportImages";
import Accordion from "react-bootstrap/Accordion";
import AccordionBox from "../components/AccordionBox";
// import DataTable from '../components/DataTable';
import { productListing } from "../Resource/localData";
import ProductBox from "../components/ProductBox";
import Slider from "react-slick";
import { settings } from "../Resources/Slider";
import useWindowDimensions from "../components/WindowDimensions";
import { Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useIMXContext } from "../context/ImmutableContext";
import { shortenWalletAddress } from "../helper";

function ItemPage() {
  const { token, id } = useParams();
  let location = useLocation();
  let { pathname, search } = location;
  let PATH_DATA = `${pathname}${search}`.split("/").slice(1);
  const { refreshSingleNftData, singleNftData } = useIMXContext();
  const [loadingData, setloadingData] = useState(false);
  // Extracting the parameter from the URL
  const refreshDataHandler = async (_token: string, _id: string) => {
    setloadingData(true);
    await refreshSingleNftData(_token, _id);
    setloadingData(false);
  };
  useEffect(() => {
    if (token && id) {
      console.log({ PATH_DATA });
      refreshDataHandler(token, id);
    }
  }, [token, id]);
  useEffect(() => {
    console.log("singleNftData", { singleNftData, loadingData });
  }, [singleNftData, loadingData]);

  // for date picker
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const { width } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState("");
  const [tableData] = useState([
    {
      column1: "Transfer",
      column2: "0.920 ETH",
      column3: "SamaxX",
      column4: "Virgo_NFT_Liquidity_P...",
      column5: "13d ago",
    },
    {
      column1: "Sale",
      column2: "0.779 WETH",
      column3: "SamaxX",
      column4: "Virgo_NFT_Liquidity_P...",
      column5: "13d ago",
    },
    {
      column1: "Transfer",
      column2: "0.920 ETH",
      column3: "Tkoll",
      column4: "SamaxX",
      column5: "28d ago",
    },
    {
      column1: "Sale",
      column2: "0.779 WETH",
      column3: "SamaxX",
      column4: "Virgo_NFT_Liquidity_P...",
      column5: "13d ago",
    },
    {
      column1: "Transfer",
      column2: "0.920 ETH",
      column3: "Tkoll",
      column4: "SamaxX",
      column5: "28d ago",
    },
  ]);
  const [selectedItems, setSelectedItems] = useState<
    { name: string; id: number }[]
  >([]);
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  //    const handleChangePassword = () => {
  //        handleModalClose();
  //    };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const firstFilteredItem = tableData.find((item) =>
        item.column1.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      if (firstFilteredItem) {
        handleRowClick(firstFilteredItem);
      } else {
        setSelectedItems([]);
      }
    }
  };

  const handleRowClick = (item: { column1: string }) => {
    const firstWord = item.column1.split(" ")[0];
    if (
      !selectedItems.some((selectedItem) => selectedItem.name === firstWord)
    ) {
      setSelectedItems([
        ...selectedItems,
        { name: firstWord, id: Math.random() },
      ]);
    }
  };

  const handleRowKeyDown = (
    event: React.KeyboardEvent<HTMLTableRowElement>,
    item: { column1: string }
  ) => {
    if (event.key === "Enter") {
      handleRowClick(item);
    }
  };

  const filteredData = tableData.filter((item) =>
    item.column1.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const clearAllSelectedItems = () => {
    setSelectedItems([]);
  };

  const deleteItem = (id: number) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };
  return (
    <div>
      <Header />
      <div className="item-page">
        <div className="breadcrumb">
          <div className="container">
            <div className="flexarea">
              {PATH_DATA &&
                PATH_DATA.map((item, index) => (
                  <Link key={index} to={``}>
                    {item}
                  </Link>
                ))}
              {/* <Link to="">Marketplace</Link>
              <Link to="">Jewel Run</Link> */}
            </div>
          </div>
        </div>
        <div className="items-grid">
          <div className="container">
            <Row>
              <Col lg={6}>
                <div className="item-box">
                  {width > 993 ? (
                    <div className="picture">
                      <img
                        src={singleNftData?.image ?? ItemPPicture}
                        width={"100%"}
                        alt="itempicture"
                      />
                      <div className="sale">on sale</div>
                    </div>
                  ) : null}
                  <Accordion defaultActiveKey="0">
                    <AccordionBox eventKey="0" title="Description">
                      <p>
                        {singleNftData?.description ?? "Description Not Found"}
                      </p>
                      <div className="flexarea">
                        <span>
                          By
                          <span
                            className="primary"
                            style={{ marginLeft: "4px" }}
                          >
                            AMGI
                            <img
                              src={Settings}
                              style={{ marginLeft: "4px" }}
                              alt="settings"
                            />
                          </span>
                        </span>
                        <span>
                          Official store at{" "}
                          <span className="primary">lipsum.com</span>
                        </span>
                      </div>
                    </AccordionBox>
                    <AccordionBox eventKey="1" title="Traits">
                      <p>
                        This book is a treatise on the theory of ethics, very
                        popular during the Renaissance. The first line of Lorem
                        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                        in section 1.10.32.
                      </p>
                      <div className="flexarea">
                        <span>
                          By
                          <span
                            className="primary"
                            style={{ marginLeft: "4px" }}
                          >
                            AMGI
                            <img
                              src={Settings}
                              style={{ marginLeft: "4px" }}
                              alt="settings"
                            />
                          </span>
                        </span>
                        <span>
                          Official store at{" "}
                          <span className="primary">lipsum.com</span>
                        </span>
                      </div>
                    </AccordionBox>
                    <AccordionBox eventKey="2" title="boosts">
                      <p>
                        This book is a treatise on the theory of ethics, very
                        popular during the Renaissance. The first line of Lorem
                        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                        in section 1.10.32.
                      </p>
                      <div className="flexarea">
                        <span>
                          By
                          <span
                            className="primary"
                            style={{ marginLeft: "4px" }}
                          >
                            AMGI
                            <img
                              src={Settings}
                              style={{ marginLeft: "4px" }}
                              alt="settings"
                            />
                          </span>
                        </span>
                        <span>
                          Official store at{" "}
                          <span className="primary">lipsum.com</span>
                        </span>
                      </div>
                    </AccordionBox>
                    <AccordionBox eventKey="3" title="about my pet hooligan">
                      <p>
                        This book is a treatise on the theory of ethics, very
                        popular during the Renaissance. The first line of Lorem
                        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                        in section 1.10.32.
                      </p>
                      <div className="flexarea">
                        <span>
                          By
                          <span
                            className="primary"
                            style={{ marginLeft: "4px" }}
                          >
                            AMGI
                            <img
                              src={Settings}
                              style={{ marginLeft: "4px" }}
                              alt="settings"
                            />
                          </span>
                        </span>
                        <span>
                          Official store at{" "}
                          <span className="primary">lipsum.com</span>
                        </span>
                      </div>
                    </AccordionBox>
                    <AccordionBox eventKey="4" title="details">
                      <p>
                        This book is a treatise on the theory of ethics, very
                        popular during the Renaissance. The first line of Lorem
                        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                        in section 1.10.32.
                      </p>
                      <div className="flexarea">
                        <span>
                          By
                          <span
                            className="primary"
                            style={{ marginLeft: "4px" }}
                          >
                            AMGI
                            <img
                              src={Settings}
                              style={{ marginLeft: "4px" }}
                              alt="settings"
                            />
                          </span>
                        </span>
                        <span>
                          Official store at{" "}
                          <span className="primary">lipsum.com</span>
                        </span>
                      </div>
                    </AccordionBox>
                  </Accordion>
                </div>
              </Col>
              <Col lg={6}>
                <div className="item-info">
                  <span>{singleNftData?.contract_type ?? "NFT"}</span>
                  <h2 className="section-heading">
                    {singleNftData?.name ?? "Unknown"} #{id}
                  </h2>
                  <span>
                    Owned by
                    {singleNftData ? (
                      singleNftData?.owners?.length > 1 ? (
                        <span className="primary" style={{ marginLeft: "4px" }}>
                          {singleNftData?.owners?.length} Owners
                        </span>
                      ) : (
                        <span className="primary" style={{ marginLeft: "4px" }}>
                          {shortenWalletAddress(singleNftData?.owners[0]?.account_address)}
                          <img
                            src={Settings}
                            style={{ marginLeft: "4px" }}
                            alt="settings"
                          />
                        </span>
                      )
                    ) : (
                      "Owners Not Found"
                    )}
                  </span>
                  {width < 993 ? (
                    <div className="picture">
                      <img
                        src={singleNftData?.image ?? ItemPPicture}
                        width={"100%"}
                        alt="itempicture"
                      />
                      <div className="sale">on sale</div>
                    </div>
                  ) : null}
                  <div className="timer">
                    <span>Sale ends January 15, 2024 at 3:49 PM </span>
                    <div className="flexarea">
                      <div>
                        <span className="number">00</span>
                        <span className="hour">Hours</span>
                      </div>
                      <div>
                        <span className="number">00</span>
                        <span className="hour">Minutes</span>
                      </div>
                      <div>
                        <span className="number">00</span>
                        <span className="hour">Seconds</span>
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <span>Current price</span>
                    <h4>
                      <img src={MorraSign} width={"30px"} alt="morra" /> 36.39
                    </h4>
                    <h4 className="cut-price">45.49</h4>
                    <div className="actions">
                      <button className="custom-btn" onClick={handleModalShow}>
                        BUY NOW
                      </button>
                      {/* <button className='custom-btn'>ADD TO CART</button> */}
                      <div className="heart">
                        <img src={HeartIcon} alt="heart" />
                      </div>
                    </div>
                  </div>
                  <div className="price-history">
                    <h5>Price History</h5>
                    <div>
                      <img src={Graph} width={"100%"} alt="graph" />
                    </div>
                  </div>
                  {/* <Accordion defaultActiveKey="0">
                                <AccordionBox eventKey="0" title="Listings">
                                    <DataTable/>
                                </AccordionBox>
                                <AccordionBox eventKey="1" title="Offers">
                                    <DataTable/>
                                </AccordionBox>
                            </Accordion> */}
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* ITEM ACTIVITY */}
        <div className="container">
          <div className="item-activity">
            <div className="top-area">
              <h2 className="section-heading">
                <img src={ItemActivity} alt="item-activity" /> Item Activity
              </h2>
            </div>
            <div className="form-group">
              <input
                className="filter-input"
                type="text"
                placeholder="Filter"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
              />
              {filteredData.length === 0 && <p>No matching items found.</p>}
              <div>
                <div className="delete-btns">
                  {selectedItems.map((item) => (
                    <div key={item.id}>
                      <button className="primary-btn">
                        {item.name}{" "}
                        <img
                          src={Close}
                          alt="close"
                          onClick={() => deleteItem(item.id)}
                        />
                      </button>
                    </div>
                  ))}
                  <div>
                    {selectedItems.length > 0 && (
                      <span onClick={clearAllSelectedItems}>Clear All</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Price</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => handleRowClick(item)}
                    onKeyDown={(event) => handleRowKeyDown(event, item)}
                    tabIndex={0}
                  >
                    <td>{item.column1}</td>
                    <td>{item.column2}</td>
                    <td>{item.column3}</td>
                    <td>{item.column4}</td>
                    <td>{item.column5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* ITEM ACTIVITY */}
        {/* LATEST ITEMS */}
        <section className="collections common-styles">
          <div className="container">
            <div className="section-wrapper">
              <h2 className="section-heading">More from this collection</h2>
              <div className="style-item-slider">
                <Slider {...settings}>
                  {productListing.map((item, index) => (
                    <div key={index}>
                      <ProductBox data={item} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
        <Modal
          show={showModal}
          className="model-background"
          onHide={handleModalClose}
          centered
        >
          <Modal.Body className="modelbody-background">
            <div className="close-icon" onClick={handleModalClose}>
              <img src={Close} alt="close" />
            </div>
            <h2 className="section-heading mb-0">PUT ON SALE</h2>
            <p className="section-paragraph">
              Various versions have evolved over the years.
            </p>
            <div className="form-area">
              <div className="item-page-form-area-form-group">
                <label className="item-page-form-area-label">
                  DISCOUNT PRICE*
                </label>
                <input
                  type="text"
                  placeholder="Enter discount"
                  className="item-page-form-area-input"
                />
              </div>
              <div className="item-page-form-area-form-group">
                <label className="item-page-form-area-label">
                  SALES END AT
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MM/dd/yyyy" // Customize date format if needed
                  placeholderText="Select a date" // Placeholder text for the input field
                />
                <div className="item-page-form-area-manage-input"></div>
              </div>
            </div>
            <button className="leave-btn custom-btn">START SALE</button>
          </Modal.Body>
        </Modal>
      </div>
      {/* LATEST ITEMS */}
      <Footer />
    </div>
  );
}

export default ItemPage;
