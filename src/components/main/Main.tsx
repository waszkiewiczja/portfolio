import { Welcome } from './Welcome';
import { Certificates } from './Certificates';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { About } from './About';
import { Ux } from './Ux';

export const Main: React.FC = () => {
  return (
    <main
      className="text-center flex flex-col justify-center w-full p-8 2xl:mt-40 "
      data-testid="main"
    >
      <Welcome />
      <Certificates />
      <Projects />
      <Ux />
      <About />
      <Contact />
    </main>
  );
};
