"use server";

import { imageUrl } from "@/lib/imageUrl";
import stripe from "@/lib/stripe";
import { BasketItem } from "../store/store";
import * as z from "zod";

export type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
};


// // Metadata schema for validation
const MetadataSchema = z.object({
  orderNumber: z.string(),
  customerName: z.string(),
  customerPhoneNumber: z.string(),
  customerEmail: z.string().email(),
  customerAddress: z.string(),
  clerkUserId: z.string(),
});

export type GroupedBasketItem = {
  product: BasketItem["product"];
  quantity: number; 
};


function constructUrl(path: string): string {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.VERCEL_URL || "your-production-domain.com"}`
      : process.env.NEXT_PUBLIC_PUBLIC_URL || "http://localhost:3000";

  if (!baseUrl.startsWith("http")) {
    throw new Error(`Invalid base URL: ${baseUrl}`);
  }

  return `${baseUrl}${path}`;
}

export async function createCheckoutSession(
  items: GroupedBasketItem[],
  metadata: Metadata
) {
  try {
    // Check if any grouped item doesn't have a price
    const itemWithoutPrice = items.filter((item) => !item.product.price);
    if (itemWithoutPrice.length > 0) {
      throw new Error("Some items do not have a price");
    }

    // Search for existing customer by email
    const customers = await stripe.customers.list({
      email: metadata.customerEmail,
      limit: 1,
    });

    let customerId: string | undefined;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
    // const session = await client.create({
      customer: customerId,
      customer_creation: customerId ? undefined : "always",
      customer_email: !customerId ? metadata.customerEmail : undefined,
      metadata,
      mode: "payment",
      allow_promotion_codes: true,
      success_url: constructUrl(`/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`),
      cancel_url: constructUrl("/basket"), 
      line_items: items.map((item) => ({
        price_data: {
          currency: "gbp",
          unit_amount: Math.round(item.product.price! * 100), // Ensure price is multiplied by 100
          product_data: {
            name: item.product.name || "Unnamed Product",
            description: `Product ID: ${item.product._id}`,
            metadata: {
              id: item.product._id,
            },
            images: item.product.image
              ? [imageUrl(item.product.image).url()]
              : undefined,
          },
        },
        quantity: item.quantity,
      })),
    });
console.log(session);

    return session.url; 
  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw error;
  }
}