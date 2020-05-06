import gql from "graphql-tag";

//TODO: Fikse så man henter inn id dynamisk når man trykker på et merke
//GETPRODUCTSBRAND

const BRAND_QUERY = gql`
  query brands($id: ID!) {
    brand(id: $id) {
      id
      name
      description
      logo {
        url
      }
      products {
        id
        name
        description
        logo {
          url
        }
      }
    }
  }
`;
export default BRAND_QUERY;
