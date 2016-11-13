import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const LandingShortenerBox = ({shortened, shortenerHandler}) => {
  let textField = <input className='input-group-field' type='text' placeholder='Cole seu link aqui' />;
  let button = <input type='submit' value='Encurtar' />;

  if (shortened.status) {
    let text = 'Copiar';
    textField = <input className='input-group-field shortened' type='text' value={shortened.url} />;
    button = (
      <CopyToClipboard text={shortened.url}
        onCopy={() => { console.log('Copiado!') }}
      >
        <input type='submit' value={text} />
      </CopyToClipboard>
    );
  }

  return (
    <section className='landing-form'>
      <div className='large-6 large-offset-3'>
        <h1>Encurte seus links.</h1>
        <p>Links são longos. Encurte os links que você deseja compartilhar e acompanhe enquanto viajam através da internet</p>
        <form className='shortner row column' onSubmit={shortenerHandler} >
          <div className='input-group'>
            {textField}
            <div className='input-group-button'>
              {button}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LandingShortenerBox;
