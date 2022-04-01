import { Link } from 'react-router-dom';

const NotFound = () => (
  <header className="text-center text-white w-full md:w-[80%] mt-28 h-[70vh] flex flex-col items-center justify-center">
    <h1 className="main-heading">Oops!</h1>
    <p className="my-8 paragraph">
      We could not find the user that you are looking for.
    </p>
    <Link
      to="/"
      type="button"
      className="btn btn-wide bg-transparent border-2 text-white text-base border-white hover:bg-primary hover:shadow-md hover:border-gray-700"
    >
      Go back home
    </Link>
  </header>
);

export default NotFound;
