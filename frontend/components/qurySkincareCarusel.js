/*query products($SubcategoryName:[String]!) {
  
    products (where:{sub_categories:{StrapiName:$SubcategoryName}}) {
      id
      Strapiname
      ProductName
      description
      pris
      ReviewScore
      ingredients
      Volume
      directions
      image{
        url
      }
      sub_categories{
        StrapiName
        description
        image{url}
        category{name}
        
      }
  bullet_point_on_skincare_products{
      id
      name
    }
    }
  }
  */

import React from "react";
import { useQuery } from "@apollo/react-hooks";

const QurySkincareCarusel = ({ children, query, SubcategoryName, arrayOfSubcat, arrayOfTypes }) => {
    const { data, loading, error } = useQuery(query, {

        variables: {

            categoryName: categoryName,
            arrayOfSubcat: arrayOfSubcat,
            arrayOfTypes: arrayOfTypes
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;

    return children({ data });
};

export default QurySkincareCarusel;