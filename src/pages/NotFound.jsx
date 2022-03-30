import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="text-center text-white w-full md:w-[80%] mt-28 h-[70vh] flex flex-col items-center justify-center">
    <h1 className="text-5xl sm:text-8xl font-roboto font-bold">Oops!</h1>
    <p className="my-8 text-xl">
      We could not find the user that you are looking for.
    </p>
    <Link
      to="/"
      type="button"
      className="btn btn-wide bg-transparent border-2 border-white hover:bg-primary hover:shadow-md hover:border-gray-700"
    >
      Go back home
    </Link>
  </div>
);

export default NotFound;
