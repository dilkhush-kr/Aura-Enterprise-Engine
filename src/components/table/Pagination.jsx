export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
  totalProducts,
  startIndex,
  endIndex,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">

      <p className="text-sm text-slate-500">
        Showing {startIndex + 1} to{" "}
        {Math.min(endIndex, totalProducts)} of{" "}
        {totalProducts} products
      </p>

      <div className="flex items-center gap-2">

        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
          className="px-4 py-2 rounded-xl border bg-white hover:bg-slate-100 disabled:opacity-50"
        >
          Previous
        </button>

        {Array.from(
          { length: totalPages },
          (_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentPage(index + 1)
              }
              className={`
                px-4 py-2 rounded-xl
                ${
                  currentPage === index + 1
                    ? "bg-slate-900 text-white"
                    : "border bg-white hover:bg-slate-100"
                }
              `}
            >
              {index + 1}
            </button>
          )
        )}

        <button
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
          className="px-4 py-2 rounded-xl border bg-white hover:bg-slate-100 disabled:opacity-50"
        >
          Next
        </button>

      </div>
    </div>
  );
}