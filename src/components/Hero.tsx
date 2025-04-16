const Hero = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-primary">Hello! I'm Martin. 👋</h1>
          <p className="text-lg mt-2 text-foreground">
            A front-end engineer with an education background, curious mind,
            and a passion for crafting thoughtful, intuitive web experiences. ✨
          </p>
        </div>
        <img
          src="https://picsum.photos/300/300"
          alt="Profile"
          className="rounded-full mx-auto md:mx-0"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default Hero;
