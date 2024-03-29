'use client';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Image from 'next/image';

export const Memory: React.FC = () => {
  return (
    <div className="mt-10">
      <p className="text-3xl font-bold mb-6 text-[#5BC0EB] text-start mt-12 md:text-4xl">
        Memory Master
      </p>
      <Image
        src="logomemory.jpg"
        alt="MM Logo"
        width={200}
        height={0}
        sizes="100vw"
        className="cursor-default h-fit float-left mr-5 md:mr-10 "
      ></Image>
      <p className="text-justify leading-8 mb-4 ">
        Brain training is based on the idea that mental stimulation can improve
        neuroplasticity. It is the ability of the brain to create and reorganize
        connections between brain cells in response to new stimuli and tasks.
        The Brain Training Game Boosts Executive Functions study published in
        PLOS One in 2013 found that people who engaged in brain training games
        showed improvements in information processing speed, memory and
        executive functions.
      </p>
      <p className="text-justify leading-8 mb-4">
        The game was created entirely in {''}
        <span className="`text-[#5BC0EB]`">Javascript</span> and uses
        localStorage to store results, user settings and preferences. The
        website is fully mobile and adapted to play on your phone.
      </p>
      <p className="text-justify leading-8 mb-4">
        Memory Master is a game that intensively simulates short-term memory,
        improving focus and concentration.
      </p>
      <p className="text-justify leading-8 mb-4">
        It involves remembering the letters and positions that appear on the
        board and, in the extended version, also the colors of the letters. As
        the difficulty increases, we have to remember more and more information.
      </p>
      <p className="text-justify leading-8 mb-4">
        The game requires us to simultaneously remember information and use
        information already memorized, strongly stimulating the brain.
      </p>
      <p className="text-justify leading-8 mb-4">
        Remember the letter that appears and the field in which it appears. The
        letter and the field are unrelated and independent.
      </p>
      <p className="text-justify leading-8 mb-4">
        If the same letter appears on the same or any other field two turns
        later, click the &quot;Letter&quot; button. If the same or a different
        letter appears in the same field two turns later, click the
        &quot;Position&quot; button. If both the letter and the position match,
        click both buttons.
      </p>
      <p className="text-justify leading-8 mb-4">
        If the letter does not match the letter from two turns ago, you do not
        click anything. If the field does not match the field from two turns,
        you do not click anything.
      </p>
      <p className="text-justify leading-8 mb-4">
        Play Here {''}
        <a
          className="text-[#5BC0EB]"
          href="https://memorymaster.vercel.app/"
          target="blank"
        >
          memorymaster.vercel.app/
        </a>
      </p>
      <div className="flex flex-col justify-center items-center lg:justify-between lg:flex-row gap-4 ">
        <Gallery>
          <Item original="mm1.jpg" thumbnail="mm1.jpg" width="685" height="840">
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src="mm1.jpg"
                alt="MM Start"
                width={500}
                height={0}
                sizes="100vw"
                className="cursor-pointer h-fit"
              ></Image>
            )}
          </Item>
          <Item original="mm2.jpg" thumbnail="mm2.jpg" width="685" height="840">
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                src="mm2.jpg"
                alt="MM Play"
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
