import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowIcon } from '../assets';
import { Repos, UserInfo, Loading, Header } from '../components';
import useGithubUserData from '../hooks/useGithubUserData';

const Profile = () => {
  const params = useParams();
  const { userData, repoData, error } = useGithubUserData(params.username);
  return !error ? (
    <>
      <Link to="/" className="flex justify-start items-center w-full px-4 mb-6">
        {' '}
        <ArrowIcon className="rotate-180 w-6 mr-1" /> Go Back
      </Link>
      <section className="flex md:flex-row flex-col items-center md:items-start justify-between w-full">
        {userData ? (
          <UserInfo user={userData} />
        ) : (
          <div className="h-[81vh] flex items-center justify-center">
            <Loading />
          </div>
        )}
        <div className="md:border-l-2 md:border-secondary w-full h-full md:h-[78vh] overflow-auto md:pl-4 md:pr-2">
          {repoData ? (
            <Repos repos={repoData} />
          ) : (
            <div className="h-full flex items-center justify-center">
              <Loading />
            </div>
          )}
        </div>
      </section>
    </>
  ) : (
    <Header
      heading="Oops!"
      description="Oh no, you hit the rate limit! Try again later."
    />
  );
};

export default Profile;
