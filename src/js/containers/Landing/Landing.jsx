import React from 'react';
import { Component, PropTypes } from 'react';

import LandingLayout from 'components/LandingLayout';
import axios from 'axios';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    };
  }

  componentDidMount() {
    this.fetchUrls();
  }

  fetchUrls() {
    axios.get('assets/data/urls.json')
    .then((response) => {
      console.log(response.data);
      this.setState({urls: response.data});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <LandingLayout
        props={this.state}
      />
    )
  }
}

export default Landing;
