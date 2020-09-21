import React, { useEffect, useState } from "react";
import axios from 'axios';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import TableComponent from "../../components/Table/Table"
import SpinLoader from '../../components/Loader/Loader';
import {  useHistory } from "react-router-dom";
import "./style.scss";
export default function Home() {
  const history = useHistory();
  const [user, setUser]: any = useState([]);
  const [data, setdata]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = React.useCallback(() => {
    setIsLoading(true);
    axios({
      "method": "GET",
      "url": "https://randomuser.me/api/0.8/?results=20",
    })
      .then((response) => {
        setdata(response.data.results);

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      })
  }, [])

  useEffect(() => {
   
   
    fetchData();
   
  }, [setdata]);
  const handleClick = () => {
    localStorage.clear();
    history.push('/');
  }
  return (
    <Auxillary>
      {isLoading ? (
        <SpinLoader />
      ) : (
          <div>
            <h1>User Details</h1>
    
            <TableComponent data={data} ></TableComponent>
            <button className='signout' type="button" onClick={handleClick}>
     Sign Out
    </button>
          </div>
        )}

    </Auxillary>
  );
}
