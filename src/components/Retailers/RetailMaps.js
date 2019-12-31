import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    
};

const RetailMaps = (props) => {
    return(
        <div>
            <Map
                google={props.google}
                zoom={9}
                style={mapStyles}
                initialCenter={{ lat: 43.783034, lng: -79.470877}}
            >
                <Marker label="A" position={{ lat: 43.783005, lng: -79.470868}} />
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCnG_56yRC8m2q2xdAoG1TBH1YHMBSb4jY'
  })(RetailMaps);