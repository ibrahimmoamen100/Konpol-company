import GoogleMapReact from 'google-map-react';
import React from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapLocation(){
  const defaultProps = {
    center: {
      lat: 24.519051521968127,
      lng: 39.58258326208742
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}