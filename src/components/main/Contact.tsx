export const Contact: React.FC = () => {
  return (
    <section
      data-testid="contact"
      className="text-start flex flex-col justify-center max-w-screen-lg mx-auto mt-24 md:mt-48 mb-72 w-full"
    >
      <p
        className="text-4xl font-bold mb-10 text-white  md:text-6xl"
        id="contact"
      >
        <span className="text-[#5BC0EB]">5. </span>
        Contact
      </p>
      <p className="text-start leading-8 mb-4 ">You can contact me: </p>
      <p className="text-start leading-8 mb-4 ">
        jedrzej.waszkiewicz@gmail.com
      </p>
      <p className="text-start leading-8 mb-4 ">
        You can review my code at {''}
        <a className="text-[#5BC0EB] " href="https://github.com/waszkiewiczja/">
          https://github.com/waszkiewiczja/
        </a>
      </p>
    </section>
  );
};
