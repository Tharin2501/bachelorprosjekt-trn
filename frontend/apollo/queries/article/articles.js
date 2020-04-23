import gql from "graphql-tag";

// query for multiple articles
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
