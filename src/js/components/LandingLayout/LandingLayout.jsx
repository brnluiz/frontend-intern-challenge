import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import LandingShortenerBox from 'components/LandingShortenerBox';
import LandingFeatured from 'components/LandingFeatured';
import LandingHits from 'components/LandingHits';

const LandingLayout = ({props}) => (
  <div>
    <Header />
    <LandingShortenerBox />
    <LandingFeatured urls={props.urls} />
    <LandingHits hits={props.totalHits} />
    <Footer />
  </div>
)

export default LandingLayout;
