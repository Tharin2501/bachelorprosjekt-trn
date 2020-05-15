import gql from "graphql-tag";

const PRODUCT_QUERY = gql`  
  query products($id: ID!) {
    product(id: $id) {
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
      sub_categories{
        categoryName
        StrapiName
        description
        image{url}
        category{
          id
          StrapiName
          name
          
        }
        
      }
      brand{
        id
        name
      }
    }
  }
`;

export default PRODUCT_QUERY;  