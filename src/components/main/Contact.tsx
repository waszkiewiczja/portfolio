export const Contact: React.FC = () => {
  const defaultText = `text-justify leading-8`;
  const blueishText = `text-[#5BC0EB]`;

  return (
    <section
      data-testid="contact"
      className="text-center flex flex-col justify-center max-w-screen-lg mx-auto mt-48 mb-72 w-full"
    >
      <p
        className="text-6xl font-bold mb-10 text-white text-start"
        id="contact"
      >
        <span className="text-[#5BC0EB]">5. </span>
        Contact
      </p>
      <p className="text-justify leading-8">
        You can contact me:
        <br />
        <br />
        508375577 || jedrzej.waszkiewicz@gmail.com
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
