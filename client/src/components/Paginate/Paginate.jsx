import React from "react";
import "./Paginate.css";
export default function Pagination({
  cardPerPage,
  totalCards,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagitate-container">
        {pageNumbers &&
          pageNumbers.map((p) =>
            p === currentPage ? (
              <li>
                <button onClick={() => paginate(p)}>{p}</button>
              </li>
            ) : (
              <li>
                <button onClick={() => paginate(p)}>{p}</button>
              </li>
            )
          )}
      </ul>
    </div>
  );
}
