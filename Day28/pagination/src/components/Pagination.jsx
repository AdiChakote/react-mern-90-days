import { useState, useEffect } from "react";

function Pagination() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
      .then((res) => res.json())
      .then((data) => setItems((prev) => [...prev, ...data]));
  }, [page]);

  return (
    <>
      <h2>Pagination</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title} </li>
        ))}
      </ul>
      <button onClick={() => setPage(page + 1)}>Load More</button>
    </>
  );
}

export default Pagination;
