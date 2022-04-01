import PropTypes from 'prop-types';
import {
  AtIcon,
  CalendarIcon,
  ExternalLinkIcon,
  JobIcon,
  LinkIcon,
  LocationIcon,
  TwitterIcon
} from '../../assets';
import Detail from '../Detail/Detail';

const UserInfo = ({ user }) => (
  <aside className="w-[22rem] px-4 mb-6">
    <a href={user.html_url} target="_blank" rel="noreferrer">
      <div className="avatar rounded-3xl relative overflow-hidden">
        <div className="w-80">
          <img src={user.avatar_url} alt={user.login} />
          <div className="absolute h-full w-full bg-secondary/40 bottom-0 left-0 p-4 flex flex-col justify-between">
            <span
              className={`px-4 py-2 text-sm rounded-full ${
                user.hireable ? 'bg-success' : 'bg-error'
              } text-white self-end`}
            >
              {user.hireable ? 'Hireable' : '!Hireable'}
            </span>
            <div>
              <p className="text-sm font-mono font-extralight text-white">
                @{user.login}
              </p>
              <h1 className="text-3xl text-white font-semibold inline-flex items-center">
                {user.name} <ExternalLinkIcon className="h-6 w-6 ml-2" />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </a>
    <div>
      {user.bio && <p className="text-base text-gray-300 mt-4">{user.bio}</p>}
      <div className="flex w-full my-4">
        <div className="text-xs text-lightGray flex-grow text-center flex-col flex">
          <span className="text-xl text-white font-bold">
            {user.public_repos}
          </span>
          Repositories
        </div>
        <div className="divider after:bg-secondary before:bg-secondary divider-horizontal" />
        <div className="text-xs text-lightGray flex-grow text-center flex-col flex">
          <span className="text-xl text-white font-bold">{user.followers}</span>
          Follower
        </div>
        <div className="divider after:bg-secondary before:bg-secondary divider-horizontal" />
        <div className="text-xs text-lightGray flex-grow text-center flex-col flex">
          <span className="text-xl text-white font-bold">{user.following}</span>
          Following
        </div>
      </div>
      <div className="flex flex-col items-start w-full">
        {user.location && (
          <Detail
            icon={<LocationIcon className="w-5 mr-2" />}
            text={user.location}
          />
        )}
        {user.company && (
          <Detail icon={<JobIcon className="w-5 mr-2" />} text={user.company} />
        )}
        {user.created_at && (
          <Detail
            icon={<CalendarIcon className="w-5 mr-2" />}
            text={`Joined ${new Date(user.created_at).toLocaleDateString(
              'en-US',
              {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              }
            )}`}
          />
        )}
        {user.twitter_username && (
          <Detail
            icon={<TwitterIcon className="w-5 mr-2" />}
            text={user.twitter_username}
            link={`https://twitter.com/${user.twitter_username}`}
          />
        )}
        {user.blog && (
          <Detail
            icon={<LinkIcon className="w-5 mr-2" />}
            text={user.blog}
            link={user.blog}
          />
        )}
        {user.email && (
          <Detail icon={<AtIcon className="w-5 mr-2" />} text={user.email} />
        )}
      </div>
    </div>
  </aside>
);

UserInfo.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    bio: PropTypes.string,
    blog: PropTypes.string,
    company: PropTypes.string,
    created_at: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    html_url: PropTypes.string,
    location: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
    public_repos: PropTypes.number,
    twitter_username: PropTypes.string,
    hireable: PropTypes.bool,
    email: PropTypes.string
  }).isRequired
};

export default UserInfo;
