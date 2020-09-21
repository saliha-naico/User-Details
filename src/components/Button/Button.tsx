import React from "react";
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Button from '@material-ui/core/Button';
import './Button.scss'


const ButtonComponent = (props: any) => {

  return (
    <Auxillary>
      <Button variant="contained" color="primary" type={props.type} className="button btn-class"
        onClick={props.onClick}>
        {props.label}
      </Button>

    </Auxillary>
  );
};

export default ButtonComponent;
