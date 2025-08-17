import React from 'react';
import TopSide from '../OurServices/ServicePage/TopSide/TopSide';
import { assets } from '../../assets/assets,';
import BottomAbout from '../AboutUs/BottomAbout/BottomAbout';


const Sectors = () => {
    const sections = [
        {
            title: 'Shipping Companies',
            text: 'We provide comprehensive legal counsel to shipping companies including issues related to cargo claims, international shipping regulations, and marine insurance.'
        },
        {
            title: 'Freight Forwarders',
            text: 'Our team assists freight forwarders in handling complex transportation logistics, ensuring compliance, and resolving disputes.'
        },
        {
            title: 'Port and Terminal Operators',
            text: 'We offer legal support to port and terminal operators, ensuring compliance with regulations.'
        },
        {
            title: 'Underwriters',
            text: 'We work with marine insurance underwriters to draft policies, handle claims, and ensure fair settlements in cases of maritime accidents.'
        },
        {
            title: 'Shipowners and Operators',
            text: 'Our firm supports shipowners and operators in procuring and maintaining marine insurance, guiding them through claims processes.'
        },
        {
            title: 'Marine Insurance Brokers',
            text: 'We provide legal advice to insurance brokers, helping them negotiate policies for their clients.'
        },
        {
            title: 'Oil and Gas Industry',
            text: 'We serve companies involved in offshore oil and gas, providing guidance on regulatory compliance, contracts, and disputes.'
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
            text: 'We offer legal support to commercial fishing operations, addressing regulatory compliance and other legal issues.'
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
        }
    ];
    

    return (
        <div className='corporate'>
            <TopSide
                image={assets.Sectors_law}
                h3={null}
                service={"Sectors"}
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


export default Sectors