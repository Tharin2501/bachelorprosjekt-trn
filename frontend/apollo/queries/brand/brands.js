import gql from "graphql-tag";

const BRANDS_QUERY = gql`
  query brands {
    brands {
      id
      name
      description
      logo {
        url
      }
    }
  }
`;
export default BRANDS_QUERY;
