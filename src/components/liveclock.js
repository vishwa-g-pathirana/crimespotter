import React, { Fragment } from "react";
import Clock from "react-live-clock";
const Lclock = () => {
  return (
    <Fragment>
      <Clock format={"HH:mm:ss"} ticking={true} timezone={"GMT+5:30"} />
    </Fragment>
  );
};
export default Lclock;
