import gql from "graphql-tag";

const ARTICLES_QUERY = gql`  
  query articles {
    articles {
      id
      name
      description
    }
  }
`;

export default ARTICLES_QUERY;  