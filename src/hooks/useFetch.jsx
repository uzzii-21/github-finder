import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useFetch = (endPoint, keyWord) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;

  const fetchAPI = async () => {
    try {
      const response = await fetch(GITHUB_URL + endPoint + keyWord);
      const { items } = await response.json();
      if (items.length) setData(items);
      else navigate('/notfound');
      setLoading(false);
    } catch (err) {
      setError(err);
      console.log(err, 'Error');
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setData([]);
    let timeOut;
    if (keyWord) {
      timeOut = setTimeout(() => {
        fetchAPI();
      }, 800);
    } else {
      setLoading(false);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [keyWord]);

  return { data, isLoading, error };
};

export default useFetch;
