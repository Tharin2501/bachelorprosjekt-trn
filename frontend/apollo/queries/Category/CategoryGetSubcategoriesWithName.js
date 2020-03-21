import gql from "graphql-tag";
//($name:String!)
const CATEGORYGETSUBCATEGOREISWITHNAME_QUERY = gql`  
query Category ($nametoInsert:String!){
    categories(where:{name:$nametoInsert}) {
             
      sub_categories{
              
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