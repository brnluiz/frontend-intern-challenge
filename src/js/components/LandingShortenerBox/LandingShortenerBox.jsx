import React from 'react';

const LandingShortenerBox = () => (
  <section className='landing-form'>
    <div className='large-6 large-offset-3'>
      <h1>Encurte seus links.</h1>
      <p>Links são longos. Encurte os links que você deseja compartilhar e acompanhe enquanto viajam através da internet</p>
      <form className='shortner row column'>
        <div className='input-group'>
          <input className='input-group-field' type='text' placeholder='Cole seu link aqui' />
          <div className='input-group-button'>
            <input type='submit' value='Encurtar' />
          </div>
        </div>
      </form>
    </div>
  </section>
)

export default LandingShortenerBox;
