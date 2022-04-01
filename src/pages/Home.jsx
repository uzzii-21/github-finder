import { useState } from 'react';
import { Header, ProfileLists, SearchBar, Loading } from '../components';
import useGithubSearch from '../hooks/useGithubSearch';

const Home = () => {
  const [search, setSearch] = useState('');
  const { data, isLoading, error } = useGithubSearch(search);
  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      {!data.length && !isLoading && !error && (
        <Header
          heading="GitHub Finder"
          description="Find Github profiles by username and see their repositories."
        />
      )}
      {error && !data.length && (
        <Header
          heading="Oops!"
          description="We could not find the user that you are looking for."
        />
      )}
      {data.length ? <ProfileLists users={data} /> : null}
      {isLoading && <Loading />}
    </>
  );
};

export default Home;
