import gql from "graphql-tag";

const PRODUCT_QUERY = gql`  
  query products($id:ID!) {
    products(id:$id) {
      id
      name
      description
      image{
        url
      }
    }
  }
`;

export default PRODUCT_QUERY;  