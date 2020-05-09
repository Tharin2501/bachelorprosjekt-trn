import React from "react";
import { useQuery } from "@apollo/react-hooks";

const QuerybrandsOnString = ({ children, query, searchString }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { searchString: searchString }
    });

    if (loading) return <div className="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>;
    if (data.brands.length == 0) return <p> Ingen merker funnet</p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    return children({ data });
};

export default QuerybrandsOnString;
