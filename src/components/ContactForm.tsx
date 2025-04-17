'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  return (
    <section className="w-full bg-[#ADD8E6] py-12">
      <div className="container mx-auto md:flex md:items-start md:justify-between gap-8">
        {/* Left side: Contact Information */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-[#9BC7F3] mb-4 md:mb-6 flex items-center justify-center md:justify-start gap-2">
            Let's Connect!
          </h2>
          <p className="text-lg text-foreground mb-6">
            Feel free to reach out — whether it's for a collaboration, a question, or just a friendly hello!
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <a href="#" className="text-foreground hover:text-primary">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-foreground hover:text-primary">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-foreground hover:text-primary">
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <div className="md:w-1/2">
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <Input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-foreground leading-tight focus:outline-none focus:shadow-outline hover:border-primary focus:border-primary"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <Input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-foreground leading-tight focus:outline-none focus:shadow-outline hover:border-primary focus:border-primary"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <Textarea
                id="message"
                rows={4}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-foreground leading-tight focus:outline-none focus:shadow-outline hover:border-primary focus:border-primary"
                placeholder="Message"
              />
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Button
                className="bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
