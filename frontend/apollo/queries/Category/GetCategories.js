import gql from "graphql-tag";
const GETCATEGORIES_QUERY = gql`  
query Category {
    categories{
        id
        name
        StrapiName
        image{
            url
        }
        sub_categories{
            StrapiName
      categoryName
      image{
          url
      }
        }
      
      
      
    
        
        
    }
  }
`;

export default GETCATEGORIES_QUERY;
