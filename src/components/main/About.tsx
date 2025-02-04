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
        I am a highly motivated and ambitious developer with a strong passion for learning and adapting to new technologies, tools, and methodologies. My  positive attitude towards work and problem-solving mindset drive me to continuously improve and innovate.
      </p>
      <p className="text-justify leading-8 mb-4">
        My journey into software development started with a background in internet marketing, where I worked part-time during my studies and continued in the field after graduation. In 2019, I made the transition to programming, starting with JavaScript and Django. Through self-learning - watching YouTube tutorials, completing Udemy courses, solving challenges on CodeWars, and building personal projects - I developed a solid foundation that led me to my career in software development..
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
        09.2022 - 02.2025 - Software Center, Capgemini Poland - Senior Front-End
        developer
      </p>
      <p className="text-start leading-8 mb-4">
        03.2021 - 09.2022 - D&H Innovations - Fullstack developer
      </p>
      <p className="text-start leading-8 mb-4">
        09.2014 - 03.2021 - JWAW - Frontend Developer & CRO Specialist
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
