import gql from "graphql-tag";
/*
Get main category  from subcategory name rens --> Ansiktspleie
*/
const GETCATEGORYFROMSUBCATEGORYSTRAPINAME_QUERY = gql`  
query SubCategory ($nametoInsert:String!){
    subCategories(where:{StrapiName:$nametoInsert}) {
             
        StrapiName
        id
        category{
            name
        }
        products{
            Strapiname
        }
           
      
    
        
        
    }
  }
`;

export default GETCATEGORYFROMSUBCATEGORYSTRAPINAME_QUERY;  