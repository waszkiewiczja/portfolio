export const About: React.FC = () => {
  const defaultText = `text-justify leading-8`;
  const blueishText = `text-[#5BC0EB]`;

  return (
    <section
      data-testid="about"
      className="text-center flex flex-col justify-center max-w-screen-lg mx-auto mt-48 w-full"
    >
      <p className="text-6xl font-bold mb-10 text-white text-start" id="about">
        <span className="text-[#5BC0EB]">4. </span>
        About me
      </p>

      <p className="text-4xl font-bold mb-6 text-[#5BC0EB] text-start mt-12">
        Info
      </p>
      <p className="text-justify leading-8">
        I am highly motivated, have a positive attitude towards work and
        ambitious. I learn new technologies quickly and I am open to new work
        methods and tools. <br />
        <br />
        During my studies, I worked part-time in internet marketing and after
        that After completing them, I stayed in this industry. In 2019 I decided
        change the industry and started learning programming in Javascript and
        Django. From YouTube videos to Udemy courses to... solving tasks on
        CodeWars and creating your own projects and application.
      </p>

      <p className="text-4xl font-bold mb-6 text-[#5BC0EB] text-start mt-12">
        Work history
      </p>
      <p className="text-justify leading-8">
        09.2022 - 01.2024 - Software Center, Capgemini Poland - Senior Front-End
        developer
        <br />
        <br />
        03.2021 - 09.2022 - D&H Innovations - Fullstack developer
        <br />
        <br />
        09.2014 - 03.2021 - JWAW - Digital marketing specialist
      </p>

      <p className="text-4xl font-bold mb-6 text-[#5BC0EB] text-start mt-12">
        Education
      </p>
      <p className="text-justify leading-8">
        Gdynia Maritime University - Offshore Technologies - master&apos;s
        degree 2014
        <br />
        <br />
        Gdańsk University of Technology in Gdańsk - Geodesy and Cartography -
        engineering degree 2013
      </p>
    </section>
  );
};
