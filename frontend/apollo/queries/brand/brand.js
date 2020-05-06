import gql from "graphql-tag";

//TODO: Fikse så man henter inn id dynamisk når man trykker på et merke
//GETPRODUCTSBRAND

const BRAND_QUERY = gql`
  query brand($id: ID!) {
    brand(id: $id) {
      id
      name
      description
      logo {
        url
      }
      products {
      ProductName
      image{
        url
      }

      sub_categories{
        id
        categoryName
         image{
          url
        }
      }
      }
    }
  }
`;
export default BRAND_QUERY;
