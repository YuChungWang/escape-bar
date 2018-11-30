import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '90%',
  height: '90%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: true,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 25.051, lng: 121.542 }}
        >
          <Marker
              onClick={this.onMarkerClick}
              name={'神秘場所'}
          />
          <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
          >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
          </InfoWindow>
        </Map>
      );
    }
  }


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBkwdLLMRVXuU7Bzc5zF-sv4ocxizjstEk'
})(MapContainer);