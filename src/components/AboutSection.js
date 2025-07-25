const AboutSection = () => {
  const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10">
          I'm a full-stack developer who turns complex problems into intuitive, performant solutions.
          I specialize in crafting responsive, modern web apps that bridge form and function.
        </p>
        <button
          onClick={() => scrollToSection('projects')}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 shadow-md transition"
        >
          View My Work
        </button>
      </div>
    </section>

  );
};

export default AboutSection;
