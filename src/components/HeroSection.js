import profilePlaceholder from '../assets/ChatGPT Image Jul 22, 2025, 10_30_11 PM.png'

const HeroSection = () => {
  const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
   <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 relative">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="animate-fade-in-up">
      {/* Profile Image */}
      <div className="mb-8 flex justify-center">
        <div className="relative">
          <img
            src={profilePlaceholder}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-xl border-4 border-white animate-[float_6s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300 via-white to-blue-200 opacity-20"></div>
        </div>
      </div>

      {/* Name & Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
        John Mukara
      </h1>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-700 mb-6">
        Fullstack Web Developer
      </h2>

      {/* Bio/Tagline */}
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
        Passionate full-stack developer crafting elegant solutions with modern technologies. 
        I transform ideas into intuitive digital experiences that make a difference.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <button
          onClick={() => scrollToSection('projects')}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          View My Work
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 transition"
        >
          Get In Touch
        </button>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <button
        onClick={() => scrollToSection('about')}
        className="border border-blue-600 text-blue-600 px-4 py-2 rounded-xl hover:bg-blue-50 transition"
      >
        ↑
      </button>
    </div>
  </div>

  {/* Background Decoration */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
  </div>
</section>
  );
};

export default HeroSection;
