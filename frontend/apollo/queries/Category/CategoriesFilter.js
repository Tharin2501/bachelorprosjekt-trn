import gql from "graphql-tag";
const CATEGORIESFILTER_QUERY = gql`  
query Category($categoryName: String!,$arrayOfSubcat:[String],$arrayOfTypes:[String]) {
  categories(where:{StrapiName:$categoryName}){

    sub_categories(where:{StrapiName:$arrayOfSubcat}){
      
      StrapiName
      categoryName
      products(where:{type_of_products:{StrapiName:$arrayOfTypes}}){
        id
        Strapiname
        ProductName
        pris
        type_of_products
        {
          id
          TypeOfProductName
          StrapiName
        }
        image{
          url
        }
      }
    } 
  
   
}
}
`;

export default CATEGORIESFILTER_QUERY;  