import gql from "graphql-tag";
const CATEGORYGETSUBCATEGOREISWITHNAME_QUERY = gql`  
query Category ($nametoInsert:String!){
    categories(where:{name:$nametoInsert}) {
             
      sub_categories{
        id     
        StrapiName
        categoryName
        description
        
        image{
          url
        }
      
      products{
        Strapiname
        ProductName
        pris
        
      }
      
      
      }
    
        
        
    }
  }
`;

export default CATEGORYGETSUBCATEGOREISWITHNAME_QUERY;  