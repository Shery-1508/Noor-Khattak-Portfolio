import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-gray-50 min-h-[70vh] flex items-center">
      <div className="container-custom py-20 text-center">
        <h1 className="font-serif text-primary text-6xl mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          We're sorry, the page you requested could not be found.
          Please return to the homepage or contact us for assistance.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/" className="btn btn-primary">
            Return to Homepage
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 