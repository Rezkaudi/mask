import { useState } from "react";

// services
import { getAllBlogs } from "@/services/blogs";

export const useBlog = () => {
  const postsPerPage = 10;
  const blogsData = getAllBlogs();

  // Sort blogs by date (most recent first) assuming blogs have a date property
  const sortedBlogs = [...blogsData].sort((a, b) => {
    // Assuming blogs have a date property - adjust this based on your actual data structure
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate the range of blogs to display (most recent first)
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentBlogs = sortedBlogs.slice(startIndex, startIndex + postsPerPage);
  const numberOfBlogs = sortedBlogs.length;

  return {
    currentBlogs,
    postsPerPage,
    currentPage,
    handlePageChange,
    numberOfBlogs
  };
};