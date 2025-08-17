import React from 'react';
import { useOutletContext } from 'react-router-dom';
import TopSide from '../TopSide/TopSide';
import BottomSide from '../BottomSide/BottomSide';
import '../TopSide/TopSide.css';

const Aircraft2SalePurchaseService = () => {
  const { topSideProps, bottomSideProps } = useOutletContext();

  return (
    <div className='Aircraft2SalePurchaseService'>
      <TopSide {...topSideProps} />
      <BottomSide {...bottomSideProps} />
    </div>
  );
};

export default Aircraft2SalePurchaseService;
