const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-6 space-y-4 md:space-y-0">
          <div className="text-lg font-bold text-gray-800">My Portfolio</div>
          <div className="flex space-x-4 justify-center md:justify-end">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
