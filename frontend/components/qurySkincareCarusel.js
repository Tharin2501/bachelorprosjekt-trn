
import React from "react";
import { useQuery } from "@apollo/react-hooks";

const QurySkincareCarusel = ({ children, query, categoryName, bulletPointsName }) => {
  const { data, loading, error } = useQuery(query, {

    variables: {

      categoryName: categoryName,
      bulletPointsName: bulletPointsName,
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  return children({ data });
};

export default QurySkincareCarusel;