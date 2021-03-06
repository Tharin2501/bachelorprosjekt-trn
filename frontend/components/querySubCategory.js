import React from "react";
import { useQuery } from "@apollo/react-hooks";

const QuerySubCategory = ({ children, query, categoryName }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { categoryName: categoryName }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    //console.log(data.categories[0].sub_categories)
    //console.log(data)
    return children({ data });
};

export default QuerySubCategory;
