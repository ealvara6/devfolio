import { SubHeading } from '@/components/shared/SubHeading';
import { Button, Fieldset, Input, Textarea } from '@headlessui/react';
import githubSvg from '@/assets/github.svg';
import linkedinSvg from '@/assets/linkedin.svg';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export const Contact = () => {
  return (
    <section
      className="min-h-screen scroll-mt-20 mt-14 flex flex-col gap-10 mx-7 text-center"
      id="contact"
    >
      <div>
        <SubHeading>Get In Touch</SubHeading>
        <div className="mt-4 tracking-wide font-light">
          I'm always open to new opportunities, collaborations, or questions
          about my work. Feel free to reach out!
        </div>
      </div>
      <div className="flex justify-center gap-12">
        <img src={githubSvg} alt="Github Icon" className="w-10" />
        <img src={linkedinSvg} alt="Linkedin Icon" className="w-10" />
        <EnvelopeIcon className="w-10" />
      </div>
      <Fieldset className="flex flex-col gap-8">
        <Input
          name="name"
          type="text"
          className="px-3 py-3.5 rounded-md bg-surface"
          placeholder="Full Name"
        />
        <Input
          name="email"
          type="text"
          className="px-3 py-3.5 rounded-md bg-surface"
          placeholder="Email"
        />
        <Textarea
          name="message"
          className="px-3 py-3.5 rounded-md bg-surface resize-none h-48"
          placeholder="Message"
        />
        <Button className="bg-accent p-3.5 rounded-xl text-xl font-semibold tracking-wider">
          Submit
        </Button>
      </Fieldset>
    </section>
  );
};
