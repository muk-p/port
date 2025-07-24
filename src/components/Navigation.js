const Navigation = () => {
  return (
    <nav className="bg-card shadow-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-bold text-primary-foreground">My Portfolio</div>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="text-primary-foreground hover:text-primary">About</a>
            <a href="#projects" className="text-primary-foreground hover:text-primary">Projects</a>
            <a href="#skills" className="text-primary-foreground hover:text-primary">Skills</a>
            <a href="#contact" className="text-primary-foreground hover:text-primary">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
