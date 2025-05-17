import {
  pageContainer,
  pageButton,
  nextPageButton,
  activePage,
} from "./index.style.css.ts";

export const PagenationButton = ({
  currentPage,
  totalPages,
  handlePageChange,
}: {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}) => {
  return (
    <div className={pageContainer}>
      {currentPage > 1 && (
        <button
          className={nextPageButton}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          {"<"}
        </button>
      )}
      {Array.from({ length: 5 }, (_, i) => {
        const pageNum =
          currentPage <= 5
            ? i + 1
            : currentPage >= totalPages - 4
            ? totalPages - 4 + i
            : currentPage - 2 + i;

        if (pageNum <= totalPages) {
          return (
            <button
              key={pageNum}
              className={`${pageButton} ${
                currentPage === pageNum ? activePage : ""
              }`}
              onClick={() => handlePageChange(pageNum - 1)}
            >
              {pageNum}
            </button>
          );
        }
        return null;
      })}
      {currentPage < totalPages - 4 && (
        <button
          className={nextPageButton}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          {">"}
        </button>
      )}
    </div>
  );
};
