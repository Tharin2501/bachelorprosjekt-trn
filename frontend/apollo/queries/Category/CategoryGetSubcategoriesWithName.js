import gql from "graphql-tag";
const CATEGORYGETSUBCATEGOREISWITHNAME_QUERY = gql`  
query Category ($categoryName:String!){
  categories(where:{StrapiName:$categoryName}) {

             
    sub_categories(sort: "categoryName:asc"){
      id     
      StrapiName
      categoryName
      description
      
      image{
        url
      }
      
      type_of_products{
        StrapiName
        TypeOfProductName
      }

    
    
    }
  
      
      
  }
}
`;

export default CATEGORYGETSUBCATEGOREISWITHNAME_QUERY;  