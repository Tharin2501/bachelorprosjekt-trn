import gql from "graphql-tag";

const SUBCATEGORIES_QUERY = gql`  
query Subcatory {
    subCategories {
             StrapiName
        description
        image{url}
        category{name}
    }
  }
`;

export default SUBCATEGORIES_QUERY;  