import React, { Fragment, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase-config";
const Markers = () => {
  const [val, setVal] = useState([]);
  const usersCollectionRef = collection(db, "alert");
  const getLoc = async () => {
    const data = await getDocs(usersCollectionRef);
    setVal(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getLoc();
  }, []);
  setInterval(getLoc,10000);
  return (
    <Fragment>
      {val.map((values) => {
          return <Marker
          label={{ text: `${values.name}`, color: "#fff" }}
          // icon={{
          //   url: "some_img_link",
          // }}
          position={{
            lat: values.lat,
            lng: values.lng,
          }}
          >

          </Marker>

      })}
       {/* <Marker
          label={{ text: "hy", color: "#fff" }}
          // icon={{
          //   url: "some_img_link",
          // }}
          position={{
            lat: 7.0047,
            lng: 79.9542,
          }}
        />; */}
    </Fragment>
  );
};
export default Markers;
