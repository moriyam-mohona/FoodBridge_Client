import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <section className="flex items-center  p-20 ">
        <div className="container flex flex-col items-center  px-5 mx-auto my-8">
          <div className="max-w-lg text-center">
            <h2 className="mb-3 font-medium text-9xl text-green-700">404</h2>
            <p className="text-7xl">{error.statusText || error.message}</p>
            <p className="mt-4 mb-8 dark:text-gray-600 text-xl">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to="/"
              className="btn glass px-16 py-3 text-lg text-white rounded-full font-semibold bg-green-700"
            >
              Back to Homepage
            </Link>
            {/* <Link to='/'><a className="px-7 py-4 font-semibold bg-green-700 dark:text-gray-50">Back to Homepage</a></Link> */}
          </div>
        </div>
      </section>

      <p>
        <i></i>
      </p>
    </div>
  );
}
