'use client';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Image from 'next/image';

export const Sp: React.FC = () => {
  return (
    <div className="mt-10">
      <p className="text-3xl font-bold mb-6 text-[#5BC0EB] text-start mt-12 md:text-4xl">
        S&P 500 Charts and Calculator
      </p>
      <p className="text-justify leading-8 mb-4">
        Website created using{' '}
        <span className="text-[#5BC0EB]">{''}Next.js, Chart.js and D3</span>.
      </p>

      <p className="text-justify leading-8 mb-4">
        Unlock the power of financial foresight with our SP500 Compound ROI
        Calculator. Discover the potential growth of your investments with
        precision, as you effortlessly calculate compound returns based on the
        historic performance of the S&P 500. Make informed decisions and
        navigate your financial journey with confidence. Try it now and empower
        your wealth-building strategy!
        <br />
        <br />
        Calculate Here {''}
        <a
          className="text-[#5BC0EB]"
          href="https://investor-center.vercel.app/charts"
          target="blank"
        >
          investor-center.vercel.app/
        </a>
      </p>
      <div className="grid grid-cols-1  justify-center items-center lg:justify-between lg:grid-cols-2 gap-4 cursor-pointer ">
        <Gallery>
          <Item
            original="stock1.jpg"
            thumbnail="stock1.jpg"
            width="1440"
            height="900"
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src="stock1.jpg"
                alt="Histogram"
                width={500}
                height={0}
                sizes="100vw"
                style={{ height: 'auto' }}
              ></Image>
            )}
          </Item>
          <Item
            original="stock2.jpg"
            thumbnail="stock2.jpg"
            width="1440"
            height="900"
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src="stock2.jpg"
                alt="Bubble Chart"
                width={500}
                height={0}
                sizes="100vw"
                style={{ height: 'auto' }}
              ></Image>
            )}
          </Item>
          <Item
            original="stock3.jpg"
            thumbnail="stock3.jpg"
            width="1440"
            height="900"
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src="stock3.jpg"
                alt="Multi Series Pie Chart"
                width={500}
                height={0}
                sizes="100vw"
                style={{ height: 'auto' }}
              ></Image>
            )}
          </Item>
          <Item
            original="stock4.jpg"
            thumbnail="stock4.jpg"
            width="1440"
            height="900"
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src="stock4.jpg"
                alt="Heatmap"
                width={500}
                height={0}
                sizes="100vw"
                style={{ height: 'auto' }}
              ></Image>
            )}
          </Item>
        </Gallery>
      </div>
    </div>
  );
};
