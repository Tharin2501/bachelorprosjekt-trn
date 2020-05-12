import gql from "graphql-tag";

const REVIEWS_QUERY = gql`  
query Reviews{
    reviews{
      id
      tittle
      description
      rating
      userName
      createdAt
    }
  }
`;

export default REVIEWS_QUERY;  