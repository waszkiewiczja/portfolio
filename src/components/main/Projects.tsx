import { MyInvestment } from './projects/MyInvestment';
import { Abtests } from './projects/Abtests';
import { Motorway } from './projects/Motorway';
import { Memory } from './projects/Memory';
import { Sp } from './projects/Sp';
import { Title } from './projects/Title';

export const Projects: React.FC = () => {
  return (
    <section
      data-testid="projects"
      className="text-center flex flex-col justify-center max-w-screen-lg mx-auto mt-24 md:mt-48"
    >
      <Title />
      <Sp />
      <MyInvestment />
      <Memory />
      <Abtests />
      <Motorway />
    </section>
  );
};
