import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import Link from 'next/link';

interface PricingCardProps {
  plan: string; // Plan identifier for dynamic routing
  title: string; // Title of the plan
  price: string; // Price of the plan
  features: string[]; // Array of features
  isFree?: boolean; // Flag to highlight free plans
  bgColor?: string; // Background color of the card
  textColor?: string; // Text color of the card
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  title,
  price,
  features,
  isFree = false,
  bgColor = 'bg-white',
  textColor = 'text-text2',
}) => {
  return (
    <div className={`w-[327px] p-[50px_40px] gap-[35px] border-[1px] flex flex-col ${bgColor}`}>
      <h3 className={`font-montserrat text-[24px] font-bold leading-[32px] text-center ${textColor}`}>
        {title}
      </h3>
      <h5 className={`font-montserrat px-5 text-[16px] font-bold leading-[24px] text-center ${textColor}`}>
        {isFree ? 'Organize across all apps by hand' : 'Premium tools for teams'}
      </h5>
      <div className="flex gap-2 justify-center">
        <h2 className={`font-montserrat text-[40px] font-bold leading-[50px] text-prim_blue`}>
          {price}
        </h2>
        <div>
          <h3 className={`font-montserrat text-[24px] font-bold leading-[32px] text-prim_blue`}>
            $
          </h3>
          <h6 className={`font-montserrat text-[14px] font-semibold leading-[24px] text-[#8EC2F2]`}>
            Per Month
          </h6>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {features.map((feature, index) => (
          <div key={index} className={`flex items-center gap-2 ${textColor}`}>
            <RiCheckboxCircleFill
              className={`w-8 h-8 ${index < 3 ? 'text-secondary2' : 'text-muted_text_col'}`}
            />
            <h6 className="font-montserrat text-[14px] font-bold leading-[24px]">{feature}</h6>
          </div>
        ))}
      </div>
      <Link href={`/pricing/${plan}`}>
        <button
          className="mt-4 font-montserrat text-sm font-bold w-[246px] h-[52px] rounded-m bg-prim_blue text-white">
          {isFree ? 'Try for Free' : 'Get Started'}
        </button>
      </Link>
    </div>
  );
};

export default PricingCard;
