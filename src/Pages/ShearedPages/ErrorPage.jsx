import { Link, useRouteError } from "react-router-dom";
import e404 from "../../../public/assets/404.png";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page h-screen items-center bg-orange-500">
      <section className="flex items-center  p-20 ">
        <div className="container flex flex-col items-center  px-5 mx-auto my-8">
          <div className="max-w-lg text-center">
            <img src={e404} alt="" />

            <Link
              to="/"
              className="btn rounded-full bg-[#03081F] text-white text-md px-8 py-2 font-normal"
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
