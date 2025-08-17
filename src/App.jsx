import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Homepage/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ServicePage from './pages/OurServices/ServicePage/ServicePage';
import ShipBuildingService from './pages/OurServices/ServicePage/SpecifiedServices/ShipBuildingService';
import YachtBuildingService from './pages/OurServices/ServicePage/SpecifiedServices/YachtBuildingService';
import YachtandShipDesignService from './pages/OurServices/ServicePage/SpecifiedServices/YachtandShipDesignService';
import AircraftSalePurchaseService from './pages/OurServices/ServicePage/SpecifiedServices/AircraftSalePurchaseService';
import YachtSalePurchaseService from './pages/OurServices/ServicePage/SpecifiedServices/YachtSalePurchaseService';
import ShipSalePurchaseService from './pages/OurServices/ServicePage/SpecifiedServices/ShipSalePurchaseService';
import Aircraft2SalePurchaseService from './pages/OurServices/ServicePage/SpecifiedServices/Aircraft2SalePurchaseService ';
import YachtFinanceService from './pages/OurServices/ServicePage/SpecifiedServices/YachtFinanceService';
import AviationFinanceService from './pages/OurServices/ServicePage/SpecifiedServices/AviationFinanceService';
import MarshallIslandsAdvice from './pages/OurServices/ServicePage/SpecifiedServices/MarshallIslandsAdvice';
import OurTeam from './pages/OurTeam/OurTeam';
import LawyerProfile from './pages/LawyerProfile/LawyerProfile';
import News from './pages/News/News';
import AboutUs from './pages/AboutUs/AboutUs';
import OurHistory from './pages/AboutUs/OurHistory';
import ExpertiseandApproach from './pages/Law/ExpertiseandApproach';
import Corporate from './pages/Law/Corporate';
import Consultancy from './pages/Law/Consultancy';
import Sectors from './pages/Law/Sectors';
import PrivacyPolicy from './pages/Law/PrivacyPolicy';
import TermsAndConditions from './pages/Law/TermsAndConditions';
import ContactUs from './pages/ContactUs/ContactUs';
const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicePage />}>
            <Route path="/services/shipbuilding" element={<ShipBuildingService />} />
            <Route path="/services/yachtbuilding" element={<YachtBuildingService />} />
            <Route path="/services/yachtandshipdesignservice" element={<YachtandShipDesignService />} />
            <Route path="/services/aircraftsalepurchase" element={<AircraftSalePurchaseService />} />
            <Route path="/services/yachtsalepurchase" element={<YachtSalePurchaseService />} />
            <Route path="/services/shipsalepurchase" element={<ShipSalePurchaseService />} />
            <Route path="/services/aircraft2salepurchase" element={<Aircraft2SalePurchaseService />} />
            <Route path="/services/yachtfinance" element={<YachtFinanceService />} />
            <Route path="/services/aviationfinance" element={<AviationFinanceService />} />
            <Route path="marshallislandsadvice" element={<MarshallIslandsAdvice />} />
          </Route>
          <Route path='/ourteam' element={<OurTeam/>}/>
          <Route path="/profile/:id" element={<LawyerProfile />} /> 
          <Route path='/news' element={<News/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
           <Route path='/ourhistory' element={<OurHistory/>}/> 
           <Route path='/experticeandApproach' element={<ExpertiseandApproach/>}/> 
           <Route path='/CorporateSocialResponsibility' element={<Corporate/>}/> 
           <Route path='/Consultancy' element={<Consultancy/>}/> 
           <Route path='/sectors' element={<Sectors/>}/> 
           <Route path='/privacy-policy' element={<PrivacyPolicy/>}/> 
           <Route path='/terms-conditions' element={<TermsAndConditions/>}/> 
           <Route path='/contact-us' element={<ContactUs/>}/> 


        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
