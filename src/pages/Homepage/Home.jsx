import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import LawyerSpecialists from '../../components/LawyerSpecialists/LawyerSpecialists'
import ServiceBenefits from '../../components/ServiceBenefits/ServiceBenefits'
import Appointments from '../../components/Appointments/Appointments'
import PhysicalAssets from '../../components/PhysicalAssets/PhysicalAssets'
import Marinetime from '../../components/Marinetime/Marinetime'
import ClientReviews from '../../components/ClientReviews/ClientReviews'
import FAQ from '../../components/FAQs/FAQ'
const Home = () => {
  return (
    <div>
    
      <Header/>
      <LawyerSpecialists/>
      <ServiceBenefits/>
      <Appointments/>
      <PhysicalAssets/>
      <Marinetime/>
      <ClientReviews/>
      <FAQ/>
      

    </div>
  )
}

export default Home
