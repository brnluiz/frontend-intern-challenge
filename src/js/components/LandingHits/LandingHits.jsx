import React from 'react';

const LandingHits = ({hits}) => (
  <section className='hits'>
    <h2>Hits</h2>

    <div className='hits-number'>
      <span className='counter'>{hits}</span>
      <span className='counter-legend'>Cliques em links</span>
    </div>
  </section>
)

export default LandingHits;
