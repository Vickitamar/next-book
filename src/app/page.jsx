
"use client";
import {BookList} from "./components/book-list";
import {items} from "./utils/books";

export default function Home() {
  return (
    <BookList books={items} />
  );
}
