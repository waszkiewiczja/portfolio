import { Certificates } from './Certificates';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { About } from './About';
import { Ux } from './Ux';
import { FirstScreen } from './FirstScreen';

export const Main: React.FC = () => {
  return (
    <main className="text-center flex flex-col justify-center w-full p-8  ">
      <FirstScreen />
      <Certificates />
      <Projects />
      <Ux />
      <About />
      <Contact />
    </main>
  );
};
