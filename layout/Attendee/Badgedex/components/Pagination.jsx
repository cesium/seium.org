const Pagination = ({ badgesPerPage, totalBadges, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalBadges / badgesPerPage);
  const pageNumbers = [
    ...new Set(
      [1, currentPage - 1, currentPage, currentPage + 1, totalPages].filter(
        (x) => x >= 1 && x <= totalPages
      )
    ),
  ];

  const pageComponents = [];
  for (let i = 1; i <= pageNumbers.length; i++) {
    console.log(i);
    if (i > 1 && pageNumbers[i - 1] - 1 > pageNumbers[i - 2])
      pageComponents.push(<>..</>);
    pageComponents.push(
      <li
        key={i}
        className={`page-item m-auto px-2 ${
          currentPage === i ? "active text-quinary" : ""
        }`}
      >
        <button onClick={() => paginate(i)} className="page-link">
          {i}
        </button>
      </li>
    );
  }

  return (
    <nav className="m-auto w-fit">
      <ul className="pagination flex flex-row">
        {currentPage !== 1 && (
          <li className="page-item mr-1">
            <button
              onClick={() => paginate(currentPage - 1)}
              className="page-link mr-4"
            >
              &larr;
            </button>
          </li>
        )}
        {pageComponents}
        {currentPage !== totalPages && (
          <li className="page-item mr-1">
            <button
              onClick={() => paginate(currentPage + 1)}
              className="page-link ml-4"
            >
              &rarr;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
