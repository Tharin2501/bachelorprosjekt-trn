import gql from "graphql-tag";
const SUBCATEGORYFILTER_QUERY = gql`  
query Subcategory($SubcategoryName: String!,$arrayOfTypes:[String]) {
    subCategories(where:{StrapiName:$SubcategoryName}){
				StrapiName
        categoryName
      	products(where:{type_of_products:{StrapiName:$arrayOfTypes}}){
          id
          Strapiname
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

        }
      } 
    
     
  
}
`;

export default SUBCATEGORYFILTER_QUERY;  