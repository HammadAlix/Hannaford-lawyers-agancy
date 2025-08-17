import React from 'react';
import TopSide from '../OurServices/ServicePage/TopSide/TopSide';
import { assets } from '../../assets/assets,';
import BottomAbout from '../AboutUs/BottomAbout/BottomAbout';

const TermsAndConditions = () => {
    const sections = [
        {
            title: 'Port and Terminal Operators',
            text: 'We offer legal support to port and terminal operators in areas such as liability issues, labor disputes, and environmental compliance.'
        },
        {
            title: 'Underwriters',
            text: 'We work with marine insurance underwriters to draft policies, handle claims, and ensure fair settlements in cases of maritime accidents.'
        },
        {
            title: 'Shipowners and Operators',
            text: 'Our firm supports shipowners and operators in procuring and maintaining marine insurance, guiding them through claims processes when necessary.'
        },
        {
            title: 'Marine Insurance Brokers',
            text: 'We provide legal advice to insurance brokers, helping them negotiate policies and address disputes on behalf of their clients.'
        },
        {
            title: 'Oil and Gas Industry',
            text: 'We serve companies involved in offshore oil and gas exploration, production, and distribution, offering legal guidance on regulatory compliance, contracts, and disputes.'
        },
        {
            title: 'Renewable Energy',
            text: 'Our firm assists in navigating legal aspects related to offshore wind, tidal, and other renewable energy projects, ensuring compliance with environmental and maritime regulations.'
        },
        {
            title: 'Marine Renewable Energy',
            text: 'We support businesses involved in marine energy generation, offering legal services covering permits, contracts, and environmental impact assessments.'
        },
        {
            title: 'Importers and Exporters',
            text: 'We help importers and exporters manage the legal aspects of international maritime trade, including customs compliance, trade disputes, and shipping contracts.'
        },
        {
            title: 'Maritime Technology Companies',
            text: 'Our firm supports companies in the maritime technology sector with intellectual property protection, regulatory compliance, and contract negotiation.'
        },
        {
            title: 'Logistics and Supply Chain Management',
            text: 'We provide legal counsel to logistics and supply chain management companies, assisting in contract negotiation, dispute resolution, and compliance.'
        },
        {
            title: 'Commercial Fishing',
            text: 'We offer legal support to commercial fishing operations, addressing regulatory compliance, fishing quotas, and vessel-related legal issues.'
        },
        {
            title: 'Aquaculture Farms',
            text: 'Our legal services encompass aquaculture farms, including insurance, lease agreements, and seafood product liability.'
        },
        {
            title: 'Fisheries Management',
            text: 'We work with fisheries management organizations to navigate regulatory and legal frameworks governing marine resources.'
        },
        {
            title: 'Cruise Lines',
            text: 'We provide legal counsel to cruise lines, helping them with passenger safety, regulatory compliance, and contractual matters.'
        },
        {
            title: 'Maritime Hospitality Providers',
            text: 'Our firm assists maritime hospitality providers, including hotels and restaurants, with regulatory compliance, liability issues, and contracts.'
        },
        {
            title: 'Maritime Safety Agencies',
            text: 'We support maritime safety agencies in drafting regulations, addressing liability issues, and legal enforcement.'
        },
        {
            title: 'Environmental Organizations',
            text: 'Our legal services extend to environmental organizations, helping them protect marine ecosystems and promote sustainable practices.'
        }
    ];
    
      
    
      return (
        <div className='terms-conditions'>
          <TopSide
            image={assets.Terms_law}
            h3={null}
            service={"Terms & Conditions"}
          />
          <BottomAbout
            headerTitle="Your Maritime Legal Experts"
            headerParagraph="At Hannaford Turner, we pride ourselves on our unparalleled expertise in maritime law and our client-centric approach to legal representation. Our commitment to excellence and unwavering dedication to our clients set us apart in the maritime legal landscape. "
            sections={sections}
            clientImage={assets.Fernando}
            clientName="Hammad"
            clientPosition="Vice president"
            clientReview="Lorem ipsum dolor sit amet consectetur. Dapibus vitae sollicitudin ac scelerisque sit ac et accumsan imperdiet. Proin mauris scelerisque id eget mus tincidunt augue elit nullam."
            reviewRating={assets.ratingStars}
          />
        </div>
      );
}

export default TermsAndConditions