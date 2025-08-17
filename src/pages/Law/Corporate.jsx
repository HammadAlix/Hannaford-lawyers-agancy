import React from 'react';
import TopSide from '../OurServices/ServicePage/TopSide/TopSide';
import { assets } from '../../assets/assets,';
import BottomAbout from '../AboutUs/BottomAbout/BottomAbout';

const Corporate = () => {
    const sections = [
        {
          title: 'Environmental Stewardship',
          text: 'The maritime world is intimately connected to the environment, and we take our role as stewards of the seas seriously. Our environmental initiatives include:'
        },
        {
          title: 'Maritime Conservation',
          text: 'We actively support marine conservation efforts by partnering with organizations dedicated to protecting marine ecosystems and wildlife.'
        },
        {
          title: 'Sustainability Practices',
          text: 'We are committed to sustainable practices within our firm, minimizing our environmental footprint through responsible resource usage and waste reduction.'
        },
        {
          title: 'Pro Bono Services',
          text: 'We believe in giving back to the community. Through pro bono legal services, we strive to make a positive impact in the lives of those in need. Our pro bono work includes:'
        },
        {
          title: 'Community Legal Aid',
          text: 'We provide free legal services to individuals and organizations facing maritime legal challenges, ensuring that access to justice is not compromised.'
        },
        {
          title: 'Non-Profit Support',
          text: 'We offer legal counsel and support to non-profit organizations with a focus on maritime conservation and community development.'
        },
        {
          title: 'Maritime Conservation',
          text: 'We actively support marine conservation efforts by partnering with organizations dedicated to protecting marine ecosystems and wildlife.'
        },
        {
          title: 'Sustainability Practices',
          text: 'We are committed to sustainable practices within our firm, minimizing our environmental footprint through responsible resource usage and waste reduction.'
        },
        {
          title: 'Pro Bono Services',
          text: 'We believe in giving back to the community. Through pro bono legal services, we strive to make a positive impact in the lives of those in need. Our pro bono work includes:'
        },
        {
          title: 'Community Legal Aid',
          text: 'We provide free legal services to individuals and organizations facing maritime legal challenges, ensuring that access to justice is not compromised.'
        },
        {
          title: 'Non-Profit Support',
          text: 'We offer legal counsel and support to non-profit organizations with a focus on maritime conservation and community development.'
        }
      ];
      
    
      return (
        <div className='corporate'>
          <TopSide
            image={assets.Corporate_law}
            h3={null}
            service={"Corporate & Social Responsibility"}
          />
          <BottomAbout
            headerTitle="Understanding of Social Responsibility"
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

export default Corporate