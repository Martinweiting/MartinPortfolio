

const AboutMe = () => {
  return (
    <section className="w-full py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-[#9BC7F3] mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src="https://picsum.photos/500/400"
            alt="About Me"
            className="rounded-lg shadow-md w-full md:w-1/3 h-[300px] object-cover"
            width={400}
            height={300}
          />
          <p className="text-lg text-foreground text-center md:text-left w-full md:w-2/3">
            I am a web developer with a focus on creating user-friendly and
            efficient web applications. My expertise includes front-end
            development with React and Next.js, as well as back-end development
            with Node.js and Express. I am always eager to learn new technologies
            and improve my skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
