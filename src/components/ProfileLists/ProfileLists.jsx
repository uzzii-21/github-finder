import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../assets';

const ProfileLists = ({ users }) => (
  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-3 w-full my-12">
    {users.map((user) => (
      <Link
        key={user.id}
        to={`profile/${user.login}`}
        className="flex items-center bg-secondary/80 p-4 rounded-3xl border border-lightGray transition-transform active:scale-95 group overflow-hidden"
      >
        <img
          className="mask mask-squircle w-16 sm:w-20"
          src={user.avatar_url}
          alt="User"
        />
        <div className="ml-4">
          <h2 className="text-xl sm:text-2xl font-medium text-white">
            {user.login}
          </h2>
          <p className="text-xs sm:text-sm mt-1 sm:mt-2 flex items-center text-lightGray">
            See Profile
            <ArrowIcon className="w-5 ml-1 group-hover:-rotate-45 transition-all" />
          </p>
        </div>
      </Link>
    ))}
  </div>
);

ProfileLists.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired
    })
  ).isRequired
};
export default ProfileLists;
