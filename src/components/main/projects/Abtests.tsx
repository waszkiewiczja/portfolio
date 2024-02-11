'use client';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Image from 'next/image';

export const Abtests: React.FC = () => {
  return (
    <div className="mt-10">
      <p className="text-3xl font-bold mb-6 text-[#5BC0EB] text-start mt-12 md:text-4xl">
        AB-tests.com
      </p>

      <p className="text-justify leading-8 mb-4">
        AB testing software built in {''}
        <span className="text-[#5BC0EB]">React and Django</span> using {''}
        <span className="text-[#5BC0EB]">
          Django Rest Framework and Cookies.{''}
        </span>
        When loading the tested page, the script will distribute the traffic
        equally to both subpages and calculate the effectiveness of each version
        of the page.
        <br />
        <br />
        When the user visits a given link, the script will display one of two
        possible versions and will measure the user&apos;s behavior on this
        page. Cookies remember which version was displayed to the user and
        display the same version again when they return to the website.
      </p>

      <div className="flex flex-col justify-center items-center lg:justify-between lg:flex-row gap-4 ">
        <Gallery>
          <Item original="ab1.png" thumbnail="ab1.png" width="800" height="800">
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src="ab1.png"
                alt="AB1"
                width={500}
                height={0}
                sizes="100vw"
                className="cursor-pointer h-fit"
              ></Image>
            )}
          </Item>
          <Item original="ab2.png" thumbnail="ab2.png" width="800" height="800">
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src="ab2.png"
                alt="AB2"
                width={500}
                height={0}
                sizes="100vw"
                className="cursor-pointer h-fit"
              ></Image>
            )}
          </Item>
        </Gallery>
      </div>
    </div>
  );
};
