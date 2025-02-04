export const Welcome: React.FC = () => {
  return (
    <section
      data-testid="welcome"
      className="text-center flex flex-col w-full mt-20"
    >
      <div
        className="bg-[#232323] rounded-lg h-22 mx-auto flex flex-col gap-2 items-center justify-center p-4 text-2xl font-bold md:flex-row  md:h-16  "
        data-testid="welcome-overheading"
      >
        <span className="text-[#5BC0EB] text-nowrap ">Strong Proficiency</span>{' '}
        in JavaScript, React, and Next
      </div>
      <h1
        className="font-bold text-4xl my-16 md:my-10 md:text-7xl"
        data-testid="welcome-heading"
      >
        JEDRZEJ WASZKIEWICZ
      </h1>
      <div
        className="mx-auto md:w-1/3 md:text-center  font-normal text-xl mb-10 leading-8"
        data-testid="welcome-subheading1"
      >
        Experienced Senior Frontend Developer specializing in UX/UI design, React, TypeScript, and Next.js.
        <br className="md:hidden"></br> <br className="md:hidden"></br> 
        I have a proven track record of developing high-performance, user-friendly web applications that prioritize both aesthetics and functionality.
      </div>

      <div
        className="mx-auto md:w-1/3 md:text-center font-normal text-xl mb-10 leading-8"
        data-testid="welcome-subheading2"
      >
        I bring strong leadership skills, a passion for creating seamless user experiences, and expertise in modern frontend technologies. With a focus on performance optimization, maintainable code, and industry best practices, I strive to create scalable and efficient digital solutions while staying ahead of emerging trends in web development.
      </div>
      <a href="#certificates">
        <button
          className="md:mt-16 mx-auto bg-[#5BC0EB] border-2 border-[#5BC0EB] text-white text-xl cursor-pointer rounded-full py-2 md:py-4 px-4 md:px-6 max-w-80 hover:bg-[#1B618D] hidden md:block"
          data-testid="welcome-button"
        >
          Check My Certificates
        </button>
      </a>
    </section>
  );
};
