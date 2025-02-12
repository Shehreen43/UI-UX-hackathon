// types.ts
export type CheckoutData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    zipcode: string;
    city: string;
  };
  
  export type OrderData = CheckoutData & {
    products: { id: number; name: string; price: number; quantity: number }[];
    totalAmount: number;
    orderDate: string;
    _type: "order"; // Sanity schema type
  };
  