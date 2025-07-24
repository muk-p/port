const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary-foreground mb-4">Get In Touch</h2>
        <p className="text-lg text-primary-foreground/80 mb-8">
          I'm always open to discussing new projects or opportunities. Feel free to reach out!
        </p>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => scrollToSection('contact')}
          className="bg-card text-card-foreground hover:bg-card/90 shadow-medium px-8 py-3"
        >
          Contact Me
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
