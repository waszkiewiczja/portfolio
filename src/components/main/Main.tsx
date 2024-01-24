'use clinet';
import { Welcome } from './Welcome';
import { Certificates } from './Certificates';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { About } from './About';
import { Ux } from './Ux';

export const Main: React.FC = () => {
  return (
    <main className="mt-40 text-center flex flex-col justify-center w-full ">
      <Welcome />
      <Certificates />
      <Projects />
      <Ux />
      <About />
      <Contact />
    </main>
  );
};
