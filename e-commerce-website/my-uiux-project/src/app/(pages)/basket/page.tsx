// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { useAuth, useUser } from "@clerk/nextjs";
// import { CheckoutData } from "@/type/types";
// import Image from "next/image";
// import { createCheckoutSession } from "../../../../actions/createCheckoutSession";
// import useBasketStore from "../../../../store/store";
// import Loader from "@/components/Loader";

// const BasketPage = ({ groupItems }: { groupItems: any[] }) => {
//   const [checkoutData, setCheckoutData] = useState<CheckoutData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     zipcode: "",
//     city: "",
//   });

//   const { isSignedIn } = useAuth();
//   const { user } = useUser();
//   const [isClient, setIsClient] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const clearBasket = useBasketStore((state) => state.clearBasket);

//   const [router, setRouter] = useState<any>(null);

//   useEffect(() => {
//     setIsClient(true);
//     setRouter(useRouter());  // Setting router dynamically to avoid errors during SSR
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setCheckoutData({ ...checkoutData, [e.target.name]: e.target.value });
//   };

//   const handleCheckout = async () => {
//     if (!isSignedIn) return;

//     setIsLoading(true);

//     try {
//       const metadata = {
//         orderNumber: crypto.randomUUID(),
//         customerName: `${checkoutData.firstName} ${checkoutData.lastName}`,
//         customerEmail: checkoutData.email,
//         clerkUserId: user!.id,
//       };

//       const CheckoutUrl = await createCheckoutSession(groupItems, metadata);

//       if (typeof CheckoutUrl === "string") {
//         window.location.href = CheckoutUrl;
//       } else {
//         console.error("Invalid Checkout URL:", CheckoutUrl);
//       }
//     } catch (error) {
//       console.error("Error creating checkout session", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (!isClient || !router) {
//     return <Loader />;
//   }

//   return (
//     <div className="container mx-auto p-4 max-w-6xl">
//       <h1 className="text-2xl font-bold mb-4">Your Basket</h1>
//       <div className="flex flex-col lg:flex-row gap-8">
//         <div className="flex-grow">
//           {groupItems.map((item) => (
//             <div key={item.product._id} className="mb-4 p-4 border rounded flex items-center justify-between">
//               <div className="flex items-center cursor-pointer flex-1 min-w-0" onClick={() => router.push(`/product/${item.product.slug?.current}`)}>
//                 <div className="w-20 h-20 sm:w-24 flex-shrink-0 mr-4">
//                   {item.product.image && (
//                     <Image src={item.product.image.url()} alt={item.product.name} className="w-full h-full object-cover rounded" width={96} height={96} />
//                   )}
//                 </div>
//                 <div className="min-w-0">
//                   <h2 className="text-lg sm:text-xl font-semibold truncate">{item.product.name}</h2>
//                   <p className="text-sm sm:text-base">Price: ${item.product.price}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="w-full lg:w-80 lg:sticky lg:top-4 h-fit bg-white p-6 border rounded order-first lg:order-last">
//           <h3 className="text-xl font-semibold">Checkout Details</h3>
//           <form className="mt-4 space-y-2">
//             {Object.keys(checkoutData).map((field) => (
//               <input
//                 key={field}
//                 type="text"
//                 name={field}
//                 value={checkoutData[field as keyof CheckoutData]}
//                 onChange={handleInputChange}
//                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                 className="w-full p-2 border rounded"
//                 disabled={isLoading}
//               />
//             ))}
//           </form>

//           <button onClick={handleCheckout} disabled={isLoading} className="mt-4 w-full bg-prim_blue text-white px-4 py-2 rounded hover:bg-prim_blue/70 disabled:bg-gray-400">
//             {isLoading ? "Processing..." : "Checkout"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BasketPage;


"use client"
import Loader from "@/components/Loader";
import { imageUrl } from "@/lib/imageUrl";

import { SignInButton, useAuth, useUser } from "@clerk/nextjs";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useBasketStore from "../../../../store/store";
import AddToBasketButton from "@/components/AddToBasketButton";
import { createCheckoutSession, Metadata } from "../../../../actions/createCheckoutSession";
// import CheckoutForm from "@/components/CheckoutForm";

const BasketPage = () => {
  const groupItems = useBasketStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const clearBasket = useBasketStore((state) => state.clearBasket);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loader />;
  }

  if (groupItems.length === 0) {
    return (
      <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Basket</h1>
        <p className="text-gray-600 text-lg">Your basket is empty.</p>
      </div>
    );
  }

  const handleCheckout = async () => {
    if (!isSignedIn) return;
    setIsLoading(true);

    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddresses[0]?.emailAddress ?? "Unknown", // Fallback to "Unknown" if null or undefined
        clerkUserId: user!.id,
      };

      const CheckoutUrl = await createCheckoutSession(groupItems, metadata);


      if (typeof CheckoutUrl === "string") {
        window.location.href = CheckoutUrl;
      } else {
        console.error("Invalid Checkout URL:", CheckoutUrl);
      }

    } catch (error) {
      console.error("Error creating checkout session", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-4">Your Basket</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          {groupItems.map((item) => (
            <div
              key={item.product._id}
              className="mb-4 p-4 border rounded flex items-center justify-between"
            >
              <div
                className="flex items-center cursor-pointer flex-1 min-w-0"
                onClick={() =>
                  router.push(`/product/${item.product.slug?.current}`)
                }
              >
                <div className="w-20 h-20 sm:w-24 flex-shrink-0 mr-4">
                  {item.product.image && (
                    <Image
                      src={imageUrl(item.product.image).url()}
                      alt={item.product.name ?? "Product image"}
                      className="w-full h-full object-cover rounded"
                      width={96}
                      height={96}
                    />
                  )}
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl font-semibold truncate">
                    {item.product.name}
                  </h2>
                  <p className="text-sm sm:text-base">
                    Price: ${item.product.price}
                  </p>
                </div>
              </div>

              <div className="flex items-center ml-4 flex-shrink-0">
                <AddToBasketButton product={item.product} />
              </div>
            </div>
          ))}
        </div>

        <div>
          {/* <CheckoutForm /> */}
        </div>

        <div className="w-full lg:w-80 lg:sticky lg:top-4 h-fit bg-white p-6 border rounded order-first lg:order-last fixed bottom-0 left-0 lg:left-auto">
          <h3 className="text-xl font-semibold">Order Summary</h3>
          <div className="mt-4 space-y-2">
            <p className="flex justify-between">
              <span>Items:</span>
              <span>{groupItems.reduce((total, item) => total + item.quantity, 0)}</span>
            </p>
            <p className="flex justify-between text-2xl font-bold border-t pt-2">
              <span>Total:</span>
              <span>${useBasketStore.getState().getTotalPrice().toFixed(2)}</span>
            </p>
          </div>

          {/* Clear Basket Button */}
          <button
            onClick={() => clearBasket()}
            className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear Basket
          </button>

          {isSignedIn ? (
            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="mt-4 w-full bg-prim_blue text-white px-4 py-2 rounded hover:bg-prim_blue/70 disabled:bg-gray-400"
            >
              {isLoading ? "Processing..." : "Checkout"}
            </button>
          ) : (
            <SignInButton mode="modal">
              <button className="mt-4 w-full bg-prim_blue text-white px-4 py-2 rounded hover:bg-prim_blue/70">
                Sign in to Checkout
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
