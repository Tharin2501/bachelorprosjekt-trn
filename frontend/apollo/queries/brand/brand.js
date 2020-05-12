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
        id
        ProductName
          pris
          Volume
      image{
        url
      }
      
      
      brand{
        id
        name
      }

      sub_categories{
        id
        StrapiName
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
