import React from 'react';
import { Component, PropTypes } from 'react';

import LandingLayout from 'components/LandingLayout';
import axios from 'axios';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      totalHits: 0
    };
  }

  componentDidMount() {
    this.fetchUrls();
  }

  formatHits(hits) {
    return hits.toLocaleString('de-DE');
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
      // Format the number with a dot sepparator for the thousands
      .map((url) => {
        url.hitsFormatted = this.formatHits(url.hits);
        return url;
      });

      let totalHits = urls.reduce((hits, url) => {
        return hits + url.hits;
      }, 0);

      this.setState({
        urls: urls,
        totalHits: this.formatHits(totalHits)
      });
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
