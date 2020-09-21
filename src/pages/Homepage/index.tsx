import React, { useEffect, useState } from "react";
import axios from 'axios';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import TableComponent from "../../components/Table/Table"
import SpinLoader from '../../components/Loader/Loader';


export default function Home() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 

  useEffect(() => {
    setIsLoading(true);
    axios({
      "method": "GET",
      "url": "https://randomuser.me/api/0.8/?results=20",
    })
      .then((response) => {
        setdata(response.data.results);
        console.log(response.data.results);
      
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
    console.log("details",data);
  }, [setdata]);

  return (
    <Auxillary>
        {isLoading ? (
       <SpinLoader/>
      ) : (
        <div>
          <h1>User Details</h1>
          <TableComponent data={data} ></TableComponent>
        </div>
        )}

    </Auxillary>
  );
}
