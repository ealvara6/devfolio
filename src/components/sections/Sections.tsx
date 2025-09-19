import { About } from './about/About';
import { Contact } from './contact/Contact';
import { Projects } from './projects/Projects';

export const Sections = () => {
  return (
    <main className="pt-16">
      <About />
      <Projects />
      <Contact />
    </main>
  );
};
