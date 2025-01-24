import Link from "next/link";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsEyeFill } from "react-icons/bs";
import BrandsLogo from "@/app/components/Brands";

const ProductDetails = () => {

  const products = [
    {
      id: 1,
      title: "Graphic Design Essentials",
      description: "English Department",
      price: 16.48,
      new_price: 16.5,
      url: "/productDetail/BP1.png",
      showColors: false,
    },
    {
      id: 2,
      title: "Graphic Design Essentials",
      description: "English Department",
      price: 16.48,
      new_price: 16.5,
      url: "/productDetail/BP2.png",
      showColors: false,
    },
    {
      id: 3,
      title: "Graphic Design Essentials",
      description: "English Department",
      price: 16.48,
      new_price: 16.5,
      url: "/productDetail/BP3.png",
      showColors: false,
    },
    {
      id: 4,
      title: "Graphic Design Essentials",
      description: "English Department",
      price: 16.48,
      new_price: 16.5,
      url: "/productDetail/BP4.png",
      showColors: false,
    },
    {
      id: 5,
      title: "Graphic Design Essentials",
      description: "English Department",
      price: 16.48,
      new_price: 16.5,
      url: "/productDetail/BP5.png",
      showColors: false,
    },
    {
      id: 6,
      title: "Graphic Design Essentials",
      description: "English Department",
      price: 16.48,
      new_price: 16.5,
      url: "/productDetail/BP6.png",
      showColors: false,
    },
    {
      id: 7,
      title: "Graphic Design Essentials",
      description: "English Department",
      price: 16.48,
      new_price: 16.5,
      url: "/productDetail/BP1.png",
      showColors: false,
    },
    {
      id: 8,
      title: "Graphic Design Essentials",
      description: "English Department",
      price: 16.48,
      new_price: 16.5,
      url: "/productDetail/BP2.png",
      showColors: false,
    },
   
  ]
  return (
    <>
      {/* product detail section */}
      <div className="w-full grid grid-cols-1  bg-light_Gray overflow-hidden max-w-screen-2xl pb-10 px-20 mx-auto mt-0 ">
        {/* links */}
        <div>
          <ul className="justify-center sm:justify-start flex gap-1 py-6">
            <li>
              <Link href="/" className="font-bold sm:items-start">
                Home
              </Link>
            </li>
            <li>
              <GoChevronRight className="pt-[5px] size-5 text-muted_text_col" />
            </li>
            <li>
              <Link
                href="/Shop/ShopDetail"
                className="text-muted_text_col font-bold sm:items-end active:text-text2"
              >
                Shop
              </Link>
            </li>
          </ul>
        </div>

        {/* product detail */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* product img box */}
          <div className="w-full flex  flex-col md:w-4/5">
            <div className="relative text-white  flex justify-between items-center">
              <div className="absolute right-[3%] w-[24px]">
                <SlArrowRight />
              </div>
              <div className="absolute left-[3%] w-[24px]">
                <SlArrowLeft />
              </div>
              <Image
                src={"/productDetail/sofa-product-1.jpg"}
                alt="Product Sofa"
                width={506}
                height={450}
                className="w-full object-cover"
              />
            </div>

            <div className="mt-5 flex justify-start items-start gap-5">
              <Image
                src={"/productDetail/sofa-product-1.jpg"}
                alt="Product Sofa"
                width={100}
                height={75}
                className="w-[100px] h-[75px] object-cover"
              />
              <Image
                src={"/productDetail/chair1.jpg"}
                alt="Product Sofa"
                width={100}
                height={75}
                className="w-[100px] object-cover"
              />
            </div>
          </div>

          {/* product info  box*/}
          <div className="w-full lg:w-[70%] flex flex-col items-start ">
            <h4 className="font-montserrat text-lg font-normal leading-[30px] tracking-[0.2px] text-text2 text-left pt-2">
              Floating Phone
            </h4>
            <div className="flex gap-1 text-yellow-300 py-2">
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
              <AiOutlineStar />
              <p className="text-text text-sm font-bold ">10 Reviews</p>
            </div>
            <h3 className="font-montserrat text-xl font-bold leading-[32px] tracking-[0.1px] text-text2 py-1">
              $1,139.33
            </h3>
            <div className="flex text-sm font-bold text-text py-1 gap-2">
              <span>Availability :</span>{" "}
              <span className="text-prim_blue">In Stock </span>
            </div>
            <p className="font-montserrat text-sm font-normal leading-[20px] tracking-[0.2px] pt-1 lg:mt-10 text-text">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <hr className="mt-2 h-1 w-full text-text" />
            <div className="flex gap-2 mt-5 lg:mt-10 ">
              <span className="bg-prim_blue  w-[30px] h-[30px] rounded-full"></span>
              <span className="bg-prim_green w-[30px] h-[30px] rounded-full"></span>
              <span className="bg-orange w-[30px] h-[30px] rounded-full"></span>
              <span className="bg-text2 w-[30px] h-[30px] rounded-full"></span>
            </div>
            <div className="flex mt-10 gap-2">
              <button className="bg-prim_blue text-[14px] font-montserrat font-bold text-white p-2 rounded-[5px] ">
                <Link href={"/"}>Select Options</Link>
              </button>
              <div className="bg-white border rounded-full size-10 items-center justify-center flex">
                <HiOutlineHeart className="size-5" />
              </div>
              <div className="bg-white border rounded-full size-10 items-center justify-center flex">
                <MdOutlineShoppingCart className="size-5" />
              </div>
              <div className="bg-white border rounded-full size-10 items-center justify-center flex">
                <BsEyeFill className="size-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product description section */}
      <div className="w-full bg-white overflow-hidden max-w-screen-2xl font-semibold px-20 pb-10 mx-auto mt-0">

        {/* navigation links */}
        <nav className="py-6 md:p-6">
          <ul className="flex items-center justify-center font-semibold leading-3 md:leading-6 tracking-[0.2px] gap-2 pb-5 md:gap-6">
          <li>
              <Link
                href="/Shop/ShopDetail"
                className="text-text font-montserrat text-sm  "
              >
               Description
              </Link>
            </li>
          <li>
              <Link
                href="/Shop/ShopDetail"
                className="text-text font-montserrat text-sm leading-6 tracking-[0.2px]"
              >
              Additional Information
              </Link>
            </li>
          <li>
              <Link
                href="/Shop/ShopDetail"
                className="text-text font-montserrat text-sm leading-6 tracking-[0.2px]"
              >
             Reviews<span className="text-prim_green"> (0) </span>
              </Link>
            </li>
          </ul>
          <hr  className="w-full"/>
        </nav>
       

       {/* other info about product  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"> 
        {/* img box */}
        <div className="mb-5">
        <Image
                src={"/productDetail/fram-wall.png"}
                alt="Product Chair"
                width={325}
                height={382}
                className="w-full object-cover"
              />
        </div>
         
        <div className="lg:pl-5">
        <h3 className="font-montserrat text-xl text-text2 font-bold leading-[32px] tracking-[0.1px] py-2">the quick fox jumps over </h3>
        <p className="font-montserrat text-sm font-normal leading-20rem] tracking-[0.2px] py-2 lg:py-4 text-text">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met..</p>
        <p className="font-montserrat text-sm font-normal leading-[20px] tracking-[0.2px] py-2 lg:py-4 text-text">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met..</p>
        <p className="font-montserrat text-sm font-normal leading-[20px] tracking-[0.2px] py-2 lg:py-4 text-text">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met..</p>
        <p className="font-montserrat text-sm font-normal leading-[20px] tracking-[0.2px] py-2 lg:py-4 text-text">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met..</p>
        </div>
         
         <div className="md:flex gap-4 lg:flex-col xl:pl-5">
          {/* 1 */}
        <div className="flex flex-col justify-start items-start gap-y-2">
        <h3 className="font-montserrat text-xl text-text2 font-bold leading-[32px] tracking-[0.1px] p-2">the quick fox jumps over </h3>
        <div  className="text-text flex gap-2"> <span> <SlArrowRight /></span> <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">the quick fox jumps over</h6></div>
        <div  className="text-text flex gap-2"> <span> <SlArrowRight /></span> <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">the quick fox jumps over</h6></div>
        <div  className="text-text flex gap-2"> <span> <SlArrowRight /></span> <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">the quick fox jumps over</h6></div>
        <div  className="text-text flex gap-2"> <span> <SlArrowRight /></span> <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">the quick fox jumps over</h6></div>
        </div>
         {/* 2 */}
        <div className="flex flex-col justify-start items-start gap-y-2">
        <h3 className="font-montserrat text-xl text-text2 font-bold leading-[32px] tracking-[0.1px] p-2">the quick fox jumps over </h3>
        <div  className="text-text flex gap-2"> <span> <SlArrowRight /></span> <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">the quick fox jumps over</h6></div>
        <div  className="text-text flex gap-2"> <span> <SlArrowRight /></span> <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">the quick fox jumps over</h6></div>
        <div  className="text-text flex gap-2"> <span> <SlArrowRight /></span> <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">the quick fox jumps over</h6></div>
        <div  className="text-text flex gap-2"> <span> <SlArrowRight /></span> <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px]">the quick fox jumps over</h6></div>
        </div>
        </div>
      </div>
      </div>

        {/* product cards  */}
        <div className="w-full grid grid-cols-1  bg-light_Gray overflow-hidden max-w-screen-2xl pb-10 px-20 mx-auto mt-0 ">
          <div>
          <h3 className="font-montserrat text-xl pt-10 pb-5 font-bold leading-[32px] tracking-[0.1px]  text-text2">BESTSELLER PRODUCTS</h3>
          <hr />
           {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                  {products.map((product) => (
                    <div key={product.id} className="flex flex-col bg-white">
                      <div className="min-w-[239px] max-h-[280px] w-full">
                        <Image
                          src={product.url}
                          alt={product.title}
                          width={239}
                          height={280}
                          className="w-full h-full object-cover"
                        />
                      </div>
          
                      <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] pl-5 pt-5 pb-1 text-text2 mt-2">
                        {product.title}
                      </h5>
          
                      <p className="font-montserrat text-[14px] font-bold leading-[24px] pl-5 tracking-[0.2px] text-text">
                        {product.description}
                      </p>
          
                      <h5 className="font-montserrat pl-5 text-[16px] font-bold leading-[24px] tracking-[0.1px] pb-10 text-text2 mt-2">
                        <span className="text-[#BDBDBD]">${product.price}</span>{" "}
                        <span className="text-prim_green">${product.new_price}</span>
                      </h5>
          
                {product.showColors && ( // Conditionally render the color row
                   <div className="flex gap-1 mt-2 justify-center">
                    <span className="bg-prim_blue w-[16px] h-[16px] rounded-full"></span>
                    <span className="bg-prim_green w-[16px] h-[16px] rounded-full"></span>
                    <span className="bg-orange w-[16px] h-[16px] rounded-full"></span>
                    <span className="bg-text2 w-[16px] h-[16px] rounded-full"></span>
                   </div>
                     )}
                    </div>
                  ))}
                </div>
          </div>
        </div>
{/* brands logo */}
<BrandsLogo />
    </>
  );
};
export default ProductDetails;