"use client";
import { CourseContext } from "@/lib/context/CourseProvider";
import { Search } from "lucide-react";
import React, { useContext } from "react";

const SearchCourses = ({ courses }) => {
  const {  setFilteredCourses , setSearchPerformed } = useContext(CourseContext);
  const handleSearch = (e) => {
    e.preventDefault();

    const inputValue = e.target.search.value.toLowerCase().trim();

    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(inputValue),
    );

    setFilteredCourses(filtered);
    setSearchPerformed(true)
    // console.log(filteredCourses);
  };

  // console.log(filteredCourses);

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-3xl mx-auto flex justify-center"
    >
      <div className="relative flex w-full max-w-xl md:max-w-2xl">
        <div className=" flex-1">
          <input
            type="text"
            name="search"
            placeholder="Search for courses..."
            className="w-full bg-white border border-gray-300 rounded-l-3xl py-4 pl-14 pr-6 text-gray-700 placeholder-gray-400 text-lg focus:outline-none"
          />

          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={24} />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#2563eb] hover:bg-blue-700 text-white px-10 rounded-r-3xl font-medium text-lg"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchCourses;
