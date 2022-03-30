import PropTypes from 'prop-types';
import { SearchIcon } from '../../assets';

const SearchBar = ({ search, setSearch }) => {
  const changeHandler = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="border-gray-400 border-2 w-full md:w-[80%] lg:w-[50%] flex items-center rounded-2xl bg-white shadow-2xl p-4">
      <SearchIcon className="w-8 mr-3 text-primary" />
      <input
        value={search}
        onChange={changeHandler}
        className="w-full text-xl sm:text-2xl outline-none font-roboto text-primary"
        placeholder="Search"
        type="text"
        name=""
        id=""
      />
    </div>
  );
};

SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired
};

export default SearchBar;
