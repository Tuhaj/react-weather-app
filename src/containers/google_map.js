import React, { Component } from 'react';

export default class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { lat, lng } = this.props
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: { lat, lng}
    })
  }

  render() {
    return <div ref="map" />;
  }
}
