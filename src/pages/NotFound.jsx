import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="site-wrap flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
    <p className="eyebrow">404</p>
    <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">This route doesn’t render.</h1>
    <p className="mt-4 max-w-md text-muted">
      The page you’re looking for isn’t in the schema. Back to the work, or start a conversation.
    </p>
    <div className="mt-8 flex gap-3">
      <Link to="/" className="btn-primary">
        Home
      </Link>
      <Link to="/projects" className="btn-ghost">
        Work
      </Link>
    </div>
  </div>
);

export default NotFound;
