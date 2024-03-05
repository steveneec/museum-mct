/* 
Since the map was loaded on client side, 
we need to make this component client rendered as well else error occurs
*/
"use client";

//Map component Component from library
import { GoogleMap, Marker } from "@react-google-maps/api";

//Map's styling
export const defaultMapContainerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "15px",
};

const defaultMapCenter = {
  lat: -0.197805,
  lng: -78.5054599,
};

const defaultMapZoom = 19;

const defaultMapOptions = {
  tilt: 0,
};

const MapComponent = () => {
  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
      </GoogleMap>
    </div>
  );
};

export { MapComponent };
