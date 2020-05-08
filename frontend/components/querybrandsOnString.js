import React from "react";
import { useQuery } from "@apollo/react-hooks";

const QuerybrandsOnString = ({ children, query, searchString }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { searchString: searchString }
    });

    if (loading) return <p>Loading...</p>;
    if (data.brands.length == 0) return <p> Ingen merker funnet boo</p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    return children({ data });
};

export default QuerybrandsOnString;
