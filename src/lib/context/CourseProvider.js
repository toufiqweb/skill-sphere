"use client";

import { createContext, useState } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [filteredCourses, setFilteredCourses] = useState([]);
  

  return (
    <CourseContext.Provider
      value={{
        filteredCourses,
        setFilteredCourses,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
