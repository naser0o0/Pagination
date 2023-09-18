import React from 'react'

export default function TableList({ currentPage, changePaginate, pagesNumbers }) {
  return (
    <>
      <nav className="d-flex justify-content-center ">
        <ul className="pagination pagination-lg" aria-current="page">
          {pagesNumbers.map((pageNumber) => (
            <li
              style={{ cursor: "pointer" }}
              className={
                pageNumber + 1 === currentPage ? "page-item active" : "pageItem"
              }
              key={pageNumber + 1}
              onClick={() => changePaginate(pageNumber + 1)}
            >
              <a className="page-link">{pageNumber + 1}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
