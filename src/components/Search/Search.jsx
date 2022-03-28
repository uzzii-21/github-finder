import PropTypes from 'prop-types';

const Search = ({ setBlur, search, setSearch }) => {
  const onFocus = () => setBlur(true);
  const onBlur = (e) =>
    e.target.value === '' ? setBlur(false) : setBlur(true);
  const changeHandler = (event) => {
    setSearch(event.target.value);
  };
  return (
    <input
      onFocus={onFocus}
      onBlur={onBlur}
      value={search}
      onChange={changeHandler}
      className="w-full md:w-[80%] lg:w-[50%] p-4 text-xl sm:text-2xl rounded-md outline-none font-roboto shadow-inner shadow-2xl text-primary"
      placeholder="Search"
      type="text"
      name=""
      id=""
    />
  );
};

Search.propTypes = {
  setBlur: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired
};

export default Search;
