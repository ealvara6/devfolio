import { About } from './about/About';
import { Contact } from './contact/Contact';
import { Hero } from './hero/Hero';
import { Projects } from './projects/Projects';

export const Sections = () => {
  return (
    <main className="pb-16">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};
