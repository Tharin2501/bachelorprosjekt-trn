import gql from "graphql-tag";

const PRODUCTS_QUERY = gql`  
  query products {
    products {
      id
      ProductName
      description
      pris
      ReviewScore
      ingredients
      Volume
      directions
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
      bullet_point_on_skincare_products{
        id
        name
      }
    }
  }
`;

export default PRODUCTS_QUERY;  