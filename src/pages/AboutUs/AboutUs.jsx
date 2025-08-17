import React from 'react';
import TopSide from '../OurServices/ServicePage/TopSide/TopSide';
import { assets } from '../../assets/assets,';
import BottomAbout from './BottomAbout/BottomAbout';


const AboutUs = () => {
  const sections = [
    {
      title: 'Our Maritime Expertise',
      text: 'At Hannaford Turner, our team of maritime lawyers brings a wealth of knowledge and experience to the table. We specialize in a broad spectrum of maritime legal matters, ranging from admiralty and maritime insurance to environmental concerns and cargo claims. Our deep-seated understanding of the maritime industry\'s intricacies equips us to steer our clients through even the most complex legal waters.'
    },
    {
      title: 'A Client-Centric Approach',
      text: 'We firmly believe that the success of our clients is the true measure of our own success. Therefore, our practice is built around a strong commitment to serving our clients\' unique needs. We take the time to get to know you, understand your concerns, and align our legal strategies with your specific goals. With a client-centric approach, we ensure that the legal solutions we provide are tailored to best serve your interests.'
    },
    {
      title: 'Proven Success',
      text: 'Our relentless pursuit of justice and unwavering advocacy have resulted in a proven track record of success. We have consistently achieved favorable outcomes for our clients, whether through negotiations, arbitration, or litigation. Our firm commitment to excellence and a relentless dedication to safeguarding your rights are the cornerstones of our practice.'
    },
    {
      title: 'Global Reach, Local Expertise',
      text: 'Maritime law knows no bounds. It often transcends borders, and our firm is ready to follow your legal needs wherever they may lead. With a well-established network of international partners and a deep understanding of global maritime regulations, we are well-equipped to provide comprehensive legal support to clients worldwide, while maintaining the personalized service and local expertise our clients expect.'
    },
    {
      title: 'Community Commitment',
      text: 'Beyond our legal practice, we are actively engaged in the maritime community. We support local and global maritime conservation initiatives, contribute to pro bono efforts to help those in need, and foster a culture of responsibility and sustainability within our firm. We believe that our role extends beyond the courtroom, and we are dedicated to making a positive impact on the maritime world we hold so dear.'
    },
    {
      title: 'Your Trusted Maritime Legal Solution',
      text: 'Hannaford Turner is more than a law firm; we are your maritime legal solution. Our commitment to excellence, our unwavering dedication to our clients, and our deep-seated passion for maritime law set us apart. When you choose us, you choose a partner who will stand by your side through the challenges and opportunities that arise in the maritime industry.'
    }
  ];

  return (
    <div className='about-us'>
      <TopSide
        image={assets.About_us}
        h3={null}
        service={"About Us"}
      />
      <BottomAbout
        headerTitle="Your Maritime Law Partners"
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

export default AboutUs;