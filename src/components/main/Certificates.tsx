'use client';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Image from 'next/image';

export const Certificates: React.FC = () => {
  const certificates: string[][] = [
    ['google-cybersecurity.png', 'Google Cybersecurity'],
    ['microsoft.png', 'Microsoft Azure Developer'],
    ['facebook.png', 'Meta Front-End Developer'],
    ['ibm.png', 'IBM Developing Front-End Apps with React'],
  ];

  return (
    <section
      data-testid="certificates"
      className="text-center flex flex-col justify-center max-w-screen-lg mx-auto mt-12 md:mt-6 2xl:mt-0"
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
      <Gallery>
        {certificates.map(([src, title]) => {
          const modalHeight = `${src === 'microsoft.png' ? 850 : 1250}`;

          return (
            <div key={src} className="cursor-pointer">
              <p className="text-3xl font-bold mb-6 text-[#5BC0EB] text-start mt-14 md:text-4xl cursor-default">
                {title}
              </p>
              <Item
                original={src}
                thumbnail={src}
                width="1600"
                height={modalHeight}
              >
                {({ ref, open }) => (
                  <Image
                    ref={ref}
                    onClick={open}
                    src={src}
                    alt={title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  ></Image>
                )}
              </Item>
            </div>
          );
        })}
      </Gallery>
    </section>
  );
};
