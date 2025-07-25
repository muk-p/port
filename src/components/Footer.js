const Footer = () => {
  return (
    <footer className="py-8 bg-gradient-to-br from-black to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} John Mukara. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
