
import { client } from "../client";


export const addComment = async (productId: string, comment: string) => {
  const newComment = {
    _type: "comment",
    product: { _type: "reference", _ref: productId },
    text: comment,
    user: "Anonymous",  // Replace with actual user info if available
    createdAt: new Date().toISOString(),
  };

  try {
    const result = await client.create(newComment);
    return result;
  } catch (error) {
    throw new Error("Error adding comment to Sanity");
  }
};

