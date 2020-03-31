import gql from "graphql-tag";
const SUBCATEGORYFILTER_QUERY = gql`  
query Subcategory($SubcategoryName: String!,$arrayOfTypes:[String]) {
    subCategories(where:{StrapiName:$SubcategoryName}){
				StrapiName
        categoryName
      	products(where:{type_of_products:{StrapiName:$arrayOfTypes}}){
          Strapiname
          ProductName
          pris

          image{
          url
        }

        }
      } 
    
     
  
}
`;

export default SUBCATEGORYFILTER_QUERY;  