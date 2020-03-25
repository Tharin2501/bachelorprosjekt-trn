import gql from "graphql-tag";

const SUBCATEGORY_QUERY = gql`  
query Subcatory($id:ID) {
    subCategory(id:$id) {
             StrapiName
        description
        image{url}
        category{name}
      
      
    }
  }

`;

export default SUBCATEGORY_QUERY;


/*
 query Subcatory {
    subCategory(id:"5e76395ef61fc7001727e6ab") {
             StrapiName
        description
        image{url}
        category{name}


    }
  }

*/