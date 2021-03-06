import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useGithubSearch = (username) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const [error, setError] = useState(false);

  const GITHUB_API = import.meta.env.VITE_GITHUB_API;

  const getUserData = async () => {
    const response = await fetch(`${GITHUB_API}users/${username}`);
    if (response.status === 404) navigate('/notFound');
    if (response.status === 403) setError(true);
    else {
      const data = await response.json();
      setError(false);
      setUserData(data);
    }
  };

  const getRepoData = async () => {
    const response = await fetch(`${GITHUB_API}users/${username}/repos`);
    if (response.status === 404) navigate('/notFound');
    if (response.status === 403) setError(true);
    else {
      const repos = await response.json();
      setError(false);
      setRepoData(repos);
    }
  };

  useEffect(() => {
    getUserData();
    getRepoData();
  }, []);

  return { userData, repoData, error };
};

export default useGithubSearch;
