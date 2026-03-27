import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="w-24 h-24 rounded-full border-2 border-yellow-400/30 flex items-center justify-center mb-6">
        <span className="text-5xl font-serif font-bold gold-text">?</span>
      </div>
      <h1 className="font-serif text-4xl font-bold text-yellow-100 mb-3">Page Not Found</h1>
      <p className="text-yellow-200/50 mb-8 max-w-sm">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn-gold px-8 py-4 rounded-full font-bold">
        Back to Home
      </Link>
    </div>
  );
}
