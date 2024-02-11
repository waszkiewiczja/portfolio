export const Contact: React.FC = () => {
  return (
    <section
      data-testid="contact"
      className="text-center flex flex-col justify-center max-w-screen-lg mx-auto mt-24 md:mt-48 mb-72 w-full"
    >
      <p
        className="text-4xl font-bold mb-10 text-white text-start md:text-6xl"
        id="contact"
      >
        <span className="text-[#5BC0EB]">5. </span>
        Contact
      </p>
      <p className="text-start leading-8 ">
        You can contact me:
        <br />
        <br />
        508375577 <br />
        <br />
        jedrzej.waszkiewicz@gmail.com
        <br />
        <br />
        You can review my code at {''}
        <a className="text-[#5BC0EB] " href="https://github.com/waszkiewiczja/">
          https://github.com/waszkiewiczja/
        </a>
      </p>
    </section>
  );
};
