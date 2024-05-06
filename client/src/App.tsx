// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import Signup from './pages/Signup';
import Login from "./pages/Login";
import ItemPage from './pages/ItemPage';
import Inventory from './pages/Inventory';
import Product from './pages/Product';
import Listing from './pages/Listing';
import ChangePass from './pages/AccountPages/ChangePassword';
import AddProduct from './pages/AddProduct';
import Profile from './pages/AccountPages/Profile';
import LinkWallet from './pages/AccountPages/LinkWallet';
import AccountSetting from './pages/AccountPages/AccountSetting';
import ConnectWallet from "./pages/ConnectWallet";
import PassportLoginSuccess from "./pages/PassportLoginSuccess";
import { IMXContextProvider } from "./context/ImmutableContext";


function App() {
  return (
    <>
    <IMXContextProvider>
      
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passportlogin" element={<PassportLoginSuccess />} />
          <Route path="/connectwallet" element={<ConnectWallet />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/itempage' element={<ItemPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/product' element={<Product />} />
          <Route path='/listing' element={<Listing />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/changepassword' element={<ChangePass />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/linkwallet' element={<LinkWallet />} />
          <Route path="/logout" element={<Logout />} />
          <Route path='/accountsetting' element={<AccountSetting />} />
        </Routes>
      </Router>

    </IMXContextProvider>
    </>
  );
}

export default App;
