import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
    height: "35em",
    marginRight: "1em",
    marginLeft: "1em",
    boxShadow: "0 8px 10px -2px rgba(0,0,0,0.8)"
};


class ContactMap extends Component {
    
    state = {
        showingInfoWindow: true,
        activeMarker: {},
        selectedPlace: {}
    };

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
    };

    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={17}
                    style={mapStyles}
                    onClick={this.props.onMarkerClick}
                    initialCenter={{ lat: 43.769444, lng: -79.472097}}
                >
                    <Marker 
                        onClick={this.onMarkerClick}
                        position={{ lat: 43.769444, lng: -79.472097}}
                    />

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                            <div style={{textAlign: "center"}}>
                                <h4>Three Trees Flooring</h4>
                                <h5>20 Alness, Unit 1, Toronto, ON, Canada</h5>
                            </div>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCnG_56yRC8m2q2xdAoG1TBH1YHMBSb4jY'
  })(ContactMap);