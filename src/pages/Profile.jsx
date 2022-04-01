import React from 'react';
import { useParams } from 'react-router-dom';
import { Repos, UserInfo, Loading, Header } from '../components';
import useGithubUserData from '../hooks/useGithubUserData';

const Profile = () => {
  const params = useParams();
  const { userData, repoData, error } = useGithubUserData(params.username);
  return !error ? (
    <section className="flex md:flex-row flex-col items-center md:items-start justify-between w-full">
      {userData ? (
        <UserInfo user={userData} />
      ) : (
        <div className="h-[81vh] flex items-center justify-center">
          <Loading />
        </div>
      )}
      <div className="w-full h-full md:h-[81vh] overflow-auto md:pr-2">
        {repoData ? (
          <Repos repos={repoData} />
        ) : (
          <div className="h-full flex items-center justify-center">
            <Loading />
          </div>
        )}
      </div>
    </section>
  ) : (
    <Header
      heading="Oops!"
      description="Oh no, you hit the rate limit! Try again later."
    />
  );
};

export default Profile;
