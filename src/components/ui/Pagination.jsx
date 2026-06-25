import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Generate an array of page numbers
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center space-x-2 mt-12 mb-8">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 shadow-sm"
        }`}
      >
        Previous
      </button>
      
      <div className="hidden sm:flex space-x-1">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-all ${
              currentPage === page
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 shadow-sm"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="sm:hidden flex items-center text-gray-600 font-medium px-4">
        Page {currentPage} of {totalPages}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
            : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 shadow-sm"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
