import { SubHeading } from '@/components/shared/SubHeading';
import { Button, Fieldset, Input, Textarea } from '@headlessui/react';
import githubSvg from '@/assets/github.svg';
import linkedinSvg from '@/assets/linkedin.svg';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export const Contact = () => {
  return (
    <section
      className="min-h-screen scroll-mt-20 mt-14 px-7 mx-auto text-center max-w-7xl"
      id="contact"
    >
      <div className="flex flex-col gap-9 bg-surface p-6 rounded-md">
        <div className="relative">
          <SubHeading>Get In Touch</SubHeading>
          <div className="w-64 mx-auto mt-2 h-[2px] bg-gradient-to-r from-emerald-400/80 via-teal-400/80 to-cyan-500/80 rounded-full" />
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
        <Fieldset className="flex flex-col gap-7">
          <Input
            name="name"
            type="text"
            className="px-3 py-3.5 rounded-lg bg-border"
            placeholder="Full Name"
          />
          <Input
            name="email"
            type="text"
            className="px-3 py-3.5 rounded-lg bg-border"
            placeholder="Email"
          />
          <Textarea
            name="message"
            className="px-3 py-3.5 rounded-lg bg-border resize-none h-48"
            placeholder="Message"
          />
          <Button className="bg-gradient-to-r from-emerald-500 to-emerald-400 p-3.5 rounded-xl text-xl font-semibold tracking-wider">
            Submit
          </Button>
        </Fieldset>
        <div className="text-text-muted text-sm">
          Prefer email? You can reach me at{' '}
          <a
            href="mailto:ealvara73@gmail.com"
            className="text-accent-light hover:underline"
          >
            ealvara73@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};
