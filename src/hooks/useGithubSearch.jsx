import { useEffect, useState } from 'react';

const useGithubSearch = (username) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const GITHUB_API = import.meta.env.VITE_GITHUB_API;

  const fetchAPI = async () => {
    const response = await fetch(`${GITHUB_API}search/users?q=${username}`);
    const { items } = await response.json();
    if (items.length) setData(items);
    else setError('No results found');
    setLoading(false);
  };

  useEffect(() => {
    setError(null);
    setLoading(true);
    setData([]);
    let timeOut;
    if (username) {
      timeOut = setTimeout(() => {
        fetchAPI();
      }, 800);
    } else {
      setLoading(false);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [username]);

  return { data, isLoading, error };
};

export default useGithubSearch;
