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
        StrapiName
        description
        image{url}
        category{name}
        
      }
      type_of_products{
        id
        StrapiName
      	TypeOfProductName
        
      }
    }
  }
`;

export default PRODUCT_QUERY;  