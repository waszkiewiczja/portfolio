import { Header } from '@/components/header/Header';
import { Nav } from '@/components/nav/Nav';
import { Main } from '@/components/main/Main';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Nav />
      <Main />
    </>
  );
}
