import { useState } from 'react';
import { Header, ProfileList, Search, Loading } from '../components';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const API = 'https://api.github.com/search/users?q';
  const [isBlur, setBlur] = useState(false);
  const [search, setSearch] = useState('');
  // eslint-disable-next-line no-unused-vars
  const { data, isLoading, error } = useFetch(`${API}=${'uzair'}`);
  return (
    <>
      <Search setBlur={setBlur} search={search} setSearch={setSearch} />
      {!isBlur && !data.length ? <Header /> : null}
      {data.length ? (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-3 w-full mt-12">
          {data.map((user) => (
            <ProfileList
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
