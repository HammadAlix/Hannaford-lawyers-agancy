import React from 'react';
import { useOutletContext } from 'react-router-dom';
import TopSide from '../TopSide/TopSide';
import BottomSide from '../BottomSide/BottomSide';
import '../TopSide/TopSide.css';

const YachtandShipDesignService = () => {
  const { topSideProps, bottomSideProps } = useOutletContext();

  return (
    <div className='YachtandShipDesignService '>
      <TopSide {...topSideProps} />
      <BottomSide {...bottomSideProps} />
    </div>
  );
};

export default YachtandShipDesignService ;
