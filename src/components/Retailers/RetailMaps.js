import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    boxShadow: "0 8px 10px -2px rgba(0,0,0,0.8)",
    width: "90vw",
    margin: "auto"
};

const RetailMaps = (props) => {
    return(
        <div>
            <Map
                google={props.google}
                zoom={7}
                style={mapStyles}
                initialCenter={{ lat: 43.534484, lng: -80.690667}}
            >
                <Marker label="A" position={{ lat: 43.783005, lng: -79.470868}} />
                <Marker label="B" position={{ lat: 43.876039, lng: -79.278148}} />
                <Marker label="C" position={{ lat: 43.821293, lng: -79.530984}} />
                <Marker label="D" position={{ lat: 43.669384, lng: -79.433299}} />
                <Marker label="E" position={{ lat: 43.194225, lng: -79.824277}} />
                <Marker label="F" position={{ lat: 43.383945, lng: -79.761652}} />
                <Marker label="G" position={{ lat: 42.926631, lng: -81.249560}} />
                <Marker label="H" position={{ lat: 43.170247, lng: -79.200686}} />
                <Marker label="I" position={{ lat: 42.991825, lng: -82.407086}} />
                <Marker label="J" position={{ lat: 43.834358, lng: -79.069360}} />
                <Marker label="K" position={{ lat: 43.855835, lng: -79.705551}} />
                <Marker label="L" position={{ lat: 44.042394, lng: -79.476848}} />
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCnG_56yRC8m2q2xdAoG1TBH1YHMBSb4jY'
  })(RetailMaps);