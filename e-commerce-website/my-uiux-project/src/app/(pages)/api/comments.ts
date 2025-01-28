// /pages/api/comments.ts
import { NextApiRequest, NextApiResponse } from "next";
import { addComment } from "@/sanity/lib/comment/comment";  // Ensure this path is correct

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { productId, comment } = req.body;

    if (!productId || !comment) {
      return res.status(400).json({ message: "Product ID and comment are required." });
    }

    try {
      const newComment = await addComment(productId, comment);
      return res.status(201).json(newComment); 
    } catch (error) {
      console.error("Error adding comment:", error);
      return res.status(500).json({ message: "Error submitting comment", error });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
