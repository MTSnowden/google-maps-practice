import React from 'react';
import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 30.267153, lng: -97.743057 }}
    />
  );
 }

 const WrappedMap = withScriptjs(withGoogleMap(Map));
 
function App() {
  return (
    <div style={{width: '100vw', height: '100vh'}} >
      <WrappedMap
        googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyD8--ovOhB1SIgxHIpXhoZECQ0sOIpiMPg&callback=initMap"}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}   
      />
    </div>
  );
}

export default App;
