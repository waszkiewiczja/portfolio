export const Welcome: React.FC = () => {
  return (
    <section
      data-testid="welcome"
      className="text-center flex flex-col w-full h-screen"
    >
      <div
        className="bg-[#232323] rounded-lg h-16 mx-auto flex gap-2 items-center justify-center p-4 text-2xl font-bold"
        data-testid="welcome-overheading"
      >
        <span className="text-[#5BC0EB]">Strong Proficiency</span> in
        JavaScript, React, and Next.js
      </div>
      <h1 className="font-bold text-7xl my-10" data-testid="welcome-heading">
        JEDRZEJ WASZKIEWICZ
      </h1>
      <div
        className="mx-auto w-1/3 text-center font-normal text-xl mb-10 leading-8"
        data-testid="welcome-subheading1"
      >
        Experienced Senior Developer specializing in UX/UI design with a strong
        proficiency in JavaScript, React, and Next.js. Proven track record of
        creating seamless and visually appealing user interfaces, coupled with
        expertise in modern front-end development.
      </div>

      <div
        className="mx-auto w-1/3 text-center font-normal text-xl mb-10 leading-8"
        data-testid="welcome-subheading2"
      >
        Bringing extensive knowledge and leadership in delivering high-quality
        user experiences, optimizing performance, and staying abreast of the
        latest industry trends.
      </div>
      <a href="#certificates">
        <button
          className="mt-16 mx-auto bg-[#5BC0EB] border-2 border-[#5BC0EB] text-white text-xl cursor-pointer rounded-full py-4 px-6 max-w-80 hover:bg-[#1B618D]"
          data-testid="welcome-button"
        >
          Check My Certificates
        </button>
      </a>
    </section>
  );
};
