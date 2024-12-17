import Image from 'next/image';
import React from 'react';

interface AboutStyleProps {
  imgSrc: string; 
  imgAlt?: string; 
  imgWidth?: number; 
  imgHeight?: number; 
}

const AboutStyle: React.FC<AboutStyleProps> = ({
  imgSrc,
  imgAlt = 'A creative design showcasing the company',
  imgWidth = 571,
  imgHeight = 668,
}) => {
  return (
    <div className="relative w-[90%] max-w-[632px] h-auto mx-auto">
      {/* Decorative Circles */}
      <div className="absolute w-[2.5%] aspect-square top-[85%] left-[5%] rounded-full bg-[#977DF4]"></div>
      <div className="absolute w-[2.5%] aspect-square top-[25%] right-[5%] rounded-full bg-[#977DF4]"></div>
      <div className="absolute w-[5%] aspect-square top-[45%] right-[2%] rounded-full bg-[#FFE9EA]"></div>
      <div className="absolute w-[12%] aspect-square top-[2%] left-[5%] rounded-full bg-[#FFE9EA]"></div>
      <div className="absolute w-[80%] aspect-square top-[10%] left-[10%] rounded-full bg-[#FFE9EA]"></div>

      {/* Hero Image */}
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
        className="w-full object-cover relative"
      />
    </div>
  );
};

export default AboutStyle;

