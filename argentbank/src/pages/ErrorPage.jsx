import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <main className="main bg-dark">
      <section className="error-page">
        <h1>404 - PAGE NOT FOUND</h1>
        <p>
          The page you are looking for might have been removed
          <br />
          had its name changed or is temporarily unavailable
        </p>
        <Link to="/">Back to homepage</Link>
      </section>
    </main>
  );
}

export default ErrorPage;
