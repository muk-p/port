const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary-foreground mb-4">About Me</h2>
        <p className="text-lg text-primary-foreground/80 mb-8">
          I am a passionate full-stack developer with experience in building modern web applications.
          My goal is to create seamless user experiences through clean and efficient code.
        </p>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => scrollToSection('projects')}
          className="bg-card text-card-foreground hover:bg-card/90 shadow-medium px-8 py-3"
        >
          View My Work
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;
