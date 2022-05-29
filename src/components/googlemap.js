import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { color } from "@mui/system";
import {db} from "../firebase-config";
import {collection, getDoc} from "firebase/firestore";
import Markers from "./marker";

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
  const [alt , setAlt] = useState([])
  const [lng, setLng] = useState([]);
  const [lat, setLat] = useState([]);
  const usersCollectionRef = collection(db, "alert");

const getAlt = async () =>{
  const data = await getDoc(usersCollectionRef);
  console.log(data)
  console.log("hi")
  setAlt(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
};

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
    console.log("hi")
    getAlt()
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  useEffect(()=>{
    getAlt()
  },[]);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={onLoad && getAlt}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
      {alt.map((alts)=>{
        return <Marker

        label={{text:`${alts.name}`,color:'#fff'}}

        // icon={{
        //   url: "some_img_link",
        // }}
        position={{
          lat: 6.9271,
          lng: 79.8612,
        }}
      />
      })}

      <Markers />

    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
