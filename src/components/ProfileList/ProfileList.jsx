import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../assets';

const ProfileList = ({ imgUrl, name, profileUrl }) => (
  <Link
    to="profile"
    className="flex items-center bg-gray-400/10 p-4 rounded-3xl border border-gray-400/30 transition-transform active:scale-95"
  >
    <img className="mask mask-squircle w-16 sm:w-20" src={imgUrl} alt="User" />
    <div className="ml-4">
      <h2 className="text-xl sm:text-2xl font-medium text-white">{name}</h2>
      <object>
        <a
          href={profileUrl}
          target="_blank"
          className="text-sm mt-1 sm:mt-2 inline-block flex items-center group text-gray-500"
          rel="noreferrer"
        >
          Github Profile
          <ArrowIcon className="w-5 ml-1 group-hover:-rotate-45 transition-all" />
        </a>
      </object>
    </div>
  </Link>
);

ProfileList.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired
};
export default ProfileList;
