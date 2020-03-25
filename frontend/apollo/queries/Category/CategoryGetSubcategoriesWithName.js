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
        id
        ProductName
        pris
        ReviewScore
        ingredients
        directions
        Volume
        description
  
        image{
          url
        }
      }
      
      
      }
    
        
        
    }
  }
`;

export default CATEGORYGETSUBCATEGOREISWITHNAME_QUERY;  