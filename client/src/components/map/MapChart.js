import React from 'react';
import {GoogleMap, Marker, withGoogleMap, withScriptjs, InfoWindow} from 'react-google-maps';
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

const GoogleMapsWrapper = withScriptjs(withGoogleMap(props => {
  const {onMapMounted, ...otherProps} = props;
  return <GoogleMap {...otherProps} ref={c => {
    onMapMounted && onMapMounted(c)
  }}>{props.children}</GoogleMap>
}));

export default class MapPage extends React.Component {

  state = {
    markers: [],
  };

  componentDidMount() {
    console.log('Mounted @ ' + Date.now());
    const url = "https://data.seattle.gov/resource/tazs-3rd5.json";
    fetch(url)
      .then(response => response.json())
      .then(result => {
        this.setState({markers: result});
      });
  }

  _mapRef = null;

  _handleMapMounted = (c) => {
    if (!c || this._mapRef) return;
    this._mapRef = c;
    console.log('Ref set later @ ' + Date.now());
  };

  _handleBoundsChanged = () => {
    if (!this._mapRef) return;
    const center = this._mapRef.getCenter();
    const bounds = this._mapRef.getBounds();
    // console.log(center, bounds);
  };

  render() {
    return (
      <GoogleMapsWrapper
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=` + `${process.env.REACT_APP_GOOGLEMAPS}` + `&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{height: '100vh', width: '100%'}}/>}
        containerElement={<div style={{height: '100vh', width: '100%'}}/>}
        mapElement={<div style={{height: '100vh', width: '100%'}}/>}
        defaultZoom={14}
        defaultCenter={{lat: 47.6205, lng: -122.3493}}
        onMapMounted={this._handleMapMounted}
        onBoundsChanged={this._handleBoundsChanged}
       >

        <MarkerClusterer
          averageCenter
          enableRetinaIcons
          gridSize={60}>
          {this.state.markers.map(marker => (
            <Marker
              key={marker.offense_id}
              position={{
                lat: parseFloat(marker.latitude),
                lng: parseFloat(marker.longitude)

              }}
            />
          ))}
        </MarkerClusterer>

      </GoogleMapsWrapper>

    )
  }
}
