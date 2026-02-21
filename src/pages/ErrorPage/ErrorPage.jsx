import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const is404 = error?.status === 404 || error?.statusText === "Not Found";

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-amber-500 font-semibold text-sm uppercase tracking-wider mb-2">
        {is404 ? "Error 404" : "Something went wrong"}
      </p>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
        {is404 ? "Page not found" : "Unexpected error"}
      </h1>
      <p className="text-slate-600 max-w-md mb-8">
        {is404
          ? "The page you’re looking for doesn’t exist or has been moved."
          : "We’re sorry, something went wrong. Please try again or go back home."}
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-5 py-2.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}

export default ErrorPage;
