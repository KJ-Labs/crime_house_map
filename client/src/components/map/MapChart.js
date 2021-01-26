import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';


class SimpleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {

    return (
      <Map
        item
        xs = { 12 }
        style={{ height: '100vh', width: '100%' }}
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 12 }
        initialCenter = {{ lat: 47.6219, lng: -122.3517 }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Marker1' }
          position = {{ lat: 47.6219, lng: -122.3517 }}
            ></Marker>
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Marker2' }
          position = {{ lat: 50.6219, lng: -122.3517 }}
            ></Marker>

<InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h4>{this.state.selectedPlace.title}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEMAPS
})(SimpleMap);

