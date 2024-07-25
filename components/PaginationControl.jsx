import React from "react";
import { useState, useEffect } from "react";

const PaginationControl = ({ servers }) => {
  const [linesPerPage, setLinesPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesList, setPagesList] = useState([]);

  const handlePageClick = () => {
    alert("Hello World");
  };

  useEffect(() => {
    // First, we ensure that the amount of pages needed is an integer
    const totalPages = Math.ceil(servers.length / linesPerPage);

    if (totalPages <= 10) {
      // Then, whe create an array with thos page. Example: pages = 3, array = [1,2,3]
      setPagesList(Array.from({ length: 10 }, (_, i) => i + 1));
    }
  }, [servers, linesPerPage]);

  return (
    <div className="TableFooter flex flex-col items-center bg-slate-300">
      <div>
        Page {currentPage} of{" [ "}
        {pagesList.map((page, index) => (
          <button
            href="#"
            key={index}
            className="underline"
            onClick={handlePageClick}
          >
            {page}{" "}
          </button> // Corrected JSX
        ))}
        {" ]"}
      </div>
      <div>There are {servers.length} servers under the current filters</div>
      <label htmlFor="lines">Lines per Page</label>
      <select
        name="lines"
        id="lines"
        onChange={(e) => setLinesPerPage(parseInt(e.target.value))}
      >
        <option value="15">15 lines per page</option>
        <option value="30">30 lines per page</option>
        <option value="50">50 lines per page</option>
      </select>
    </div>
  );
};

export default PaginationControl;
