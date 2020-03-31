import React from "react";
import { useQuery } from "@apollo/react-hooks";
// arrayOfTypes
const QuerySubCategoryFilter = ({ children, query, SubcategoryName, arrayOfTypes }) => {
    const { data, loading, error } = useQuery(query, {

        variables: {

            SubcategoryName: SubcategoryName,
            arrayOfTypes: arrayOfTypes
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;

    return children({ data });
};

export default QuerySubCategoryFilter;
