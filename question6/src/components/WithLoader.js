import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const WithLoader = (WrappedComponent, fetchData) => {
  return () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
      fetchData()
        .then((fetchedData) => {
          setData(fetchedData);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    }, []);

    return (
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <WrappedComponent data={data} />
        )}
      </div>
    );
  };
};

export default WithLoader;
