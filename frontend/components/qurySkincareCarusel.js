/*
query Subcategory($categoryName:String! ,$bulletPointsName:[String!]){
    subCategories(where:{StrapiName:$categoryName}){
       categoryName
       products(where: {bullet_point_on_skincare_products :{name:$bulletPointsName}}){
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
         bullet_point_on_skincare_products{
       id
       name
     }
       }
     }
 }
 */

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