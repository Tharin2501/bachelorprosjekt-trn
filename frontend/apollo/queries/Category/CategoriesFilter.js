import gql from "graphql-tag";
const CATEGORIESFILTER_QUERY = gql`  
query Category($categoryName: String!,$arrayOfSubcat:[String]) {
    categories(where:{StrapiName:$categoryName}){
        id
        name
        StrapiName
        image{
            url
        }
  
      sub_categories(where:{StrapiName:$arrayOfSubcat}){
        
        StrapiName
        categoryName
      	products{
          id
          Strapiname
          ProductName
          pris
          type_of_products
          {
            
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