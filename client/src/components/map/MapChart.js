
import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import places from './cleanedcrimedata.js'




class MapView extends Component {
  constructor(props) {
    super(props)
    this.state = {

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

    };
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }



  handleMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: places[props.placeIndex],
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  handleClose = () => {
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
        className={"map"}
        initialCenter={{ lat: 47.6205, lng: -122.3493}}
        style={{ height: '100vh', width: '100%' }}
      >

        {places.map((place, i) => {
          return (



            <Marker
              key={i}
              onClick={this.handleMarkerClick}
              position={{
                lat: parseFloat(place.latitude),
                lng: parseFloat(place.longitude)

              }}

              icon={{

                url: place.offense_parent_group === "ASSAULT OFFENSES" ? "/googlemarkersyellow.svg"
                : place.offense_parent_group === "BURGLARY/BREAKING&ENTERING" ?"/googlemarkersdarkorange.svg"
                : place.offense_parent_group === "TRESPASS OF REAL PROPERTY" ?"/googlemarkersorange.svg"
                : place.offense_parent_group === "STOLEN PROPERTY OFFENSES" ?"/googlemarkersgreen.svg"
                : place.offense_parent_group === "SEX OFFENSES" ?"/googlemarkersblue.svg"
                : place.offense_parent_group === "DESTRUCTION/DAMAGE/VANDALISM OF PROPERTY" ?"/googlemarkersdarkgreen.svg"
                : place.offense_parent_group === "DRUG/NARCOTIC OFFENSES" ?"/googlemarkersdarkgray.svg"
                : place.offense_parent_group === "ROBBERY" ?"/googlemarkersdarkpurple.svg"
                : place.offense_parent_group === "MOTOR VEHICLE THEFT " ?"/googlemarkerspink.svg"
                : place.offense_parent_group === "HOMICIDE OFFENSES" ?"/googlemarkersteal.svg"
                : place.offense_parent_group === "ARSON" ?"/googlemarkerslightblue.svg"
                : place.offense_parent_group === "HUMAN TRAFFICKING" ?"/googlemarkersteal.svg"
                : place.offense_parent_group === "PROSTITUTION OFFENSES" ?"/googlemarkerstan.svg"
                : place.offense_parent_group === "PEEPING TOM" ?"/googlemarkersblack.svg"
                : `/googlemarkerdefault.svg`,
                scaledSize: new window.google.maps.Size(50, 50)
              }}
              placeIndex={i}
              name={place.offense}
            />

          );
        })}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.handleClose}
        >
          <div> <h6>{this.state.selectedPlace.offense}</h6>
         <p> {this.state.selectedPlace.offense_parent_group}</p>
         <p> {this.state.selectedPlace.mcpp}</p>
         <p> {this.state.selectedPlace.report_datetime}</p>




          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEMAPS
})(MapView);















