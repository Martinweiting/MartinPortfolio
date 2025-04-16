
const AboutMe = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-accent mb-6">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src="https://picsum.photos/400/300"
          alt="About Me"
          className="rounded-lg shadow-md"
          width={400}
          height={300}
        />
        <p className="text-lg text-foreground">
          I am a web developer with a focus on creating user-friendly and
          efficient web applications. My expertise includes front-end
          development with React and Next.js, as well as back-end development
          with Node.js and Express. I am always eager to learn new technologies
          and improve my skills.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
