'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  return (
    <section className="py-12 bg-[#ADD8E6]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold text-accent mb-4 flex items-center gap-2">
          Let's Connect! <Mail className="h-6 w-6 text-muted-foreground" />
        </h2>
        <p className="text-lg text-foreground mb-6 text-center">
          Feel free to reach out — whether it's for a collaboration, a question, or just a friendly hello!
        </p>
        <div className="flex gap-4 mb-6">
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

      <form className="max-w-2xl mx-auto px-6">
        <div className="mb-4 flex items-center">
          <label htmlFor="name" className="block text-foreground text-sm font-bold mb-2 mr-4 w-24 text-right">
            Name
          </label>
          <Input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-foreground leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Name"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="email" className="block text-foreground text-sm font-bold mb-2 mr-4 w-24 text-right">
            Email
          </label>
          <Input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-foreground leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
          />
        </div>
        <div className="mb-6 flex items-start">
          <label htmlFor="message" className="block text-foreground text-sm font-bold mb-2 mr-4 w-24 text-right mt-2">
            Message
          </label>
          <Textarea
            id="message"
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-foreground leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Message"
          />
        </div>
        <div className="flex items-center justify-center">
          <Button
            className="bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
