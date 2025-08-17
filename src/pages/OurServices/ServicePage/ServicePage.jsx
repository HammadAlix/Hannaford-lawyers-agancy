import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { assets } from '../../../assets/assets,';

const ServicePage = () => {
  const location = useLocation();

  let topSideProps = {
    image: assets.Shipbuilding_service, section: "Service",
    service: "Shipbuilding"
  };

  let bottomSideProps = {
    leftSectionText: "We have acted in many ship sale & purchase and shipbuilding cases over the years. At the negotiation stage, we advise clients on the wording of shipbuilding contracts and assist with the discussions on their terms.",
    rightSectionIntro: "We also act in relation to disputes concerning MOAs and shipbuilding contracts.",
    rightSectionIntro2: "In the context of the NSF form, examples of the types of disputes in which we have acted are:",
    rightSectionList1: [
      "Issues concerning whether parties are contractually bound to an S&P deal.",
      "The seller’s remedies for a buyer’s failure to pay the deposit or take delivery.",
      "The buyer’s rights as regards the condition of the vessel on delivery."
    ],
    rightSectionIntro3: "As regards shipbuilding contracts, we have represented clients in many arbitrations over the years involving issues concerning:",
    rightSectionList2: [
      "Issues concerning whether parties are contractually bound to an S&P deal.",
      "The seller’s remedies for a buyer’s failure to pay the deposit or take delivery.",
      "The buyer’s rights as regards the condition of the vessel on delivery."
    ],
    buttonText: "Contact us"
  };

  // Modify props based on the route
  if (location.pathname.includes('yachtbuilding')) {
    topSideProps = {
      image: assets.Yachtbuilding_service, section: "Service",
      service: "Yachtbuilding"
    };
    bottomSideProps = {
      leftSectionText: "We have acted in many yacht sale & purchase and yachtbuilding cases over the years. At the negotiation stage, we advise clients on the wording of yachtbuilding contracts and assist with the discussions on their terms.",
      rightSectionIntro: "We also act in relation to disputes concerning MOAs and yachtbuilding contracts.",
      rightSectionIntro2: "In the context of the NSF form, examples of the types of disputes in which we have acted are:",
      rightSectionList1: [
        "Issues concerning whether parties are contractually bound to an S&P deal.",
        "The seller’s remedies for a buyer’s failure to pay the deposit or take delivery.",
        "The buyer’s rights as regards the condition of the vessel on delivery."
      ],
      rightSectionIntro3: "As regards yachtbuilding contracts, we have represented clients in many arbitrations over the years involving issues concerning:",
      rightSectionList2: [
        "Issues concerning whether parties are contractually bound to an S&P deal.",
        "The seller’s remedies for a buyer’s failure to pay the deposit or take delivery.",
        "The buyer’s rights as regards the condition of the vessel on delivery."
      ],
      buttonText: "Contact us"
    };
  }

  if (location.pathname.includes('YachtandShipDesignService')) {
    topSideProps = {
      image: assets.YachtandShipDesign_service, section: "Service",
      service: "Yacht and Ship Design Service"
    };
    bottomSideProps = {
      leftSectionText: "We have acted in many yacht sale & purchase and Yacht and Ship Design Service cases over the years. At the negotiation stage, we advise clients on the wording of yacht and ship design contracts and assist with the discussions on their terms.",
      rightSectionIntro: "We also act in relation to disputes concerning MOAs and yacht and ship design contracts.",
      rightSectionIntro2: "In the context of the NSF form, examples of the types of disputes in which we have acted are:",
      rightSectionList1: [
        "Issues concerning whether parties are contractually bound to an S&P deal.",
        "The seller’s remedies for a buyer’s failure to pay the deposit or take delivery.",
        "The buyer’s rights as regards the condition of the vessel on delivery."
      ],
      rightSectionIntro3: "As regards yacht and ship design contracts, we have represented clients in many arbitrations over the years involving issues concerning:",
      rightSectionList2: [
        "Issues concerning whether parties are contractually bound to an S&P deal.",
        "The seller’s remedies for a buyer’s failure to pay the deposit or take delivery.",
        "The buyer’s rights as regards the condition of the vessel on delivery."
      ],
      buttonText: "Contact us"
    };
  }

  if (location.pathname.includes('shipsalepurchase')) {
    topSideProps = {
      image: assets.ShipSalePurchase_service, section: "Service",
      service: "Ship Sale & Purchase"
    };
    bottomSideProps = {
      leftSectionText: "We have acted in many ship sale & purchase cases over the years. At the negotiation stage, we advise clients on the wording of sale & purchase contracts and assist with the discussions on their terms.",
      rightSectionIntro: "We also act in relation to disputes concerning MOAs and ship sale & purchase contracts.",
      rightSectionIntro2: "In the context of the NSF form, examples of the types of disputes in which we have acted are:",
      rightSectionList1: [
        "Issues concerning whether parties are contractually bound to an S&P deal.",
        "The seller’s remedies for a buyer’s failure to pay the deposit or take delivery.",
        "The buyer’s rights as regards the condition of the vessel on delivery."
      ],
      rightSectionIntro3: "As regards ship sale & purchase contracts, we have represented clients in many arbitrations over the years involving issues concerning:",
      rightSectionList2: [
        "Issues concerning whether parties are contractually bound to an S&P deal.",
        "The seller’s remedies for a buyer’s failure to pay the deposit or take delivery.",
        "The buyer’s rights as regards the condition of the vessel on delivery."
      ],
      buttonText: "Contact us"
    };
  }

  if (location.pathname.includes('yachtsalepurchase')) {
    topSideProps = {
      image: assets.YachtSalePurchase_service, section: "Service",
      service: "Yacht Sale & Purchase"
    };
    bottomSideProps = {
      leftSectionText: "We have acted in many yacht sale & purchase cases over the years. At the negotiation stage, we advise clients on the wording of sale & purchase contracts and assist with the discussions on their terms.",
      rightSectionIntro: "We also act in relation to disputes concerning MOAs and yacht sale & purchase contracts.",
      rightSectionIntro2: "In the context of the NSF form, examples of the types of disputes in which we have acted are:",
      rightSectionList1: [
        "Issues concerning whether parties are contractually bound to an S&P deal.",
        "The seller’s remedies for a buyer’s failure to pay the deposit or take delivery.",
        "The buyer’s rights as regards the condition of the vessel on delivery."
      ],
      rightSectionIntro3: "As regards yacht sale & purchase contracts, we have represented clients in many arbitrations over the years involving issues concerning:",
      rightSectionList2: [
        "Issues concerning whether parties are contractually bound to an S&P deal.",
        "The seller’s remedies for a buyer’s failure to pay the deposit or take delivery.",
        "The buyer’s rights as regards the condition of the vessel on delivery."
      ],
      buttonText: "Contact us"
    };
  }

  if (location.pathname.includes('aircraftsalepurchase')) {
    topSideProps = {
      image: assets.AircraftSalePurchase_service, 
      section: "Service",
      service: "Aircraft Sale & Purchase"
    };
    bottomSideProps = {
      leftSectionText: "We have acted in many aircraft sale & purchase cases over the years. At the negotiation stage, we advise clients on the wording of sale & purchase contracts and assist with the discussions on their terms.",
      rightSectionIntro: "We also act in relation to disputes concerning MOAs and aircraft sale & purchase contracts.",
      rightSectionIntro2: "In the context of the NSF form, examples of the types of disputes in which we have acted are:",
      rightSectionList1: [
        "Issues concerning whether parties are contractually bound to an S&P deal.",
        "The seller’s remedies for a buyer’s failure to pay the deposit or take delivery.",
        "The buyer’s rights as regards the condition of the aircraft on delivery."
      ],
      rightSectionIntro3: "As regards aircraft sale & purchase contracts, we have represented clients in many arbitrations over the years involving issues concerning:",
      rightSectionList2: [
        "Issues concerning whether parties are contractually bound to an S&P deal.",
        "The seller’s remedies for a buyer’s failure to pay the deposit or take delivery.",
        "The buyer’s rights as regards the condition of the aircraft on delivery."
      ],
      buttonText: "Contact us"
    };
  }
  if (location.pathname.includes('yachtfinance')) {
    topSideProps = {
      image: assets.YachtFinanceSalePurchase_service, section: "Service",
      service: "Yacht Finance"
    };
    bottomSideProps = {
      leftSectionText: "We have acted in many yacht finance cases over the years. At the negotiation stage, we advise clients on the wording of finance contracts and assist with the discussions on their terms.",
      rightSectionIntro: "We also act in relation to disputes concerning finance agreements and related contracts.",
      rightSectionIntro2: "In the context of yacht finance, examples of the types of disputes in which we have acted are:",
      rightSectionList1: [
        "Issues concerning whether parties are contractually bound to a finance deal.",
        "The lender’s remedies for a borrower’s failure to meet repayment obligations.",
        "The borrower’s rights as regards the conditions of the loan and related covenants."
      ],
      rightSectionIntro3: "As regards yacht finance contracts, we have represented clients in many arbitrations over the years involving issues concerning:",
      rightSectionList2: [
        "Breach of financing terms and conditions.",
        "Enforcement of securities and guarantees.",
        "Disputes over the valuation and maintenance of financed yachts."
      ],
      buttonText: "Contact us"
    };
  }

  if (location.pathname.includes('aircraft2salepurchase')) {
    topSideProps = {
      image: assets.Aircraft2SalePurchase_service, section: "Service",
      service: "Aircraft 2 Sale & Purchase"
    };
    bottomSideProps = {
      leftSectionText: "We have acted in many aircraft sale & purchase and Aircraft 2 Sale & Purchase cases over the years. At the negotiation stage, we advise clients on the wording of aircraft sale & purchase contracts and assist with the discussions on their terms.",
      rightSectionIntro: "We also act in relation to disputes concerning MOAs and aircraft sale & purchase contracts.",
      rightSectionIntro2: "In the context of the NSF form, examples of the types of disputes in which we have acted are:",
      rightSectionList1: [
        "Issues concerning whether parties are contractually bound to an S&P deal.",
        "The seller’s remedies for a buyer’s failure to pay the deposit or take delivery.",
        "The buyer’s rights as regards the condition of the aircraft on delivery."
      ],
      rightSectionIntro3: "As regards aircraft sale & purchase contracts, we have represented clients in many arbitrations over the years involving issues concerning:",
      rightSectionList2: [
        "Construction defects and deviations from the agreed specifications.",
        "Delays in delivery and the consequences of such delays.",
        "The buyer’s rights and remedies in the event of defective performance."
      ],
      buttonText: "Contact us"
    };
  }

  if (location.pathname.includes('aviationfinance')) {
    topSideProps = {
      image: assets.AviationFinanceSalePurchase_service, section: "Service",
      service: "Aviation Finance"
    };
    bottomSideProps = {
      leftSectionText: "We have acted in many aviation finance cases over the years. At the negotiation stage, we advise clients on the wording of finance contracts and assist with the discussions on their terms.",
      rightSectionIntro: "We also act in relation to disputes concerning aviation finance contracts.",
      rightSectionIntro2: "In the context of the NSF form, examples of the types of disputes in which we have acted are:",
      rightSectionList1: [
        "Issues concerning whether parties are contractually bound to an aviation finance deal.",
        "The lender’s remedies for a borrower’s failure to repay.",
        "The borrower’s rights as regards the condition of the aircraft on delivery."
      ],
      rightSectionIntro3: "As regards aviation finance contracts, we have represented clients in many arbitrations over the years involving issues concerning:",
      rightSectionList2: [
        "Issues concerning whether parties are contractually bound to an aviation finance deal.",
        "The lender’s remedies for a borrower’s failure to repay.",
        "The borrower’s rights as regards the condition of the aircraft on delivery."
      ],
      buttonText: "Contact us"
    };
  }

  if (location.pathname.includes('marshallislandsadvice')) {
    topSideProps = {
      image: assets.MarshalSalePurchase_service, section: "Service",
      service: "Marshall Islands Advice"
    };
    bottomSideProps = {
      leftSectionText: "We have extensive experience providing advice on Marshall Islands law. Our services include advising on corporate, commercial, and regulatory matters.",
      rightSectionIntro: "We also assist with disputes concerning Marshall Islands law and provide representation in related arbitrations.",
      rightSectionIntro2: "Examples of the types of issues we advise on are:",
      rightSectionList1: [
        "Corporate governance and compliance issues.",
        "Commercial contract disputes.",
        "Regulatory compliance and enforcement."
      ],
      rightSectionIntro3: "In addition, we provide guidance on:",
      rightSectionList2: [
        "Formation and management of Marshall Islands entities.",
        "Ship and yacht registration under Marshall Islands flag.",
        "Compliance with Marshall Islands maritime regulations."
      ],
      buttonText: "Contact us"
    };
  }

  return (
    <div>
      <Outlet context={{ topSideProps, bottomSideProps }} />
    </div>
  );
};

export default ServicePage;
