import React from "react";
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './Select.scss'



const Dropdown = (props: any) => {

  return (
    <Auxillary>
        <div  className="select">
        <Select
    
labelId="demo-simple-select-helper-label"
id="demo-simple-select-helper"
value={props.value}
onChange={props.onChange}
>

<MenuItem value="Delhi">Delhi</MenuItem>
<MenuItem value="Hyderabad">Hyderabad</MenuItem>
<MenuItem value="chennai">chennai</MenuItem>
</Select>
        </div>

    </Auxillary>
  );
};

export default Dropdown;