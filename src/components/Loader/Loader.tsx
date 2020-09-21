import React from "react";
import Auxillary from '../../hoc/Auxillary/Auxillary';
import Loader from 'react-loader-spinner'


const SpinLoader = (props: any) => {

  return (
    <Auxillary>
    <Loader type="Audio" color="#00BFFF" height={80} width={80} />
    </Auxillary>
  );
};

export default SpinLoader;
