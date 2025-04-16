
const Hero = () => {
  return (
    <section className="py-16 text-center">
      <img
        src="https://picsum.photos/200/200"
        alt="Profile"
        className="rounded-full mx-auto mb-4"
        width={200}
        height={200}
      />
      <h1 className="text-4xl font-bold text-primary">Hello, I'm Martin!</h1>
      <p className="text-lg mt-2 text-foreground">
        A passionate web developer ready to bring your ideas to life.
      </p>
    </section>
  );
};

export default Hero;
