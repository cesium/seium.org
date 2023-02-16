import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/solid";

const Pagination = ({ badgesPerPage, totalBadges, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBadges / badgesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex flex-row justify-center">
        {totalBadges !== 0 && currentPage !== 1 && (
          <li className="page-item mr-1">
            <button onClick={() => paginate(currentPage - 1)}>
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
          </li>
        )}
        {totalBadges !== 0 && currentPage !== pageNumbers.length && (
          <li className="mx-1">
            <button onClick={() => paginate(currentPage + 1)}>
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
