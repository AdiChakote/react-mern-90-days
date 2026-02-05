import { useState, useEffect } from "react";

function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?_limit=10&_page=${page}`,
    )
      .then((res) => res.json())
      .then((data) => setItems((prev) => [...prev, ...data]));
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <h2>Infinite Scroll</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.email} </li>
        ))}
      </ul>
    </>
  );
}

export default InfiniteScrollList;
