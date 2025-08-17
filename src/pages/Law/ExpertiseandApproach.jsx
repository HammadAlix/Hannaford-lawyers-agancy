import React from 'react';
import TopSide from '../OurServices/ServicePage/TopSide/TopSide';
import { assets } from '../../assets/assets,';
import BottomAbout from '../AboutUs/BottomAbout/BottomAbout';

const ExpertiseandApproach = () => {
    const sections = [
        {
          title: 'Expertise: A Deep Understanding of Maritime Law',
          text: 'Our team of maritime lawyers brings a profound understanding of the complexities of maritime law. With decades of combined experience, we have become masters of this intricate legal domain. Our expertise spans a wide range of maritime legal matters, including:'
        },
        {
          title: 'Admiralty Law',
          text: 'From vessel collisions to salvage and maritime liens, we excel in admiralty law, providing comprehensive solutions to our clients.'
        },
        {
          title: 'Marine Insurance',
          text: 'Our journey has been marked by a series of significant client successes. We take pride in each favorable verdict, successful negotiation, and resolved maritime dispute. These achievements have not only solidified our reputation but also reaffirmed our commitment to delivering the best possible legal outcomes for our clients.'
        },
        {
          title: 'Environmental Lawsurance',
          text: 'We are dedicated to safeguarding the marine environment, offering legal counsel on issues related to environmental regulations and compliance.'
        },
        {
          title: 'Cargo Claims',
          text: 'Our journey is not solely about legal victories. Its also about giving back to the maritime community that has embraced us. We have been actively involved in supporting maritime conservation initiatives, pro bono work, and community service, reflecting our dedication to the well-being of our environment and those in need.'
        },
        {
          title: 'Tailored Legal Solutions',
          text: 'We take the time to understand your unique legal requirements and customize our strategies to best serve your interests.'
        }
      ];
    
      return (
        <div className='expertice-approach'>
          <TopSide
            image={assets.History_us}
            h3={null}
            service={"Expertise & Approach"}
          />
          <BottomAbout
            headerTitle="Deep Understanding of Maritime Law"
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
    };
    
    export default ExpertiseandApproach;
    