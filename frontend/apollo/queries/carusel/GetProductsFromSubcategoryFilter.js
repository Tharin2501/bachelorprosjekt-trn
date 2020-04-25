import gql from "graphql-tag";
const GETPRODUCTSFROMSUBCATEGORYFILTER_QUERY = gql`  
query Subcategory($categoryName:String!){
   subCategories(where:{StrapiName:$categoryName}){
      categoryName
      products{
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
`;

export default GETPRODUCTSFROMSUBCATEGORYFILTER_QUERY;  
