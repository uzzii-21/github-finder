import { useState } from 'react';
import { Header, ProfileList, SearchBar, Loading } from '../components';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const [search, setSearch] = useState('');
  const { data, isLoading } = useFetch('search/users?q=', search);
  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      {!data.length && !isLoading ? <Header /> : null}
      {data.length ? (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-3 w-full my-12">
          {data.map((user) => (
            <ProfileList
              key={user.id}
              imgUrl={user.avatar_url}
              name={user.login}
              profileUrl={user.html_url}
            />
          ))}
        </div>
      ) : null}
      {isLoading ? <Loading /> : null}
    </>
  );
};

export default Home;
