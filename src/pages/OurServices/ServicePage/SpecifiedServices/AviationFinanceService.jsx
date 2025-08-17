import React from 'react';
import { useOutletContext } from 'react-router-dom';
import TopSide from '../TopSide/TopSide';
import BottomSide from '../BottomSide/BottomSide';
import '../TopSide/TopSide.css';

const AviationFinanceService = () => {
  const { topSideProps, bottomSideProps } = useOutletContext();

  return (
    <div className='AviationFinanceService'>
      <TopSide {...topSideProps} />
      <BottomSide {...bottomSideProps} />
    </div>
  );
};

export default AviationFinanceService;
