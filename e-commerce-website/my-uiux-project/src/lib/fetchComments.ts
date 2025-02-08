import { client } from '@/sanity/lib/client';

export async function fetchComments(slug:string) {
  const query = `*[_type == "comment" && product->slug.current == $slug] {
    _id,
    author,
    content,
    rating,
    createdAt
  }`;

  const params = { slug };
  const comments = await client.fetch(query, params);
  return comments;
}
