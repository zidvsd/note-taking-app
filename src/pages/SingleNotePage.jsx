import React from "react";
import { useParams } from "react-router-dom";
const SingleNotePage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>SingleNotePage</h1>
    </div>
  );
};

export default SingleNotePage;
