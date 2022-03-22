// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Search = ({ isTyping }) => {
  const onFocus = () => isTyping(true);
  const onBlur = (e) =>
    e.target.value === '' ? isTyping(false) : isTyping(true);

  return (
    <input
      onFocus={onFocus}
      onBlur={onBlur}
      className="w-full md:w-[80%] lg:w-[50%] p-4 text-xl sm:text-2xl rounded-md outline-none font-roboto shadow-inner shadow-2xl"
      placeholder="Search"
      type="text"
      name=""
      id=""
    />
  );
};

Search.propTypes = {
  isTyping: PropTypes.func.isRequired
};

export default Search;
