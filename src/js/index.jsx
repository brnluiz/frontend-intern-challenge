// import React from 'react';
// import { render } from 'react-dom';
//
// render(<h1>Teste</h1>, document.getElementById('app'));

import axios from 'axios';

axios.get('assets/data/urls.json')
.then(function(response) {
  console.log(response);
}).catch(function(err) {
  console.log(err);
});
