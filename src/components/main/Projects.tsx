import { MyInvestment } from './projects/MyInvestment';
import { Abtests } from './projects/Abtests';
import { Motorway } from './projects/Motorway';
import { Memory } from './projects/Memory';
import { Sp } from './projects/Sp';

export const Projects: React.FC = () => {
  const defaultText = `text-justify leading-8`;
  const blueishText = `text-[#5BC0EB]`;

  return (
    <section
      data-testid="projects"
      className="text-center flex flex-col justify-center max-w-screen-lg mx-auto mt-48"
    >
      <p
        className="text-6xl font-bold mb-10 text-white text-start"
        id="projects"
      >
        <span className="text-[#5BC0EB]">2. </span>
        Projects
      </p>
      <p className="text-justify leading-8">
        Short recap of some projects created by myself.
      </p>

      <MyInvestment />
      <Abtests />
      <Motorway />
      <Memory />
      <Sp />
    </section>
  );
};
