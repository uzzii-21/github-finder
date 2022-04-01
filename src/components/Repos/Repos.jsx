import React from 'react';
import { ForkIcon, StarIcon } from '../../assets';

const Repos = ({ repos }) =>
  repos.map((repo) => (
    <article
      key={repo.id}
      className="bg-secondary/80 hover:shadow-xl transition-all rounded-2xl p-6 mb-4"
    >
      <h2 className="text-2xl font-medium text-white">{repo.name}</h2>
      {repo.description && (
        <p className="text-base text-white font-light mt-1">
          {repo.description}
        </p>
      )}

      <div className="flex flex-wrap flex-col md:flex-row items-start md:items-center justify-between mt-6 text-lightGray">
        <div className="flex text-sm">
          {repo.language && <p className="mr-3">{repo.language}</p>}
          {repo.forks > 0 && (
            <span className="mr-3 flex">
              <ForkIcon className="mr-1" />
              <p>{repo.forks}</p>
            </span>
          )}
          {repo.stargazers_count > 0 && (
            <span className="mr-3 flex items-center">
              <StarIcon className="mr-1 h-5 w-5" />
              <p>{repo.stargazers_count.toLocaleString()}</p>
            </span>
          )}
        </div>

        <div className="flex text-xs">
          <p className="">{`Updated on ${new Date(
            repo.created_at
          ).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}`}</p>
          {repo.size > 0 && (
            <p className="ml-3">{repo.size.toLocaleString()} KB</p>
          )}
        </div>
      </div>
    </article>
  ));

export default Repos;
