import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    height: "80vh",
    marginRight: "2em",
    marginLeft: "2em",
    boxShadow: "0 8px 10px -2px rgba(0,0,0,0.8)"
};


const ContactMap = (props) => {
    return(
        <div>
            <Map
                google={props.google}
                zoom={17}
                style={mapStyles}
                initialCenter={{ lat: 43.769444, lng: -79.472097}}
            >
                <Marker position={{ lat: 43.769444, lng: -79.472097}}/>
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCnG_56yRC8m2q2xdAoG1TBH1YHMBSb4jY'
  })(ContactMap);