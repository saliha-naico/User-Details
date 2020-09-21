import React from "react";
import Auxillary from '../../hoc/Auxillary/Auxillary';



const Input = (props: any) => {

  return (
    <Auxillary>
<input name={props.name} ref={props.ref} type={props.type} />
    </Auxillary>
  );
};

export default  Input;
