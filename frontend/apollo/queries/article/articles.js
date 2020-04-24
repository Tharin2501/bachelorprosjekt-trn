import gql from "graphql-tag";

// query for multiple articles
/*
  Create a ./apollo/queries/article/articles.js containing the following code:
 */
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
