import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react"; // Import the Lottie component
import errorAnimation from "./Error.json"; // Import your Lottie animation file

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page h-screen items-center bg-orange-500">
      <section className="flex items-center  p-20 ">
        <div className="container flex flex-col items-center  px-5 mx-auto my-8">
          <div className="max-w-lg text-center">
            <Lottie animationData={errorAnimation} />
            <Link
              to="/"
              className="btn rounded-full bg-yellow-400  text-md px-8 py-2 font-bold"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      <p>
        <i></i>
      </p>
    </div>
  );
}
