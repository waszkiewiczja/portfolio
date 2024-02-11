import { Nav } from '../nav/Nav';
import { Welcome } from './Welcome';

export const FirstScreen: React.FC = () => {
  return (
    <section className="min-h-screen ">
      <Nav />
      <Welcome />
    </section>
  );
};
