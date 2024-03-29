export const About: React.FC = () => {
  return (
    <section
      data-testid="about"
      className="text-center flex flex-col justify-center max-w-screen-lg mx-auto mt-24 md:mt-48 w-full"
    >
      <p
        className="text-4xl font-bold md:mb-10 text-white text-start md:text-6xl"
        id="about"
      >
        <span className="text-[#5BC0EB]">4. </span>
        About me
      </p>
      <p className="text-3xl md:text-4xl font-bold mb-6 text-[#5BC0EB] text-start mt-12">
        Info
      </p>
      <p className="text-justify leading-8 mb-4">
        I am highly motivated, have a positive attitude towards work and
        ambitious. I learn new technologies quickly and I am open to new work
        methods and tools.
      </p>
      <p className="text-justify leading-8 mb-4">
        During my studies, I worked part-time in internet marketing and after
        completing them, I stayed in this industry. In 2019 I decided change the
        industry and started learning programming in Javascript and Django. From
        YouTube videos to Udemy courses to solving tasks on CodeWars and
        creating my own projects and application.
      </p>
      <p className="text-3xl md:text-4xl font-bold mb-6 text-[#5BC0EB] text-start mt-14">
        Open Source
      </p>
      <p className="text-start leading-8 mb-4">
        Contributing to Chart.js - chartjs.org
      </p>
      <p className="text-3xl md:text-4xl font-bold mb-6 text-[#5BC0EB] text-start mt-14">
        Work history
      </p>
      <p className="text-start leading-8 mb-4">
        09.2022 - 01.2024 - Software Center, Capgemini Poland - Senior Front-End
        developer
      </p>
      <p className="text-start leading-8 mb-4">
        03.2021 - 09.2022 - D&H Innovations - Fullstack developer
      </p>
      <p className="text-start leading-8 mb-4">
        09.2014 - 03.2021 - JWAW - Digital marketing specialist
      </p>
      <p className="text-3xl md:text-4xl font-bold mb-6 text-[#5BC0EB] text-start mt-14">
        Education
      </p>
      <p className="text-start leading-8 mb-4">
        Gdynia Maritime University - Offshore Technologies - Master of Science
        2014
      </p>
      <p className="text-start leading-8">
        Gdańsk University of Technology in Gdańsk - Geodesy and Cartography -
        Bachelor of Science 2013
      </p>
    </section>
  );
};
