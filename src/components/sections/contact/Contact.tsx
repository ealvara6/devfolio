import { SubHeading } from '@/components/shared/SubHeading';
import { Button, Fieldset, Input, Textarea } from '@headlessui/react';
import githubSvg from '@/assets/github.svg';
import linkedinSvg from '@/assets/linkedin.svg';
import {
  BriefcaseIcon,
  ClockIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/24/outline';

export const Contact = () => {
  return (
    <section
      className=" scroll-mt-20 pt-30 pb-30 px-7 mx-auto text-center sm:max-w-4xl xl:max-w-7xl"
      id="Contact"
    >
      <div className="flex flex-col gap-9 bg-surface p-10 rounded-md xl:grid xl:grid-cols-2">
        <div className="relative flex flex-col items-center justify-around gap-8">
          <div>
            <SubHeading>Get In Touch</SubHeading>
            <div className="w-64 mx-auto mt-2 h-[2px] bg-gradient-to-r from-emerald-400/80 via-teal-400/80 to-cyan-500/80 rounded-full" />
          </div>
          <div className="tracking-wide font-light">
            I'm always open to new opportunities, collaborations, or questions
            about my work. Feel free to reach out!
          </div>
          <div className=" flex-col gap-5 text-sm  text-start w-full md:flex hidden">
            <p className="border p-2 rounded-md text-lg flex gap-2  py-4">
              <MapPinIcon className="w-6 text-accent-light" /> Houston, TX
            </p>
            <p className="border p-2 rounded-md text-lg flex gap-2  py-4">
              <BriefcaseIcon className="w-6 text-accent-light" /> Open to Junior
              / Entry-Level roles
            </p>
            <p className="border p-2 rounded-md text-lg flex gap-2  py-4">
              <ClockIcon className="w-6 text-accent-light" /> Usually responds
              within 24 hours
            </p>
          </div>
          <div className="flex justify-between w-full gap-12">
            <div className="md:border py-2 sm:px-8 w-full md:rounded-md md:hover:border-accent flex flex-col gap-2 items-center">
              <img src={githubSvg} alt="Github Icon" className="w-10" />
              <div className="hidden md:block">Github</div>
            </div>
            <div className="md:border py-2 sm:px-8 w-full md:rounded-md md:hover:border-accent flex flex-col gap-2 items-center">
              <img src={linkedinSvg} alt="Linkedin Icon" className="w-10" />
              <div className="hidden md:block">LinkedIn</div>
            </div>
            <div className="md:border py-2 sm:px-8 w-full md:rounded-md md:hover:border-accent flex flex-col gap-2 items-center">
              <EnvelopeIcon className="w-10" />
              <div className="hidden md:block">Email</div>
            </div>
          </div>
        </div>
        <Fieldset className="flex flex-col gap-7 text-text justify-between">
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
          <div className="text-text-muted text-sm">
            Prefer email? You can reach me at{' '}
            <a
              href="mailto:ealvara73@gmail.com"
              className="text-accent-light hover:underline"
            >
              ealvara73@gmail.com
            </a>
          </div>
        </Fieldset>
      </div>
    </section>
  );
};
