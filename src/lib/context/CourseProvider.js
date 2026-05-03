"use client";

import { createContext, useState } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  

  return (
    <CourseContext.Provider
      value={{
        filteredCourses,
        setFilteredCourses,
        searchPerformed,
        setSearchPerformed
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
