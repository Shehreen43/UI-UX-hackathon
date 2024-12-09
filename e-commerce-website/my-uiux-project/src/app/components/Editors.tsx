import Image from 'next/image';
import Link from 'next/link';

type Category = {
  name: string;
  image: string;
};

type CategoryGroup = Category[];

const categories: (Category | CategoryGroup)[] = [
  { name: 'MEN', image: '/Editor1.png' },
  { name: 'WOMEN', image: '/edp2.png' },
  [
    { name: 'ACCESSORIES', image: '/edp3.png' },
    { name: 'KIDS', image: '/edp4.png' }
  ]
];

const EditorsSection = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-[#fafafa] pt-[7%] text-center">
      <div className="mb-8">
        <h3 className="font-montserrat text-[24px] font-bold leading-[32px] tracking-[0.1px]">
          EDITOR’S PICK
        </h3>
        <p className="font-montserrat text-[14px] text-text font-normal leading-[20px] tracking-[0.2px]">
          Explore our hand-picked categories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] pt-10 lg:pl-60">
        {categories.map((category, index) => {
          if (Array.isArray(category)) {
            // For item 3 with multiple images (group)
            return (
              <div
                key={`group-${index}`}
                className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg gap-2"
              >
                {category.map((item) => (
                  <div key={item.name} className="relative w-full h-[250px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-4 bg-white text-black font-bold py-2 px-4 rounded">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            );
          }

          return (
            <Link key={category.name} href={`/category/${category.name.toLowerCase()}`}>
              <div className="relative flex flex-col items-center justify-center h-[500px] overflow-hidden rounded-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-4 bg-white text-black font-bold py-2 px-4 rounded">
                  {category.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EditorsSection;
