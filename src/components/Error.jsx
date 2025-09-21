import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>
      <p className="mt-4 text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-primary mt-6">
        Go Home
      </Link>
    </div>
  );
}

export default Error;
