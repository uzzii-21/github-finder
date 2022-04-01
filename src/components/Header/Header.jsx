import PropTypes from 'prop-types';

const Header = ({ heading, description }) => (
  <section className="text-center w-full md:w-[80%] mt-12 h-[70vh] flex flex-col items-center justify-center">
    <h1 className="main-heading text-white">{heading}</h1>
    <p className="mb-12 mt-4 paragraph text-lightGray">{description}</p>
  </section>
);

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
export default Header;
