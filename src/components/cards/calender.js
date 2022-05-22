import React, { Fragment,useState  } from "react";
import Calendar from 'react-calendar';
const Calander = () => {
    const [value, onChange] = useState(new Date());
    return <Fragment>
<div>
      <Calendar onChange={onChange} value={value} />
    </div>
    </Fragment>
}
export default Calander