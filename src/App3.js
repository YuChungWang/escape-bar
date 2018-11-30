import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    const style = {
      width: '80%',
      height: '100%'
    }
    return (
      <Map
      google={this.props.google}
      style={style}
      initialCenter={{
        lat: 25.051,
        lng: 121.542
      }}
      zoom={15}
      onClick={this.onMapClicked}
      > 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>

        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBkwdLLMRVXuU7Bzc5zF-sv4ocxizjstEk'
})(MapContainer)