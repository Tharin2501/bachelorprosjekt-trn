import React from "react";
import { useQuery } from "@apollo/react-hooks";

const QuerySubCategoryBrandName = ({ children, query, subCategoryName, brandName }) => {
    const { data, loading, error } = useQuery(query, {
        variables: {
            subCategoryName: subCategoryName,
            brandName: brandName

        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    return children({ data });
};

export default QuerySubCategoryBrandName;
