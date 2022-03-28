import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ArrowIcon } from '../../assets';

const ProfileList = ({ imgUrl, name, profileUrl }) => (
  <motion.div
    className="flex items-center bg-gray-400/10 p-4 rounded-3xl"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9 }}
  >
    <img className="mask mask-squircle w-20" src={imgUrl} alt="User" />
    <div className="ml-4">
      <h2 className="text-2xl font-medium text-white">{name}</h2>
      <a
        href={profileUrl}
        target="_blank"
        className="text-sm mt-2 inline-block flex items-center group"
        rel="noreferrer"
      >
        Github Profile{' '}
        <ArrowIcon className="w-5 ml-1 group-hover:-rotate-45 transition-all" />{' '}
      </a>
    </div>
  </motion.div>
);

ProfileList.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired
};
export default ProfileList;
