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
      let urls = response.data
      // Sort URLs from the most clicked to the less clicked
      .sort((a,b) => {
        if (a.hits > b.hits) {
          return -1;
        }
        if (a.hits < b.hits) {
          return 1;
        }
        return 0;
      })
      // Format the number in the de-DE format (dot sepparator for the thousands)
      .map((url) => {
        url.hitsFormatted = url.hits.toLocaleString('de-DE');
        return url;
      });

      this.setState({urls: urls});
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
