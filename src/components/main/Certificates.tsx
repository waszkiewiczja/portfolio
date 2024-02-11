export const Certificates: React.FC = () => {
  const certificates: string[][] = [
    ['google-cybersecurity.png', 'Google Cybersecurity'],
    ['microsoft.png', 'Microsoft Azure'],
    ['facebook.png', 'Facebook (Meta)'],
    ['ibm.png', 'IBM'],
  ];

  return (
    <section
      data-testid="certificates"
      className="text-center flex flex-col justify-center max-w-screen-lg mx-auto mt-12 md:mt-0"
    >
      <p
        className="text-4xl font-bold mb-10 text-white text-start md:text-6xl"
        id="certificates"
      >
        <span className="text-[#5BC0EB]">1. </span>
        Certificates
      </p>
      <p className="text-justify leading-8">
        I have a number of certificates issued by the largest Tech companies in
        the world confirming my high qualifications, including: Facebook,
        Google, Microsoft and IBM, and whose acquisition meant participation in
        many months of workshops, practical classes and passing the exams.
      </p>

      {certificates.map(([src, title]) => (
        <div key={src} className="cursor-pointer">
          <p className="text-3xl font-bold mb-6 text-[#5BC0EB] text-start mt-12 md:text-4xl">
            {title}
          </p>
          <img src={src} alt={title} />
        </div>
      ))}
    </section>
  );
};
