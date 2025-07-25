const ContactSection = () => {
  const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
   <section id="contact" className="py-28 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
      <p className="text-lg text-gray-600 mb-8">
        I'm always open to discussing new projects or opportunities. Feel free to reach out!
      </p>
      <div
        className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-xl transition shadow-md"
      >
        Contact Me On
        <a
          href="mailto:myjohnmukara@gmail.com"
          className="text-blue-200 hover:underline"
        >
          Email: myjohnmukara@gmail.com
        </a>
        <a className="ml-4 text-blue-200 hover:underline" >
          Phone: +254 795 040 185
        </a>
      </div>
    </div>
  </section>

  );
};

export default ContactSection;
