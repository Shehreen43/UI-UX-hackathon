import React from 'react';
import Link from 'next/link';

interface RequestCardProps {
  primaryEmail: string;
  secondaryEmail?: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  icon?: React.ReactNode; // Accept any custom icon component
  bgColor?: string; // Dynamic background color
  text?: string
}

const RequestCard: React.FC<RequestCardProps> = ({
  primaryEmail,
  secondaryEmail,
  title,
  buttonText,
  buttonLink,
  icon,
  text = 'text-text2',
  bgColor = 'bg-white', // Default background color
}) => {
  return (
    <div className={`${bgColor} ${text} py-5 flex flex-col justify-center items-center px-10`}>
      {/* Icon */}
      {icon && <div className="mb-4">{icon}</div>}

      {/* Emails */}
      <h6 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.2px] text-center py-2">
        {primaryEmail}
      </h6>
      {secondaryEmail && (
        <h6 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.2px] text-center">
          {secondaryEmail}
        </h6>
      )}

      {/* Title */}
      <h5 className="font-montserrat text-[18px] font-bold leading-[24px] tracking-[0.2px] text-center my-5">
        {title}
      </h5>

      {/* Button */}
      <button className="w-[189px] h-[54px] gap-[10px] rounded-full border-2 border-prim_blue mb-5">
        <Link
          href={buttonLink}
          className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.2px] text-center text-prim_blue"
        >
          {buttonText}
        </Link>
      </button>
    </div>
  );
};

export default RequestCard;

