import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const HeroText = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    let clutter = "";
    const splittedText = textRef.current.textContent.split("");

    splittedText.forEach((e) => {
      clutter += `<span class="inline-block">${e}</span>`;
    });
    textRef.current.innerHTML = clutter;

    gsap.from("h1 span", {
      y: 100,
      opacity: 0,
      delay: 1.5,
      stagger: 0.3,
    });
  });

  return (
    <div>
      <h1 ref={textRef} className=" whitespace-nowrap uppercase text-[20vw] font-bold text-white">arock</h1>
    </div>
  );
};

export default HeroText;
