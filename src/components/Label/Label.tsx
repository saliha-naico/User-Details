import React from "react";
import Auxillary from '../../hoc/Auxillary/Auxillary';


const Label = (props: any) => {

  return (
    <Auxillary>
      <label  htmlFor={props.label}>{props.children}</label>
    </Auxillary>
  );
};

export default  Label;
