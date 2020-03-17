import gql from "graphql-tag";

const PRODUCT_QUERY = gql`  
  query products($id: ID!) {
    product(id: $id) {
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