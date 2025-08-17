import React from 'react';
import TopSide from '../OurServices/ServicePage/TopSide/TopSide';
import BottomAbout from './BottomAbout/BottomAbout';
import { assets } from '../../assets/assets,';
const HistoryPage = () => {
  const sections = [
    {
      title: 'Founding Vision',
      text: 'At Hannaford Turner, our team of maritime lawyers brings a wealth of knowledge and experience to the table. We specialize in a broad spectrum of maritime legal matters, ranging from admiralty and maritime insurance to environmental concerns and cargo claims. Our deep-seated understanding of the maritime industry\'s intricacies equips us to steer our clients through even the most complex legal waters.'
    },
    {
      title: 'A Journey of Growth',
      text: 'Over the years, Hannaford Turner has evolved, adapting to the ever-changing currents of maritime law. We have expanded our team, bringing together some of the most talented maritime lawyers in the field. Our dedication to continuous learning and staying ahead of legal developments has allowed us to provide our clients with cutting-edge legal strategies.'
    },
    {
      title: 'Client Successes',
      text: 'Our journey has been marked by a series of significant client successes. We take pride in each favorable verdict, successful negotiation, and resolved maritime dispute. These achievements have not only solidified our reputation but also reaffirmed our commitment to delivering the best possible legal outcomes for our clients.'
    },
    {
      title: 'Global Reach',
      text: 'As the maritime industry has grown increasingly global, so have we. Hannaford Turner has extended its reach to serve clients not just in our local community but across the world. With a network of international partners and an in-depth understanding of global maritime regulations, we are well-prepared to handle complex international cases.'
    },
    {
      title: 'Community Engagementtment',
      text: 'Our journey is not solely about legal victories. Its also about giving back to the maritime community that has embraced us. We have been actively involved in supporting maritime conservation initiatives, pro bono work, and community service, reflecting our dedication to the well-being of our environment and those in need.'
    },
    {
      title: 'The Future Beckons',
      text: 'Our history is a testament to the dedication and passion of our team. We have come a long way since our founding, but the future holds even more promising horizons. We remain committed to the principles that have guided us from the beginning - excellence, integrity, and an unwavering commitment to our clients.'
    }
  ];

  return (
    <div className='about-us'>
      <TopSide
        image={assets.History_us}
        h3={null}
        service={"Our History"}
      />
      <BottomAbout
        headerTitle="Navigating Legal Waters Since 1986"
        headerParagraph="Welcome to Hannaford Turner, where maritime law isn't just a profession; it's a passion. With a rich history dating back to our founding, we have grown to become a distinguished maritime law firm, dedicated to providing exceptional legal services to our clients worldwide."
        sections={sections}
        clientImage={assets.Fernando}
        clientName="Fernando Luiz"
        clientPosition="Vice president"
        clientReview="Lorem ipsum dolor sit amet consectetur. Dapibus vitae sollicitudin ac scelerisque sit ac et accumsan imperdiet. Proin mauris scelerisque id eget mus tincidunt augue elit nullam."
        reviewRating={assets.ratingStars}
      />
    </div>
  );
};

export default HistoryPage;
