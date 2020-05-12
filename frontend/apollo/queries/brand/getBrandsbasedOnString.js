import gql from "graphql-tag";

const GETBRANDSBASEDONSTRING_QUERY = gql`
query brands($searchString:String) {
    brands(sort: "name:asc" where:{name_contains:$searchString}) {
      id
      name
      description
      logo {
        url
      }
    }
  }
`;
export default GETBRANDSBASEDONSTRING_QUERY;
