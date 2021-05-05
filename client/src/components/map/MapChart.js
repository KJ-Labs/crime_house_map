import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import places from "./crimedata.js";
console.log("upon importing crimedata.js");
console.log(places);
class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedPlaces: null,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    //console.log(places);

    setTimeout(() => {
      this.setState({
        updatedPlaces: places
      });
      console.log("timeOut in componentDidMount");
      console.log(this.state.updatedPlaces);
    }, 1000);
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
        initialCenter={{ lat: 47.6205, lng: -122.3493 }}
        style={{ height: "100vh", width: "100%" }}
      >
        {this.state.updatedPlaces != null &&
          this.state.updatedPlaces.map((place, i) => (
            <Marker
              key={i}
              onClick={this.handleMarkerClick}
              position={{
                lat: parseFloat(place.latitude),
                lng: parseFloat(place.longitude)
              }}
              icon={{
 url:
                  place.offense_parent_group === "ASSAULT OFFENSES"
                    ? "http://maps.google.com/mapfiles/kml/paddle/ylw-blank.png"
                    : place.offense_parent_group ===
                      "BURGLARY/BREAKING&ENTERING"
                    ? "http://maps.google.com/mapfiles/kml/paddle/orange-blank.png"
                    : place.offense_parent_group === "TRESPASS OF REAL PROPERTY"
                    ? "http://maps.google.com/mapfiles/kml/paddle/orange-circle.png"
                    : place.offense_parent_group === "STOLEN PROPERTY OFFENSES"
                    ? "http://maps.google.com/mapfiles/kml/paddle/grn-blank.png"
                    : place.offense_parent_group === "SEX OFFENSES"
                    ? "http://maps.google.com/mapfiles/kml/paddle/wht-circle.png"
                    : place.offense_parent_group ===
                      "DESTRUCTION/DAMAGE/VANDALISM OF PROPERTY"
                    ? "http://maps.google.com/mapfiles/kml/paddle/grn-circle.png"
                    : place.offense_parent_group === "DRUG/NARCOTIC OFFENSES"
                    ? "http://maps.google.com/mapfiles/kml/paddle/wht-stars.png"
                    : place.offense_parent_group === "ROBBERY"
                    ? "http://maps.google.com/mapfiles/kml/paddle/purple-blank.png"
                    : place.offense_parent_group === "MOTOR VEHICLE THEFT "
                    ? "http://maps.google.com/mapfiles/kml/paddle/pink-blank.png"
                    : place.offense_parent_group === "HOMICIDE OFFENSES"
                    ? "http://maps.google.com/mapfiles/kml/paddle/ltblu-blank.png"
                    : place.offense_parent_group === "ARSON"
                    ? "http://maps.google.com/mapfiles/kml/paddle/blu-blank.png"
                    : place.offense_parent_group === "HUMAN TRAFFICKING"
                    ? "http://maps.google.com/mapfiles/kml/paddle/ltblu-circle.png"
                    : place.offense_parent_group === "PROSTITUTION OFFENSES"
                    ? "http://maps.google.com/mapfiles/kml/paddle/T.png"
                    : `http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png`,
                scaledSize: new window.google.maps.Size(50, 50)
              }}
              placeIndex={i}
              name={place.offense}
            />
          ))}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.handleClose}
        >
          <div>
            {" "}
            <h6>{this.state.selectedPlace.offense}</h6>
            <p> {"Crime: " + this.state.selectedPlace.offense_parent_group}</p>
            <p> {"City: " + this.state.selectedPlace.mcpp}</p>
            <p> {"Report Date: " + this.state.selectedPlace.report_datetime}</p>
            <p> {"Report Number: " + this.state.selectedPlace.report_number}</p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLEMAPS
})(MapView);
