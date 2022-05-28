import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { color } from "@mui/system";

const containerStyle = {
  width: "900px",
  height: "400px",
};

const center = {
  lat: 6.9271,
  lng: 79.8612,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCsVDSmueX2EUG97Sj_3jut_l5EO4v5w_8",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
      <Marker

        label={{text:'hey',color:'#fff'}}

        // icon={{
        //   url: "some_img_link",
        // }}
        position={{
          lat: 6.9271,
          lng: 79.8612,
        }}
      />
      <Marker  position={{
          lat: 6.9271,
          lng: 79.8612,
        }}>
          <label></label>
      </Marker>
       <Marker
        label={{text:'hey hey hey hey',color:'#fff'}}
        // icon={{
        //   url: "some_img_link",
        // }}
        position={{
          lat: 6.9778,
          lng: 79.9272,
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
