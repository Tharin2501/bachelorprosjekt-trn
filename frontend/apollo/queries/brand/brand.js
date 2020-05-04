import gql from "graphql-tag";

//TODO: Fikse så man henter inn id dynamisk når man trykker på et merke

const BRAND_QUERY = gql`
  query brands {
    brand(id: "5e786e4f0d5f4e0017799952") {
      id
      name
      description
      logo {
        url
      }
      products {
        brand {
          id
          name
          description
          logo {
            url
          }
        }
      }
    }
  }
`;
export default BRAND_QUERY;

/**
 * 
query brands($id: ID!) {
    brand(id: $id) {
      id
      name
      description
      logo {
        url
      }
    }
  }
 */
