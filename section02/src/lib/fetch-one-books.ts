import { BookData } from "@/types";

export default async function fetchOneBooks(id: number): Promise<BookData | null> {
  const url = `https://onebite-books-server-main-puce.vercel.app/book/${id}`;
  try {
    const responese = await fetch(url);
    if (!responese.ok) {
      throw new Error();
    }
    return await responese.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
