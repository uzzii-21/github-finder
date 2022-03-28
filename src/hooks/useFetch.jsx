import { useEffect, useState } from 'react';

const useFetch = (api) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAPI = async () => {
    try {
      const response = await fetch(api);
      const { items } = await response.json();
      setData(items);
      setLoading(false);
    } catch (err) {
      setError(err);
      console.log(err, 'Error');
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchAPI();
  }, [api]);

  return { data, isLoading, error };
};

export default useFetch;
