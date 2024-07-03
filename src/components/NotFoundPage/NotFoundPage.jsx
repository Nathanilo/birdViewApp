import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-[100vh]">
        <div>
          <h1 className="text-2xl">404</h1>
        </div>
        <div>
          <Link to="/">
            <button className="text-primary-100">Go back home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
