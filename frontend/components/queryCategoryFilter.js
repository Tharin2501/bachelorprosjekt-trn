import React from "react";
import { useQuery } from "@apollo/react-hooks";
// arrayOfTypes
const QueryCategoryFilter = ({ children, query, categoryName, arrayOfSubcat }) => {
    const { data, loading, error } = useQuery(query, {

        variables: {

            categoryName: categoryName,
            arrayOfSubcat: arrayOfSubcat,
            //arrayOfTypes: arrayOfTypes
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;

    return children({ data });
};

export default QueryCategoryFilter;
