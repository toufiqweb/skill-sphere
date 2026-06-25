import { serverFetch } from "../core/server";

export const getAllCourses = async (queryParams = {}) => {
  const { page, limit, search, category, level, sort } = queryParams;
  
  const params = new URLSearchParams();
  
  // Conditionally append query parameters if they are valid
  if (page !== undefined && page !== null && page !== "") {
    params.append("page", page);
  }
  
  if (limit !== undefined && limit !== null && limit !== "") {
    params.append("limit", limit);
  }
  
  if (search !== undefined && search !== null && search !== "") {
    params.append("search", search);
  }
  
  if (category !== undefined && category !== null && category !== "") {
    params.append("category", category);
  }
  
  if (level !== undefined && level !== null && level !== "") {
    params.append("level", level);
  }
  
  if (sort !== undefined && sort !== null && sort !== "") {
    params.append("sort", sort);
  }

  const queryString = params.toString();
  const path = queryString ? `/api/courses?${queryString}` : "/api/courses";

  return serverFetch(path);
};

export const getCourseById = async (id) => {
  return serverFetch(`/api/courses/${id}`);
};
