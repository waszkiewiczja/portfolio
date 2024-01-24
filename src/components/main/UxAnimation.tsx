'use client';
import anime from 'animejs/lib/anime.es.js';
import './UxAnimation.css';
import { useEffect, useRef } from 'react';

export const UxAnimation: React.FC = () => {
  const defaultText = `text-justify leading-8`;
  const blueishText = `text-[#5BC0EB]`;

  const animation = useRef(null);

  useEffect(() => {
    let path = anime.path('#anime-p1');
    anime({
      targets: '#anime-emoji',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 2000,
      endDelay: 2000,
      scale: {
        value: 0,
        duration: 100,
        delay: 1900,
        easing: 'easeInOutQuart',
      },
      loop: true,
    });

    let path2 = anime.path('#anime-p2');
    anime({
      targets: '#anime-emoji2',
      translateX: path2('x'),
      translateY: path2('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 2000,
      endDelay: 2000,
      loop: true,
      scale: {
        value: 0,
        duration: 100,
        delay: 1900,
        easing: 'easeInOutQuart',
      },
    });

    let path3 = anime.path('#anime-p3');
    anime({
      targets: '#anime-emoji3',
      translateX: path3('x'),
      translateY: path3('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 2000,
      delay: 2000,
      width: {
        value: '+=20px',
        duration: 100,
        easing: 'easeInOutSine',
        delay: 1900,
      },
      height: {
        value: '+=20px',
        duration: 100,
        easing: 'easeInOutSine',
        delay: 1900,
      },
      loop: true,
    });

    let path4 = anime.path('#anime-p4');
    anime({
      targets: '#anime-emoji4',
      translateX: path4('x'),
      translateY: path4('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 2000,
      delay: 2000,
      width: {
        value: '+=20px',
        duration: 100,
        easing: 'easeInOutSine',
        delay: 2000,
      },
      height: {
        value: '+=20px',
        duration: 100,
        easing: 'easeInOutSine',
        delay: 1900,
      },
      loop: true,
    });
  }, []);

  return (
    <div className="anime-main">
      <div className="anime-all">
        <div className="anime-top">
          <img src="mainpage.png" alt="Main Page" />
        </div>
        <div className="anime-wrapper">
          <div id="anime-emoji"></div>
          <div id="anime-emoji2"></div>

          <svg id="anime-svg" viewBox="0 0 800 200">
            <path
              id="anime-p1"
              stroke="rgb(234,241,255)"
              stroke-width="20px"
              fill="none"
              d="M 400 0 L 400 100 Q 400 150 250 150 Q 200 150 200 200 "
            ></path>

            <path
              id="anime-p2"
              stroke="rgb(234,241,255)"
              stroke-width="20px"
              fill="none"
              d="M 400 0 L 400 100 Q 400 150 550 150 Q 600 150 600 200 "
            ></path>
          </svg>
        </div>
        <div className="anime-bottom">
          <img
            className="anime-img-1800 anime-photo"
            src="versions850.png"
            alt="Versions"
          />
          <img
            className="anime-img-1400 anime-photo"
            src="versions600.png"
            alt="Versions"
          />
          <img
            className="anime-img-1050 anime-photo"
            src="versions500.png"
            alt="Versions"
          />
        </div>
        <div className="anime-wrapper2">
          <div id="anime-emoji3"></div>
          <div id="anime-emoji4"></div>
          <svg id="anime-svg2" viewBox="0 0 800 200">
            <path
              id="anime-p3"
              stroke="rgb(234,241,255)"
              stroke-width="20px"
              fill="none"
              d="M 200 0 Q 200 50 250 50 Q 400 50 400 100 L 400 200 "
            ></path>

            <path
              id="anime-p4"
              stroke="rgb(234,241,255)"
              stroke-width="20px"
              fill="none"
              d="M 600 0 Q 600 50 550 50 Q 400 50 400 100 L 400 200 "
            ></path>
          </svg>
        </div>
        <div className="anime-bottom">
          <img src="results.png" alt="Results" />
        </div>
      </div>
    </div>
  );
};
