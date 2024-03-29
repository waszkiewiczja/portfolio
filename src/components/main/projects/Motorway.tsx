'use client';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Image from 'next/image';

export const Motorway: React.FC = () => {
  return (
    <div className="mt-10">
      <p className="text-3xl font-bold mb-6 text-[#5BC0EB] text-start mt-12 md:text-4xl">
        MotorwayMap
      </p>

      <p className="text-justify leading-8 mb-4">
        The website was {''}
        <span className="text-[#5BC0EB]">
          {''}
          created using React, React-Router, Redux, Typescript and Django and
          uses the Leaflet map.{''}
        </span>
        It is fully mobile on all devices.
        <br />
        <br />
        MotorwayMap is a map of all investments in Poland carried out by the
        largest state investor, General Directorate for National Roads and
        Motorways. The total investment amount is over PLN 40 billion. The
        number of tasks is over 100, and over 1,200 km of motorways and
        expressways are under construction. The map shows what and where
        investments are being made.
        <br />
        <br />
        The investment map shows all road sections currently under construction.
        It shows where the section is located on the map, its length, who is the
        contractor, what is the amount and the deadline for completing the
        investment.
        <br />
        <br />
        The appearance and event handling were programmed using React,
        React-Router, Redux, Typescript. The backend technology is Django. The
        Leaflet and OpenStreetMap libraries were used to create the map.
      </p>

      <Gallery>
        <Item original="map.png" thumbnail="map.png" width="1900" height="950">
          {({ ref, open }) => (
            <Image
              ref={ref}
              onClick={open}
              src="map.png"
              alt="MotorwayMap"
              width={0}
              height={0}
              sizes="100vw"
              className="cursor-pointer w-full h-fit"
            ></Image>
          )}
        </Item>
      </Gallery>
    </div>
  );
};
