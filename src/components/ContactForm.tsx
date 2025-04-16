
const ContactForm = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-accent mb-6">Contact Me</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-foreground text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-foreground leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-foreground text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-foreground leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-foreground text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-foreground leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Message"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
